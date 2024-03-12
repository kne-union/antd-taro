const {Divider, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础分割线</View>
        <Divider />
      </Space>
      <Space direction={'vertical'}>
        <View>带内容的分割线</View>
        <Divider>内容在中间</Divider>
        <Divider contentPosition='left'>左侧内容</Divider>
        <Divider contentPosition='right'>右侧内容</Divider>
      </Space>
      <Space direction={'vertical'}>
        <View>竖向分割线1</View>
        <Space>
          <View>Text1</View>
          <Divider direction={'vertical'} />
          <View>Text2</View>
          <Divider direction={'vertical'} />
          <View>Text3</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义样式</View>
        <Divider
          style={{
            color: '#1677ff',
            borderColor: '#1677ff',
            borderStyle: 'dashed',
          }}
        >
          自定义样式
        </Divider>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
