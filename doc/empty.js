const {Empty, Space} = antdTaro;
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
    </Space>
  );
};

render(<BaseExample />);
