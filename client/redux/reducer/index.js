import { combineReducers } from 'redux'
import Type from '../type'

const init = 10
const initName = {name: 'zhangsan'}

export default combineReducers({
    counter:(state=init, action) => {
        switch(action.type) {
            case Type.test.ADD:
                return state + 1
            case Type.test.REMOVE:
                return state -1
            default:
                return state
        }
    },
    name: (state=initName, action) => {
        switch(action.type) {
            case Type.test.CHANGE_NAME:
                return action.data
            default:
                return state
        }
    }
})



