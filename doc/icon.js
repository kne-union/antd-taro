const {Icon, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <Space direction = {'vertical'}>
        <View>基础用法</View>
        <Space>
          <Icon type={'clockCircleFill'} className="adm-component" />
          <Icon type={'informationCircleFill'} className="adm-component" />
          <Icon type={'checkCircleFill'} className="adm-component" />
        </Space>
      </Space>
      <Space direction = {'vertical'}>
        <View>自定义尺寸</View>
        <Space>
          <Icon type={'clockCircleFill'} className="adm-component" size={'24px'} />
          <Icon type={'informationCircleFill'} className="adm-component" size={'32px'} />
          <Icon type={'checkCircleFill'} className="adm-component" size={'40px'} />
        </Space>
      </Space>
      <Space direction = {'vertical'}>
        <View>自定义颜色</View>
        <Space>
          <Icon type={'clockCircleFill'} className="adm-component" color={'#2db7f5'} />
          <Icon type={'informationCircleFill'} className="adm-component" color={'#87d068'} />
          <Icon type={'checkCircleFill'} className="adm-component" color={'#ff6430'} />
        </Space>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
