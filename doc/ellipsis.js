const {View} = taroComponent;
const {Ellipsis, Space} = antdTaro;

const content = 'antd-taro 是一个基于@tarojs/components的高级组件库，它提供基础的UI交互组件，它旨在解决小程序应用中的复杂场景问题。Ellipsis是一个文本省略组件，展示空间不足时，隐去部分内容并用“...”替代。当文本内容长度或高度超过列宽或行高、图表中空间有限、文本内容无法完全显示、自适应调整时宽度变小时就可以考虑使用该组件。'

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>单行省略</View>
      <Ellipsis content={content} />
    </Space>
    <Space direction={'vertical'}>
      <View>展开收起文本</View>
      <Ellipsis expandText='展开文本' collapseText='收起文本' content={content} />
    </Space>
    <Space direction={'vertical'}>
      <View>仅展开</View>
      <Ellipsis showAction={false} content={content} />
    </Space>
    <Space direction={'vertical'}>
      <View>默认展开</View>
      <Ellipsis defaultExpanded content={content} />
    </Space>
  </Space>;
};

render(<BaseExample/>);
