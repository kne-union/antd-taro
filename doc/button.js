const {Button, Space} = antdTaro;
const {View} = taroComponent;
const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <View>size</View>
      <Space>
        <Button size={'small'}>small</Button>
        <Button size={'middle'}>default middle</Button>
        <Button size={'large'}>large</Button>
      </Space>
      <View>fill</View>
      <Space>
        <Button fill={'solid'}>default</Button>
        <Button fill={'outline'}>outline</Button>
        <Button fill={'none'}>none</Button>
      </Space>
      <View>loading</View>
      <Space>
        <Button loading>loading</Button>
        <Button loading loadingText={'loadingText'}>loading</Button>
        <Button loading loadingIcon={"@"}>loading</Button>
      </Space>
      <View>disabled</View>
      <Space>
        <Button disabled>disabled</Button>
      </Space>
      <View>shape</View>
      <Space>
        <Button shape={'rounded'}>rounded</Button>
        <Button shape={'rectangular'}>rectangular</Button>
      </Space>
      <View>color</View>
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
