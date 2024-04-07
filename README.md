
# antd-taro


### 安装

```shell
npm i --save @kne/antd-taro
```


### 概述

***antd-taro*** 是一个参考 [antd-mobile](https://mobile.ant.design/) api和组件设计样式实现的用于Taro框架进行微信小程序的开发的组件库。


注意事项：

* ***antd-taro***并不是antd-mobile的官方迁移，是我们参考antd-mobile源代码去除Taro微信小程序无法兼容部分和部分使用频率较低的组件
* ***antd-taro***的API和antd-mobile有很多差异，所以使用时请参考我们提供的API文档
* ***antd-taro***目前只测试了在微信小程序下以react模式进行开发，其他类似支付宝小程序等尚未进行测试，具体表现未知
* @kne/mini-core 是依赖***antd-taro***的更加上层的实现，提供了微信小程序开发的整套开发流程，组件规范和更大粒度的复杂组件实现，可以搭配一起进行使用



### 示例

#### 示例代码

- Avatar 头像
- Avatar 头像
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Avatar, Space} = antdTaro;
const {View, Text} = taroComponent;

const demoAvatarImages = [
  'https://github.githubassets.com/assets/app-icon-512-7f9c4ff2e960.png',
  'https://avatars.githubusercontent.com/u/37367461?v=4',
];

const BaseExample = ()=>{
    return (
      <Space direction={'vertical'} size={30}>
        <Space direction={'vertical'}>
          <View>基础用法</View>
          <Space>
            <Avatar src={demoAvatarImages[0]} />
            <Avatar src={demoAvatarImages[1]} />
          </Space>
        </Space>
        <Space direction={'vertical'}>
          <View>占位头像</View>
          <Avatar />
          <Text style={{color: '#666', fontSize: '14px'}}>如果你不传图片，或者不传性别，或者图片加载失败，那么会显示一个默认的图像</Text>
        </Space>
        <Space direction={'vertical'}>
          <View>性别默认头像</View>
          <Space>
            <Avatar gender={'F'} />
            <Avatar gender={'f'} />
            <Avatar gender={'female'} />
          </Space>
          <Space>
            <Avatar gender={'M'} />
            <Avatar gender={'m'} />
            <Avatar gender={'male'} />
          </Space>
        </Space>
        <Space direction={'vertical'}>
          <View>自定义尺寸</View>
          <Space>
            <Avatar gender={'F'} />
            <Avatar gender={'f'} size={64} />
            <Avatar gender={'female'} size={80} />
          </Space>
        </Space>
        <Space direction={'vertical'}>
          <View>自定义圆角</View>
          <Space>
            <Avatar src={demoAvatarImages[0]} style={{'--border-radius': '10%'}} />
            <Avatar src={demoAvatarImages[1]} style={{'--border-radius': '12px'}} />
          </Space>
        </Space>
      </Space>
    );
};

render(<BaseExample />);

```

- Badge 徽标
- Badge 徽标
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Badge, Space} = antdTaro;
const {View} = taroComponent;

const style = `
  {
    display: block;
    background: #666666;
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }
`;
const BaseExample = ()=>{
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <Space>
          <Badge content={1}>Badge</Badge>
          <Badge content={'新'}><View style={style}/></Badge>
          <Badge content={Badge.dot}><View style={style}/></Badge>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>带边框</View>
        <Badge content={'更新啦'} bordered><View style={style}/></Badge>
      </Space>
      <Space direction={'vertical'}>
        <View>独立使用</View>
        <Space>
          <Badge content='99+' />
          <Badge content='新消息!' />
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义颜色</View>
        <Space>
          <Badge color='#108ee9' content={Badge.dot}><View style={style}/></Badge>
          <Badge color='#87d068' content={Badge.dot}><View style={style}/></Badge>
          <Badge content={Badge.dot}><View style={style}/></Badge>
          <Badge color='orange' content={Badge.dot}><View style={style}/></Badge>
        </Space>
      </Space>
    </Space>
  );
};

render(<BaseExample />);

```

- Button 按钮
- Button 按钮
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Button, Space, DotLoading, Icon} = antdTaro;
const {View} = taroComponent;
const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <View>按钮尺寸</View>
      <Space>
        <Button size={'small'}>small</Button>
        <Button size={'middle'}>default middle</Button>
        <Button size={'large'}>large</Button>
      </Space>
      <View>填充模式</View>
      <Space>
        <Button fill={'solid'}>default</Button>
        <Button fill={'outline'}>outline</Button>
        <Button fill={'none'}>none</Button>
      </Space>
      <View>加载状态</View>
      <Space>
        <Button loading loadingIcon={<DotLoading />}/>
        <Button loading loadingText={'loadingText'}>loading</Button>
        <Button loading loadingIcon={<Icon className={"adm-component"} type="clockCircleFill"/>}>loading</Button>
      </Space>
      <View>禁用状态</View>
      <Space>
        <Button disabled>disabled</Button>
      </Space>
      <View>形状</View>
      <Space>
        <Button shape={'rounded'}>rounded</Button>
        <Button shape={'rectangular'}>rectangular</Button>
      </Space>
      <View>语义按钮</View>
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
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components),tarojsTaro(@tarojs/taro)

```jsx
const {Card, Space, Icon, Button} = antdTaro;
const {View} = taroComponent;
const {showToast} = tarojsTaro;

const styles = {
  content: {
    height: '50px'
  },
  footer: {
    paddingTop: '11px',
    borderTop: '1px solid #e5e5e5',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  customBody: {
    color: '#00b578'
  },
};

const BaseExample = () => {
  const onClick = () => {
    showToast({title: '点击了卡片', icon: 'none'});
  };

  const onHeaderClick = () => {
    showToast({title: '点击了卡片Header区域', icon: 'none'});
  };

  const onBodyClick = () => {
    showToast({title: '点击了卡片Body区域', icon: 'none'});
  };

  return (
    <Space direction={'vertical'} size={30} style={{backgroundColor: '#ddd', padding: '20px', boxSizing: 'border-box'}}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <Card title="我是title">我是Card内容</Card>
      </Space>
      <Space direction={'vertical'}>
        <View>没有卡片标题</View>
        <Card>我是Card内容</Card>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义卡片样式</View>
        <Card
          headerStyle={{color: '#1677ff'}}
          title='卡片标题'
        >
          <View style={styles.customBody}>我是Card内容</View>
        </Card>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义卡片内容</View>
        <Card
          title={<View><Icon className={"adm-component"} type="informationCircleFill"/>卡片标题</View>}
          extra={<Icon className={"adm-component"} type="right-outline"/>}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
        >
          <View style={styles.content}>我是Card内容</View>
          <View style={styles.footer} onClick={e => e.stopPropagation()}>
            <Button
              color='primary'
              onClick={() => {
                showToast({title: '点击了底部按钮', icon: 'none'});
              }}
            >
              底部按钮
            </Button>
          </View>
        </Card>
      </Space>
    </Space>
  );
};

render(<BaseExample/>);

```

- CheckList 可勾选列表
- CheckList 可勾选列表
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {View} = taroComponent;
const {CheckList, Space, Icon} = antdTaro;

const options = [
  {label: 'A', value: 'A'},
  {label: 'B', value: 'B'},
  {label: 'C', value: 'C', disabled: true},
  {label: 'D', value: 'D', readOnly: true},
  {label: 'E', value: 'E'},
];

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <CheckList options={options} />
    </Space>
    <Space direction={'vertical'}>
      <View>多选</View>
      <CheckList multiple options={options.slice(0, 2)} />
    </Space>
    <Space direction={'vertical'}>
      <View>自定义选中图标</View>
      <CheckList options={options} defaultValue={['B']} activeIcon={<Icon className={"adm-component"} type="checkCircleFill"/>}/>
    </Space>
    <Space direction={'vertical'}>
      <View>整组只读</View>
      <CheckList options={options.slice(0, 2)} defaultValue={['B']} readOnly/>
    </Space>
    <Space direction={'vertical'}>
      <View>整组禁用</View>
      <CheckList options={options.slice(0, 2)} defaultValue={['B']} disabled/>
    </Space>
  </Space>;
};

render(<BaseExample/>);

