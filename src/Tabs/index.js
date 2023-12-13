import './style.scss';
import React, {useState} from 'react';
import useControlValue from '@kne/use-control-value';
import {Swiper, SwiperItem, View} from '@tarojs/components';
import classnames from 'classnames';
import {isNodeWithContent, toCSSLength, useBoundingClientRect} from '../common';

const classPrefix = `adm-tabs`;

const SwiperTabsItem = ({className, onOffset, children}) => {
    const containerId = useBoundingClientRect((offset) => {
        onOffset(offset);
    });
    return <View id={containerId} className={className}>
        {children}
    </View>;
};

const SwiperTabs = ({current, items, onChange}) => {
    const [heights, setHeights] = useState({});
    return <Swiper current={current} style={heights[current] ? {height: toCSSLength(heights[current])} : {}}
                   duration={300}
                   skipHiddenItemLayout onChange={onChange}>
        {items.map((children, index) => {
            if (!isNodeWithContent(children)) {
                return null
            }
            return <SwiperItem key={index} itemId={index.toString()}>
                {<SwiperTabsItem className={`${classPrefix}-content`} onOffset={({height}) => {
                    setHeights((obj) => {
                        return Object.assign({}, obj, {[index]: height});
                    });
                }}>
                    {children}
                </SwiperTabsItem>}
            </SwiperItem>;
        })}
    </Swiper>
};

const TabsHeader = (props) => {
    const [activeKeyBase, setActiveKey] = useControlValue(props, {
        defaultValue: 'defaultActiveKey', value: 'activeKey'
    });

    const activeKey = activeKeyBase || props.items[0].key;

    return <View className={`${classPrefix}-header`}>
        {props.items.map((pane) => {
            return <View
                key={pane.key}
                className={classnames(`${classPrefix}-tab-wrapper`, {
                    [`${classPrefix}-tab-wrapper-stretch`]: props.stretch,
                })}
            >
                <View
                    onClick={() => {
                        const {key} = pane
                        if (pane.disabled) return
                        if (key === undefined || key === null) {
                            return
                        }
                        setActiveKey(key.toString())
                    }}
                    className={classnames(`${classPrefix}-tab`, {
                        [`${classPrefix}-tab-active`]: pane.key === activeKey,
                        [`${classPrefix}-tab-disabled`]: pane.disabled,
                    })}
                >
                    {pane.title}
                </View>
            </View>
        })}
    </View>;
};

const Tabs = (props) => {
    const [activeKeyBase, setActiveKey] = useControlValue(props, {
        defaultValue: 'defaultActiveKey', value: 'activeKey'
    });

    const activeKey = activeKeyBase || props.items[0].key;

    return <View className={classnames(classPrefix, props.className)}>
        <TabsHeader activeKey={activeKey} onChange={setActiveKey} items={props.items}/>
        {props.swiperOpen ?
            <SwiperTabs current={props.items.findIndex((pane) => pane.key === activeKey)} onChange={(e) => {
                const current = props.items[e.target.current];
                setActiveKey(current.key);
            }} items={props.items.map((pane) => pane.children)}/> : props.items.map((pane) => {
                if (!isNodeWithContent(pane.children)) {
                    return null
                }
                const active = pane.key === activeKey;
                return <View className={`${classPrefix}-content`} style={{display: active ? 'block' : 'none'}}>
                    {pane.children}
                </View>;
            })}
    </View>;
};

Tabs.Header = TabsHeader;

Tabs.defaultProps = {
    stretch: true, swiperOpen: false
};


export default Tabs;
