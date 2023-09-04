import './style.scss';
import React from 'react';
import {toCSSLength} from '../common';
import {View} from '@tarojs/components';
import classnames from 'classnames';

const classPrefix = `adm-grid`
const Grid = (props) => {
  const style = {}
  const {gap: baseGap} = props

  const gap = Array.isArray(baseGap) ? baseGap : [baseGap, undefined];
  const horizontalGutter = gap[0] != null && gap[0] > 0 ? gap[0] / -2 : undefined;
  if (horizontalGutter !== undefined) {
    style.marginLeft = toCSSLength(horizontalGutter);
    style.marginRight = toCSSLength(horizontalGutter);
  }
  if (baseGap !== undefined) {
    if (Array.isArray(gap)) {
      style['--gap-horizontal'] = toCSSLength(gap[0] / 2)
      if (gap[1]) style['--gap-vertical'] = toCSSLength(gap[1] / 2)
    } else {
      style['--gap'] = toCSSLength(gap)
    }
  }
  return <View className={classnames(classPrefix, props.className, {
    [`${classPrefix}-no-wrap`]: props.wrap === false,
    [`${classPrefix}-${props.justify}`]: props.justify,
    [`${classPrefix}-${props.align}`]: props.align
  })} style={style}>
    {props.children}
  </View>;
};

const GridItem = (props) => {
  const itemStyle = {
    '--item-span': props.span.toString(),
    'paddingLeft': 'var(--gap-horizontal)',
    'paddingRight': 'var(--gap-horizontal)',
  }
  return <View
    className={classnames(`${classPrefix}-item`, `${classPrefix}-item-${props.span}`, props.className)}
    style={itemStyle}
    onClick={props.onClick}
  >
    {props.children}
  </View>
}

GridItem.defaultProps = {
  span: 1
};

Grid.Item = GridItem;

export default Grid;
