const {Divider, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <Space>
        <View>horizontal</View>
        <Divider direction={'horizontal'} />
        <View>horizontal</View>
      </Space>
      <Space>
        <View>vertical</View>
        <Divider direction={'vertical'} />
        <View>vertical</View>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
