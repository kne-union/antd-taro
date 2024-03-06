import './style.scss';
import React from 'react'
import fallback from './fallback.svg'
import female from './female.svg';
import male from './male.svg';
import {Image} from '@tarojs/components'
import classnames from 'classnames'

const classPrefix = 'adm-avatar'

const Avatar = ({className, style, ...props}) => {
  // gender
  return <Image
    className={classnames(classPrefix, className)}
    src={props.src || (props.gender && (["F", "female", "f"].indexOf(props.gender) > -1 ? female : male)) || fallback}
    alt={props.alt}
    style={Object.assign({}, style, {'--adm-avatar-size': `${props?.size || 48}px`})}
    onClick={props.onClick}
    onError={props.onError}
  />;
};

export default Avatar;
