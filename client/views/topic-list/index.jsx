import React from 'react'

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { AppState } from '../../store/app-state'
//---------

import { connect } from 'react-redux'
import { addAsync, changeNameAsync, testServer } from "../../redux/action";
@connect(
  state => ({num: state.counter, name: state.name}),
  {addAsync, changeNameAsync, testServer}
)
//------------
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

  // changeName(event) {
  //   this.props.appState.changeName(event.target.value)
  // }

  render() {
    const num = this.props.num;
    const name = this.props.name;
    const addAsync = this.props.addAsync;
    const changeNameAsync = this.props.changeNameAsync;
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
        </div>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
