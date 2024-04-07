const {Input, Space, Button} = antdTaro;
const {View, Text} = taroComponent;
const {useState} = React;

const BaseExample = () => {
    const [value, setValue] = useState('');
    return <Space direction={'vertical'} size={30}>
        <Space direction={'vertical'}>
            <Text>可以自动聚焦的 input</Text>
            <Input type='text' placeholder='将会获取焦点' focus/>
        </Space>
        <Space direction={'vertical'}>
            <Text>受控状态，通过props.value赋值</Text>
            <Input type='text' placeholder='属性赋值' value={value} onChange={setValue}/>
            <Button onClick={() => {
                setValue('value赋值');
            }}>value赋值</Button>
        </Space>
        <Space direction={'vertical'}>
            <Text>控制最大输入长度的 input</Text>
            <Input type='text' placeholder='最大输入长度为 10' maxLength={10}/>
        </Space>
        <Space direction={'vertical'}>
            <Text>数字输入的 input</Text>
            <Input type='number' placeholder='这是一个数字输入框'/>
        </Space>
        <Space direction={'vertical'}>
            <Text>密码输入的 input</Text>
            <Input type='password' password placeholder='这是一个密码输入框'/>
        </Space>
        <Space direction={'vertical'}>
            <Text>带小数点的 input</Text>
            <Input type='digit' placeholder='带小数点的数字键盘'/>
        </Space>
        <Space direction={'vertical'}>
            <Text>身份证输入的 input</Text>
            <Input type='idcard' placeholder='身份证输入键盘'/>
        </Space>
        <Space direction={'vertical'}>
            <Text>控制占位符颜色的 input</Text>
            <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red'/>
        </Space>
    </Space>;
};

render(<BaseExample/>);
