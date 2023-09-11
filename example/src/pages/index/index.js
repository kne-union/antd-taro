import {Layout} from '@kne/mini-core';
import toolbar from '../../common/toolbar';
import componentsDoc from 'components-doc';
import {Card} from '@kne/antd-taro';

const Index = () => {
    return <Layout header={{title: componentsDoc.name}} toolBarList={toolbar}>
        <Card title="概述">
            {componentsDoc.summary}
        </Card>
        <Card title="API">
            {componentsDoc.api}
        </Card>
    </Layout>;
};

export default Index;
