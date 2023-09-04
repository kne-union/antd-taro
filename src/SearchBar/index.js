import './style.scss';
import React, {forwardRef, useRef, useImperativeHandle, useState, useEffect} from 'react';
import {View} from '@tarojs/components';
import useControlValue from '@kne/use-control-value';
import classnames from 'classnames';
import Button from '../Button';
import Input from '../Input';
import Icon from '../Icon';

const classPrefix = `adm-search-bar`;

const SearchBar = forwardRef((props, ref) => {
  const [value, setValue] = useControlValue(props);
  const [hasFocus, setHasFocus] = useState(false)
  const inputRef = useRef(null);
  const currentIsSearchButton = useRef(false);

  useImperativeHandle(ref, () => ({
    get value() {
      return value
    },
    set value(value) {
      setValue(value);
    },
    clear: () => inputRef.current && inputRef.current.clear(),
    focus: () => inputRef.current && inputRef.current.focus(),
    blur: () => inputRef.current && inputRef.current.blur()
  }));

  useEffect(() => {
    if (!hasFocus) currentIsSearchButton.current = false;
  }, [hasFocus]);

  const renderCancelButton = () => {
    let isShowCancel;

    if (typeof props.showCancelButton === 'function') {
      isShowCancel = props.showCancelButton(hasFocus, value)
    } else {
      isShowCancel = props.showCancelButton && hasFocus
    }

    return (isShowCancel && (<View className={`${classPrefix}-suffix`}>
      <Button
        fill="none"
        className={`${classPrefix}-cancel-button`}
        onClick={() => {
          currentIsSearchButton.current = true;
          return Promise.resolve(props.onSearch && props.onSearch(value)).then((res) => {
            if (res === false) {
              return;
            }
            setHasFocus(false);
          });
        }}
        hoverStopPropagation
      >
        {props.searchText}
      </Button>
    </View>))
  };

  return <View
    className={classnames(classPrefix, props.className, {
      [`${classPrefix}-active`]: hasFocus,
    })}
  >
    <View className={`${classPrefix}-input-box`}>
      {props.icon && (<View className={`${classPrefix}-input-box-icon`}>{props.icon}</View>)}
      <Input
        ref={inputRef}
        className={classnames(`${classPrefix}-input`, {
          [`${classPrefix}-input-without-icon`]: !props.icon,
        })}
        value={value}
        onChange={setValue}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        clearable={props.clearable}
        onlyShowClearWhenFocus={props.onlyShowClearWhenFocus}
        autoFocus={props.autoFocus}
        onFocus={e => {
          setHasFocus(true);
          props.onFocus && props.onFocus(e);
        }}
        onBlur={e => {
          setTimeout(() => {
            if (currentIsSearchButton.current) {
              return;
            }
            setHasFocus(false);
            props.onBlur?.(e);
            currentIsSearchButton.current = false;
          }, 200);
        }}
        onClear={props.onClear ? props.onClear : () => {
          props.onSearch && props.onSearch('');
        }}
        type='search'
        confirmType='search'
        onConfirm={() => {
          currentIsSearchButton.current = false;
          props.onSearch && props.onSearch(value);
        }}
      />
    </View>
    {renderCancelButton()}
  </View>;
});

SearchBar.defaultProps = {
  clearable: true,
  onlyShowClearWhenFocus: false,
  showCancelButton: true,
  defaultValue: '',
  autoFocus: false,
  clearOnCancel: true,
  placeholder: '请输入搜索内容',
  icon: <Icon type="searchOutline" className="adm-component"/>,
  searchText: '搜索',
  onSearch: () => {
  }
};

export default SearchBar;
