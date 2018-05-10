import axios from 'axios'

import Type from '../../store/type'


export const addNum = () => ({type:Type.topicList.ADD})
export const removeNum = () => ({type:Type.topicList.REMOVE})
export const changeName = (data) => ({
  type:Type.topicList.CHANGE_NAME,
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


