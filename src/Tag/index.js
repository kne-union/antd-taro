import './style.scss';
import React from 'react'
import classNames from 'classnames'
import {View} from '@tarojs/components'

const classPrefix = `adm-tag`

const Tag = ({className, opacity, colorRecord, style, ...props}) => {
  const color = colorRecord[props.color] ? colorRecord[props.color] : props.color

  const initStyle = {
    'borderColor': props.fill === 'outline' ? color : opacity ? 'none' : color,
    'color': (props.fill === 'outline' || opacity) ? color : 'rgb(255,255,255)',
    'backgroundColor': (opacity ? `${color}0F` : props.fill === 'outline' ? 'transparent' : color),
  };

  return <View
    style={Object.assign({}, initStyle, style)}
    onClick={props.onClick}
    className={classNames(classPrefix, {
      [`${classPrefix}-round`]: props.round,
    }, className)}
  >
    {props.children}
  </View>
};

Tag.defaultProps = {
  color: 'default', fill: 'solid', round: false, opacity: false, colorRecord: {
    default: '#666666',
    primary: '#1677ff',
    info: '#155ACF',
    success: '#00b578',
    warning: '#ff8f1f',
    danger: '#ff3141',
  }
};

export default Tag
