
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

- Avatar 头像
- Avatar 头像
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Avatar} = antdTaro;
const BaseExample = ()=>{
    return <Avatar />;
};

render(<BaseExample />);

```

- Badge 徽标
- Badge 徽标
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

- Button 按钮
- Button 按钮
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

- Card 卡片
- Card 卡片
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

- Collapse 折叠面板
- Collapse 折叠面板
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

- DatePicker 日期选择器
- DatePicker 日期选择器
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

- DateRangePicker 日期范围选择器
- DateRangePicker 日期范围选择器
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

- Divider 分隔线
- Divider 分隔线
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

- Dot Loading 点状加载图标
- Dot Loading 点状加载图标
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

- Dropdown 下拉菜单
- Dropdown 下拉菜单
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
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

```

- Ellipsis 文本省略
- Ellipsis 文本省略
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {View} = taroComponent;
const {Ellipsis, Space} = antdTaro;

const content = 'antd-taro 是一个基于@tarojs/components的高级组件库，它提供基础的UI交互组件，它旨在解决小程序应用中的复杂场景问题。Ellipsis是一个文本省略组件，展示空间不足时，隐去部分内容并用“...”替代。当文本内容长度或高度超过列宽或行高、图表中空间有限、文本内容无法完全显示、自适应调整时宽度变小时就可以考虑使用该组件。'

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>单行省略</View>
      <Ellipsis content={content} />
    </Space>
    <Space direction={'vertical'}>
      <View>展开收起文本</View>
      <Ellipsis expandText='展开文本' collapseText='收起文本' content={content} />
    </Space>
    <Space direction={'vertical'}>
      <View>仅展开</View>
      <Ellipsis showAction={false} content={content} />
    </Space>
    <Space direction={'vertical'}>
      <View>默认展开</View>
      <Ellipsis defaultExpanded content={content} />
    </Space>
  </Space>;
};

render(<BaseExample/>);

```

- Empty 空状态
- Empty 空状态
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Empty, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <Empty />
      </Space>
      <Space direction={'vertical'}>
        <View>描述文字</View>
        <Empty description={'空状态'} />
      </Space>
    </Space>
  );
};

render(<BaseExample />);

```

- Grid 栅格
- Grid 栅格
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Grid, Space} = antdTaro;
const {View} = taroComponent;

const style = `{
  background: #EEE;
  text-align: center;
  color: #999999;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px #999;
}`;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <Grid gap={[10, 20]}>
          <Grid.Item span={12}>
            <View style={style}>A</View>
          </Grid.Item>
          <Grid.Item span={12}>
            <View style={style}>B</View>
          </Grid.Item>
          <Grid.Item span={8}>
            <View style={style}>C</View>
          </Grid.Item>
          <Grid.Item span={8}>
            <View style={style}>D</View>
          </Grid.Item>
          <Grid.Item span={8}>
            <View style={style}>E</View>
          </Grid.Item>
        </Grid>
      </Space>
      <Space direction={'vertical'}>
        <View>控制格子的跨度</View>
        <Grid gap={[10, 20]}>
          <Grid.Item span={8}>
            <View style={style}>A</View>
          </Grid.Item>
          <Grid.Item span={16}>
            <View style={style}>B</View>
          </Grid.Item>
          <Grid.Item span={16}>
            <View style={style}>C</View>
          </Grid.Item>
          <Grid.Item span={8}>
            <View style={style}>D</View>
          </Grid.Item>
          <Grid.Item span={24}>
            <View style={style}>E</View>
          </Grid.Item>
        </Grid>
      </Space>
    </Space>
  );
};

render(<BaseExample />);

```

- Icon 图标
- Icon 图标
- antdTaro(@kne/antd-taro)

```jsx
const {Icon, Space} = antdTaro;

const BaseExample = ()=>{
  return (
    <Space>
      <Icon type={'clockCircleFill'} />
      <Icon type={'gongsi'} />
      <Icon type={'down-outline'} />
    </Space>
  );
};

render(<BaseExample />);

```

- Input 输入框
- Input 输入框
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

- List 列表
- List 列表
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

- Navbar 导航栏
- Navbar 导航栏
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components),tarojsTaro(@tarojs/taro)

```jsx
const {NavBar, Space} = antdTaro;
const {View} = taroComponent;
const {showToast} = tarojsTaro;

const BaseExample = () => {
  const back = () => showToast({
    title: '点击了返回区域',
    duration: 1000,
    icon: 'none'
  })
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <NavBar onBack={back}>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>不展示返回按钮</View>
        <NavBar backArrow={false}>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>返回按钮显示文字</View>
        <NavBar onBack={back} back='返回'>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义左侧区域</View>
        <NavBar onBack={back} back='返回' left={'关闭'}>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义右侧区域</View>
        <NavBar onBack={back} back='返回' left={'关闭'} right={'关闭'}>标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>标题超长</View>
        <NavBar onBack={back}>一条长长长长长长长长长长长长长长的标题</NavBar>
      </Space>
      <Space direction={'vertical'}>
        <View>显示副标题</View>
        <NavBar onBack={back}>
          <View>
            <View>标题</View>
            <View style={{fontSize: '12px'}}>副标题</View>
          </View>
        </NavBar>
      </Space>
    </Space>
  );
};

render(<BaseExample/>);

```

- Picker 选择器
- Picker 选择器
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
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

```

- Popup 弹出菜单
- Popup 弹出菜单
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

- Result 结果
- Result 结果
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Result, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <Space wrap direction={'vertical'}>
        <View>Status</View>
        <Result status={'success'} description={'success'}/>
        <Result status={'error'} description={'error'}/>
        <Result status={'info'} description={'info'}/>
        <Result status={'waiting'} description={'waiting'}/>
        <Result status={'warning'} description={'warning'}/>
      </Space>
      <Space wrap direction={'vertical'}>
        <View>Title</View>
        <Result status={'success'} description={'success'} title={'success'}/>
        <Result status={'error'} description={'error'} title={'error'}/>
        <Result status={'info'} description={'info'} title={'info'}/>
        <Result status={'waiting'} description={'waiting'} title={'waiting'}/>
        <Result status={'warning'} description={'warning'} title={'warning'}/>
      </Space>
    </Space>
  );
};

render(<BaseExample />);

```

- Selector 选择组
- Selector 选择组
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

- Steps 步骤条
- Steps 步骤条
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

- Tabs 选项卡
- Tabs 选项卡
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

