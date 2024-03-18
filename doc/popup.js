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

