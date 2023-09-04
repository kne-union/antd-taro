import './style.scss';
import React from 'react';
import classnames from 'classnames';
import {View} from '@tarojs/components';
import {isNodeWithContent, toCSSLength} from '../common';

const classPrefix = `adm-space`;

const Space = ({direction, size, split, onClick, className, ...props}) => {
  const childrenCount = React.Children.count(props.children);
  return <View
    className={classnames(classPrefix, props.className, {
      [`${classPrefix}-wrap`]: props.wrap,
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-${direction}`]: true,
      [`${classPrefix}-align-${props.align}`]: !!props.align,
      [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
    }, className)}
    onClick={onClick}
    style={Object.assign({}, props.style, Number.isInteger(size) ? {
      '--gap': toCSSLength(size)
    } : {})}
  >
    {React.Children.map(props.children, (child, index) => {
      return (isNodeWithContent(child) && <><View
        className={`${classPrefix}-item`}>{child}</View>{split && index < childrenCount - 1 &&
        <View className={`${classPrefix}-item-split`}>{split}</View>}</>)
    })}
  </View>
};

Space.defaultProps = {
  direction: 'horizontal',
};

export default Space;
