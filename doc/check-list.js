const {View} = taroComponent;
const {CheckList, Space, Icon} = antdTaro;

const options = [
  {label: 'A', value: 'A'},
  {label: 'B', value: 'B'},
  {label: 'C', value: 'C', disabled: true},
  {label: 'D', value: 'D', readOnly: true},
  {label: 'E', value: 'E'},
];

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <CheckList options={options} />
    </Space>
    <Space direction={'vertical'}>
      <View>多选</View>
      <CheckList multiple options={options.slice(0, 2)} />
    </Space>
    <Space direction={'vertical'}>
      <View>自定义选中图标</View>
      <CheckList options={options} defaultValue={['B']} activeIcon={<Icon className={"adm-component"} type="checkCircleFill"/>}/>
    </Space>
    <Space direction={'vertical'}>
      <View>整组只读</View>
      <CheckList options={options.slice(0, 2)} defaultValue={['B']} readOnly/>
    </Space>
    <Space direction={'vertical'}>
      <View>整组禁用</View>
      <CheckList options={options.slice(0, 2)} defaultValue={['B']} disabled/>
    </Space>
  </Space>;
};

render(<BaseExample/>);
