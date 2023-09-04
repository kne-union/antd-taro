import './style.scss';
import React from 'react'
import classNames from 'classnames'
import {View} from '@tarojs/components'

const classPrefix = `adm-tag`

const Tag = ({className, opacity, colorRecord, ...props}) => {
  const color = colorRecord[props.color] ? colorRecord[props.color] : props.color

  const style = {
    'borderColor': opacity ? 'none' : color,
    'color': (props.fill === 'outline' || opacity) ? color : 'rgba(255,255,255,0.06)',
    'backgroundColor': props.fill === 'outline' ? 'transparent' : (opacity ? `rgba(${color}, 0.06)` : color),
  }
  return <View
    style={style}
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
    primary: 'var(--adm-color-primary, #1677ff)',
    info: 'var(--adm-color-info, #155ACF)',
    success: 'var(--adm-color-success, #00b578)',
    warning: 'var(--adm-color-warning, #ff8f1f)',
    danger: 'var(--adm-color-danger, #ff3141)',
  }
};

export default Tag
