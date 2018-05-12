import React from 'react'
import {
  Link,
} from 'react-router-dom'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.location)
    console.log(nextProps.location)
  }

  render() {
    return [
      <div key="banner">
        <Link to="/">首页</Link>
        <br />
        <Link to="/list">列表页</Link>
        <br />
        <Link to="/detail">详情页</Link>
        <br />
        <Link to="/news/show/id/7932933">郑州警方通报</Link>
        <br />
        <Link to="/news/show/id/7934192">读好书</Link>
      </div>,
      <Routes key="routes" />,
    ]
  }
}
