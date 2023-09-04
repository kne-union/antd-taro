import './style.scss';
import React from 'react';
import emptyIcon from './empty-icon.svg';
import {View, Image} from '@tarojs/components';
import classnames from 'classnames';

const classPrefix = `adm-empty`;
const Empty = (props) => {
  const renderImageNode = () => {
    const {image} = props;
    if (image === undefined) {
      return (<Image
        className={`${classPrefix}-image`}
        style={props.imageStyle}
        src={emptyIcon}
        alt='empty'
      />)
    }
    if (typeof image === 'string') {
      return (<Image
        className={`${classPrefix}-image`}
        style={props.imageStyle}
        src={image}
        alt='empty'
      />)
    }
    return image;
  };

  return <View className={classPrefix}>
    <View className={`${classPrefix}-image-container`}>
      {renderImageNode()}
    </View>
    {props.description && (<View className={classnames(`${classPrefix}-description`)}>
      {props.description}
    </View>)}
  </View>;
};
export default Empty;
