import './style.scss';
import React, {useEffect, useId, useState} from 'react'
import List from '../List';
import Icon from '../Icon';
import {toCSSLength} from '../common';
import classnames from 'classnames';
import useControlValue from "@kne/use-control-value";
import {View} from '@tarojs/components';
import Taro from "@tarojs/taro";

const classPrefix = `adm-collapse`;


const CollapsePanelContent = (props) => {
    const containerId = useId().replace(/:/g, '_');
    const [height, setHeight] = useState(null);
    const {visible} = props;
    useEffect(() => {
        const query = Taro.createSelectorQuery();
        query.select(`#${containerId}`)
            .boundingClientRect()
            .exec(res => {
                if (!(res && res[0])) {
                    return;
                }
                setHeight(res[0].height);
            })
    }, [containerId, props.children]);
    return (<View style={height ? {
        '--item-height': toCSSLength(height)
    } : {}} className={classnames(`${classPrefix}-panel-content`, {
        [`${classPrefix}-panel-content-active`]: visible,
    })}>
        <View id={containerId} className={`${classPrefix}-panel-content-inner`}>
            <List.Item>{props.children}</List.Item>
        </View>
    </View>)
}


const Collapse = (props) => {
    const [activeKey, setActiveKey] = useControlValue(Object.assign({}, props, props.accordion ? {
        onChange: (v) => {
            props.onChange?.(v[0]);
        }
    } : {}), {
        value: 'activeKey', defaultValue: 'defaultActiveKey'
    });

    const activeKeyList = activeKey === null ? [] : Array.isArray(activeKey) ? activeKey : [activeKey];


    return <View className={classnames(classPrefix, props.className)}>
        <List>
            {props.items.map(panel => {
                const key = panel.key;
                const active = activeKeyList.includes(key);

                function handleClick(event) {
                    event.stopPropagation();
                    if (props.accordion) {
                        if (active) {
                            setActiveKey([])
                        } else {
                            setActiveKey([key])
                        }
                    } else {
                        if (active) {
                            setActiveKey(activeKeyList.filter(v => v !== key))
                        } else {
                            setActiveKey([...activeKeyList, key])
                        }
                    }

                    panel.onClick?.(event);
                }
              const getArrow = (arrow) => arrow && typeof arrow === 'function' ? arrow(active) : arrow;

              return (<React.Fragment key={key}>
                    {<List.Item
                        className={classnames(`${classPrefix}-panel-header`, {
                          [`${classPrefix}-active`]: active
                        })}
                        onClick={handleClick}
                        disabled={panel.disabled}
                        arrow={getArrow(panel?.arrow) || getArrow(props?.arrow) || <Icon type={active ? 'arrow-thin-up' : 'arrow-thin-down'}
                                     className={classnames("iconfont", "arrow-icon")}
                                     onClick={handleClick}/>}
                    >
                        {panel.title}
                        {props?.arrow}
                    </List.Item>}
                    <CollapsePanelContent
                        visible={active}
                        forceRender={!!panel.forceRender}
                        destroyOnClose={!!panel.destroyOnClose}
                    >
                        {panel.children}
                    </CollapsePanelContent>
                </React.Fragment>)
            })}
        </List>
    </View>
};

Collapse.defaultProps = {
    items: []
};

export default Collapse;
