import { combineReducers } from 'redux'
import Type from '../../store/type'

const init = 10
const initName = {name: 'zhangsan'}

export default combineReducers({
  counter:(state=init, action) => {
    switch(action.type) {
      case Type.topicList.ADD:
        return state + 1
      case Type.topicList.REMOVE:
        return state -1
      default:
        return state
    }
  },
  name: (state=initName, action) => {
    switch(action.type) {
      case Type.topicList.CHANGE_NAME:
        return action.data
      default:
        return state
    }
  }
})



