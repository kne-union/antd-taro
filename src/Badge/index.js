import './style.scss';
import classnames from 'classnames'
import React from 'react'
import {View} from "@tarojs/components"

const classPrefix = `adm-badge`

const dot = <></>;

const Badge = props => {
  const {content, color, children} = props

  const isDot = content === dot

  const badgeCls = classnames(classPrefix, !!children && `${classPrefix}-fixed`, isDot && `${classPrefix}-dot`, props.bordered && `${classPrefix}-bordered`)

  const element = content || content === 0 ? <View className={badgeCls} style={{
    'backgroundColor': color
  }}>
    {!isDot && (<View className={`${classPrefix}-content`}>{content}</View>)}
  </View> : null
  return children ? (
    <View className={classnames(`${classPrefix}-wrapper`, props.wrapperClassName)} style={props.wrapperStyle}>
      {children}
      {element}
    </View>) : (element)
}

Badge.dot = dot

export default Badge
