
# antd-taro


### 安装

```shell
npm i --save @kne/antd-taro
```


### 概述

***antd-taro*** 是一个基于@tarojs/components的高级组件库，它提供基础的UI交互组件，它旨在解决小程序应用中的复杂场景问题，例如：

1. 列表展示问题
2. 解决了项目中的components开发及调试问题

它按照目前主流的形式解决了以上问题，可以作为一个应用的底层。
它提供了相对较大的组件粒度，也对应用做出了一定程度的规范。使用它能快速构建这一类型的小程序。
它提供了一个components的开发及调试环境和文档编写规范，可以使项目拥有一个良好的组件开发流程和规范，避免和业务混淆在一起

#### 使用脚手架

你可以使用Taro官方提供的脚手架初始化项目

```shell
npm install -g @tarojs/cli
```

```shell
taro init myApp
```

或者使用npx执行

```shell
npx @tarojs/cli init myApp
```

初始化完成之后安装***antd-taro***包

```shell
npm i --save @kne/antd-taro
```

然后安装example演示程序及components所需包

```shell
npm i --save-dev @kne/mini-example @kne/md-doc
```

package.json的scripts中添加对应的启动命令

```json
{
  "init": "mini-example install && create-md && mini-example build",
  "start": "npm run build:md &&npm run build:doc && run-p dev:weapp start:md start:doc start:example",
  "build": "run-s build:weapp build:md build:doc build:example",
  "build:weapp": "taro build --type weapp",
  "dev:weapp": "cross-env NODE_ENV=production npm run build:weapp -- --watch",
  "build:md": "create-md",
  "start:md": "create-md --watch",
  "build:doc": "mini-example build",
  "start:doc": "mini-example start",
  "build:example": "cd example && npm run build:weapp",
  "build:example:dd": "cd example && npm run build:dd",
  "start:example": "cd example && cross-env NODE_ENV=production npm run build:weapp -- --watch"
}
```

#### 示例程序的使用

1. 新建components目录
2. 新建文件 项目根目录/temp/config/alias.js 并添加
3. 按照examples规则在doc文件夹下完成对应的示例程序
4. 执行npm run start
5. 在小程序调试工具中打开 项目根目录/example 进行组件示例调试

```js
module.exports = {
    '@components': require.resolve('../../src/components'),
};
```

#### 最佳实践

我们推荐把所有复杂逻辑都封装成组件放在components文件夹里，并且在doc里面完成对应的文档和示例，在pages里面调用时只包含简单的组件组合以及少量参数的传递。不要把业务写在pages里面，因为那通常不可维护。

把组件里面的api调用参数及逻辑全部放在项目的preset.js里面。

在开发阶段，通过mock接口数据来完成components里面具体业务组件的编写，不要硬依赖后端api。

components内的组件命名尽量可以看出派生关系和业务所属。


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

- 头像
- 头像
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Avatar} = antdTaro;
const BaseExample = ()=>{
    return <Avatar />;
};

render(<BaseExample />);

```

- 徽标
- 徽标
- antdTaro(@kne/antd-taro)

```jsx
const {Badge, Space} = antdTaro;
const BaseExample = ()=>{
  return (
    <Space>
      <Badge content={1} >Badge</Badge>
      <Badge content={0} bordered>Badge</Badge>
      <Badge color={'blue'} content={3} />
      <Badge color={'blue'} content={<>content</>}>Badge</Badge>
      <Badge content={<>5</>}>Badge</Badge>
    </Space>
  );
};

render(<BaseExample />);

