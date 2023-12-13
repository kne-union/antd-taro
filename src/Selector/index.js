import './style.scss';
import React from 'react';
import classnames from 'classnames';
import Space from '../Space';
import Grid from '../Grid';
import useControlValue from '@kne/use-control-value';
import Icon from '../Icon';
import {View} from '@tarojs/components';

const classPrefix = `adm-selector`;

const Selector = (props) => {
  const [value, setValue] = useControlValue(Object.assign({}, props, {
    onChange: val => {
      const extend = {
        get items() {
          return props.options.filter(option => val.includes(option.value))
        },
      }
      props.onChange?.(val, extend);
    }
  }));

  const items = props.options.map(option => {
    const active = (value || []).includes(option.value)
    const disabled = option.disabled || props.disabled
    const itemCls = classnames(`${classPrefix}-item`, {
      [`${classPrefix}-item-active`]: active && !props.multiple,
      [`${classPrefix}-item-multiple-active`]: active && props.multiple,
      [`${classPrefix}-item-disabled`]: disabled,
    })

    return (<View className={`${classPrefix}-item-wrapper`}>
      <View
        key={option.value}
        className={itemCls}
        onClick={() => {
          if (disabled) {
            return
          }
          if (props.multiple) {
            const val = active ? value.filter(v => v !== option.value) : [...value, option.value]
            setValue(val)
          } else {
            const val = active ? [] : [option.value]
            setValue(val)
          }
        }}
      >
        {option.label}
        {option.description && (<View className={`${classPrefix}-item-description`}>
          {option.description}
        </View>)}
      </View>
      {active && props.showCheckMark && (<View className={`${classPrefix}-check-mark-wrapper`}>
        <Icon type="check-mark" className="adm-component"/>
      </View>)}
    </View>)
  });

  return <View className={classnames(classPrefix, props.className)}>
    {!props.columns && <Space wrap>{items}</Space>}
    {props.columns && (<Grid columns={props.columns} gap={16}>
      {items}
    </Grid>)}
  </View>;
};

Selector.defaultProps = {
  multiple: false, defaultValue: [], showCheckMark: true,
};

export default Selector;
