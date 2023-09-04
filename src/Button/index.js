import {View} from '@tarojs/components';
import classnames from 'classnames';
import React, {useState} from 'react';
import DotLoading from '../DotLoading';
import './style.scss';

const classPrefix = `adm-button`;
const Button = ({className, ...props}) => {
  const [innerLoading, setInnerLoading] = useState(false);
  const loading = props.loading === 'auto' ? innerLoading : props.loading;
  const disabled = props.disabled || loading;

  const handleClick = async e => {
    if (!props.onClick) return

    const promise = Promise.resolve(props.onClick(e));

    try {
      setInnerLoading(true);
      await promise;
      setInnerLoading(false);
    } catch (e) {
      setInnerLoading(false);
      throw e;
    }
  }

  return <View className={classnames(classPrefix, props.className, `${classPrefix}-shape-${props.shape}`, {
    [`${classPrefix}-${props.color}`]: props.color,
    [`${classPrefix}-block`]: props.block,
    [`${classPrefix}-disabled`]: disabled,
    [`${classPrefix}-fill-outline`]: props.fill === 'outline',
    [`${classPrefix}-fill-none`]: props.fill === 'none',
    [`${classPrefix}-mini`]: props.size === 'mini',
    [`${classPrefix}-small`]: props.size === 'small',
    [`${classPrefix}-large`]: props.size === 'large',
    [`${classPrefix}-loading`]: loading,
  }, className)} type={props.type} onClick={!disabled && handleClick} disabled={disabled}
               onMouseDown={props.onMouseDown}
               onMouseUp={props.onMouseUp}
               onTouchStart={props.onTouchStart}
               onTouchEnd={props.onTouchEnd}>
    {loading ? (<View className={`${classPrefix}-loading-wrapper`}>
      {props.loadingIcon}
      {props.loadingText || props.children}
    </View>) : (props.children)}
  </View>;
};

Button.defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: 'auto',
  loadingIcon: null,
  type: 'button',
  shape: 'default',
  size: 'middle',
};

export default Button;
