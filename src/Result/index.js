import './style.scss';
import React from 'react';
import {View} from '@tarojs/components';
import classnames from 'classnames';
import Icon from '../Icon';

const classPrefix = `adm-result`;
const iconRecord = {
  success: <Icon type="checkCircleFill" className="adm-component"/>,
  error: <Icon type="closeCircleFill" className="adm-component"/>,
  info: <Icon type="informationCircleFill" className="adm-component"/>,
  waiting: <Icon type="clockCircleFill" className="adm-component"/>,
  warning: <Icon type="exclamationCircleFill" className="adm-component"/>,
};
const Result = (props) => {
  const {status, title, description, icon} = props
  if (!status) return null
  const resultIcon = icon || iconRecord[status];
  return <View className={classnames(classPrefix, `${classPrefix}-${status}`)}>
    <View className={`${classPrefix}-icon`}>{resultIcon}</View>
    <View className={`${classPrefix}-title`}>{title}</View>
    {description ? (<View className={`${classPrefix}-description`}>{description}</View>) : null}
  </View>;
};

export default Result;
