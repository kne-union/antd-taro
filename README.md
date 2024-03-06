
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

- SafeArea 安全区
- SafeArea 安全区
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {SafeArea, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <View>
      <View style={{background: '#eee'}}><SafeArea position={'top'}/></View>
      <View>Aliqua consectetur enim commodo labore Lorem in cillum fugiat amet fugiat nulla laboris nulla. Exercitation mollit do culpa deserunt. Culpa ad dolor culpa sunt adipisicing magna nostrud pariatur aliqua et est ullamco. Enim voluptate ea cillum minim et commodo qui officia. Nisi labore laborum consectetur culpa ut. Esse dolor culpa officia elit nisi amet eiusmod sunt ipsum. Ut ex Lorem consectetur cupidatat duis do. Ad officia duis laborum enim veniam fugiat elit eu cillum anim reprehenderit. Ex quis est amet cupidatat laboris nisi nisi veniam ea voluptate culpa. Do nisi fugiat laboris. Dolore ut laborum sint exercitation eiusmod consectetur anim. Esse reprehenderit ex aute tempor eiusmod do proident minim cillum incididunt. Est aliquip aute non id tempor aliqua. Culpa labore id elit velit qui minim reprehenderit. Voluptate esse aliquip ullamco fugiat occaecat Lorem non pariatur cupidatat ullamco esse ex. Quis exercitation enim aliquip proident magna occaecat sint quis. Fugiat pariatur ad nisi eiusmod culpa dolor. Enim in aliquip magna anim duis adipisicing duis quis fugiat ad nulla. Ullamco eu reprehenderit exercitation eu aliqua aliquip. Cupidatat consectetur cupidatat dolore eiusmod do tempor sint in deserunt velit amet id excepteur pariatur. Irure nostrud labore cupidatat consectetur cupidatat qui non ullamco cupidatat cillum. Labore Lorem proident fugiat occaecat laborum sint sint in pariatur sit irure. Velit aliquip occaecat magna id aliqua laboris adipisicing amet eiusmod do sint consectetur culpa culpa. Culpa nostrud ad occaecat consequat. Mollit irure voluptate in reprehenderit Lorem duis nisi velit duis. Sunt veniam et cupidatat tempor laborum sint deserunt eiusmod cillum commodo cupidatat Lorem sit ut. Qui dolor ea do aliquip dolore esse culpa minim velit qui nulla nisi est. Dolor Lorem eiusmod aliquip fugiat aliqua sint irure qui esse aliquip in ut ad. Ipsum ullamco culpa non incididunt Lorem labore occaecat. Nostrud enim ipsum sit. Ipsum quis occaecat consequat amet incididunt amet veniam ea dolor ullamco reprehenderit est quis nisi reprehenderit. Ipsum occaecat mollit voluptate sint est culpa elit magna dolor id occaecat veniam eiusmod ad proident. Sit adipisicing elit est culpa laborum magna nostrud aliqua laboris sint eiusmod elit nulla. Voluptate fugiat dolore dolore pariatur ut. Eiusmod cillum duis deserunt culpa eiusmod aliqua amet Lorem esse amet est est. Do fugiat pariatur eiusmod labore. Sint anim dolore amet aliquip enim labore commodo veniam esse consectetur culpa mollit proident et velit. Eiusmod ut duis eiusmod aliqua dolore exercitation elit voluptate ipsum voluptate incididunt consectetur adipisicing. Ad id et mollit aliqua elit elit ut in tempor consectetur dolore pariatur velit reprehenderit duis. Nulla occaecat velit aliquip in. Incididunt eiusmod minim ea fugiat esse fugiat fugiat enim amet. Incididunt ipsum in labore esse aliqua exercitation ex elit id ullamco. Laborum ipsum sint mollit aliqua incididunt labore cillum anim et exercitation ullamco Lorem mollit. Sit enim enim consequat sit id elit non. Dolor mollit nisi qui elit minim minim velit ex incididunt elit ullamco et dolore dolor. Aliqua magna non id minim mollit est et irure duis aliqua. Ut sint amet et sint. Aliqua reprehenderit duis sit labore. Nostrud eu velit aute et qui. Quis sit ullamco deserunt excepteur. Eiusmod est Lorem quis incididunt aute ipsum elit ea sit culpa velit quis ullamco aliqua. Laboris aute sit quis non. Exercitation ullamco elit et minim. Excepteur veniam incididunt ex nisi ex sint non. Quis sit aute aliqua sunt in voluptate sint velit sit laboris ipsum. Commodo labore dolor fugiat ex. Do officia cillum adipisicing velit commodo minim cupidatat cillum dolor exercitation magna consequat sunt commodo aute. Veniam non reprehenderit enim est amet laborum nisi duis ut deserunt aute eu. Laboris mollit sit aliquip elit laboris mollit nisi eu voluptate minim cillum. Do incididunt reprehenderit nisi anim ad. Qui reprehenderit non laboris. Sint proident proident commodo laboris sit ullamco. Minim dolore sunt ut nostrud.</View>
      <View style={{background: '#eee'}}><SafeArea position={'bottom'}/></View>
    </View>
  );
};

