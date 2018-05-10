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
