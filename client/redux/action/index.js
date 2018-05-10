import axios from 'axios'

import Type from '../type'

export const addNum = () => ({type:Type.test.ADD})
export const removeNum = () => ({type:Type.test.REMOVE})
export const changeName = (data) => ({
  type:Type.test.CHANGE_NAME,
  data: data
})
export const addAsync = () => dispatch => {
  setTimeout(()=>{
    dispatch(addNum())
  })
}

export const changeNameAsync = () => dispatch => {
  setTimeout(()=>{
    let data = {name: 'lisi'}
    dispatch(changeName(data))
  })
}

export const testServer = () => dispatch => {



  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      let data = {name: 'wangsu'}
      dispatch(changeName(data))
      resolve(true)
    }, 2000)
  })
}


export const testApi = () => {
  return new Promise((resolve, reject) => {
    axios.post('/api/qlydchannel_contentlist.do', {path: 'c'})
      .then((resp) => {
        const { data } = resp
        if (true) {
          console.log(data)
          resolve(data)
        } else {
          reject(data)
        }
      }).catch(reject)
  })
}
