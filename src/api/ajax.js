import axios from 'axios';

let baseURL = '';
export default class Ajax {
    axios(method, url, params) {
        return new Promise ((resolve, reject) => {
            if(typeof params !=='object') params = {};
            let _option = {
                method,
                url,
                baseURL,
                timeout: 60000,
                params: null,
                data: null,
                headers: null,
                ...params,
            }
            axios.request(_option).then(res => {
                resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
            },error => {
                if (error.response) {
                    reject(error.response.data)
                } else {
                    reject(error)
                }
            })
        })
    }
}