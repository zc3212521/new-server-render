import { combineReducers } from 'redux'
import type from 'type'

export default combineReducers({
  normalNewsDetail (state = {}, action) {
    switch (action.type) {
      case type.newsDetail.NORMAL:
        return action.data
      default:
        return state
    }
  }
})
