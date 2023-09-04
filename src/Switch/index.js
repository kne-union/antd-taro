import React from 'react'
import {Switch as TaroSwitch} from '@tarojs/components'

const Switch = ({onChange, ...props}) => {
  return <TaroSwitch {...props} color="var(--adm-color-primary)" onChange={(e) => {
    onChange && onChange(e.detail.value);
  }}/>
};

export default Switch;
