import axios from "axios";

// 项目基地址
const baseURL = 'http://geek.itheima.net/v1_0/'

// 封装 axios
const http = axios.create({
    baseURL,
    timeout: 5000
})

// 请求拦截器
http.interceptors.request.use(function (config) {
    // Do something before http is sent
    return config;
}, function (error) {
    // Do something with http error
    return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // 返回值拆掉 http 封装的 data 层
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default http