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
