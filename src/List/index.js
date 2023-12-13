import './style.scss';
import React from 'react'
import classNames from 'classnames'
import {View} from '@tarojs/components'
import ListItem from './ListItem';

const classPrefix = `adm-list`

const List = ({className, ...props}) => {
    return <View className={classNames(classPrefix, `${classPrefix}-${props.mode}`, className)}>
        {props.header && (<View className={`${classPrefix}-header`}>{props.header}</View>)}
        {props.mode === 'card' ? <View className={`${classPrefix}-body`}>
            {props.children}
        </View> : props.children}
    </View>
};

List.defaultProps = {
    mode: 'default',
};

List.Item = ListItem;

export default List;
