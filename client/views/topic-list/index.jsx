import React from 'react'

import Helmet from 'react-helmet'

import { connect } from 'react-redux'

import { addAsync, changeNameAsync, testServer, testApi } from "./action"

import axios from 'axios'

@connect(
  state => ({num: state.topicList.counter, name: state.topicList.name}),
  {addAsync, changeNameAsync, testServer, testApi}

)

export default class TopicList extends React.Component {
  // constructor() {
  //   super()
  //   this.changeName = this.changeName.bind(this)
  // }
  // componentDidMount() {
  //   // do something here
  // }

  asyncBootstrap() {
    return this.props.testServer()
  }

  componentDidMount() {
    axios.post(
      '/data?path=qlydchannel_contentlist.do',
      {
        "channelid": 1,
        "pageno": 1,
        "pagesize": 10
      }
    ).then((resp) => {
        const { data } = resp
        if (data.rc == 0) {
          console.log(data)
        } else {
          console.log('请求失败')
        }
      }).catch()
  }

  // changeName(event) {
  //   this.props.appState.changeName(event.target.value)
  // }

  render() {
    const num = this.props.num;
    const name = this.props.name;
    const addAsync = this.props.addAsync;
    const changeNameAsync = this.props.changeNameAsync;
    const envirment = process.env.NODE_ENV
    return (
      <div>
        <Helmet>
          <title>This is topic list</title>
          <meta name="description" content="This is description" />
        </Helmet>
        <div>
          <div>当前数字{num}</div>
          <button onClick={addAsync}>+</button>
          <div>当前名字{name.name}</div>
          <button onClick={changeNameAsync}>change name</button>
          <div>当前环境{envirment}</div>
        </div>
      </div>
    )
  }
}
