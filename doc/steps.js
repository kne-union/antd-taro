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
