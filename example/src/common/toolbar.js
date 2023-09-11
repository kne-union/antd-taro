import classnames from 'classnames';
import {Icon} from '@kne/antd-taro';

const toolbar = [{
    key: '/pages/index/index',
    icon: (active) => active ? <Icon type="tabgongzuotai-xuanzhong" className={classnames('iconfont')}/> :
        <Icon type="tabgongzuotai-moren" className={classnames('iconfont')}/>,
    title: '首页',
    pagePath: '/pages/index/index'
}, {
    key: '/pages/components/index',
    icon: (active) => active ? <Icon type="tabzhiwei-xuanzhong" className={classnames('iconfont')}/> :
        <Icon type="tabzhiwei-moren" className={classnames('iconfont')}/>,
    title: '组件示例',
    pagePath: '/pages/components/index'
}];

export default toolbar;
