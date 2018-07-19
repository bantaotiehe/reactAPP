export function objTourl(obj) {
    if(obj) {
        let params = '';
        for(let key in obj) {
            params += key + '=' + obj[key] + '&'
        }
        return params.substring(0,params.length - 1);
    }
}