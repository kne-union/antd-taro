import './style.scss';
import React from 'react';
import classnames from 'classnames';
import {View} from '@tarojs/components';

const classPrefix = `adm-card`;

const Card = (props) => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null
    }
    return (<View
      className={classnames(`${classPrefix}-header`, props.headerClassName)}
      style={props.headerStyle}
      onClick={props.onHeaderClick}
    >
      <View className={`${classPrefix}-header-title`}>{props.title}</View>
      {props.extra}
    </View>)
  }

  const renderBody = () => {
    if (!props.children) {
      return null
    }
    return (<View
      className={classnames(`${classPrefix}-body`, props.bodyClassName)}
      style={props.bodyStyle}
      onClick={props.onBodyClick}
    >
      {props.children}
    </View>)
  }
  return <View className={classnames(classPrefix, props.className)} onClick={props.onClick}>
    {renderHeader()}
    {renderBody()}
  </View>;
};

export default Card;
