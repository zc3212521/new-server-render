import React from 'react'
import Helmet from 'react-helmet'

export default class TopicDetail extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>This is topic</title>
          <meta name="description" content="This is description" />
        </Helmet>
        <span>lalala</span>
      </div>
    )
  }
}