```

- Collapse 折叠面板
- Collapse 折叠面板
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Collapse, Space, Icon} = antdTaro;
const {View} = taroComponent;

const items = [{
  key: '1', title: '第一项', children: '第一项第一项第一项第一项第一项第一项第一项第一项'
}, {
  key: '2', title: '第二项', children: '第二项第二项第二项第二项第二项第二项第二项第二项'
}, {
  key: '3', title: '第三项', children: '第三项第三项第三项第三项第三项第三项第三项第三项第三项'
}];

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Collapse defaultActiveKey={['1']} items={items}/>
    </Space>
    <Space direction={'vertical'}>
      <View>手风琴模式</View>
      <Collapse accordion items={items}/>
    </Space>
    <Space direction={'vertical'}>
      <View>禁用</View>
      <Collapse accordion items={items.slice(0, 2).concat([Object.assign({}, items[2], {disabled: true})])}/>
    </Space>
    <Space direction={'vertical'}>
      <View>自定义折叠图标</View>
      <Collapse
        arrow={active => <Icon type={active ? "checkCircleFill" : 'closeCircleFill'} className="adm-component"/>}
        items={[
          items[0],
          Object.assign({}, items[1], {arrow: <Icon type='exclamationCircleFill' className="adm-component"/>}),
          Object.assign({}, items[2], {
            arrow: active => <Icon type={active ? "informationCircleFill" : 'clockCircleFill'}
                                   className="adm-component"/>
          }),
        ]}
      />
    </Space>
  </Space>;
};

render(<BaseExample/>);

```

- DatePicker 日期选择器
- DatePicker 日期选择器
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components),tarojsTaro(@tarojs/taro)

```jsx
const {Button, View} = taroComponent;
const {useState} = React;
const {DatePicker, Space} = antdTaro;
const {showToast} = tarojsTaro;

const BaseExample = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [value, setValue] = useState('');
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Button onClick={() => {
        setOpen(true);
      }}>打开</Button>
      <DatePicker
        title='时间选择'
        open={open}
        onOpenChange={setOpen}
        onChange={val => {
          showToast({icon: 'none', title: val.toDateString()})
        }}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>渲染所选值</View>
      <Space>
        <Button onClick={() => {
          setOpen2(true);
        }}>打开</Button>
        <View>{value}</View>
      </Space>
      <DatePicker
        open={open2}
        onOpenChange={setOpen2}
        onChange={val => setValue(val.toDateString())}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>控制选择精度</View>
      <Button onClick={() => {
        setOpen3(true);
      }}>年-月</Button>
      <DatePicker
        title='时间选择'
        open={open3}
        onOpenChange={setOpen3}
        precision='month'
        onChange={val => {
          showToast({icon: 'none', title: val.toDateString()})
        }}
      />
      <Button onClick={() => {
        setOpen4(true);
      }}>年-月-日-时-分</Button>
      <DatePicker
        title='时间选择'
        open={open4}
        onOpenChange={setOpen4}
        precision='minute'
        onChange={val => {
          showToast({icon: 'none', title: val.toDateString()})
        }}
      />
    </Space>
  </Space>;
};

render(<BaseExample/>);

```

- DateRangePicker 日期范围选择器
- DateRangePicker 日期范围选择器
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components),tarojsTaro(@tarojs/taro)

```jsx
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

```

- Divider 分隔线
- Divider 分隔线
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Divider, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础分割线</View>
        <Divider />
      </Space>
      <Space direction={'vertical'}>
        <View>带内容的分割线</View>
        <Divider>内容在中间</Divider>
        <Divider contentPosition='left'>左侧内容</Divider>
        <Divider contentPosition='right'>右侧内容</Divider>
      </Space>
      <Space direction={'vertical'}>
        <View>竖向分割线1</View>
        <Space>
          <View>Text1</View>
          <Divider direction={'vertical'} />
          <View>Text2</View>
          <Divider direction={'vertical'} />
          <View>Text3</View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义样式</View>
        <Divider
          style={{
            color: '#1677ff',
            borderColor: '#1677ff',
            borderStyle: 'dashed',
          }}
        >
          自定义样式
        </Divider>
      </Space>
    </Space>
  );
};

render(<BaseExample />);

```

- DotLoading 点状加载图标
- DotLoading 点状加载图标
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {DotLoading, Space, Button} = antdTaro;
const {View} = taroComponent;
const BaseExample = () => {
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>默认颜色 Loading</View>
        <DotLoading/>
        <View>主题色 Loading</View>
        <DotLoading color='primary'/>
        <View>白色 Loading</View>
        <View style={{backgroundColor: '#ddd'}}>
          <DotLoading color='white'/>
        </View>
      </Space>
      <Space direction={'vertical'}>
        <View>自定义颜色 Loading</View>
        <Space>
          <DotLoading color='#155ACF'/>
          <DotLoading color='#00b578'/>
          <DotLoading color='#ff8f1f'/>
          <DotLoading color='#ff3141'/>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>自动适配字号</View>
        <Space>
          <View style={{fontSize: 14}}><DotLoading/></View>
          <View style={{fontSize: 18}}><DotLoading/></View>
          <View style={{fontSize: 24}}><DotLoading/></View>
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <View>在 Button 中使用</View>
        <Space>
          <Button><DotLoading color='#ff3141'/></Button>
          <Button color={'primary'}><DotLoading /></Button>
        </Space>
      </Space>
    </Space>
  );
};

render(<BaseExample/>);

```

- Dropdown 下拉菜单
- Dropdown 下拉菜单
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Dropdown, Space, Icon} = antdTaro;
const {View} = taroComponent;

const items = [
  {key: 'apple', title: 'apple', children: 'apple'},
  {key: 'banana', title: 'banana', children: 'banana'},
  {key: 'orange', title: 'orange', children: 'orange'}
];

const BaseExample = () => {
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>一列</View>
        <Dropdown items={items.slice(0, 1)}/>
      </Space>
      <Space direction={'vertical'}>
        <View>两列</View>
        <Dropdown items={items.slice(0, 2)}/>
      </Space>
      <Space direction={'vertical'} closeOnMaskClick={false}>
        <View>三列</View>
        <Dropdown items={items}/>
      </Space>
      <Space direction={'vertical'} closeOnMaskClick={false}>
        <View>自定义箭头</View>
        <Dropdown
          arrow={<Icon className={"adm-component"} type="check-mark"/>}
          items={[...items.slice(0, 2), Object.assign({}, items[2], {arrow: <Icon className={"adm-component"} type="checkCircleFill"/>})]}
        />
      </Space>
    </Space>
  );
};

render(<BaseExample/>);

```

- Ellipsis 文本省略
- Ellipsis 文本省略
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {View, Text} = taroComponent;
const {Ellipsis, Space} = antdTaro;

const content = 'antd-taro 是一个基于@tarojs/components的高级组件库，它提供基础的UI交互组件，它旨在解决小程序应用中的复杂场景问题。Ellipsis是一个文本省略组件，展示空间不足时，隐去部分内容并用“...”替代。当文本内容长度或高度超过列宽或行高、图表中空间有限、文本内容无法完全显示、自适应调整时宽度变小时就可以考虑使用该组件。'

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <Text>单行省略</Text>
      <Ellipsis content={content} />
    </Space>
    <Space direction={'vertical'}>
      <Text>展开收起文本</Text>
      <Ellipsis expandText='展开文本' collapseText='收起文本' content={content} />
    </Space>
    <Space direction={'vertical'}>
      <Text>取消展开收起</Text>
      <Ellipsis showAction={false} content={content} />
    </Space>
    <Space direction={'vertical'}>
      <Text>默认展开</Text>
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
const {Empty, Space, Icon} = antdTaro;
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
      <Space direction={'vertical'}>
        <View>自定义样式</View>
        <Empty description={'暂无数据'} imageStyle={{ width: 128 }} />
      </Space>
      <Space direction={'vertical'}>
        <View>自定义图片</View>
        <Empty description={'暂无数据'} image={<Icon className={"adm-component"} type="check-mark" size={'64px'} color={'#ff6700'} />}/>
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
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Icon, Space} = antdTaro;
const {View} = taroComponent;

const BaseExample = ()=>{
  return (
    <Space direction={'vertical'}>
      <Space direction = {'vertical'}>
        <View>基础用法</View>
        <Space>
          <Icon type={'clockCircleFill'} className="adm-component" />
          <Icon type={'informationCircleFill'} className="adm-component" />
          <Icon type={'checkCircleFill'} className="adm-component" />
        </Space>
      </Space>
      <Space direction = {'vertical'}>
        <View>自定义尺寸</View>
        <Space>
          <Icon type={'clockCircleFill'} className="adm-component" size={'24px'} />
          <Icon type={'informationCircleFill'} className="adm-component" size={'32px'} />
          <Icon type={'checkCircleFill'} className="adm-component" size={'40px'} />
        </Space>
      </Space>
      <Space direction = {'vertical'}>
        <View>自定义颜色</View>
        <Space>
          <Icon type={'clockCircleFill'} className="adm-component" color={'#2db7f5'} />
          <Icon type={'informationCircleFill'} className="adm-component" color={'#87d068'} />
          <Icon type={'checkCircleFill'} className="adm-component" color={'#ff6430'} />
        </Space>
      </Space>
    </Space>
  );
};

render(<BaseExample />);

```

