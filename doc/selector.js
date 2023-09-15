const {Selector} = antdTaro;
const BaseExample = () => {
    return <Selector options={[{label: '男', value: '0'}, {label: '女', value: '1'}]}/>;
};

render(<BaseExample/>);
