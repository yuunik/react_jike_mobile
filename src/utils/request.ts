import axios from "axios";

// 项目基地址
const baseURL = 'http://geek.itheima.net'

// 封装 axios
const request = axios.create({
    baseURL,
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // 返回值拆掉 request 封装的 data 层
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default request