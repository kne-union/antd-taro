import './style.scss';
import React, {useCallback, useEffect, useId, useRef, useState} from 'react';
import {ScrollView, View} from '@tarojs/components';
import useControlValue from '@kne/use-control-value';
import classnames from 'classnames';
import Taro from "@tarojs/taro";
import Icon from '../Icon';
import Space from '../Space';
import Popup from '../Popup';
import {toCSSLength} from '../common';

const classPrefix = 'adm-scroll-header';

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
    if (!open) {
      return;
    }
    const query = Taro.createSelectorQuery();
    query.select(`#${containerId}`)
      .boundingClientRect()
      .exec(res => {
        if (!(res && res[0])) {
          return;
        }
        setTop(res[0].top);
      })
  }, [containerId, open]);

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
  }, [containerId, open]);

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
  return <View className={classnames(classPrefix, props.className)} id={containerId}>
    <ScrollView
      scrollIntoViewAlignment="nearest"
      scrollWithAnimation
      enhanced
      showScrollbar={false}
      bounces={false}
      scrollIntoView={scrollIntoView}
      scrollX
      id={`${containerId}-scroll-view`}
      className={classnames(`${classPrefix}-scroll-view`, `${classPrefix}-close`, {
        [`${classPrefix}-scroll-view-no-more`]: !props?.showMore,
        'no-more': !props?.showMore,
        'need-scroll': needScroll
      })}
      onScroll={(e) => {
        const scrollLeft = e.detail.scrollLeft;
        if (scrollLeft <= scrollRef.current) {
          setNoMore(false);
        }
        scrollRef.current = e.detail.scrollLeft;
      }}
      onScrollToLower={(e) => {
        setNoMore(true);
      }}
    >
      {children}
    </ScrollView>
    {needScroll && props.showMore && <View
      onClick={() => {
        setOpen(true)
      }}
      className={classnames(`${classPrefix}-open-btn`, {
        [`${classPrefix}-no-more`]: noMore
      })}
    >
      {props.icon ? props.icon : <Icon type="gengduo2" className="iconfont"/>}
    </View>}
    <Popup
      open={open}
      position='top'
      className={`${classPrefix}-popup`}
      maskClassName={`${classPrefix}-popup-mask`}
      bodyClassName={`${classPrefix}-popup-body`}
      style={Object.assign({}, top ? {top, '--top': toCSSLength(top)} : {})}
      onMaskClick={() => {
        setOpen(false);
      }}
      hasSafeArea={false}
    >
      <Space direction="vertical" className={classnames(props.className, `${classPrefix}-open`)}>
        <View className={`${classPrefix}-open-content`}>{children}</View>
        {props.showCollapseButton && <View className={`${classPrefix}-close-btn`} onClick={() => {
          setOpen(false);
        }}>{props.collapseButtonText}</View>}
      </Space>
    </Popup>
  </View>;
};

ScrollHeader.defaultProps = {
  defaultOpen: false, showMore: true, showCollapseButton: false, collapseButtonText: '点击收起'
};

export default ScrollHeader;
