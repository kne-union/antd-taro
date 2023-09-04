import './style.scss';
import React, {useEffect} from 'react';
import useControlValue from '@kne/use-control-value';
import {View} from '@tarojs/components';
import {eventCenter} from '@tarojs/taro';
import classnames from 'classnames';
import SafeArea from '../SafeArea';
import Icon from '../Icon';
import {RootPortalView, PAGE_NO_SCROLL_CHANGE} from '../common';

const classPrefix = `adm-popup`;

const Popup = (props) => {
  const [active, setActive] = useControlValue(props, {
    defaultValue: 'defaultOpen', value: 'open', onChange: 'onOpenChange'
  });
  const bodyCls = classnames(`${classPrefix}-body`, props.bodyClassName, `${classPrefix}-body-position-${props.position}`);

  useEffect(() => {
    eventCenter.trigger(PAGE_NO_SCROLL_CHANGE, active);
  }, [active]);

  const innerChildren = <View className={classnames(classPrefix, props.className, {
    'is-active': active
  })} catchMove={props.catchMove} onClick={(e) => {
    e.stopPropagation();
    props.onClick && props.onClick(e);
  }} style={props.style}>
    {props.mask && <View className={classnames('adm-mask', props.maskClassName, {
      'is-active': active
    })} onClick={(e) => {
      e.stopPropagation();
      if ((props.onMaskClick && props.onMaskClick(e)) === false) {
        return;
      }
      props.closeOnMaskClick && setActive(false);
    }}/>}
    <View className={bodyCls} style={props.bodyStyle}>
      {props.showCloseButton &&
        <View className={classnames(`${classPrefix}-close-icon`, 'adm-plain-anchor')} onClick={() => {
          setActive(false);
          props.onClose?.();
        }}>
          <Icon type="closeOutline" className="adm-component"/>
        </View>}
      {props.hasSafeArea && <SafeArea position="top"/>}
      {props.children}
      {props.hasSafeArea && <SafeArea position="bottom"/>}
    </View>
  </View>;
  return props.isRootPortal ? <RootPortalView>
    {innerChildren}
  </RootPortalView> : innerChildren;
};

Popup.defaultProps = {
  closeOnMaskClick: true,
  disableBodyScroll: true,
  isRootPortal: true,
  mask: true,
  showCloseButton: false,
  open: false,
  hasSafeArea: true,
  catchMove: true,
  position: 'bottom',
};

export default Popup;
