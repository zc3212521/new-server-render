import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import topicList from '../views/topic-list/reducer'
import newsDetail from '../views/news-detail/reducer'

export default combineReducers({
  routing: routerReducer,
  topicList,
  newsDetail,
})
