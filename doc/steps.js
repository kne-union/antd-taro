const {Steps} = antdTaro;
const BaseExample = () => {
    return <>
        <Steps current={2} items={[{
            title: '第一步', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第二步', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第三步', status: 'error', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第四步', description: '完成时间：2020-12-01 12:30'
        }]}/>
        <Steps direction="vertical" current={2} items={[{
            title: '第一步', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第二步', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第三步', status: 'error', description: '完成时间：2020-12-01 12:30'
        }, {
            title: '第四步', description: '完成时间：2020-12-01 12:30'
        }]}/>
    </>;
};

render(<BaseExample/>);
