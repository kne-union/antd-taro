const {View} = taroComponent;
const {TextArea, Space} = antdTaro;
const {useState} = React;

const content = 'antd-taro 是一个基于@tarojs/components的高级组件库，它提供基础的UI交互组件，它旨在解决小程序应用中的复杂场景问题。Ellipsis是一个文本省略组件，展示空间不足时，隐去部分内容并用“...”替代。当文本内容长度或高度超过列宽或行高、图表中空间有限、文本内容无法完全显示、自适应调整时宽度变小时就可以考虑使用该组件。'

const BaseExample = () => {
  const [value, setValue] = useState(content)
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基本的输入框组件</View>
      <TextArea value={value} onChange={setValue} maxLength={-1} />
    </Space>
    <Space direction={'vertical'}>
      <View>字数限制</View>
      <TextArea placeholder='请输入内容' maxLength={500} />
    </Space>
    <Space direction={'vertical'}>
      <View>禁用状态</View>
      <TextArea placeholder='请输入内容' value={'北极星垂地，\n东山月满川。'} disabled/>
    </Space>
    <Space direction={'vertical'}>
      <View>输入区域高度自适应，不会出现滚动条</View>
      <TextArea placeholder='请输入内容' autoSize maxLength={-1}/>
    </Space>
  </Space>;
};

render(<BaseExample/>);
