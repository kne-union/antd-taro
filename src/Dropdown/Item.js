import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import {View} from '@tarojs/components';

const classPrefix = `adm-dropdown-item`;

const Item = (props) => {
  const cls = classnames(classPrefix, props.className, {
    [`${classPrefix}-active`]: props.active, [`${classPrefix}-highlight`]: props.highlight ?? props.active,
  });
  return <View className={cls} onClick={props.onClick}>
    <View className={`${classPrefix}-title`}>
      <View className={`${classPrefix}-title-text`}>{props.title}</View>
      <View
        className={classnames(`${classPrefix}-title-arrow`, {
          [`${classPrefix}-title-arrow-active`]: props.active,
        })}
      >
        {props.arrow === undefined ? <Icon type="down-fill" className="adm-component"/> : props.arrow}
      </View>
    </View>
  </View>;
};

export const ItemChildrenWrap = (props) => {
  const {active = false} = props;
  const cls = classnames(`${classPrefix}-content`, {
    [`${classPrefix}-content-hidden`]: !active,
  });
  return <View className={cls} onClick={props.onClick}>
    {props.children}
  </View>
};


export default Item;
