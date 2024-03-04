const {Result, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <Space wrap direction={'vertical'}>
        <View>Status</View>
        <Result status={'success'} description={'success'}/>
        <Result status={'error'} description={'error'}/>
        <Result status={'info'} description={'info'}/>
        <Result status={'waiting'} description={'waiting'}/>
        <Result status={'warning'} description={'warning'}/>
      </Space>
      <Space wrap direction={'vertical'}>
        <View>Title</View>
        <Result status={'success'} description={'success'} title={'success'}/>
        <Result status={'error'} description={'error'} title={'error'}/>
        <Result status={'info'} description={'info'} title={'info'}/>
        <Result status={'waiting'} description={'waiting'} title={'waiting'}/>
        <Result status={'warning'} description={'warning'} title={'warning'}/>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
