const {View} = taroComponent;
const {Tag, Space} = antdTaro;

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Tag>123</Tag>
    </Space>
    <Space direction={'vertical'}>
      <View>线框标签</View>
      <Space wrap>
        <Tag color='primary' fill='outline'>Primary</Tag>
        <Tag color='#87d068' fill='outline'>#87d068</Tag>
        <Tag color='#ff6430' fill='outline'>#ff6430</Tag>
      </Space>
    </Space>
    <Space direction={'vertical'}>
      <View>语义标签</View>
      <Space wrap>
        <Tag color='default'>Default</Tag>
        <Tag color='primary'>测试</Tag>
        <Tag color='success'>Success</Tag>
        <Tag color='warning'>Warning</Tag>
        <Tag color='danger'>Danger</Tag>
      </Space>
    </Space>
    <Space direction={'vertical'}>
      <View>圆角标签</View>
      <Tag round color='#2db7f5'>圆角标签</Tag>
    </Space>
    <Space direction={'vertical'}>
      <View>自定义颜色</View>
      <Space>
        <Tag color='#2db7f5'>#2db7f5</Tag>
        <Tag color='#87d068'>#87d068</Tag>
        <Tag color='#108ee9'>#108ee9</Tag>
      </Space>
    </Space>
    <Space direction={'vertical'}>
      <View>背景色透明度</View>
      <Space>
        <Tag color='#2db7f5' opacity>#2db7f5</Tag>
        <Tag color='#87d068' opacity>#87d068</Tag>
        <Tag color='#108ee9' opacity>#108ee9</Tag>
      </Space>
    </Space>
    <Space direction={'vertical'}>
      <View>通过 CSS 变量个性化</View>
      <Space>
        <Tag color='primary' fill='outline' style={{ '--border-radius': '6px' }}>Primary</Tag>
        <Tag color='success' fill='outline' style={{ '--background-color': '#c8f7cFFF' }}>Success</Tag>
        <Tag color='warning' style={{ '--text-color': 'var(--adm-color-text)' }}>Warning</Tag>
        <Tag color='danger' fill='outline' style={{ '--border-color': 'var(--adm-color-weak)' }}>Danger</Tag>
      </Space>
    </Space>
  </Space>;
};

render(<BaseExample/>);
