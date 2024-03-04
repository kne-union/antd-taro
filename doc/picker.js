const {Button, View} = taroComponent;
const {useState} = React;
const {Space, Picker} = antdTaro;

const basicColumns = [
  [
    { label: '周一', value: 'Mon' },
    { label: '周二', value: 'Tues' },
    { label: '周三', value: 'Wed' },
    { label: '周四', value: 'Thur' },
    { label: '周五', value: 'Fri' },
  ],
  [
    { label: '上午', value: 'am' },
    { label: '下午', value: 'pm' },
  ],
];

const BaseExample = () => {
  const [open,setOpen] = useState(false);
  const [open2,setOpen2] = useState(false);
  const [value, setValue] = useState([]);

  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Button onClick={()=>{
        setOpen(true);
      }}>打开</Button>
      <Picker
        open={open}
        onOpenChange={setOpen}
        columns={basicColumns}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>渲染所选值</View>
      <Space>
        <Button onClick={()=>{
          setOpen2(true);
        }}>打开</Button>
        <View>{value ? value.join(',') : '未选择'}</View>
      </Space>
      <Picker
        open={open2}
        onOpenChange={setOpen2}
        onChange={setValue}
        columns={basicColumns}
        value={value}
      />
    </Space>
  </Space>;
};

render(<BaseExample/>);
