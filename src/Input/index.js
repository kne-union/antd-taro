import './style.scss';
import React, {useState, useImperativeHandle, forwardRef, useRef} from 'react';
import {View, Input as TaroInput} from '@tarojs/components';
import classnames from 'classnames';
import useControlValue from '@kne/use-control-value';
import Icon from '../Icon';

const classPrefix = `adm-input`;

const Input = forwardRef((props, ref) => {
  const [value, setValue] = useControlValue(props);
  const [hasFocus, setHasFocus] = useState(false);
  const nativeInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    get value() {
      return value
    }, set value(value) {
      setValue(value);
    }, clear: () => {
      setValue('')
    }, focus: () => {
      nativeInputRef.current && nativeInputRef.current.focus()
    }, blur: () => {
      nativeInputRef.current && nativeInputRef.current.blur()
    }
  }));

  const shouldShowClear = (() => {
    if (!props.clearable || !value || props.readOnly) return false;
    if (props.onlyShowClearWhenFocus) {
      return hasFocus
    } else {
      return true
    }
  })()

  return <View
    className={classnames(`${classPrefix}`, props.disabled && `${classPrefix}-disabled`)}
  >
    <TaroInput
      controlled
      ref={nativeInputRef}
      className={`${classPrefix}-element`}
      value={value}
      onInput={(e) => {
        setValue(e.detail.value);
      }}
      onFocus={e => {
        setHasFocus(true)
        props.onFocus && props.onFocus(e)
      }}
      onBlur={e => {
        setHasFocus(false)
        props.onBlur && props.onBlur(e)
      }}
      id={props.id}
      placeholder={props.placeholder}
      placeholderStyle={props.placeholderStyle}
      placeholderClass={classnames(`${classPrefix}-placeholder`, props.placeholderClass)}
      placeholderTextColor={props.placeholderTextColor}
      password={props.password}
      cursorSpacing={props.cursorSpacing}
      disabled={props.disabled}
      maxLength={props.maxLength}
      focus={props.focus}
      cursor={props.cursor}
      selectionStart={props.selectionStart}
      selectionEnd={props.selectionEnd}
      adjustPosition={props.adjustPosition}
      holdKeyboard={props.holdKeyboard}
      alwaysEmbed={props.alwaysEmbed}
      safePasswordCertPath={props.safePasswordCertPath}
      safePasswordLength={props.safePasswordLength}
      safePasswordTimeStamp={props.safePasswordTimeStamp}
      safePasswordNonce={props.safePasswordNonce}
      safePasswordSalt={props.safePasswordSalt}
      safePasswordCustomHash={props.safePasswordCustomHash}
      randomNumber={props.randomNumber}
      onKeyboardHeightChange={props.onKeyboardHeightChange}
      onConfirm={props.onConfirm}
      confirmType={props.confirmType}
      nativeProps={props.nativeProps}
      type={props.type}
      name={props.name}
      onClick={props.onClick}
    />
    {(<View
      className={classnames(`${classPrefix}-clear`, {
        'display': !shouldShowClear
      })}
      hoverStopPropagation
      onClick={(e) => {
        setValue('')
        props.onClear && props.onClear()
      }}
    >
      <Icon type="closeCircleFill" className="adm-component"/>
    </View>)}
    {props.addonAfter}
  </View>
});

Input.defaultProps = {
  defaultValue: '', onlyShowClearWhenFocus: true, clearable: true
};

export default Input;
