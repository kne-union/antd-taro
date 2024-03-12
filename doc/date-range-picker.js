const {Button, View} = taroComponent;
const {useState} = React;
const {DateRangePicker, Space} = antdTaro;
const {showToast} = tarojsTaro;

const BaseExample = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [value, setValue] = useState([]);
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Button onClick={() => {
        setOpen(true);
      }}>打开</Button>
      <DateRangePicker
        title='时间选择'
        open={open}
        onOpenChange={setOpen}
        onChange={val => {
          showToast({icon: 'none', title: val?.map(item => item.toDateString())?.join(' ~ ')})
        }}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>渲染所选值</View>
      <Space>
        <Button onClick={() => {
          setOpen2(true);
        }}>打开</Button>
        <View>{(value || [])?.map(item => item.toLocaleDateString())?.join(' ~ ')}</View>
      </Space>
      <DateRangePicker
        open={open2}
        onOpenChange={setOpen2}
        onChange={val => setValue(val)}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>控制选择精度</View>
      <Button onClick={() => {
        setOpen3(true);
      }}>年-月</Button>
      <DateRangePicker
        title='时间选择'
        open={open3}
        onOpenChange={setOpen3}
        precision='month'
        onChange={val => {
          showToast({icon: 'none', title: val?.map(item => item.toLocaleDateString())?.join(' ~ ')})
        }}
      />
      <Button onClick={() => {
        setOpen4(true);
      }}>年-月-日-时-分</Button>
      <DateRangePicker
        title='时间选择'
        open={open4}
        onOpenChange={setOpen4}
        precision='minute'
        onChange={val => {
          showToast({icon: 'none', title: val?.map(item => item.toTimeString())?.join(' ~ ')})
        }}
      />
    </Space>
  </Space>;
};

render(<BaseExample/>);
