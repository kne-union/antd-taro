import './assets/font/iconfont.css';
import '@kne/antd-taro/dist/index.css';
import '@kne/react-form-antd-taro/dist/index.css';
import '@kne/mini-core/dist/index.css';
import axios from 'axios';
import {preset as fetchPreset} from '@kne/react-fetch';
import {Empty, Result} from '@kne/antd-taro';
import {CommonLoadingView} from '@kne/mini-core';
import * as apis from './apis';

const baseURL = '/';
export const ajax = axios.create({
    validateStatus: function () {
        return true;
    }, baseURL
});

ajax.interceptors.request.use(async config => {
    if (/^\/jsonFiles/.test(config.url)) {
        config.baseURL = 'https://uc.fatalent.cn';
    }

    if (config.method.toUpperCase() !== 'GET' && !config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
    }

    return config;
});

fetchPreset({
    ajax,
    loading: <CommonLoadingView />,
    error: (err) => <Result status="error" title={err || "请求发生错误"}/>,
    empty: <Empty/>,
    transformResponse: (response) => {
        const {data} = response;
        response.data = {
            code: data?.code === 0 ? 200 : data?.code, msg: data?.msg, results: data?.data,
        };
        return response;
    }
});

const preset = {ajax, apis: Object.assign({}, apis, {baseURL})};

export default preset;
