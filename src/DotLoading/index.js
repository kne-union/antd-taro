import './style.scss';
import React from 'react'
import {View, Image} from '@tarojs/components'
import loadingWhite from './loading-white.svg';
import classnames from 'classnames'

const classPrefix = `adm-dot-loading`

const DotLoading = (props) => {
  return <View
    style={props.hasOwnProperty('color') ? {
      color: props.color,
    } : {}}
    className={classnames('adm-loading', classPrefix)}
  >
    <Image className="adm-dot-loading-image" src={loadingWhite}/>
  </View>;
};

export default DotLoading;
