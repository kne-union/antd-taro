const {View} = taroComponent;
const {Switch, Space} = antdTaro;

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Switch />
    </Space>
    <Space direction={'vertical'}>
      <View>有默认值</View>
      <Switch checked />
    </Space>
    <Space direction={'vertical'}>
      <View>禁用</View>
      <Switch disabled />
    </Space>
    <Space direction={'vertical'}>
      <View>type 为 checkbox</View>
      <Switch checked type={'checkbox'} />
    </Space>
    <Space direction={'vertical'}>
      <View>color</View>
      <Switch checked color={'#04BE02'} />
    </Space>
  </Space>;
};

render(<BaseExample/>);