render(<BaseExample />);

```

- SearchBar 搜索框
- SearchBar 搜索框
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components),tarojsTaro(@tarojs/taro)

```jsx
const {SearchBar, Space, Button} = antdTaro;
const {View} = taroComponent;
const {useRef} = React;
const {showToast} = tarojsTaro;

const BaseExample = ()=>{
  const searchRef = useRef(null);
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <SearchBar placeholder='请输入内容' />
      </Space>
      <Space direction={'vertical'}>
        <View>不显示搜索按钮</View>
        <SearchBar showSearchButton={false} />
      </Space>
      <Space direction={'vertical'}>
        <View>自定义搜索按钮</View>
        <SearchBar autoFocus searchText='立即搜索' />
      </Space>
      <Space direction={'vertical'}>
        <View>搜索按钮长显</View>
        <SearchBar placeholder='请输入内容' showSearchButton={() => true} />
      </Space>
      <Space direction={'vertical'}>
        <View>事件监听和 Ref</View>
        <SearchBar
          ref={searchRef}
          placeholder='请输入内容'
          onSearch={val => {
            console.log('你搜索了')
            showToast({title: `你搜索了：${val}`, icon: 'none'})
          }}
          onFocus={() => {
            console.log('获得焦点')
            setTimeout(() => searchRef.current?.focus(), 300)

          }}
          onBlur={() => {
            console.log('失去焦点')
          }}
          onCancel={() => {
            console.log('取消搜索')
          }}
        />
        <Space>
          <Button
            onClick={() => {
              searchRef.current?.clear()
            }}
          >
            清空内容
          </Button>
          <Button
            onClick={() => {
              searchRef.current?.focus()
            }}
          >
            激活
          </Button>
        </Space>
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

- Slider 滑动输入条
- Slider 滑动输入条
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components),tarojsTaro(@tarojs/taro)

```jsx
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

```

- Space 间距
- Space 间距
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Space, Button} = antdTaro;
const {View} = taroComponent;

const style = `{
  font-size: 12px;
  background: #ddd;
  padding: 20px;
  box-sizing: border-box;
}`;

const styleWidth = `{
  font-size: 12px;
  max-width: 80px;
}`;

