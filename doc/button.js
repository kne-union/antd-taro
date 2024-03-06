const {Button, Space, DotLoading, Icon} = antdTaro;
const {View} = taroComponent;
const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <View>按钮尺寸</View>
      <Space>
        <Button size={'small'}>small</Button>
        <Button size={'middle'}>default middle</Button>
        <Button size={'large'}>large</Button>
      </Space>
      <View>填充模式</View>
      <Space>
        <Button fill={'solid'}>default</Button>
        <Button fill={'outline'}>outline</Button>
        <Button fill={'none'}>none</Button>
      </Space>
      <View>加载状态</View>
      <Space>
        <Button loading loadingIcon={<DotLoading />}/>
        <Button loading loadingText={'loadingText'}>loading</Button>
        <Button loading loadingIcon={<Icon className={"adm-component"} type="clockCircleFill"/>}>loading</Button>
      </Space>
      <View>禁用状态</View>
      <Space>
        <Button disabled>disabled</Button>
      </Space>
      <View>形状</View>
      <Space>
        <Button shape={'rounded'}>rounded</Button>
        <Button shape={'rectangular'}>rectangular</Button>
      </Space>
      <View>语义按钮</View>
      <Space>
        <Button color={'primary'}>primary</Button>
        <Button color={'success'}>success</Button>
        <Button color={'danger'}>danger</Button>
        <Button color={'warning'}>warning</Button>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
