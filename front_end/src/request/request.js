import axios from 'axios'

// config
const axiosOption = {
    baseURL: 'http://ec2-54-214-227-92.us-west-2.compute.amazonaws.com:8080/',
    timeout: 5000,
}

// create an instance
const instance = axios.create(axiosOption);

// add interceptor
instance.interceptors.request.use(function (config) {
        config.headers = {
            'Content-type': 'application/json; charset=utf-8'
        }
    return config;
}, function (error) {
    // do sth
    return Promise.reject(error);
});

// add response interceptors
instance.interceptors.response.use(function (response) {
    // do sth
    return response.data;
}, function (error) {
    // do sth with rejection
    return Promise.reject(error);
});

export default instance;