const BaseExample = () => {
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>水平方向的间距</View>
        <Space>
          <View style={style}>horizontal</View>
          <View style={style}>horizontal</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>换行</View>
        <Space wrap>
          {
            Array(10).fill().map((_item, index) => (
              <View style={style} key={`view${index}`}>view{index}</View>
            ))
          }
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>垂直方向的间距</View>
        <Space direction={'vertical'}>
          <View style={style}>vertical</View>
          <View style={style}>vertical</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义间距大小</View>
        <Space size={16} wrap>
          <View style={style}>horizontal</View>
          <View style={style}>horizontal</View>
          <View style={style}>horizontal</View>
          <View style={style}>horizontal</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>渲染为块级元素</View>
        <Space direction='vertical' block>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>主轴对齐方式</View>
        <Space justify='center' block>
          <View style={style + styleWidth}>1</View>
          <View style={style + styleWidth}>2{`\n`}2{`\n`}2</View>
          <View style={style + styleWidth}>3{`\n`}3{`\n`}3{`\n`}3{`\n`}3</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>交叉轴对齐方式</View>
        <Space justify='center' block>
          <View style={style + styleWidth}>1</View>
          <View style={style + styleWidth}>2{`\n`}2{`\n`}2</View>
          <View style={style + styleWidth}>3{`\n`}3{`\n`}3{`\n`}3{`\n`}3</View>
        </Space>
      </Space>
    </Space>
  );
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

- Switch 开关
- Switch 开关
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {View} = taroComponent;
const {Switch, Space} = antdTaro;

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Switch />
    </Space>
    <Space direction={'vertical'}>
      <View>有默认值</View>
      <Switch checked />
    </Space>
    <Space direction={'vertical'}>
      <View>禁用</View>
      <Switch disabled />
    </Space>
    <Space direction={'vertical'}>
      <View>type 为 checkbox</View>
      <Switch checked type={'checkbox'} />
    </Space>
    <Space direction={'vertical'}>
      <View>color</View>
      <Switch checked color={'#04BE02'} />
    </Space>
  </Space>;
};

render(<BaseExample/>);

