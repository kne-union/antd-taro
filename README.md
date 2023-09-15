
# antd-taro


### 安装

```shell
npm i --save @kne/antd-taro
```


### 概述

这里填写组件概要说明


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- 

```jsx
const BaseExample = ()=>{
    return '我是一个示例组件';
};

render(<BaseExample />);

```

- 标签页
- 展示标签页
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Tabs} = antdTaro;
const {View} = taroComponent;
const BaseExample = () => {
    return <Tabs swiperOpen items={[{
        key: 'tab1', title: 'tab1', children: <View>
            哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
            哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
            哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
            哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
            哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
            哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
            哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
        </View>
    }, {
        key: 'tab2', title: 'tab2', children: <>
            tab2
        </>
    }]}/>;
};

render(<BaseExample/>);

```

- 弹出页
- 展示弹出页
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Popup, Button, Space} = antdTaro;
const {useState} = React;

const BaseExample = () => {
    const [open, setOpen] = useState('');
    return <Space>{['center', 'top', 'bottom', 'left', 'right'].map((position) => {
        return <>
            <Button onClick={() => {
                setOpen(position);
            }}>点击</Button>
            <Popup open={open === position} onOpenChange={(open) => {
                if (open) {
                    setOpen(position);
                } else {
                    setOpen('');
                }
            }} position={position}>
                popup窗口{position}
            </Popup>
        </>
    })}</Space>;
};

render(<BaseExample/>);


```

- 日期范围选择
- 展示日期范围选择
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Button} = taroComponent;
const {useState} = React;
const {DateRangePicker} = antdTaro;

const BaseExample = () => {
    const [open,setOpen] = useState(false);
    return <>
        <Button onClick={()=>{
            setOpen(true);
        }}>打开</Button>
        <DateRangePicker open={open} onOpenChange={setOpen}/>
    </>;
};

render(<BaseExample/>);

```

- 选择组
- 展示选择组
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Selector} = antdTaro;
const BaseExample = () => {
    return <Selector options={[{label: '男', value: '0'}, {label: '女', value: '1'}]}/>;
};

render(<BaseExample/>);

```

- 头像
- 展示头像
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Avatar} = antdTaro;
const BaseExample = ()=>{
    return <Avatar />;
};

render(<BaseExample />);

```

- 卡片
- 展示卡片
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Card} = antdTaro;
const BaseExample = () => {
    return <Card title="我是title">
        我是Card内容
    </Card>;
};

render(<BaseExample/>);

```

- 列表
- 展示列表
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {List,Switch,Icon} = antdTaro;
const BaseExample = () => {
    return <>
        <List header='基础用法'>
            <List.Item>1</List.Item>
            <List.Item>2</List.Item>
            <List.Item>3</List.Item>
        </List>

        <List header='可点击列表'>
            <List.Item prefix={<Icon className={"adm-component"} type="informationCircleFill"/>} onClick={() => {
            }}>
                账单
            </List.Item>
            <List.Item prefix={<Icon className={"adm-component"} type="informationCircleFill"/>} onClick={() => {
            }}>
                总资产
            </List.Item>
            <List.Item prefix={<Icon className={"adm-component"} type="informationCircleFill"/>} onClick={() => {
            }}>
                设置
            </List.Item>
        </List>

        <List header='复杂列表' mode="card">
            <List.Item extra={<Switch defaultChecked/>}>新消息通知</List.Item>
            <List.Item extra='未开启' clickable>
                大字号模式
            </List.Item>
            <List.Item description='管理已授权的产品和设备' clickable>
                授权管理
            </List.Item>
            <List.Item title='副标题信息A' description='副标题信息B' clickable>
                这里是主信息
            </List.Item>
        </List>

        <List header='禁用状态'>
            <List.Item disabled clickable prefix={<Icon className={"adm-component"} type="informationCircleFill"/>}>
                账单
            </List.Item>
            <List.Item disabled prefix={<Icon className={"adm-component"} type="informationCircleFill"/>}>
                总资产
            </List.Item>
        </List>
    </>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

