import './style.scss';
import React from 'react';
import useControlValue from '@kne/use-control-value';
import {View} from '@tarojs/components';
import classnames from 'classnames';
import {isNodeWithContent} from '../common';

const classPrefix = `adm-tabs`;
const Tabs = (props) => {
  const [activeKeyBase, setActiveKey] = useControlValue(props, {
    defaultValue: 'defaultActiveKey', value: 'activeKey'
  });

  const activeKey = activeKeyBase || props.items[0].key;

  return <View className={classnames(classPrefix, props.className)}>
    <View className={`${classPrefix}-header`}>
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
              [`${classPrefix}-tab-active`]: pane.key === activeKey, [`${classPrefix}-tab-disabled`]: pane.disabled,
            })}
          >
            {pane.title}
          </View>
        </View>
      })}
    </View>
    {props.items.map((pane) => {
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

Tabs.defaultProps = {
  stretch: true,
};


export default Tabs;
