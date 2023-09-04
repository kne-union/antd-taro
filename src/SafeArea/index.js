import './style.scss';
import React from 'react';
import classNames from 'classnames';
import {View} from '@tarojs/components';

const classPrefix = 'adm-safe-area';

const SafeArea = props => {
  return <View className={classNames(classPrefix, `${classPrefix}-position-${props.position}`)}/>
}

export default SafeArea
