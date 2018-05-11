import React from 'react'
import axios from 'axios'
import Helmet from 'react-helmet'

import { connect } from 'react-redux'

import { addAsync, changeNameAsync, testServer, testApi } from "./action"

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

    // console.log(this.props.location.pathname)

    if(window.__SERVER__PATH__ && window.__SERVER__PATH__ === this.props.location.pathname) {
      // console.log("置空", window.__SERVER__PATH__)
      window.__SERVER__PATH__ = false // 置空
    } else {
      // 请求数据
      console.log("请求数据")
      this.props.testServer()
    }


    axios.post(
      '/data/qlydchannel_contentlist.do',
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
          console.error('请求失败')
        }
      }).catch(err => console.error('请求失败', err))
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.location)
    console.log(nextProps.location)
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
    const base = typeof PRODUCTION === 'undefined' ? 'none' : PRODUCTION
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
          <div>当前域名环境{ base }</div>
        </div>
      </div>
    )
  }
}
