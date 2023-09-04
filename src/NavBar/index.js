import './style.scss';
import React from 'react';
import {View} from '@tarojs/components'
import Icon from '../Icon';
import classnames from 'classnames';

const classPrefix = `adm-nav-bar`

const NavBar = (props) => {
  const {back, backArrow} = props;
  return <View className={classnames(classPrefix)}>
    <View className={`${classPrefix}-left`} role='button'>
      {back !== null && (<View className={`${classPrefix}-back`} onClick={props.onBack}>
        {backArrow && (<View className={`${classPrefix}-back-arrow`}>
          {backArrow === true ? <Icon type="left-outline" className="adm-component"/> : backArrow}
        </View>)}
      </View>)}
      {props.left}
    </View>
    <View className={`${classPrefix}-title`}>{props.children}</View>
    <View className={`${classPrefix}-right`}>{props.right}</View>
  </View>;
};

NavBar.defaultProps = {
  backArrow: true, onBack: () => {
  }
};

export default NavBar;
