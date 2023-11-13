const {Collapse} = antdTaro;
const BaseExample = () => {
    return <>
        <Collapse defaultActiveKey={['1']} items={[{
            key: '1', title: '第一项', children: '第一项第一项第一项第一项第一项第一项第一项第一项'
        }, {
            key: '2', title: '第二项', children: '第二项第二项第二项第二项第二项第二项第二项第二项'
        }, {
            key: '3', title: '第三项', children: '第三项第三项第三项第三项第三项第三项第三项第三项第三项'
        }]}/>
    </>;
};

render(<BaseExample/>);
