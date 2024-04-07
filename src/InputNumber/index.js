import './style.scss';
import React from 'react';
import {View} from '@tarojs/components';
import Input from '../Input';
import Icon from '../Icon';
import classnames from "classnames";
import isNil from 'lodash/isNil';
import useControlValue from "@kne/use-control-value";

const classPrefix = `adm-input-number`;

const numberRegExp = /[^0-9.-]/g;

const formatInputString = (value) => {
    if (isNil(value)) {
        return value;
    }
    //去除其他字符串
    value = value.toString().replace(numberRegExp, '');

    return value;
};

const formatNumber = (value, options) => {
    const {max, min} = Object.assign({
        max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER
    }, options);
    if (isNil(value)) {
        return value;
    }
    //去除其他字符串
    value = formatInputString(value);
    //去除除负号以外的-
    value = (value.indexOf('-') === 0 ? '-' : '') + value.replace(/-/g, '');
    //去除小数点以外的.并且将value转为数字类型
    value = Number(value.split('.').filter(item => item !== '').slice(0, 2).join('.'));
    //去除浮点数溢出
    value = Number(value.toFixed(10));
    
    if (value < min) {
        return min;
    }

    if (value > max) {
        return max;
    }

    return value;
};

const InputNumber = (props) => {
    const [value, setValue] = useControlValue(props);

    return <View className={classnames(classnames(`${classPrefix}`, props.className, {
        'is-controller-hidden': props.hiddenController
    }))}>
        <View className={`${classPrefix}-left`} onClick={() => {
            setValue((value) => formatNumber(Number(value || 0) - props.step, {min: props.min, max: props.max}));
        }}>
            <Icon type="subtraction" className="adm-component"/>
        </View>
        <View className={`${classPrefix}-inner`}>
            <Input {...props} className={`${classPrefix}-main`} type={props.type === 'number' ? 'number' : 'digit'}
                   value={formatInputString(value, {min: props.min, max: props.max})} onChange={setValue}
                   onBlur={(e) => {
                       setValue((value) => {
                           return formatNumber(value, {min: props.min, max: props.max});
                       });
                       props.onBlur && props.onBlur(e);
                   }}/>
        </View>
        <View className={`${classPrefix}-right`} onClick={() => {
            setValue((value) => formatNumber(Number(value || 0) + props.step, {min: props.min, max: props.max}));
        }}>
            <Icon type="add" className="adm-component"/>
        </View>
    </View>
};

InputNumber.defaultProps = {
    step: 1, max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER, defaultValue: '', type: 'number'
};

export default InputNumber;
