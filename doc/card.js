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