```

- TabBar 标签栏
- TabBar 标签栏
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {View} = taroComponent;
const {useState} = React;
const {TabBar, Space, Icon, Badge} = antdTaro;

const tabs = [
  {key: 'index', title: '首页', icon: <Icon type={'clockCircleFill'} className="adm-component" />},
  {key: 'info', title: '信息', icon: <Icon type={'informationCircleFill'} className="adm-component" />},
  {key: 'question', title: '问题', icon: <Icon type={'exclamationCircleFill'} className="adm-component" />},
];

const tabsPath = [
  {key: 'index', title: '首页', icon: <Icon type={'clockCircleFill'} className="adm-component" />, path: '/'},
  {key: 'info', title: '信息', icon: <Icon type={'informationCircleFill'} className="adm-component" />, path: '/info'},
  {key: 'question', title: '问题', icon: <Icon type={'exclamationCircleFill'} className="adm-component" />, path: '/question'},
];

const tabsBadge = [
  {key: 'index', title: '首页', icon: <Icon type={'clockCircleFill'} className="adm-component" />, badge: Badge.dot},
  {key: 'info', title: '信息', icon: <Icon type={'informationCircleFill'} className="adm-component" />, badge: 5},
  {key: 'question', title: '问题', icon: <Icon type={'exclamationCircleFill'} className="adm-component" />, badge: '99+'},
  {key: 'check', title: 'Check', icon: <Icon type={'checkCircleFill'} className="adm-component" />},
];

const BaseExample = () => {
  const [activeKey, setActiveKey] = useState('info')
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <TabBar items={tabs}/>
    </Space>
    <Space direction={'vertical'}>
      <View>徽标</View>
      <TabBar items={tabsPath}/>
    </Space>
    <Space direction={'vertical'}>
      <View>徽标</View>
      <TabBar items={tabsBadge}/>
    </Space>
    <Space direction={'vertical'}>
      <View>仅图标</View>
      <TabBar items={tabs.map(({title, ...item}) => item)}/>
    </Space>
    <Space direction={'vertical'}>
      <View>仅标题</View>
      <TabBar items={tabs.map(({icon, ...item}) => item)}/>
    </Space>
    <Space direction={'vertical'}>
      <View>受控组件</View>
      <TabBar items={tabs} activeKey={activeKey} onChange={setActiveKey}/>
    </Space>
    <Space direction={'vertical'}>
      <View>开启安全区</View>
      <TabBar items={tabs} safeArea/>
    </Space>
  </Space>;
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

- Tag 标签
- Tag 标签
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {View} = taroComponent;
const {Tag, Space} = antdTaro;

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Tag>123</Tag>
    </Space>
    <Space direction={'vertical'}>
      <View>线框标签</View>
      <Space wrap>
        <Tag color='primary' fill='outline'>Primary</Tag>
        <Tag color='#87d068' fill='outline'>#87d068</Tag>
        <Tag color='#ff6430' fill='outline'>#ff6430</Tag>
      </Space>
    </Space>
    <Space direction={'vertical'}>
      <View>语义标签</View>
      <Space wrap>
        <Tag color='default'>Default</Tag>
        <Tag color='primary'>测试</Tag>
        <Tag color='success'>Success</Tag>
        <Tag color='warning'>Warning</Tag>
        <Tag color='danger'>Danger</Tag>
      </Space>
    </Space>
    <Space direction={'vertical'}>
      <View>圆角标签</View>
      <Tag round color='#2db7f5'>圆角标签</Tag>
    </Space>
    <Space direction={'vertical'}>
      <View>自定义颜色</View>
      <Space>
        <Tag color='#2db7f5'>#2db7f5</Tag>
        <Tag color='#87d068'>#87d068</Tag>
        <Tag color='#108ee9'>#108ee9</Tag>
      </Space>
    </Space>
    <Space direction={'vertical'}>
      <View>背景色透明度</View>
      <Space>
        <Tag color='#2db7f5' opacity>#2db7f5</Tag>
        <Tag color='#87d068' opacity>#87d068</Tag>
        <Tag color='#108ee9' opacity>#108ee9</Tag>
      </Space>
    </Space>
    <Space direction={'vertical'}>
      <View>通过 CSS 变量个性化</View>
      <Space>
        <Tag color='primary' fill='outline' style={{ '--border-radius': '6px' }}>Primary</Tag>
        <Tag color='success' fill='outline' style={{ '--background-color': '#c8f7cFFF' }}>Success</Tag>
        <Tag color='warning' style={{ '--text-color': 'var(--adm-color-text)' }}>Warning</Tag>
        <Tag color='danger' fill='outline' style={{ '--border-color': 'var(--adm-color-weak)' }}>Danger</Tag>
      </Space>
    </Space>
  </Space>;
};

render(<BaseExample/>);

```

- TextArea 文本域
- TextArea 文本域
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {View} = taroComponent;
const {TextArea, Space} = antdTaro;
const {useState} = React;

const content = 'antd-taro 是一个基于@tarojs/components的高级组件库，它提供基础的UI交互组件，它旨在解决小程序应用中的复杂场景问题。Ellipsis是一个文本省略组件，展示空间不足时，隐去部分内容并用“...”替代。当文本内容长度或高度超过列宽或行高、图表中空间有限、文本内容无法完全显示、自适应调整时宽度变小时就可以考虑使用该组件。'

const BaseExample = () => {
  const [value, setValue] = useState(content)
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基本的输入框组件</View>
      <TextArea value={value} onChange={setValue} maxLength={-1} />
    </Space>
    <Space direction={'vertical'}>
      <View>字数限制</View>
      <TextArea placeholder='请输入内容' maxLength={500} />
    </Space>
    <Space direction={'vertical'}>
      <View>禁用状态</View>
      <TextArea placeholder='请输入内容' value={'北极星垂地，\n东山月满川。'} disabled/>
    </Space>
    <Space direction={'vertical'}>
      <View>输入区域高度自适应，不会出现滚动条</View>
      <TextArea placeholder='请输入内容' autoSize maxLength={-1}/>
    </Space>
  </Space>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

