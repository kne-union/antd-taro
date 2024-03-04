const {NavBar, Space} = antdTaro;
const {View} = taroComponent;
const {showToast} = tarojs;

const BaseExample = () => {
  const back = () => showToast({
    title: '点击了返回区域',
    duration: 1000,
    icon: 'none'
  })
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <NavBar onBack={back}>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>不展示返回按钮</View>
        <NavBar backArrow={false}>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>返回按钮显示文字</View>
        <NavBar onBack={back} back='返回'>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义左侧区域</View>
        <NavBar onBack={back} back='返回' left={'关闭'}>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义右侧区域</View>
        <NavBar onBack={back} back='返回' left={'关闭'} right={'关闭'}>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>标题超长</View>
        <NavBar onBack={back}>一条长长长长长长长长长长长长长长的标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>显示副标题</View>
        <NavBar onBack={back}>
          <View>
            <View>标题</View>
            <View style={{fontSize: '12px'}}>副标题</View>
          </View>
        </NavBar>
      </Space>
    </Space>
  );
};

render(<BaseExample/>);
