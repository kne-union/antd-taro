import Taro from '@tarojs/taro';
import {Layout} from '@kne/mini-core';
import {List} from '@kne/antd-taro';
import toolbar from '../../common/toolbar';
import componentsDoc from 'components-doc';
const Components = () => {
    return <Layout header={{title: '组件示例'}} toolBarList={toolbar}>
        <List>
            {componentsDoc.example.list.map(({title, description}, index) => {
                return <List.Item description={description} onClick={() => {
                    Taro.navigateTo({url: '/pages/detail/index?index=' + index});
                }}>{title}</List.Item>
            })}
        </List>
    </Layout>;
};

export default Components;
