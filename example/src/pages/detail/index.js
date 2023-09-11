import {Layout} from '@kne/mini-core';
import componentsDoc from 'components-doc';
import {useRouter} from '@tarojs/taro';
import {Card} from '@kne/antd-taro';
import {View} from '@tarojs/components';

const Components = () => {
    const {params} = useRouter();
    const detailInfo = componentsDoc.example.list[params.index];

    return <Layout header={{title: detailInfo.title}}>
        <Card title="说明">
            {detailInfo.description}
        </Card>
        <Card title="示例">
            {detailInfo.component()}
        </Card>
        <Card title="源代码">
            <View>{detailInfo.scope}</View>
            <View>{detailInfo.code}</View>
        </Card>
    </Layout>;
};

export default Components;
