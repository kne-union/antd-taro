import React, {useCallback, useEffect, useId, useRef, useState} from 'react';
import style from './style.module.scss';
import {ScrollView, View} from '@tarojs/components';
import useControlValue from '@kne/use-control-value';
import classnames from 'classnames';
import Taro from "@tarojs/taro";
import Icon from '../Icon';
import Space from '../Space';
import Popup from '../Popup';
import {toCSSLength} from '../common';

const ScrollHeader = (props) => {
  const [open, setOpen] = useControlValue(props, {
    defaultValue: 'defaultOpen', value: 'open', onChange: 'onOpenChange'
  });
  const [top, setTop] = useState(null);
  const containerId = useId().replace(/:/g, '_');
  const [noMore, setNoMore] = useState(false);
  const [needScroll, setNeedScroll] = useState(true);
  const [scrollIntoView, setScrollIntoView] = useState(props.defaultSelected);
  const scrollRef = useRef(0);

  useEffect(() => {
    const query = Taro.createSelectorQuery();
    query.select(`#${containerId}`)
      .boundingClientRect()
      .exec(res => {
        if (!(res && res[0])) {
          return;
        }
        setTop(res[0].top);
      })
  }, [containerId]);

  const computedNeedScroll = useCallback(() => {
    const query = Taro.createSelectorQuery();
    query.select(`#${containerId}-scroll-view`).boundingClientRect();
    query.select(`#${containerId}-scroll-view`).scrollOffset();
    query.exec((res) => {
      if (!(res && res[0] && res[1])) {
        return;
      }
      setNeedScroll(res[1].scrollWidth > res[0].width);
    });
  }, [containerId]);

  useEffect(() => {
    computedNeedScroll();
  }, [computedNeedScroll]);

  const children = typeof props.children === 'function' ? props.children({
    open, setOpen, needScroll, computedNeedScroll, scrollTo: (value) => {
      setScrollIntoView(null);
      setTimeout(() => {
        setScrollIntoView(value);
      }, 0);
    }
  }) : props.children;
  return <View className={classnames(style['scroll-header-close'], props.className)} id={containerId}>
    <ScrollView scrollIntoViewAlignment="nearest" scrollWithAnimation enhanced showScrollbar={false} bounces={false}
                scrollIntoView={scrollIntoView} scrollX id={`${containerId}-scroll-view`}
                className={classnames(style['scroll-view'], 'scroll-header-close', {
                  [style['scroll-view-no-more']]: !props?.showMore,
                  'no-more': !props?.showMore,
                  'need-scroll': needScroll
                })} onScroll={(e) => {
      const scrollLeft = e.detail.scrollLeft;
      if (scrollLeft <= scrollRef.current) {
        setNoMore(false);
      }
      scrollRef.current = e.detail.scrollLeft;
    }} onScrollToLower={(e) => {
      setNoMore(true);
    }}>
      {children}
    </ScrollView>
    {needScroll && props.showMore && <View onClick={() => {
      setOpen(true);
    }} className={classnames(style['open-btn'], {
      [style['no-more']]: noMore
    })}>{props.icon ? props.icon : <Icon type="gengduo2" className="iconfont"/>}</View>}
    <Popup open={open} position='top' className={style['popup']} maskClassName={style['popup-mask']}
           bodyClassName={style['popup-body']} style={Object.assign({}, top ? {
      top, '--top': toCSSLength(top)
    } : {})} onMaskClick={() => {
      setOpen(false);
    }} hasSafeArea={false}>
      <Space direction="vertical" className={classnames(props.className, "scroll-header-open")}>
        <View className={style['open-content']}>{children}</View>
        <View className={style['close-btn']} onClick={() => {
          setOpen(false);
        }}>点击收起</View>
      </Space>
    </Popup>
  </View>;
};

ScrollHeader.defaultProps = {
  defaultOpen: false, showMore: true
};

export default ScrollHeader;
