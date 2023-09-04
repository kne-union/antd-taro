import React from 'react'
import {Slider as TaroSlider} from '@tarojs/components'

const Slider = ({onChange, ...props}) => {
  return <TaroSlider {...props} backgroundColor="var(--adm-color-box)" activeColor="var(--adm-color-primary)"
                     onChange={(e) => {
                       onChange && onChange(e.detail.value);
                     }}/>
}

export default Slider;
