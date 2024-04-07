const {InputNumber, Space, Button} = antdTaro;
const {Text} = taroComponent;
const {useState} = React;

const BaseExample = () => {
    const [value, setValue] = useState(0);
    return <Space direction={'vertical'} size={30}>
        <Space direction={'vertical'}>
            <Text>非受控状态数字输入</Text>
            <InputNumber placeholder='数字输入'/>
        </Space>
        <Space direction={'vertical'}>
            <Text>受控状态数字输入并赋值</Text>
            <InputNumber placeholder='数字输入' value={value} onChange={setValue}/>
            <Button onClick={() => {
                setValue(100);
            }}>value赋值</Button>
        </Space>
        <Space direction={'vertical'}>
            <Text>隐藏控制按钮</Text>
            <InputNumber placeholder='数字输入' hiddenController/>
        </Space>
        <Space direction={'vertical'}>
            <Text>设置最大值为5和最小值为2</Text>
            <InputNumber placeholder='数字输入' min={2} max={5}/>
        </Space>
    </Space>;
};

render(<BaseExample/>);
