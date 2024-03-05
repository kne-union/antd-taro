const {Space, Button} = antdTaro;
const {View} = taroComponent;

const style = `{
  font-size: 12px;
  background: #ddd;
  padding: 20px;
  box-sizing: border-box;
}`;

const styleWidth = `{
  font-size: 12px;
  max-width: 80px;
}`;

const BaseExample = () => {
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>水平方向的间距</View>
        <Space>
          <View style={style}>horizontal</View>
          <View style={style}>horizontal</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>换行</View>
        <Space wrap>
          {
            Array(10).fill().map((_item, index) => (
              <View style={style} key={`view${index}`}>view{index}</View>
            ))
          }
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>垂直方向的间距</View>
        <Space direction={'vertical'}>
          <View style={style}>vertical</View>
          <View style={style}>vertical</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义间距大小</View>
        <Space size={16} wrap>
          <View style={style}>horizontal</View>
          <View style={style}>horizontal</View>
          <View style={style}>horizontal</View>
          <View style={style}>horizontal</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>渲染为块级元素</View>
        <Space direction='vertical' block>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>主轴对齐方式</View>
        <Space justify='center' block>
          <View style={style + styleWidth}>1</View>
          <View style={style + styleWidth}>2{`\n`}2{`\n`}2</View>
          <View style={style + styleWidth}>3{`\n`}3{`\n`}3{`\n`}3{`\n`}3</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>交叉轴对齐方式</View>
        <Space justify='center' block>
          <View style={style + styleWidth}>1</View>
          <View style={style + styleWidth}>2{`\n`}2{`\n`}2</View>
          <View style={style + styleWidth}>3{`\n`}3{`\n`}3{`\n`}3{`\n`}3</View>
        </Space>
      </Space>
    </Space>
  );
};

render(<BaseExample/>);
