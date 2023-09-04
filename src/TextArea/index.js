import './style.scss';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import useControlValue from '@kne/use-control-value';
import {View, Textarea} from '@tarojs/components';

const classPrefix = 'adm-text-area';
const TextArea = forwardRef((props, ref) => {
  const {showCount, maxLength} = props;
  const [value, setValue] = useControlValue(props);
  const nativeTextAreaRef = useRef(null)
  const valueLength = value ? value.length : 0;
  const count = showCount === 'function' ? showCount(valueLength, maxLength) : <View className={`${classPrefix}-count`}>
    {maxLength === undefined ? valueLength : Math.min(valueLength, maxLength) + '/' + maxLength}
  </View>;
  useImperativeHandle(ref, () => ({
    get value() {
      return value
    }, set value(value) {
      setValue(value);
    }, clear: () => {
      setValue('')
    }, focus: () => {
      nativeTextAreaRef.current && nativeTextAreaRef.current.focus()
    }, blur: () => {
      nativeTextAreaRef.current && nativeTextAreaRef.current.blur()
    }
  }));

  return <View className={classPrefix}>
    <Textarea
      ref={nativeTextAreaRef}
      className={`${classPrefix}-element`}
      value={value}
      onInput={(e) => {
        setValue(e.detail.value);
      }}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      id={props.id}
      placeholder={props.placeholder}
      placeholderStyle={props.placeholderStyle}
      placeholderClass={props.placeholderClass}
      placeholderTextColor={props.placeholderTextColor}
      disabled={props.disabled}
      maxlength={props.maxLength}
      focus={props.focus}
      cursor={props.cursor}
      autoHeight={props.autoSize}
      fixed={props.fixed}
      cursorSpacing={props.cursorSpacing}
      selectionStart={props.selectionStart}
      selectionEnd={props.selectionEnd}
      showConfirmBar={props.showConfirmBar}
      adjustPosition={props.adjustPosition}
      holdKeyboard={props.holdKeyboard}
      nativeProps={props.nativeProps}
      confirmType={props.confirmType}
      confirmHold={props.confirmHold}
      onConfirm={props.onConfirm}
      onLineChange={props.onLineChange}
      onKeyboardHeightChange={props.onKeyboardHeightChange}
    />
    {count}
  </View>;
});

TextArea.defaultProps = {
  showCount: true, autoSize: false, defaultValue: '', maxLength: 100,
};

export default TextArea;
