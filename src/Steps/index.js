import './style.scss';
import React from 'react';
import {View} from '@tarojs/components';
import classnames from 'classnames';

const classPrefix = `adm-steps`;
const stepClassPrefix = `adm-step`;

const Step = ({className, title, description, icon, status}) => {
    return <View className={classnames(className, `${stepClassPrefix}`, `${stepClassPrefix}-status-${status}`)}>
        <View className={`${stepClassPrefix}-indicator`}>
            <View className={`${stepClassPrefix}-icon-container`}>{icon}</View>
        </View>
        <View className={`${stepClassPrefix}-content`}>
            <View className={`${stepClassPrefix}-title`}>{title}</View>
            {!!description && (<View className={`${stepClassPrefix}-description`}>{description}</View>)}
        </View>
    </View>
};

Step.defaultProps = {
    status: 'wait', icon: <View className={`${stepClassPrefix}-icon-dot`}/>
};

const Steps = ({className, current, direction, items}) => {
    return <View className={classnames(className, classPrefix, `${classPrefix}-${direction}`)}>
        {items.map((item, index) => <Step {...Object.assign({}, {
            status: ((current, index) => {
                if (index < current) {
                    return 'finish';
                }
                if (index === current) {
                    return 'process';
                }
                return 'wait';
            })(current, index)
        }, item)} key={index}/>)}
    </View>;
};

Steps.defaultProps = {
    current: 0, direction: 'horizontal',
};

export default Steps;
