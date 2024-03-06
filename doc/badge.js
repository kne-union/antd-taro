const {Badge, Space} = antdTaro;
const {View} = taroComponent;

const style = `
  {
    display: block;
    background: #666666;
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }
`;
const BaseExample = ()=>{
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <Space>
          <Badge content={1}>Badge</Badge>
          <Badge content={'新'}><View style={style}/></Badge>
          <Badge content={Badge.dot}><View style={style}/></Badge>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>带边框</View>
        <Badge content={'更新啦'} bordered><View style={style}/></Badge>
      </Space>
      <Space direction={'vertical'}>
        <View>独立使用</View>
        <Space>
          <Badge content='99+' />
          <Badge content='新消息!' />
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义颜色</View>
        <Space>
          <Badge color='#108ee9' content={Badge.dot}><View style={style}/></Badge>
          <Badge color='#87d068' content={Badge.dot}><View style={style}/></Badge>
          <Badge content={Badge.dot}><View style={style}/></Badge>
          <Badge color='orange' content={Badge.dot}><View style={style}/></Badge>
        </Space>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