```

- 按钮
- 按钮
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Button, Space} = antdTaro;
const {View} = taroComponent;
const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <View>size</View>
      <Space>
        <Button size={'small'}>small</Button>
        <Button size={'middle'}>default middle</Button>
        <Button size={'large'}>large</Button>
      </Space>
      <View>fill</View>
      <Space>
        <Button fill={'solid'}>default</Button>
        <Button fill={'outline'}>outline</Button>
        <Button fill={'none'}>none</Button>
      </Space>
      <View>loading</View>
      <Space>
        <Button loading>loading</Button>
        <Button loading loadingText={'loadingText'}>loading</Button>
        <Button loading loadingIcon={"@"}>loading</Button>
      </Space>
      <View>disabled</View>
      <Space>
        <Button disabled>disabled</Button>
      </Space>
      <View>shape</View>
      <Space>
        <Button shape={'rounded'}>rounded</Button>
        <Button shape={'rectangular'}>rectangular</Button>
      </Space>
      <View>color</View>
      <Space>
        <Button color={'primary'}>primary</Button>
        <Button color={'success'}>success</Button>
        <Button color={'danger'}>danger</Button>
        <Button color={'warning'}>warning</Button>
      </Space>
    </Space>
  );
};

render(<BaseExample />);

```

- 卡片
- 卡片
- antdTaro(@kne/antd-taro)

```jsx
const {Card} = antdTaro;
const BaseExample = () => {
    return <Card title="我是title">
        我是Card内容
    </Card>;
};

render(<BaseExample/>);

```

- 折叠面板
- 折叠面板
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Collapse} = antdTaro;
const BaseExample = () => {
    return <>
        <Collapse defaultActiveKey={['1']} items={[{
            key: '1', title: '第一项', children: '第一项第一项第一项第一项第一项第一项第一项第一项'
        }, {
            key: '2', title: '第二项', children: '第二项第二项第二项第二项第二项第二项第二项第二项'
        }, {
            key: '3', title: '第三项', children: '第三项第三项第三项第三项第三项第三项第三项第三项第三项'
        }]}/>
    </>;
};

render(<BaseExample/>);

```

- 日期选择器
- 日期选择器
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Button} = taroComponent;
const {useState} = React;
const {DatePicker} = antdTaro;

const BaseExample = () => {
  const [open,setOpen] = useState(false);
  return <>
    <Button onClick={()=>{
      setOpen(true);
    }}>打开</Button>
    <DatePicker open={open} onOpenChange={setOpen}/>
  </>;
};

render(<BaseExample/>);

```

- 日期范围选择器
- 日期范围选择器
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

- 分隔线
- 分隔线
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Divider, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <Space>
        <View>horizontal</View>
        <Divider direction={'horizontal'} />
        <View>horizontal</View>
      </Space>
      <Space>
        <View>vertical</View>
        <Divider direction={'vertical'} />
        <View>vertical</View>
      </Space>
    </Space>
  );
};

render(<BaseExample />);

```

- 点状加载图标
- 点状加载图标
- antdTaro(@kne/antd-taro)

```jsx
const {DotLoading} = antdTaro;
const BaseExample = () => {
  return (
    <DotLoading>loading dot</DotLoading>
  );
};

render(<BaseExample/>);

```

- 输入框
- 输入框
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Input} = antdTaro;
const {View} = taroComponent;

const BaseExample = () => {
  return <View>
    <Input placeholder={"请输入Input1"}/>
    <Input placeholder={"请输入Input2"} disabled/>
  </View>;
};

render(<BaseExample/>);

```

- 列表
- 列表
- antdTaro(@kne/antd-taro)

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

- 弹出菜单
- 弹出菜单
- antdTaro(@kne/antd-taro)

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

- 选择器
- 选择器
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
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

```

- 步骤条
- 步骤条
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Steps} = antdTaro;
const BaseExample = () => {
    return <>
        <Steps current={2} items={[{
            title: '第一步', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第二步', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第三步', status: 'error', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第四步', description: '完成时间：2020-12-01 12:30'
        }]}/>
        <Steps direction="vertical" current={2} items={[{
            title: '第一步', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第二步', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第三步', status: 'error', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第四步', description: '完成时间：2020-12-01 12:30'
        }]}/>
    </>;
};

render(<BaseExample/>);

```

- 选项卡
- 选项卡
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Tabs} = antdTaro;
const {View} = taroComponent;
const BaseExample = () => {
    return <>
        <Tabs.Header items={[{key: 'tab1', title: 'tab1'}, {key: 'tab2', title: 'tab2'}]}/>
        <Tabs swiperOpen items={[{
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
        }]}/>
    </>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

