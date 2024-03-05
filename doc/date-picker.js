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
