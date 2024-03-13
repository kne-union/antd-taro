const {Tabs, Space, Icon, Badge} = antdTaro;
const {View} = taroComponent;
const {useState} = React;
const BaseExample = () => {
  const [activeKey, setActiveKey] = useState('tab2');
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Tabs swiperOpen items={[{
        key: 'tab1', title: 'tab1', children: <View>
          哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
        </View>
      }, {key: 'tab2', title: 'tab2', children: <>tab2</>}]}/>
    </Space>
    <Space direction={'vertical'}>
      <View>没有内容区</View>
      <Tabs.Header items={[{key: 'tab1', title: 'tab1'}, {key: 'tab2', title: 'tab2'}]}/>
    </Space>
    <Space direction={'vertical'}>
      <View>禁用状态</View>
      <Tabs.Header items={[{key: 'tab1', title: 'tab1'}, {key: 'tab2', title: 'tab2', disabled: true}]}/>
    </Space>
    <Space direction={'vertical'}>
      <View>超长自动滚动</View>
      <Tabs
        swiperOpen
        items={[
          {key: 'tab1', title: '超长自动滚动tab1', children: <>tab1</>},
          {key: 'tab2', title: '超长自动滚动tab2', children: <>tab2</>},
          {key: 'tab3', title: '超长自动滚动tab3', children: <>tab3</>},
          {key: 'tab4', title: '超长自动滚动tab4', children: <>tab4</>},
        ]}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>默认选中值</View>
      <Tabs.Header
        defaultActiveKey={activeKey}
        onChange={setActiveKey}
        items={[
          {key: 'tab1', title: '超长自动滚动tab1', children: <>tab1</>},
          {key: 'tab2', title: '超长自动滚动tab2', children: <>tab2</>},
          {key: 'tab3', title: '超长自动滚动tab3', children: <>tab3</>},
          {key: 'tab4', title: '超长自动滚动tab4', children: <>tab4</>},
        ]}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>自定义拓展图标</View>
      <Tabs
        showMore
        moreIcon={<Icon className={"adm-component"} type="right-outline"/>}
        items={[
          {key: 'tab1', title: '超长自动滚动tab1', children: <>tab1</>},
          {key: 'tab2', title: '超长自动滚动tab2', children: <>tab2</>},
          {key: 'tab3', title: '超长自动滚动tab3', children: <>tab3</>},
          {key: 'tab4', title: '超长自动滚动tab4', children: <>tab4</>},
        ]}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>搭配 Badge 使用</View>
      <Tabs
        items={[
          {key: 'tab1', title: 'tab1', children: <>tab1</>},
          {key: 'tab2', title: 'tab2', children: <>tab2</>},
          {key: 'tab3', title: 'tab3', children: <>tab3</>},
          {key: 'tab4', title: <Badge content={1}>tab4</Badge>, children: <>tab4</>},
        ]}
      />
    </Space>
  </Space>;
};

render(<BaseExample/>);
