const {Grid, Space} = antdTaro;
const {View} = taroComponent;

const style = `{
  background: #EEE;
  text-align: center;
  color: #999999;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px #999;
}`;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <Grid gap={[10, 20]}>
          <Grid.Item span={12}>
            <View style={style}>A</View>
          </Grid.Item>
          <Grid.Item span={12}>
            <View style={style}>B</View>
          </Grid.Item>
          <Grid.Item span={8}>
            <View style={style}>C</View>
          </Grid.Item>
          <Grid.Item span={8}>
            <View style={style}>D</View>
          </Grid.Item>
          <Grid.Item span={8}>
            <View style={style}>E</View>
          </Grid.Item>
        </Grid>
      </Space>
      <Space direction={'vertical'}>
        <View>控制格子的跨度</View>
        <Grid gap={[10, 20]}>
          <Grid.Item span={8}>
            <View style={style}>A</View>
          </Grid.Item>
          <Grid.Item span={16}>
            <View style={style}>B</View>
          </Grid.Item>
          <Grid.Item span={16}>
            <View style={style}>C</View>
          </Grid.Item>
          <Grid.Item span={8}>
            <View style={style}>D</View>
          </Grid.Item>
          <Grid.Item span={24}>
            <View style={style}>E</View>
          </Grid.Item>
        </Grid>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
