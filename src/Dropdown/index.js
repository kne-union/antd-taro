import './style.scss';
import React, {useState, useId, useEffect, forwardRef, useImperativeHandle} from 'react';
import useControlValue from '@kne/use-control-value';
import Taro from '@tarojs/taro';
import {View} from '@tarojs/components';
import classnames from 'classnames';
import Item, {ItemChildrenWrap} from './Item';
import Popup from '../Popup';
import {toCSSLength} from '../common';

const classPrefix = `adm-dropdown`;

const Dropdown = forwardRef((props, ref) => {
  const [value, setValue] = useControlValue(props, {
    value: props.activeKey, defaultValue: props.defaultActiveKey
  });
  const [top, setTop] = useState(null);
  const [bottom, setBottom] = useState(null);
  const containerId = useId().replace(/:/g, '_');
  useEffect(() => {
    const query = Taro.createSelectorQuery();
    query.select(`#${containerId}`)
      .boundingClientRect()
      .exec(res => {
        if (!(res && res[0])) {
          return;
        }
        setBottom(res[0].top);
        setTop(res[0].bottom);
      })
  }, [value, containerId]);

  const changeActive = (key) => {
    if (value === key) {
      setValue(null)
    } else {
      setValue(key)
    }
  };

  const navs = props.items.map(({key, ...others}) => {
    return <Item key={key} {...others} active={key === value} onClick={() => {
      changeActive(key);
    }} arrow={others.arrow || props.arrow}/>
  });

  useImperativeHandle(ref, () => ({
    close: () => {
      setValue(null)
    },
  }), [setValue]);


  return <View className={classnames(classPrefix, {
    [`${classPrefix}-open`]: !!value,
  })} id={containerId}>
    <View className={`${classPrefix}-nav`}>
      {navs}
    </View>
    {!!value && <View className={`${classPrefix}-other-mask`} style={{bottom: `calc(100% - ${toCSSLength(bottom)})`}}
                      onClick={() => {
                        changeActive(null);
                      }}/>}
    <Popup open={!!value} position='top' className={`${classPrefix}-popup`} maskClassName={`${classPrefix}-popup-mask`}
           bodyClassName={`${classPrefix}-popup-body`} style={Object.assign({}, top ? {
      top, '--top': toCSSLength(top)
    } : {})} onMaskClick={props.closeOnMaskClick ? () => {
      changeActive(null)
    } : undefined} hasSafeArea={false}>
      <View>
        {props.items.map(item => {
          const isActive = item.key === value
          return (<ItemChildrenWrap key={item.key} active={isActive}>
            {item.children}
          </ItemChildrenWrap>);
        })}
      </View>
    </Popup>
  </View>;
});

Dropdown.defaultProps = {
  defaultActiveKey: null, closeOnMaskClick: true, closeOnClickAway: false,
};

export default Dropdown;
