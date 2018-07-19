import config from './config'
import {objTourl} from '../util/util'
let request = {};

request.get = (url,params) => {
    if(params) {
        url = config.api.baseUrl + url + '?' + objTourl(params)
    }
    return fetch(url)
            .then((response) => response.json())
}

request.post = (url,body) => {
    return fetch(config.api.baseUrl + url,{
        method : 'POST',
        headers : config.headers,
        body : JSON.stringify(body)
    }).then((response) => response.json())
}

export default request