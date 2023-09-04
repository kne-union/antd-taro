import './style.scss';
import React from 'react'
import classnames from 'classnames'
import {View} from '@tarojs/components'

const classPrefix = `adm-divider`;
const Divider = ({direction, contentPosition, children, ...props}) => {
  return <View
    {...props}
    className={classnames(classPrefix, props.className, `${classPrefix}-${direction}`, `${classPrefix}-${contentPosition}`)}
  >
    {children && (<View className={`${classPrefix}-content`}>{children}</View>)}
  </View>
};

Divider.defaultProps = {
  contentPosition: 'center', direction: 'horizontal',
};

export default Divider;
