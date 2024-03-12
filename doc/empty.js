const {Empty, Space, Icon} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <Empty />
      </Space>
      <Space direction={'vertical'}>
        <View>描述文字</View>
        <Empty description={'空状态'} />
      </Space>
      <Space direction={'vertical'}>
        <View>自定义样式</View>
        <Empty description={'暂无数据'} imageStyle={{ width: 128 }} />
      </Space>
      <Space direction={'vertical'}>
        <View>自定义图片</View>
        <Empty description={'暂无数据'} image={<Icon className={"adm-component"} type="check-mark" size={'64px'} color={'#ff6700'} />}/>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
