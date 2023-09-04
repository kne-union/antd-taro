import React, {useContext} from 'react';
import List from '../List';
import Space from '../Space';
import {CheckListContext} from './context';
import classnames from 'classnames';
import {View} from '@tarojs/components';

const classPrefix = `adm-check-list-item`

const CheckListItem = props => {
  const context = useContext(CheckListContext)
  if (context === null) {
    return null
  }
  const active = context.value && context.value.includes(props.value)
  const readOnly = props.readOnly || context.readOnly

  const extra = (<View className={`${classPrefix}-extra`}>
    {active ? context.activeIcon : null}
  </View>)

  return <List.Item
    title={props.title}
    className={classnames(classPrefix, readOnly && `${classPrefix}-readonly`, active && `${classPrefix}-active`)}
    description={props.description}
    prefix={props.prefix}
    onClick={e => {
      if (readOnly) return
      if (active) {
        context.uncheck(props.value)
      } else {
        context.check(props.value)
      }
      props.onClick?.(e)
    }}
    arrow={false}
    clickable={!readOnly}
    extra={extra}
    disabled={props.disabled || context.disabled}
  >
    {typeof props.render === 'function' ? props.render(props.children) : props.children}
  </List.Item>
}

export default CheckListItem;
