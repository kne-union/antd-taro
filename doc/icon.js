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
