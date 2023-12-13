import './style.scss';
import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'

const classPrefix = 'adm-icon';
const Icon = ({className, type, size, color, ...props}) => {
    return <View {...props} className={classnames(classPrefix, className, `icon-${type}`)}
                 style={Object.assign({}, size && {
                     '--size': size
                 }, color && {'--color': color})}/>
};

Icon.defaultProps = {};

export default Icon;

