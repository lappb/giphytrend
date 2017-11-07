// import fetch from '.././core/fetch'
import {hostApiServer} from '.././config'

export default function jsonRequest(url,method,param={}){
    const linkApi = hostApiServer + url;
    console.log(linkApi);
    console.log(fetch);
    const resObj = fetch(linkApi, {
      method: method,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(param),
      credentials: 'include',
    });

    if (resObj.status !== 'OK') throw new Error(resObj.errors);
    return resObj.data.json();
}
