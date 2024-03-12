const {Collapse, Space, Icon} = antdTaro;
const {View} = taroComponent;

const items = [{
  key: '1', title: '第一项', children: '第一项第一项第一项第一项第一项第一项第一项第一项'
}, {
  key: '2', title: '第二项', children: '第二项第二项第二项第二项第二项第二项第二项第二项'
}, {
  key: '3', title: '第三项', children: '第三项第三项第三项第三项第三项第三项第三项第三项第三项'
}];

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Collapse defaultActiveKey={['1']} items={items}/>
    </Space>
    <Space direction={'vertical'}>
      <View>手风琴模式</View>
      <Collapse accordion items={items}/>
    </Space>
    <Space direction={'vertical'}>
      <View>禁用</View>
      <Collapse accordion items={items.slice(0, 2).concat([Object.assign({}, items[2], {disabled: true})])}/>
    </Space>
    <Space direction={'vertical'}>
      <View>自定义折叠图标</View>
      <Collapse
        arrow={active => <Icon type={active ? "checkCircleFill" : 'closeCircleFill'} className="adm-component"/>}
        items={[
          items[0],
          Object.assign({}, items[1], {arrow: <Icon type='exclamationCircleFill' className="adm-component"/>}),
          Object.assign({}, items[2], {
            arrow: active => <Icon type={active ? "informationCircleFill" : 'clockCircleFill'}
                                   className="adm-component"/>
          }),
        ]}
      />
    </Space>
  </Space>;
};

render(<BaseExample/>);
