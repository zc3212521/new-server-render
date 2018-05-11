import { combineReducers } from 'redux'
import topicList from '../views/topic-list/reducer'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  topicList,
  routing: routerReducer
})
