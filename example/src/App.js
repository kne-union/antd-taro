import {useEffect} from 'react';
import ExampleDriver from '@kne/example-driver';
import readme from './readme';
import get from "lodash/get";
import last from "lodash/last";

const App = () => {
    const exampleStyle = get(readme, 'example.style');
    useEffect(() => {
        if (!exampleStyle) {
            return;
        }
        const dom = document.createElement('style');
        dom.innerText = exampleStyle.replace(/\n/g, '');
        document.head.append(dom);
        return () => {
            document.head.removeChild(dom);
        };
    }, [exampleStyle]);

    return <div>
        <h1>{last(readme.name.split('/'))}</h1>
        <div>{readme.description}</div>
        <h2>安装</h2>
        <div>
            <pre><code>npm install --save {readme.name}</code></pre>
        </div>
        <h2>概述</h2>
        <div className="mark-down-html" dangerouslySetInnerHTML={{__html: readme.summary}}/>
        <h2>代码示例</h2>
        <div className={get(readme, 'example.className')}>
            <ExampleDriver isFull={get(readme, 'example.isFull')}
                           list={get(readme, 'example.list') || []}/>
        </div>
        <h2>API</h2>
        <div className="mark-down-html" dangerouslySetInnerHTML={{__html: readme.api}}></div>
    </div>
};

export default App;
