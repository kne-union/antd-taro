import preset from './preset';
import {Global} from '@kne/mini-core';
import './app.scss';

function App({children}) {
    return <Global preset={preset}>{children}</Global>
}

export default App;
