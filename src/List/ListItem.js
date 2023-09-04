import React from 'react';
import {isNodeWithContent} from '../common';
import {View} from '@tarojs/components';
import Icon from '../Icon';
import classnames from 'classnames';

const classPrefix = `adm-list-item`;

const ListItem = props => {
  const clickable = props.clickable ?? !!props.onClick
  const arrow = props.arrow === undefined ? clickable : props.arrow

  const content = (<>
    {isNodeWithContent(props.prefix) && (<View className={`${classPrefix}-content-prefix`}>{props.prefix}</View>)}
    <View className={`${classPrefix}-content-main`}>
      {isNodeWithContent(props.title) && (<View className={`${classPrefix}-title`}>{props.title}</View>)}
      {props.children}
      {isNodeWithContent(props.description) && (<View className={`${classPrefix}-description`}>
        {props.description}
      </View>)}
    </View>
    {isNodeWithContent(props.extra) && (<View className={`${classPrefix}-content-extra`}>{props.extra}</View>)}
    {isNodeWithContent(arrow) && (<View className={`${classPrefix}-content-arrow`}>
      {arrow === true ?
        <Icon className={classnames("adm-component", `${classPrefix}-content-arrow`)} type="right-outline"/> : arrow}
    </View>)}
  </>)

  return <View
    className={classnames(`${classPrefix}`, clickable ? ['adm-plain-anchor'] : [], props.disabled && `${classPrefix}-disabled`, props.className)}
    onClick={props.disabled ? undefined : props.onClick}>{content}</View>;
}


export default ListItem;
