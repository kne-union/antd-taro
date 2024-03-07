const {Dropdown, Space, Icon} = antdTaro;
const {View} = taroComponent;

const items = [
  {key: 'apple', title: 'apple', children: 'apple'},
  {key: 'banana', title: 'banana', children: 'banana'},
  {key: 'orange', title: 'orange', children: 'orange'}
];

const BaseExample = () => {
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>一列</View>
        <Dropdown items={items.slice(0, 1)}/>
      </Space>
      <Space direction={'vertical'}>
        <View>两列</View>
        <Dropdown items={items.slice(0, 2)}/>
      </Space>
      <Space direction={'vertical'} closeOnMaskClick={false}>
        <View>三列</View>
        <Dropdown items={items}/>
      </Space>
      <Space direction={'vertical'} closeOnMaskClick={false}>
        <View>自定义箭头</View>
        <Dropdown
          arrow={<Icon className={"adm-component"} type="check-mark"/>}
          items={[...items.slice(0, 2), Object.assign({}, items[2], {arrow: <Icon className={"adm-component"} type="checkCircleFill"/>})]}
        />
      </Space>
    </Space>
  );
};

render(<BaseExample/>);
