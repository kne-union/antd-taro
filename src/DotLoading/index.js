import './style.scss';
import React from 'react'
import {View, Image} from '@tarojs/components'
import loadingWhite from './loading-white.svg';
import classnames from 'classnames'

const classPrefix = `adm-dot-loading`

const DotLoading = ({colorRecord, ...props}) => {
  return <View
    style={props.hasOwnProperty('color') ? {
      '--color': colorRecord[props.color] ? colorRecord[props.color] : props.color,
    } : {}}
    className={classnames('adm-loading', classPrefix)}
  >
    <View className={classnames('adm-dot-loading-box')}>
      <Image className="adm-dot-loading-image" src={loadingWhite}/>
    </View>
  </View>;
};

DotLoading.defaultProps = {
  color: 'default',
  colorRecord: {
    default: '#CCCCCC',
    primary: '#1677ff',
    white: '#FFFFFF',
  }
}

export default DotLoading;
