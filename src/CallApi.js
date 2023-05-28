import axios from 'axios';

export const fetchData = (url) => {
    const promise = axios.get(url).then(({data}) => data);
    return wrapPromise(promise);
}
  

const wrapPromise = (promise) => {
    let result;  
    let status = 'pending';
    
    let suspender = promise.then(
        res => {
            status = 'success';
            result = res;
        },
        err => {
            status = 'error';
            result = err
        }
    );

    return {
        read() {
            if(status === 'pending') {
                throw suspender;
            } 
            else if(status === 'error') {
                throw result;
            }
            else if (status === 'success') {
                return result;
            }
        }
    }
}