import './style.scss';
import React from 'react';
import useControlValue from '@kne/use-control-value';
import {Navigator, View} from '@tarojs/components';
import classnames from 'classnames';
import Badge from '../Badge';
import SafeArea from '../SafeArea';

const classPrefix = `adm-tab-bar`;

const TabBarItem = (props) => {
  const iconElement = props.icon && (<View className={`${classPrefix}-item-icon`}>
    {typeof props.icon === 'function' ? props.icon(props.active) : props.icon}
  </View>);
  const titleElement = props.title && (<View
    className={classnames(`${classPrefix}-item-title`, Boolean(iconElement) && `${classPrefix}-item-title-with-icon`)}
  >
    {typeof props.title === 'function' ? props.title(props.active) : props.title}
  </View>)

  if (iconElement) {
    return <>
      <Badge
        content={props.badge}
        className={`${classPrefix}-icon-badge`}
      >
        {iconElement}
      </Badge>
      {titleElement}
    </>
  }
  if (titleElement) {
    return (<Badge
      content={props.badge}
      className={`${classPrefix}-title-badge`}
    >
      {titleElement}
    </Badge>)
  }

  return null;
};

const TabBar = ({className, openType, onChange, children, style, ...props}) => {
  const [activeKeyBase, setActiveKey] = useControlValue(props, {
    defaultValue: 'defaultActiveKey', value: 'activeKey'
  });

  const activeKey = activeKeyBase || props.items[0].key;

  return <View className={classnames(classPrefix, className)} style={style}>
    <View className={`${classPrefix}-wrap`}>
      {props.items.map((item) => {
        const active = item.key === activeKey;
        return item?.pagePath ? (
          <Navigator openType={openType} url={item.pagePath} onChange={onChange} hoverClass='none'>
            <View
              key={item.key}
              onClick={() => {
                const {key} = item
                if (key === undefined || key === null) return
                setActiveKey(key.toString())
              }}
              className={classnames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: active,
              })}
            >
              <TabBarItem active={active} {...item}/>
            </View>
          </Navigator>) : <View
          key={item.key}
          onClick={(e) => {
            const {key} = item
            if (key === undefined || key === null) return
            onChange && onChange(key.toString(), e);
            setActiveKey(key.toString())
          }}
          className={classnames(`${classPrefix}-item`, {
            [`${classPrefix}-item-active`]: active,
          })}
        >
          <TabBarItem active={active} {...item}/>
        </View>
      })}
      {children}
    </View>
    {props.safeArea && <SafeArea position='bottom'/>}
  </View>;
};

TabBar.defaultProps = {
  safeArea: false, openType: 'switchTab'
};

export default TabBar;
