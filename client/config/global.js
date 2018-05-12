import axios from "axios"

const loadInitData = (pathname, callback) => {
  if(window.__SERVER__PATH__ && window.__SERVER__PATH__ === pathname) {
    window.__SERVER__PATH__ = false
  } else if(typeof callback === 'function') {
    callback()
  }
}

const axiosPost = (path, reqData, callback, errCallback) => {

  const baseUrl = process.env.API_BASE || ''

  return axios.post(baseUrl + `/data?path=${path}`, reqData)
    .then(res => {
      if(res.data.rc == 0) {
        console.log(res.data)
        if(typeof callback === 'function') {
          callback(res.data.data)
        }
      } else {
        console.error(res.data.desc)
        if(typeof errCallback === 'function') {
          errCallback(res.data.desc)
        }
      }
  }).catch(err => {
      console.error(err)
      if(typeof errCallback === 'function') {
        errCallback(err)
      }
      return err
  })
}


export {
  loadInitData,
  axiosPost,
}
