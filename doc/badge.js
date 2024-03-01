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
