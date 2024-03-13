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
