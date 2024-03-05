const {Slider, Space} = antdTaro;
const {View} = taroComponent;
const {showToast} = tarojsTaro;

const BaseExample = ()=>{
  const toastValue = (value) => {
    let text = ''
    if (typeof value === 'number') {
      text = `${value}`
    } else {
      text = `[${value.join(',')}]`
    }
    showToast({icon: 'none', title: `当前选中值为：${text}`});
    console.log(value);
  }

  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <Slider onChange={toastValue} />
      </Space>
      <Space direction={'vertical'}>
        <View>设置 step</View>
        <Slider ticks step={10} />
      </Space>
      <Space direction={'vertical'}>
        <View>显示当前 value</View>
        <Slider step={1} value={50} showValue/>
      </Space>
      <Space direction={'vertical'}>
        <View>设置最小/最大值</View>
        <Slider step={1} value={100} showValue min={50} max={200}/>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
