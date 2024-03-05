const {Input} = antdTaro;
const {View} = taroComponent;

const BaseExample = () => {
  return <View>
    <Input placeholder={"请输入Input1"}/>
    <Input placeholder={"请输入Input2"} disabled/>
  </View>;
};

render(<BaseExample/>);
