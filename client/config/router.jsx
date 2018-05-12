import React from 'react'
import {
  Route
} from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import TestApi from '../views/test/api-test'

import NormalNews from "../views/news-detail/normal"

export default () => [
  <Route path="/" exact key="first" />,
  <Route path="/list" component={TopicList} key="list" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
  <Route path="/test" component={TestApi} key="test" />,
  <Route path="/news/show/id/:id" component={NormalNews} key="normal_news_detail" />
]
