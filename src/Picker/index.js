import './style.scss';
import React, {useEffect, useRef, useState} from 'react';
import Popup from '../Popup';
import {PickerView, PickerViewColumn, View} from '@tarojs/components';
import useControlValue from "@kne/use-control-value";
import classnames from 'classnames';
import get from 'lodash/get';
import useRefCallback from '@kne/use-ref-callback';
import isEqual from "lodash/isEqual";

const classPrefix = `adm-picker`
const Picker = (props) => {
    const {
        title, cancelText, loading, confirmText, onCancel, onClose: handlerClose, onColumnChange, columns, lineHeight
    } = props;
    const [value, onChange] = useControlValue(props);
    const [active, setActive] = useControlValue(props, {
        defaultValue: 'defaultOpen', value: 'open', onChange: 'onOpenChange'
    });
    const indexToValue = useRefCallback((innerValue) => {
        return innerValue.map((currentIndex, index) => get(columns, `[${index}][${currentIndex}].value`));
    });

    const [innerValue, setInnerValue] = useState([]);

    const currentValue = useRef([]);
    currentValue.current = columns.map((columnList, index) => {
        const val = get(value, index);
        if (val === void (0)) {
            return 0;
        }
        const currentIndex = columnList.findIndex(({value}) => value === val);
        return currentIndex > -1 ? currentIndex : 0;
    });

    const onClose = () => {
        handlerClose?.();
    };

    useEffect(() => {
        if (active) {
            setInnerValue(currentValue.current);
        }
    }, [active]);

    const handlerColumnChange = useRefCallback(onColumnChange);
    const columnsRef = useRef(columns);
    const innerValueRef = useRef(innerValue);

    useEffect(() => {
        if (isEqual(columnsRef.current, columns) && isEqual(innerValueRef.current, innerValue)) {
            return;
        }
        columnsRef.current = columns;
        innerValueRef.current = innerValue;
        handlerColumnChange(indexToValue(innerValue));
    }, [innerValue, columns, handlerColumnChange, indexToValue]);

    const timer = useRef(null);


    return <Popup className={`${classPrefix}-popup`} isRootPortal={props.isRootPortal}
                  position="bottom" open={active}
                  hasSafeArea={false}
                  onOpenChange={(open) => {
                      if (open) {
                          return;
                      }
                      setActive(false);
                      onClose?.();
                  }}>
        <View className={classPrefix}>
            <View className={`${classPrefix}-header`}>
                <View
                    className={`${classPrefix}-header-button`}
                    onClick={() => {
                        onCancel?.();
                        setActive(false);
                        onClose?.();
                    }}
                >
                    {cancelText}
                </View>
                <View className={`${classPrefix}-header-title`}>{title}</View>
                <View
                    className={classnames(`${classPrefix}-header-button`, loading && `${classPrefix}-header-button-disabled`)}
                    onClick={() => {
                        if (loading) return;
                        onChange(indexToValue(innerValue));
                        setActive(false);
                        onClose?.();
                    }}
                >
                    {confirmText}
                </View>
            </View>
            <View className={`${classPrefix}-body`}>
                <PickerView className={`${classPrefix}-column`} immediateChange indicatorStyle={`height:${lineHeight};`}
                            value={innerValue}
                            onChange={(e) => {
                                const value = e.detail.value;
                                setInnerValue(value);
                                clearTimeout(timer.current);
                                timer.current = setTimeout(() => {
                                    //当columns有级联关系时，检查修改后取值是否正常，如果不正常给index赋初值
                                    indexToValue(value).forEach((value, index) => {
                                        if (value === void 0) {
                                            setInnerValue((value) => {
                                                const newValue = value.slice(0);
                                                newValue[index] = 0;
                                                return newValue;
                                            });
                                        }
                                    });
                                }, 200);
                            }}>
                    {columns.map((column, colIndex) => {
                        return <PickerViewColumn
                            className={`${classPrefix}-column-item`}>{column.map(({label}, index) => <View
                            style={{lineHeight}} className={classnames(`${classPrefix}-column-view`, {
                            'is-active': get(innerValue, colIndex, 0) === index
                        })}>{label}</View>)}</PickerViewColumn>
                    })}
                </PickerView>
            </View>
        </View>
    </Popup>;
};

Picker.defaultProps = {
    cancelText: '取消', confirmText: '确定', defaultValue: [], lineHeight: '34px', isRootPortal: false
};

export default Picker;
