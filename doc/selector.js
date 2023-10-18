const {Selector} = antdTaro;
const {View} = taroComponent;
const BaseExample = () => {
  return <View>
    <Selector options={[{label: '男', value: '0'}, {label: '女', value: '1'}]}/>
    <View style={{height: '20px'}}></View>
    <Selector multiple options={[
      {label: '选项1', value: '0'},
      {label: '选项2', value: '1'},
      {label: '选项3', value: '2'},
      {label: '选项4', value: '3'},
      {label: '选项5', value: '5'}
    ]}/>
  </View>;
};

render(<BaseExample/>);
