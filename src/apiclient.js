import axios from 'axios';

const apiclient = axios.create({
  baseURL: 'https://api.covid19api.com/',
});

apiclient.interceptors.response.use(
  response => response.data,
  err => {
    return Promise.reject(err);
  },
);

export default apiclient;
