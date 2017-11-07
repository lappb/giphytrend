import 'whatwg-fetch'
import { hostApiServer } from '.././config'

export default function jsonRequest (isUpload, url, method, param = {}) {
  return new Promise((resolve, reject) => {
    const linkApi = hostApiServer + url
    const token = localStorage.getItem('token')
    let options
    if (isUpload) {
      options = {
        method: 'POST',
        body: param
      }
    } else {
      if (method === 'POST') {
        options = {
          method: method,
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(param)
        }
      } else {
        options = {
          method: method,
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
          }
        }
      }
    }
    fetch(linkApi, options)
    .then((resObj) => {
      if (resObj.status !== 200) resolve(undefined)
      resolve(resObj.json())
    })
    .catch((error) => {
      reject(error)
      // throw new Error({});
    })
  })
}

// headers: [{"Authorization": token}],
