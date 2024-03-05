import './style.scss';
import React, {useState, useEffect, useId} from 'react';
import {View} from '@tarojs/components';
import Taro from '@tarojs/taro';
import {pxToNumber} from '../common';
import transform from 'lodash/transform';
import classnames from 'classnames';

const classPrefix = `adm-ellipsis`;

const Ellipsis = (props) => {
    const [expanded, setExpanded] = useState(props.defaultExpanded);
    const [exceeded, setExceeded] = useState(false);
    const contentId = useId().replace(/:/g, '_');
    useEffect(() => {
        (async () => {
            const nodeRef = Taro.createSelectorQuery().select(`#${contentId}`);
            const {height = 0, maxHeight = 0} = transform(await Promise.all([new Promise((resolve) => {
                nodeRef.boundingClientRect((originStyle) => {
                    resolve(originStyle ? {height: originStyle.height} : {});
                }).exec();
            }), new Promise((resolve) => {
                nodeRef.fields({
                    computedStyle: ['lineHeight', 'paddingTop', 'paddingBottom']
                }, (originStyle) => {
                    if (!originStyle) {
                        resolve({});
                        return;
                    }
                    const lineHeight = pxToNumber(originStyle.lineHeight)
                    const maxHeight = Math.floor(lineHeight * (props.rows + 0.5) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
                    resolve({maxHeight});
                }).exec();
            })]), (result, value) => {
                Object.assign(result, value);
            }, {});
            height && maxHeight && setExceeded(height >= maxHeight);
        })();
    }, [props.content]);

    const expandActionElement = exceeded && props.expandText ? <>
        <View className={`${classPrefix}-action`} onClick={(e) => {
            // 阻止冒泡
            e.stopPropagation();
            setExpanded(true);
        }}>
            ...<View className={`${classPrefix}-action-text`}>{props.expandText}</View>
        </View>
    </> : null

    const collapseActionElement = exceeded && props.collapseText ?
        <View className={`${classPrefix}-action`} onClick={(e) => {
            // 阻止冒泡
            e.stopPropagation();
            setExpanded(false);
        }}>
            <View className={`${classPrefix}-action-text`}>{props.collapseText}</View>
        </View> : null;

    const renderContent = () => {
        if (!exceeded) return props.content;
        return <>
            <View className={classnames({
                [`${classPrefix}-content-collapse`]: !expanded
            })}>
                {props.content}
                <View
                    className={`${classPrefix}-tail`}>{props.expandText.length > props.collapseText.length ? props.expandText : props.collapseText}</View>
            </View>
            {props.showAction && (expanded ? collapseActionElement : expandActionElement)}
        </>
    };


    return <View className={classPrefix} id={contentId} style={{
        '--clamp-line': props.rows
    }}>
        {renderContent()}
    </View>;
};

Ellipsis.defaultProps = {
    rows: 1, expandText: '展开', content: '', collapseText: '收起', showAction: true, defaultExpanded: false,
};

export default Ellipsis;
