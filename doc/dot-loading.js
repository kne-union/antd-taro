const {DotLoading, Space} = antdTaro;
const {View} = taroComponent;
const BaseExample = () => {
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>默认颜色 Loading</View>
        <DotLoading/>
        <View>主题色 Loading</View>
        <DotLoading color='primary'/>
        <View>白色 Loading</View>
        <View style={{backgroundColor: '#ddd'}}>
          <DotLoading color='white'/>
        </View>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义颜色 Loading</View>
        <Space>
          <DotLoading color='#155ACF'/>
          <DotLoading color='#00b578'/>
          <DotLoading color='#ff8f1f'/>
          <DotLoading color='#ff3141'/>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>自动适配字号</View>
        <Space>
          <View style={{fontSize: 14}}><DotLoading/></View>
          <View style={{fontSize: 18}}><DotLoading/></View>
          <View style={{fontSize: 24}}><DotLoading/></View>
        </Space>
      </Space>
    </Space>
  );
};

render(<BaseExample/>);