- Input 输入框
- Input 输入框
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
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

```

- InputNumber 数字输入框
- InputNumber 数字输入框
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
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

```

- List 列表
- List 列表
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {List,Switch,Icon} = antdTaro;
const {View} = taroComponent;
const BaseExample = () => {
    return <View style={{ background: '#eee' }}>
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
    </View>;
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
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {Popup, Button, Space} = antdTaro;
const {useState} = React;
const {Text} = taroComponent;

const BaseExample = () => {
  const [open, setOpen] = useState('');
  const [open2, setOpen2] = useState('');
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <Text>基础用法</Text>
        <Space wrap>
          {['center', 'top', 'bottom', 'left', 'right'].map((position) => {
            return <>
              <Button onClick={() => {
                setOpen(position);
              }}>从{position}打开</Button>
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
          })}
        </Space>
      </Space>
      <Space direction={'vertical'}>
        <Text>显示关闭按钮</Text>
        <Button onClick={() => {
          setOpen2('bottom');
        }}>从底部打开</Button>
        <Popup showCloseButton open={open2 === 'bottom'} onOpenChange={(open) => {
          if (open) {
            setOpen2('bottom');
          } else {
            setOpen2('');
          }
        }} position={'bottom'}>
          popup窗口
        </Popup>
      </Space>
    </Space>
  );
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

- ScrollHeader 滚动标头
- ScrollHeader 滚动标头
- antdTaro(@kne/antd-taro),taroComponent(@tarojs/components)

```jsx
const {View,Text} = taroComponent;
const {ScrollHeader, Space, Icon} = antdTaro;
const {useId, useState} = React;

const ScrollHeaderComponent = (props) => {
  const containerId = useId().replace(/:/g, '_');
  const [activeKey, setActiveKey] = useState('0');
  return (
    <ScrollHeader className={`${containerId}-scroll-header-scroll-view`} {...props}>
      {
        ({scrollTo}) => Array(10).fill('').map((_item, index) => (
          <View
            key={`index-${index}`}
            id={`${containerId}_${index}`}
            style={Object.assign({padding: '20px', textAlign: 'center', display: 'inline-block'}, index.toString() === activeKey ? {color: '#ff6700', border: '1px solid #ff6700'} : {})}
            onClick={() => {
              setActiveKey(index.toString());
              scrollTo(`${containerId}_${index.toString()}`);
            }}
          >
            View-{index}
          </View>
        ))
      }
    </ScrollHeader>
  );
};

const BaseExample = () => {
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <Text>基础用法</Text>
      <ScrollHeaderComponent />
    </Space>
    <Space direction={'vertical'}>
      <Text>不展示更多按钮</Text>
      <ScrollHeaderComponent showMore={false} />
    </Space>
    <Space direction={'vertical'}>
      <Text>自定义更多按钮</Text>
      <ScrollHeaderComponent showMore icon={<Icon className={"adm-component"} type="right-outline"/>} />
    </Space>
    <Space direction={'vertical'}>
      <Text>默认打开更多选项</Text>
      <ScrollHeaderComponent defaultOpen/>
    </Space>
  </Space>;
};

render(<BaseExample/>);

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
const {Steps, Space} = antdTaro;
const {Text} = taroComponent;

const items = [
  {title: '第一步', description: '完成时间：2020-12-01 12:30'},
  {title: '第二步', description: '完成时间：2020-12-01 12:30'},
  {title: '第三步', description: '完成时间：2020-12-01 12:30'},
  {title: '第四步', description: '完成时间：2020-12-01 12:30'}
];

const BaseExample = () => {
  return (
    <Space direction='vertical'>
      <Space direction='vertical'>
        <Text>横向步骤条</Text>
        <Steps current={2} items={items}/>
      </Space>
      <Space direction='vertical'>
        <Text>横向步骤条失败</Text>
        <Steps current={2} items={[...items.slice(0, 3), Object.assign({}, items[3], {status: 'error'})]}/>
      </Space>
      <Space direction='vertical'>
        <Text>纵向步骤条</Text>
        <Steps direction='vertical' current={2} items={items}/>
      </Space>
      <Space direction='vertical'>
        <Text>纵向步骤条失败</Text>
        <Steps direction='vertical' current={2} items={[...items.slice(0, 3), Object.assign({}, items[3], {status: 'error'})]}/>
      </Space>
    </Space>
  );
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
      <View>带有路由</View>
      <TabBar items={tabsPath}/>
    </Space>
    <Space direction={'vertical'}>
      <View>徽标</View>
      <TabBar items={tabsBadge} style={{'--tab-bar-padding-top': '4px'}}/>
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
const {Tabs, Space, Icon, Badge} = antdTaro;
const {View} = taroComponent;
const {useState} = React;
const BaseExample = () => {
  const [activeKey, setActiveKey] = useState('tab2');
  return <Space direction={'vertical'} size={30}>
    <Space direction={'vertical'}>
      <View>基础用法</View>
      <Tabs swiperOpen items={[{
        key: 'tab1', title: 'tab1', children: <View>
          哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
        </View>
      }, {key: 'tab2', title: 'tab2', children: <>tab2</>}]}/>
    </Space>
    <Space direction={'vertical'}>
      <View>没有内容区</View>
      <Tabs.Header items={[{key: 'tab1', title: 'tab1'}, {key: 'tab2', title: 'tab2'}]}/>
    </Space>
    <Space direction={'vertical'}>
      <View>禁用状态</View>
      <Tabs.Header items={[{key: 'tab1', title: 'tab1'}, {key: 'tab2', title: 'tab2', disabled: true}]}/>
    </Space>
    <Space direction={'vertical'}>
      <View>超长自动滚动</View>
      <Tabs
        swiperOpen
        items={[
          {key: 'tab1', title: '超长自动滚动tab1', children: <>tab1</>},
          {key: 'tab2', title: '超长自动滚动tab2', children: <>tab2</>},
          {key: 'tab3', title: '超长自动滚动tab3', children: <>tab3</>},
          {key: 'tab4', title: '超长自动滚动tab4', children: <>tab4</>},
        ]}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>默认选中值</View>
      <Tabs.Header
        defaultActiveKey={activeKey}
        onChange={setActiveKey}
        items={[
          {key: 'tab1', title: '超长自动滚动tab1', children: <>tab1</>},
          {key: 'tab2', title: '超长自动滚动tab2', children: <>tab2</>},
          {key: 'tab3', title: '超长自动滚动tab3', children: <>tab3</>},
          {key: 'tab4', title: '超长自动滚动tab4', children: <>tab4</>},
        ]}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>自定义拓展图标</View>
      <Tabs
        showMore
        moreIcon={<Icon className={"adm-component"} type="right-outline"/>}
        items={[
          {key: 'tab1', title: '超长自动滚动tab1', children: <>tab1</>},
          {key: 'tab2', title: '超长自动滚动tab2', children: <>tab2</>},
          {key: 'tab3', title: '超长自动滚动tab3', children: <>tab3</>},
          {key: 'tab4', title: '超长自动滚动tab4', children: <>tab4</>},
        ]}
      />
    </Space>
    <Space direction={'vertical'}>
      <View>搭配 Badge 使用</View>
      <Tabs
        items={[
          {key: 'tab1', title: 'tab1', children: <>tab1</>},
          {key: 'tab2', title: 'tab2', children: <>tab2</>},
          {key: 'tab3', title: 'tab3', children: <>tab3</>},
          {key: 'tab4', title: <Badge content={1}>tab4</Badge>, children: <>tab4</>},
        ]}
      />
    </Space>
  </Space>;
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

### Avatar 头像

#### 属性

| 属性名  | 说明                           | 类型     | 默认值 |
|------|------------------------------|--------|-----|
| src  | 头像的图片地址                      | string | -   |
| size | 大小，宽度和高度，等效于设置 --size CSS 变量 | number | 48  |

#### CSS 变量

| 属性名             | 说明       | 默认值  | 全局变量                       |
|-----------------|----------|------|----------------------------|
| --border-radius | 圆角       | 50%  | --adm-avatar-border-radius |
| --size          | 大小，宽度和高度 | 48px | --adm-avatar-size          |

### Badge 徽标

#### 属性

| 属性名              | 说明                                                         | 类型                                   | 默认值   |
|------------------|------------------------------------------------------------|--------------------------------------|-------|
| bordered         | 是否增加描边                                                     | boolean                              | false |
| color            | 徽标背景色，等效于设置 --color CSS 变量                                 | string                               | -     |
| content          | 徽标内容：如果传 null undefined '' 或不传，则不显示徽标；如果传 Badge.dot，会显示小红点 | React.ReactNode  \| typeof Badge.dot | -     |
| wrapperClassName | Badge wrap 自定义类名                                           | string                               | -     |
| wrapperStyle     | Badge wrap 自定义样式                                           | React.CSSProperties                  | -     |

#### CSS 变量

| 属性名     | 说明            | 默认值     | 全局变量              |
|---------|---------------|---------|-------------------|
| --color | 徽标背景色         | #ff411c | --adm-badge-color |
| --right | 相对于最右边，向左的偏移量 | 0       | -                 |
| --top   | 相对于最上边，向下的偏移量 | 0       | -                 |

### Button 按钮

#### 属性

| 属性名         | 说明                                                     | 类型                                                           | 默认值                                 |
|-------------|--------------------------------------------------------|--------------------------------------------------------------|-------------------------------------|
| block       | 是否是块级元素                                                | boolean                                                      | false                               |
| color       | 按钮的颜色                                                  | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' | 'default'                           |
| disabled    | 是否禁用                                                   | boolean                                                      | false                               |
| fill        | 填充模式                                                   | 'solid' \| 'outline' \| 'none'                               | 'solid'                             |
| loading     | 是否处于加载状态，'auto' 模式会监听 onClick 的 Promise 状态自动更新 loading | boolean \| 'auto'                                            | false                               |
| loadingIcon | 加载状态下的 icon 图标                                         | ReactNode                                                    | <DotLoading color='currentColor' /> |
| loadingText | 加载状态下额外展示的文字                                           | string                                                       | -                                   |
| shape       | 按钮的形状                                                  | 'default' \| 'rounded' \| 'rectangular'                      | 	'default'                          |
| size        | 大小                                                     | 'mini' \| 'small' \| 'middle' \| 'large'                     | 	'middle'                           |
| type        | 原生 button 元素的 type 属性                                  | 'submit' \| 'reset' \| 'button'                              | 	'button'                           |
| onClick     | 点击事件                                                   | (event: React.MouseEvent) => void \| Promise                 | -                                   |

***此外，还支持原生 button 元素的以下属性：onMouseDown onMouseUp onTouchStart onTouchEnd。***

#### CSS 变量

| 属性名                | 说明   | 默认值                                 | 全局变量                          |
|--------------------|------|-------------------------------------|-------------------------------|
| --background-color | 背景颜色 | var(--adm-color-background) #ffffff | --adm-button-background-color |
| --border-color     | 边框颜色 | var(--adm-color-border) #f1f1f1     | --adm-button-border-color     |
| --border-radius    | 圆角大小 | 8px                                 | --adm-button-border-radius    |
| --border-style     | 边框样式 | solid                               | --adm-button-border-style     |
| --border-width     | 边框样式 | 2px                                 | --adm-button-border-width     |
| --text-color       | 文字颜色 | var(--adm-color-text) '#333333'     | --adm-button-text-color       |

### Card 卡片

#### 属性

| 属性名             | 说明            | 类型                                | 默认值 |
|-----------------|---------------|-----------------------------------|-----|
| bodyClassName   | body 自定义类名    | string                            | -   |
| bodyStyle       | body 自定义样式    | React.CSSProperties               | -   |
| extra           | header 右边区域   | ReactNode                         | -   |
| headerClassName | header 自定义类名  | string                            | -   |
| headerStyle     | header 自定义样式  | React.CSSProperties               | -   |
| onBodyClick     | body 区域点击事件   | (event: React.MouseEvent) => void | -   |
| onClick         | 卡片点击事件        | (event: React.MouseEvent) => void | -   |
| onHeaderClick   | header 区域点击事件 | (event: React.MouseEvent) => void | -   |
| title           | header 左边区域   | ReactNode                         | -   |

### CheckList 可勾选列表

#### 属性

| 属性名          | 说明     | 类型                             | 默认值              |
|--------------|--------|--------------------------------|------------------|
| activeIcon   | 选中图标   | ReactNode                      | <CheckOutline /> |
| extra        | 列表右侧区域 | (active: boolean) => ReactNode | -                |
| defaultValue | 默认项    | string[]                       | []               |
| disabled     | 是否禁用   | boolean                        | false            |
| multiple     | 是否允许多选 | boolean                        | false            |
| onChange     | 选项改变时触 | (value: string[]) => void      | false            |
| readOnly     | 是否只读   | boolean                        | false            |
| value        | 选中项    | string[]                       | []               |

此外，还支持 List 的 mode 属性

### CheckListItem

#### 属性

| 属性名      | 说明   | 类型       | 默认值   |
|----------|------|----------|-------|
| disabled | 是否禁用 | boolean  | false |
| readOnly | 是否只读 | boolean  | false |
| value    | 选项值  | string[] | []    |

#### CSS 变量

***同 List.Item***

| 属性名                       | 说明                   | 默认值                               |
|---------------------------|----------------------|-----------------------------------|
| --active-background-color | 点击时的背景颜色             | var(--adm-color-border)           |
| --align-items             | 列表项的 align-item      | center                            |
| --border-bottom           | 列表容器底部的边框样式          | solid 2px var(--adm-color-border) |
| --border-inner            | 列表项底部的边框样式           | solid 2px var(--adm-color-border) |
| --border-top              | 列表容器顶部的边框样式          | solid 2px var(--adm-color-border) |
| --extra-max-width         | extra 部分的最大宽度        | 70%                               |
| --font-size               | Body 内容的字体大小         | var(--adm-font-size-9) 34px       |
| --header-font-size        | 头部的字体大小              | var(--adm-font-size-7) 30px       |
| --padding-left            | 列表项和列表头部左侧的 padding  | 24px                              |
| --padding-right           | 列表项和列表头部右侧的 padding  | 24px                              |
| --prefix-padding-right    | prefix 部分的右侧 padding | 24px                              |
| --prefix-width            | prefix 部分的宽度         | auto                              |

### Collapse 折叠面板

#### 属性

| 属性名              | 说明                                               | 类型                                                                                  | 默认值                                          |
|------------------|--------------------------------------------------|-------------------------------------------------------------------------------------|----------------------------------------------|
| accordion        | 是否开启手风琴模式                                        | boolean                                                                             | false                                        |
| activeKey        | 当前展开面板的 key                                      | 手风琴模式：string \| null<br/> 非手风琴模式：string[]                                           | -                                            |
| arrow            | 自定义箭头，如果是 ReactNode，那么 antd-mobile 会自动为你增加旋转动画效果 | ReactNode                                                                           | ((active: boolean) => React.ReactNode) \| [] | -|
| defaultActiveKey | 默认展开面板的 key                                      | 手风琴模式：string \| null<br/> 非手风琴模式：string[] \| []                                     | -                                            |
| onChange         | 切换面板时触发                                          | 手风琴模式：(activeKey: string \| null) => void<br/> 非手风琴模式：(activeKey: string[]) => void | -                                            |

#### Collapse.Panel

#### 属性

| 属性名            | 说明              | 类型                                                  | 默认值   |
|----------------|-----------------|-----------------------------------------------------|-------|
| arrow          | 自定义箭头           | ReactNode \| ((active: boolean) => React.ReactNode) | -     |
| destroyOnClose | 不可见时是否销毁 DOM 结构 | boolean                                             | false |
| disabled       | 是否为禁用状态         | boolean                                             | false |
| forceRender    | 被隐藏时是否渲染 DOM 结构 | boolean                                             | false |
| key            | 唯一标识符           | string                                              | -     |
| onClick        | 标题栏的点击事件        | (event: React.MouseEvent) => void                   | -     |
| title          | 标题栏左侧内容         | ReactNode                                           | -     |

### DatePicker日期选择器

#### 属性

| 属性名          | 说明                                                            | 类型                                                    | 默认值                    |
|--------------|---------------------------------------------------------------|-------------------------------------------------------|------------------------|
| defaultValue | 默认选中值                                                         | PickerDate                                            | new Date() 今天          |
| max          | 最大值                                                           | PickerDate                                            | new Date() 今天          |
| min          | 最小值                                                           | PickerDate                                            | new Date('1949-10-01') |
| onChange     | 确认时触发                                                         | (value: PickerDate) => void                           | -                      |
| precision    | 精度                                                            | 'month' \| 'day' \| 'hour' \| 'minute'                | -                      |
| renderLabel  | 自定义渲染每列展示的内容。其中 type 参数为 precision 中的任意值或 now，data 参数为默认渲染的数字 | (type: Precision \| 'now', data: number) => ReactNode | -                      |
| value        | 选中值                                                           | PickerDate                                            | -                      |

此外还支持 Picker 的以下属性：onCancel onClose confirmText cancelText title loading loadingContent。

### DateRangePicker 日期范围选择器

#### 属性

| 属性名          | 说明                                                            | 类型                                                    | 默认值                         |
|--------------|---------------------------------------------------------------|-------------------------------------------------------|-----------------------------|
| defaultValue | 默认选中值                                                         | [PickerDate, PickerDate]                              | [new Date(), new Date()] 今天 |
| max          | 最大值                                                           | PickerDate                                            | new Date() 今天               |
| min          | 最小值                                                           | PickerDate                                            | new Date('1949-10-01')      |
| onChange     | 确认时触发                                                         | (value: PickerDate) => void                           | -                           |
| precision    | 精度                                                            | 'month' \| 'day' \| 'hour' \| 'minute'                | -                           |
| renderLabel  | 自定义渲染每列展示的内容。其中 type 参数为 precision 中的任意值或 now，data 参数为默认渲染的数字 | (type: Precision \| 'now', data: number) => ReactNode | -                           |
| value        | 选中值                                                           | [PickerDate, PickerDate]                              | -                           |

此外还支持 Picker 的以下属性：onCancel onClose confirmText cancelText title loading loadingContent。

### DotLoading 点状加载图标

#### 属性

| 属性名   | 说明                          | 类型                                          | 默认值       |
|-------|-----------------------------|---------------------------------------------|-----------|
| color | 线条颜色，等效于手动设置 --color CSS 变量 | 'default' \| 'primary' \| 'white' \| string | 'default' |

DotLoading 的大小会自动根据当前的文字大小进行调整。

#### CSS 变量

| 属性名     | 说明   | 默认值                   |
|---------|------|-----------------------|
| --color | 线条颜色 | var(--adm-color-weak) |
| --size  | 大小   | 32px                  |

### Dropdown 下拉菜单

#### 属性

| 属性名      | 说明              | 类型                                 | 默认值 |
|----------|-----------------|------------------------------------|-----|
| arrow    | 自定义 arrow       | React.ReactNode                    | -   |
| onChange | activeKey 变化时触发 | (activeKey: string \| null)=> void | -   |
| items    | 列               | DropdownItem[]                     | -   |

#### Ref

| 属性    | 说明     | 类型         |
|-------|--------|------------|
| close | 关闭下拉菜单 | () => void |

### DropdownItem

#### 属性

| 属性名       | 说明        | 类型                                | 默认值   |
|-----------|-----------|-----------------------------------|-------|
| arrow     | 自定义 arrow | React.ReactNode                   | -     |
| highlight | 高亮        | boolean                           | false |
| key       | 唯一值       | string                            | -     |
| title     | 标题        | ReactNode                         | -     |
| onClick   | 点击事件      | (event: React.MouseEvent) => void | -     |

### Ellipsis 文本省略

#### 属性

| 属性名             | 说明         | 类型              | 默认值   |
|-----------------|------------|-----------------|-------|
| collapseText    | 收起操作的文案    | React.ReactNode | '收起'  |
| content         | 文本内容       | string          | -     |
| expandText      | 展开操作的文案    | ReactNode       | '展开'  |
| rows            | 展示几行       | number          | 1     |
| defaultExpanded | 是否默认展开     | boolean         | false |
| showAction      | 是否显示展开收起操作 | boolean         | false |

### Empty 空状态

#### 属性

| 属性名         | 说明                       | 类型            | 默认值 |
|-------------|--------------------------|---------------|-----|
| description | 图片下方的描述文字                | ReactNode     | -   |
| image       | 自定义图片，为 string 时表示图片 URL | ReactNode     | -   |
| imageStyle  | 图片样式                     | CSSProperties | -   |

### Grid 栅格

#### 属性

| 属性名     | 说明      | 类型                                                        | 默认值 |
|---------|---------|-----------------------------------------------------------|-----|
| columns | 列数      | number                                                    | -   |
| gap     | 格子之间的间距 | number \| string \| \[number \| string, number \| string] | 0   |

#### CSS 变量

| 属性名              | 说明        | 默认值        |
|------------------|-----------|------------|
| --gap            | 间距大小      | 0          |
| --gap-horizontal | 水平方向的间距大小 | var(--gap) |
| --gap-vertical   | 垂直方向的间距大小 | var(--gap) |

### Grid.Item

#### 属性

| 属性名     | 说明   | 类型                                | 默认值 |
|---------|------|-----------------------------------|-----|
| onClick | 点击事件 | (event: React.MouseEvent) => void | -   |
| span    | 跨度   | number                            | 1   |

### Icon 图标

#### 属性

| 属性名        | 说明                       | 类型            | 默认值 |
|------------|--------------------------|---------------|-----|
| type       | 图标类型                     | ReactNode     | -   |
| image      | 自定义图片，为 string 时表示图片 URL | ReactNode     | -   |
| imageStyle | 图片样式                     | CSSProperties | -   |

### Input 输入框

#### 属性

| 属性名                    | 说明                                                                                        | 类型                                                       | 默认值                 |
|------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------|---------------------|
| value                  | 输入框的初始内容                                                                                  | string                                                   | -                   |
| type                   | input 的类型                                                                                 | "number" \| "text" \| "idcard" \| "digit"                | "text"              |
| password               | 是否是密码类型                                                                                   | boolean                                                  | -                   |
| placeholder            | 输入框为空时占位符                                                                                 | string                                                   | -                   |
| placeholderStyle       | 指定 placeholder 的样式                                                                        | string                                                   | -                   |
| placeholderClass       | 指定 placeholder 的样式类                                                                       | string                                                   | "input-placeholder" |
| disabled               | 是否禁用                                                                                      | boolean                                                  | false               |
| maxLength              | 最大输入长度，设置为 -1 的时候不限制最大长度                                                                  | number                                                   | 140                 |
| cursorSpacing          | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离                     | number                                                   | 0                   |
| autoFocus              | (即将废弃，请直接使用 focus )自动聚焦，拉起键盘                                                              | boolean                                                  | false               |
| focus                  | 获取焦点                                                                                      | boolean                                                  | false               |
| confirmType            | 设置键盘右下角按钮的文字                                                                              | "send" \| "search" \| "next" \| "go" \| "done"           | done                |
| confirmHold            | 点击键盘右下角按钮时是否保持键盘不收起                                                                       | boolean                                                  | false               |
| cursor                 | 指定focus时的光标位置                                                                             | number                                                   |                     |
| selectionStart         | 光标起始位置，自动聚集时有效，需与selection-end搭配使用                                                        | number                                                   | -1                  |
| selectionEnd           | 光标结束位置，自动聚集时有效，需与selection-start搭配使用                                                      | number                                                   | -1                  |
| adjustPosition         | 键盘弹起时，是否自动上推页面                                                                            | boolean                                                  | true                |
| holdKeyboard           | focus 时，点击页面的时候不收起键盘                                                                      | boolean                                                  | false               |
| onInput                | 当键盘输入时，触发input事件，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。 | BaseEventOrigFunction: inputEventDetail                  | -                   |
| onFocus                | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度                                    | BaseEventOrigFunction: inputForceEventDetail             | -                   |
| onBlur                 | 输入框失去焦点时触发 event.detail = {value: value}                                                  | BaseEventOrigFunction: inputValueEventDetail             | -                   |
| onConfirm              | 点击完成按钮时触发 event.detail = {value: value}                                                   | BaseEventOrigFunction: inputValueEventDetail             | -                   |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件 event.detail = {height: height, duration:                                | BaseEventOrigFunction: onKeyboardHeightChangeEventDetail | -                   |

#### inputEventDetail

| 属性名     | 类型     | 说明   |
|---------|--------|------|
| value   | string | 输入值  |
| cursor  | number | 光标位置 |
| keyCode | number | 键值   |

#### inputForceEventDetail

| 属性名    | 类型     | 说明   |
|--------|--------|------|
| value  | string | 输入值  |
| height | number | 键盘高度 |

#### inputValueEventDetail

| 属性名   | 类型     | 说明  |
|-------|--------|-----|
| value | string | 输入值 |

#### onKeyboardHeightChangeEventDetail

| 属性名      | 类型     | 说明   |
|----------|--------|------|
| height   | number | 键盘高度 |
| duration | number | 持续时间 |

#### Ref

| 属性名   | 类型         | 说明       |
|-------|------------|----------|
| blur  | () => void | 让输入框失去焦点 |
| clear | () => void | 清空输入内容   |
| focus | () => void | 让输入框获得焦点 |

### List 列表

#### 属性

| 属性名    | 说明          | 类型                  | 默认值       |
|--------|-------------|---------------------|-----------|
| header | 标题内容        | ReactNode           | -         |
| mode   | 支持默认和卡片两种模式 | 'default' \| 'card' | 'default' |

#### CSS 变量

| 属性名                       | 说明                    | 默认值                               |
|---------------------------|-----------------------|-----------------------------------|
| --active-background-color | 点击时的背景颜色              | var(--adm-border-color)           |
| --align-items             | 列表项的 align-item       | center                            |
| --border-bottom           | 列表容器底部的边框样式           | solid 1px var(--adm-border-color) |
| --border-inner            | 列表项底部的边框样式            | solid 1px var(--adm-border-color) |
| --border-top              | 列表容器顶部的边框样式           | solid 1px var(--adm-border-color) |
| --extra-max-width         | extra 部分的最大宽度         | 70%                               |
| --font-size               | Body 内容的字体大小          | 34px                              |
| --header-font-size        | 头部的字体大小               | 30px                              |
| --padding-left            | 列表项和列表头部左侧的 padding	  | 24px                              |
| --padding-right           | 列表项和列表头部右侧的 padding	  | 24px                              |
| --prefix-padding-right    | prefix 部分的右侧 padding	 | 24px                              |
| --prefix-width            | prefix 部分的宽度	         | auto                              |

### List.Item

#### 属性

| 属性名         | 说明                                  | 类型                            | 默认值                                  |
|-------------|-------------------------------------|-------------------------------|--------------------------------------|
| arrow       | 右侧是否显示箭头图标，也支持传入 ReactNode 来自定义图标   | boolean \| ReactNode          | 默认和 clickable 的值保持一致                 |
| children    | 列表项中间的主内容区域                         | ReactNode                     | -                                    |
| clickable   | 是否显示点击效果                            | boolean                       | 当 onClick 属性存在时，默认为 true，否则默认为 false |
| description | 列表项中间下部的描述区域                        | ReactNode                     | -                                    |
| disabled    | 是否禁用                                | boolean                       | false                                |
| extra       | 列表项右侧区域                             | ReactNode                     | -                                    |
| onClick     | 列表项的点击事件，当设置了 onClick 属性时，列表项会有点击效果 | (e: React.MouseEvent) => void | -                                    |
| prefix      | 列表项左侧区域                             | ReactNode                     | -                                    |
| title       | 列表项中间上部的标题区域                        | ReactNode                     | -                                    |

#### CSS 变量

支持 List 中的 --prefix-width、--active-background-color、--align-items

### NavBar 导航栏

#### 属性

| 属性名       | 说明                                  | 类型                   | 默认值        |
|-----------|-------------------------------------|----------------------|------------|
| back      | 返回区域的文字，如果为 null 的话，backArrow 也不会渲染 | ReactNode \| null    | ''         |
| backArrow | 支持默认和卡片两种模式                         | boolean \| ReactNode | true       |
| children  | 标题                                  | ReactNode            | ReactNode  |
| left      | 左侧内容，渲染在返回区域的右侧                     | ReactNode            | -          |
| onBack    | 点击返回区域后的回调                          | ReactNode            | () => void |
| right     | 右侧内容                                | ReactNode            | ReactNode  |

#### CSS 变量

| 属性名             | 说明     | 默认值  |
|-----------------|--------|------|
| --border-bottom | 导航栏下边框 | none |
| --height        | 导航栏高度  | 90px |

### Picker 选择器

#### 属性

| 属性名            | 说明               | 类型                                                           | 默认值                  |
|----------------|------------------|--------------------------------------------------------------|----------------------|
| cancelText     | 取消按钮的文字          | ReactNode                                                    | '取消'                 |
| columns        | 配置每一列的选项         | PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[]) | -                    |
| confirmText    | 确定按钮的文字          | ReactNode                                                    | '确定'                 |
| defaultValue   | 默认选中项            | PickerValue[]                                                | []                   |
| onCancel       | 取消时触发            | () => void                                                   | -                    |
| onClose        | 确认和取消时都会触发关闭事件   | () => void                                                   | -                    |
| popupClassName | Popup 弹层容器的自定义类名 | string                                                       | -                    |
| popupStyle     | Popup 弹层容器的自定义样式 | React.CSSProperties                                          | -                    |
| renderLabel    | 自定义渲染每列展示的内容     | (item: PickerColumnItem) => ReactNode                        | (item) => item.label |
| title          | 标题               | PickerValue[]                                                | -                    |
| value          | 选中项              | PickerValue[]                                                | -                    |
| open           | 是否显示选择器          | boolean                                                      | false                |
| onOpenChange   | 确认时触发            | (value: boolean) => void                                     | -                    |
| loading        | 是否处于加载状态         | boolean                                                      | boolean              |

***此外还支持 Popup 的以下属性：getContainer onClick stopPropagation***

***请留意，columns 属性的类型是二级数组，第一级对应的是每一列，而第二级对应的是某一列中的每一个选项。因此，下面的这种写法是错误的：
***

```jsx
<Picker
  columns={[
    {label: 'Foo', value: 'foo'},
    {label: 'Bar', value: 'bar'},
  ]}
/>
```

***需要写成：***

```jsx
<Picker
  columns={[
    [
      {label: 'Foo', value: 'foo'},
      {label: 'Bar', value: 'bar'},
    ]
  ]}
/>
```

#### CSS 变量

| 属性名                       | 说明                       | 默认值  |
|---------------------------|--------------------------|------|
| --header-button-font-size | 确定和取消按钮的字号               | 30px |
| --item-font-size          | 选择项的字号                   | 32px |
| --item-height             | 选项的高度，仅支持 px rem 和 vw 单位 | 34px |
| --title-font-size         | 标题的字号                    | 30px |

### Popup 弹出层

#### 属性

| 属性名              | 说明              | 类型                                     | 默认值       |
|------------------|-----------------|----------------------------------------|-----------|
| afterClose       | 完全关闭后触发         | () => void                             | -         |
| afterShow        | 完全展示后触发         | () => void                             | -         |
| bodyClassName    | 内容区域类名          | string                                 | -         |
| bodyStyle        | 内容区域样式          | React.CSSProperties                    | -         |
| className        | 容器类名            | string                                 | -         |
| closeOnMaskClick | 点击背景蒙层后是否关闭     | boolean                                | false     |
| mask             | 是否展示蒙层          | boolean                                | true      |
| maskClassName    | 遮罩类名            | string                                 | -         |
| onClick          | 点击时触发，常用于阻止事件冒泡 | (event: React.MouseEvent) => void      | -         |
| onClose          | 关闭时触发           | () => void                             | -         |
| onMaskClick      | 点击蒙层触发          | (event: React.MouseEvent) => void      | -         |
| position         | 指定弹出的位置         | 'bottom' \| 'top' \| 'left' \| 'right' | 'bottom'  |
| showCloseButton  | 是否显示关闭按钮        | boolean                                | false     |
| stopPropagation  | 阻止某些事件的冒泡       | PropagationEvent[]                     | ['click'] |
| style            | 容器样式            | React.CSSProperties                    | -         |
| open             | 是否可见            | boolean                                | false     |

#### CSS 变量

| 属性名       | 说明           | 默认值  | 全局变量                |
|-----------|--------------|------|---------------------|
| --z-index | 	元素的 z-index | 1000 | --adm-popup-z-index |

### Result 结果

#### 属性

| 属性名         | 说明       | 类型                                                       | 默认值       |
|-------------|----------|----------------------------------------------------------|-----------|
| description | 描述       | ReactNode                                                | -         |
| icon        | 自定义 icon | ReactNode                                                | ReactNode |
| status      | 状态类型     | 'success' \| 'error' \| 'info' \| 'waiting' \| 'warning' | 'info'    |
| title       | 标题       | ReactNode                                                | -         |

### SafeArea 安全区

#### 属性

| 属性名      | 说明     | 类型    | 默认值      |
|----------|--------|-------|----------|
| position | 安全区的位置 | 'top' | 'bottom' |

#### CSS 变量

| 属性名        | 说明     | 默认值 | 全局变量                     |
|------------|--------|-----|--------------------------|
| --multiple | 	显示的倍数 | 1   | --adm-safe-area-multiple |

### ScrollHeader 滚动标头

#### 属性

| 属性名         | 说明       | 类型        | 默认值                                       |
|-------------|----------|-----------|-------------------------------------------|
| showMore    | 是否展示更多按钮 | boolean   | true                                      |
| icon        | 更多按钮     | ReactNode | Icon type="gengduo2" className="iconfont" |
| defaultOpen | 默认打开更多选项 | boolean   | false                                     |

### SearchBar 搜索框

#### 属性

| 属性名                    | 说明                                                       | 类型                                                      | 默认值                                                 |
|------------------------|----------------------------------------------------------|---------------------------------------------------------|-----------------------------------------------------|
| searchText             | 搜索按钮的文案                                                  | string                                                  | '搜索'                                                |
| clearOnCancel          | 点击取消按钮后是否清空输入框                                           | boolean                                                 | true                                                |
| clearable              | 是否启用清除图标，点击清除图标后会清空输入框                                   | boolean                                                 | true                                                |
| icon                   | 图标                                                       | ReactNode                                               | Icon type="searchOutline" className="adm-component" |
| maxLength              | 输入的最大字符数                                                 | number                                                  | -                                                   |
| onBlur                 | 输入框失去焦点时触发                                               | (e: React.FocusEvent) => void                           | -                                                   |
| onChange               | 输入框内容变化时触发                                               | (value: string) => void                                 | -                                                   |
| onClear                | 点击清除按钮后触发                                                | () => void                                              | -                                                   |
| onFocus                | 输入框获得焦点时触发                                               | (e: React.FocusEvent) => void                           | -                                                   |
| onSearch               | 输入框回车时触发或点击搜索按钮时触发                                       | (value: string) => void                                 | -                                                   |
| onlyShowClearWhenFocus | 如果 true，那么只有输入框聚焦时才会显示清除按钮；如果为 false，那么输入框失去焦点后依旧会显示清除按钮 | boolean                                                 | false                                               |
| placeholder            | 提示文本                                                     | string                                                  | -                                                   |
| showSearchButton       | 是否在搜索框右侧显示搜索按钮                                           | boolean \| ((focus: boolean, value: string) => boolean) | false                                               |
| value                  | 输入值                                                      | string                                                  | -                                                   |

#### CSS 变量

| 属性名                 | 说明               | 默认值                   |
|---------------------|------------------|-----------------------|
| --background        | 背景色              | #f5f5f5               |
| --border-radius     | 圆角               | 12px                  |
| --height            | 高度               | 64px                  |
| --padding-left      | 搜索框的左侧 padding   | 16x                   |
| --placeholder-color | placeholder 文字颜色 | var(--adm-color-weak) |

#### Ref

同Input。

### Selector 选择组

#### 属性

| 属性名           | 说明                         | 类型                                                                    | 默认值   |
|---------------|----------------------------|-----------------------------------------------------------------------|-------|
| columns       | 列数（注意 grid 布局在 IOS 9 下不支持） | number                                                                | -     |
| defaultValue  | 默认项                        | SelectorValue[]                                                       | []    |
| disabled      | 是否全部禁止选中                   | boolean                                                               | false |
| multiple      | 是否允许多选                     | boolean                                                               | false |
| onChange      | 选项改变时触发                    | (value: SelectorValue[], extend: { items: SelectorOption[] }) => void | -     |
| options       | 可选项                        | SelectorOption[]                                                      | -     |
| showCheckMark | 是否显示对勾角标                   | boolean                                                               | true  |
| value         | 选中项                        | SelectorValue[]                                                       | -     |

#### CSS 变量

| 属性名                  | 说明                          | 默认值                      |
|----------------------|-----------------------------|--------------------------|
| --border             | 边框样式                        | none                     |
| --border-radius      | 选项的圆角 	                     | 4px                      |
| --checked-border     | 选中时的边框样式                    | none                     |
| --checked-color      | 选中时的背景色                     | #e7f1ff                  |
| --checked-text-color | 选中时的文字颜色                    | var(--adm-color-primary) |
| --color              | 背景色                         | #f5f5f5                  |
| --padding            | 选项的 padding                 | 16px 32px                |
| --text-color         | 文字颜色                        | var(--adm-color-text)    |
| --gap                | 间距大小，仅在 columns 存在时生效       | 16px                     |
| --gap-horizontal     | 水平方向的间距大小，，仅在 columns 存在时生效 | var(--gap)               |
| --gap-vertical       | 垂直方向的间距大小，仅在 columns 存在时生效  | var(--gap)               |

#### 类型定义

#### SelectorValue

```md
type SelectorValue = string | number
```

#### 属性

| 属性名         | 说明   | 类型            | 默认值   |
|-------------|------|---------------|-------|
| description | 描述   | ReactNode     | -     |
| disabled    | 是否禁用 | boolean       | false |
| label       | 文字   | ReactNode     | -     |
| value       | 选项的值 | SelectorValue | -     |

#### 泛型

`Selector` 支持泛型，你可以通过下面的这种方式手动控制 `value` `onChange` 等属性的类型：

```jsx
<Selector
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

### Slider 滑动输入条

#### 属性

| 属性名             | 说明                            | 类型                                       | 默认值       |
|-----------------|-------------------------------|------------------------------------------|-----------|
| min             | 最小值                           | number                                   | 0         |
| max             | 最大值                           | number                                   | 100       |
| step            | 步长，取值必须大于 0，并且可被(max - min)整除 | number                                   | 1         |
| disabled        | 是否禁用                          | boolean                                  | false     |
| value           | 当前取值                          | number                                   | 0         |
| color           | 背景条的颜色（请使用 backgroundColor）   | string                                   | "#e9e9e9" |
| selectedColor   | 已选择的颜色（请使用 activeColor）       | string                                   | "#1aad19" |
| activeColor     | 已选择的颜色                        | string                                   | "#1aad19" |
| backgroundColor | 背景条的颜色                        | string                                   | "#1aad19" |
| blockSize       | 滑块的大小，取值范围为 12 - 28           | number                                   | 28        |
| blockColor      | 滑块的颜色                         | string                                   | "#ffffff" |
| showValue       | 是否显示当前 value                  | boolean                                  | false     |
| onChange        | 完成一次拖动后触发的事件                  | aseEventOrigFunction:onChangeEventDetail | -         |
| onChanging      | 拖动过程中触发的事件                    | aseEventOrigFunction:onChangeEventDetail | -         |

### Space 间距

#### 属性

| 属性名       | 说明                       | 类型                                                                             | 默认值          |
|-----------|--------------------------|--------------------------------------------------------------------------------|--------------|
| align     | 交叉轴对齐方式                  | 'start' \| 'end' \| 'center' \| 'baseline'                                     | -            |
| block     | 是否渲染为块级元素                | boolean                                                                        | false        |
| direction | 间距方向                     | 'vertical' \| 'horizontal'                                                     | 'horizontal' |
| justify   | 主轴对齐方式                   | 'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch' | -            |
| onClick   | 点击事件                     | (event: React.MouseEvent) => void                                              | -            |
| wrap      | 是否自动换行，仅在 horizontal 时有效 | boolean                                                                        | false        |

#### CSS 变量

| 属性名              | 说明          | 默认值        |
|------------------|-------------|------------|
| --gap            | 间距大小        | 16px       |
| --gap-horizontal | 水平方向的间距大小 	 | var(--gap) |
| --gap-vertical   | 垂直方向的间距大小 	 | var(--gap) |

### Steps 步骤条

#### 属性

| 属性名       | 说明                                             | 类型                         | 默认值          |
|-----------|------------------------------------------------|----------------------------|--------------|
| current   | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态 | number                     | 0            |
| direction | 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向    | 'horizontal' \| 'vertical' | 'horizontal' |
| items     | 参数项                                            | StepsItem[]                | []           |

#### CSS 变量

| 属性名                      | 说明                    | 默认值  |
|--------------------------|-----------------------|------|
| --description-font-size  | 描述的字号                 | 24px |
| --icon-size              | 指示器上图标的大小 	           | 36px |
| --indicator-margin-right | 左边的指示器和右边的文字内容之间的额外间距 | 0    |
| --title-font-size        | 标题的字号                 | 26px |

#### StepsItem

| 属性名         | 说明         | 类型        | 默认值 |
|-------------|------------|-----------|-----|
| description | 步骤的详情描述，可选 | ReactNode | -   |
| title       | 标题         | ReactNode | -   |

### Switch 开关

#### 属性

| 属性名      | 说明                      | 类型                                        | 默认值      |
|----------|-------------------------|-------------------------------------------|----------|
| checked  | 是否选中                    | boolean                                   | false    |
| disabled | 是否禁用                    | boolean                                   | false    |
| type     | 样式，有效值：switch, checkbox | "switch" \| "checkbox"                    | "switch" |
| value    | checked 改变时触发 change 事件 | BaseEventOrigFunction:onChangeEventDetail | -        |

#### onChangeEventDetail

| 属性名   | 类型      |
|-------|---------|
| value | boolean |

### TabBar 标签栏

#### 属性

| 属性名              | 说明                                | 类型                    | 默认值                   |
|------------------|-----------------------------------|-----------------------|-----------------------|
| activeKey        | 当前激活 item 的 key                   | string \| null        | -                     |
| defaultActiveKey | 初始化选中 item 的 key，如果没有设置 activeKey | string \| null        | 第一个 TabBar.Item 的 key |
| onChange         | 切换面板的回调                           | (key: string) => void | -                     |
| safeArea         | 是否开启安全区适配                         | boolean               | false                 |
| items            | 参数项                               | TabBarItem[]          | []                    |

#### TabBarItem

| 属性名   | 说明                      | 类型                                            | 默认值 |
|-------|-------------------------|-----------------------------------------------|-----|
| badge | 徽标，同 Badge 的 content 属性 | React.ReactNode \| typeof Badge.dot           | -   |
| icon  | 图标                      | ReactNode \| ((active: boolean) => ReactNode) | -   |
| key   | 对应 activeKey            | string                                        | -   |
| title | 标题                      | ReactNode \| ((active: boolean) => ReactNode) | -   |

#### CSS 变量

| 属性名                   | 说明    | 默认值 |
|-----------------------|-------|-----|
| --tab-bar-padding-top | 距顶部间距 | 0   |

### Tabs 标签页

#### 属性

| 属性名              | 说明                            | 类型                    | 默认值        |
|------------------|-------------------------------|-----------------------|------------|
| activeKey        | 当前激活 tab 面板的 key              | string \| null        | -          |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string \| null        | 第一个面板的 key |
| onChange         | 切换面板的回调                       | (key: string) => void | -          |
| stretch          | 选项卡头部是否拉伸                     | boolean               | true       |
| swiperOpen       | 选项卡面板内容是否可滑动                  | boolean               | false      |
| showMore         | 选项卡是否展示更多按钮                   | boolean               | false      |
| items            | 标签项                           | TabsItem[]            | []         |

#### TabsItem

| 属性名      | 说明                      | 类型                  | 默认值   |
|----------|-------------------------|---------------------|-------|
| key      | 选项卡面板的唯一标识，对应 activeKey | string              | -     |
| title    | 选项卡头显示文字                | string \| ReactNode | -     |
| disabled | 是否禁用                    | boolean             | false |
| children | 选项卡面板内容                 | string \| ReactNode | -     |

#### CSS 变量

| 属性名                         | 说明               | 默认值                       |
|-----------------------------|------------------|---------------------------|
| --active-line-border-radius | 当前激活 tab 下划线的圆角  | var(--active-line-height) |
| --active-line-color         | 当前激活 tab 下划线的颜色  | var(--adm-color-primary)  |
| --active-line-height        | 当前激活 tab 下划线的高度  | 4px                       |
| --active-title-color        | 当前激活 tab 选项文字颜色  | var(--adm-color-primary)  |
| --content-padding           | tab 内容区的 padding | 24px                      |
| --title-font-size           | 选项卡头文字的大小        | 34px                      |

### Tabs.Header

#### 属性 extend TabsItem

| 属性名              | 说明                            | 类型                    | 默认值        |
|------------------|-------------------------------|-----------------------|------------|
| activeKey        | 当前激活 tab 面板的 key              | string \| null        | -          |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string \| null        | 第一个面板的 key |
| onChange         | 切换面板的回调                       | (key: string) => void | -          |
| stretch          | 选项卡头部是否拉伸                     | boolean               | false      |
| showMore         | 选项卡是否展示更多按钮                   | boolean               | false      |

### Tag 标签

#### 属性

| 属性名     | 说明     | 类型                                                                     | 默认值       |
|---------|--------|------------------------------------------------------------------------|-----------|
| color   | 标签色    | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string | 'default' |
| fill    | 填充模式   | 'solid' \| 'outline'                                                   | 'solid'   |
| onClick | 标签点击事件 | (event: React.MouseEvent) => void                                      | -         |
| round   | 是否圆角   | boolean                                                                | false     |

#### CSS 变量

| 属性名                | 说明                 | 默认值                                                              | 全局变量                    |
|--------------------|--------------------|------------------------------------------------------------------|-------------------------|
| --background-color | 背景颜色               | 当 fill=solid 时，默认值为 color 属性对应的颜色；当 fill=outline 时，默认值为 #ffffff  | -                       |
| --border-color     | 边框颜色               | color 属性对应的颜色                                                    | -                       |
| --border-radius    | round=false 时的圆角大小 | 4px                                                              | --adm-tag-border-radius |
| --text-color       | 文字颜色               | 当 fill=solid 时，默认值为 #ffffff；当 fill=outline 时，默认值为 color 属性对应的颜色	 | -                       |

#### TextArea 多行输入框

#### 属性

| 属性名                    | 说明                                                                                               | 类型                                                      | 默认值                    |
|------------------------|--------------------------------------------------------------------------------------------------|---------------------------------------------------------|------------------------|
| value                  | 输入框的内容                                                                                           | string                                                  | -                      |
| placeholder            | 输入框为空时占位符                                                                                        | string                                                  | -                      |
| placeholderStyle       | 指定 placeholder 的样式                                                                               | string                                                  | -                      |
| placeholderClass       | 指定 placeholder 的样式类                                                                              | string                                                  | "textarea-placeholder" |
| disabled               | 是否禁用                                                                                             | boolean                                                 | false                  |
| maxLength              | 最大输入长度，设置为 -1 的时候不限制最大长度                                                                         | number                                                  | 140                    |
| autoFocus              | 自动聚焦，拉起键盘                                                                                        | boolean                                                 | false                  |
| focus                  | 获取焦点                                                                                             | boolean                                                 | false                  |
| autoHeight             | 是否自动增高，设置 autoHeight 时，style.height不生效                                                           | boolean                                                 | false                  |
| fixed                  | 如果 Textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true                                        | boolean                                                 | false                  |
| cursorSpacing          | 指定光标与键盘的距离，单位 px 。取 Textarea 距离底部的距离和 cursorSpacing 指定的距离的最小值作为光标与键盘的距离                          | number                                                  | 0                      |
| cursor                 | 指定 focus 时的光标位置                                                                                  | number                                                  | 1                      |
| showConfirmBar         | 是否显示键盘上方带有”完成“按钮那一栏                                                                              | boolean                                                 | true                   |
| selectionStart         | 光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用                                                              | number                                                  | -1                     |
| selectionEnd           | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用                                                            | number                                                  | -1                     |
| adjustPosition         | 键盘弹起时，是否自动上推页面                                                                                   | boolean                                                 | true                   |
| holdKeyboard           | focus 时，点击页面的时候不收起键盘                                                                             | boolean                                                 | false                  |
| disableDefaultPadding  | 是否去掉 iOS 下的默认内边距                                                                                 | boolean                                                 | false                  |
| onFocus                | 输入框聚焦时触发                                                                                         | BaseEventOrigFunction:onFocusEventDetail                | -                      |
| onBlur                 | 输入框失去焦点时触发                                                                                       | BaseEventOrigFunction:onBlurEventDetail                 | -                      |
| onLineChange           | 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}                                | BaseEventOrigFunction:onLineChangeEventDetail           | -                      |
| onInput                | 当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode} **onInput 处理函数的返回值并不会反映到 textarea 上** | BaseEventOrigFunction:onInputEventDetail                | -                      |
| onConfirm              | 点击完成时， 触发 confirm 事件，event.detail = {value: value}                                               | BaseEventOrigFunction:onConfirmEventDetail              | -                      |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件                                                                                 | BaseEventOrigFunction:onKeyboardHeightChangeEventDetail | -                      |

#### onFocusEventDetail

| 属性名    | 类型     | 说明   |
|--------|--------|------|
| value  | string | 输入值  |
| height | number | 键盘高度 |

#### onBlurEventDetail

| 属性名    | 类型     | 说明   |
|--------|--------|------|
| value  | string | 输入值  |
| cursor | number | 光标位置 |

#### onLineChangeEventDetail

| 属性名       | 类型     |
|-----------|--------|
| height    | string |
| heightRpx | number |
| lineCount | number |

#### onInputEventDetail

| 属性名     | 类型     | 说明   |
|---------|--------|------|
| value   | string | 输入值  |
| cursor  | number | 光标位置 |
| keyCode | number | 键值   |

#### onConfirmEventDetail

| 属性名   | 类型     | 说明  |
|-------|--------|-----|
| value | string | 输入值 |

#### onKeyboardHeightChangeEventDetail

| 属性名      | 类型     | 说明   |
|----------|--------|------|
| height   | number | 键盘高度 |
| duration | number | 持续时间 |

