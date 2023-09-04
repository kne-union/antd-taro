import './style.scss';
import React from 'react';
import useControlValue from '@kne/use-control-value';
import List from '../List';
import {CheckListContext} from './context';
import Icon from '../Icon';
import CheckListItem from './CheckListItem';

const classPrefix = 'adm-check-list';
const CheckList = (props) => {
  const [value, setValue] = useControlValue(props);
  const check = (val) => {
    if (props.multiple) {
      setValue([...value, val])
    } else {
      setValue([val])
    }
  };

  const uncheck = (val) => {
    setValue(value.filter(item => item !== val))
  };

  const {activeIcon, disabled, readOnly} = props;

  return (<CheckListContext.Provider
    value={{
      value, check, uncheck, activeIcon, disabled, readOnly,
    }}
  >
    <List mode={props.mode} className={classPrefix}>
      {props.options.map(({label, value, ...props}) => {
        return <CheckListItem {...props} value={value}>{label}</CheckListItem>
      })}
    </List>
  </CheckListContext.Provider>)
};

CheckList.defaultProps = {
  multiple: false, defaultValue: [], activeIcon: <Icon type="checkout" className="adm-component"/>,
};

export default CheckList;
