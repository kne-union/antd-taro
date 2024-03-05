const {Dropdown} = antdTaro;
const {View} = taroComponent;

const BaseExample = () => {
  return (
    <View>
      <Dropdown items={[{key: 'apple', title: 'apple', children: 'apple'}]}/>
      <Dropdown items={[{key: 'apple', title: 'apple', children: 'apple'}, {key: 'banana', title: 'banana', children: 'banana'}]}/>
      <Dropdown
        activeKey={'orange'}
        items={[{key: 'apple', title: 'apple', children: 'apple'}, {key: 'banana', title: 'banana', children: 'banana'}, {key: 'orange', title: 'orange', children: 'orange'}]}
      />
    </View>
  );
};

render(<BaseExample/>);
