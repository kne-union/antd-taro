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
