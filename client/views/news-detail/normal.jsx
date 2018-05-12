import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import {getNormalDetail} from './action'
// import './normal.less'

@connect(
  state => ({
    news: state.newsDetail.normalNewsDetail
  }), {
    getNormalDetail
  }
)

export default class NormalNews extends React.Component {
  constructor(props) {
    super(props)
    this.getInitialData = this.getInitialData.bind(this)
  }

  getInitialData(id = this.props.match.params.id) {

    if(!parseInt(id)) {
      console.log('请检查ID')
      // 详情数据设置为空
      // 返回新闻Id不正确
      return
    }

    return this.props.getNormalDetail(id)
  }

  asyncBootstrap() {
    return this.getInitialData()
  }

  componentDidMount() {
    if(window.__SERVER__PATH__ && window.__SERVER__PATH__ === this.props.location.pathname) {
      window.__SERVER__PATH__ = false
    } else {
      this.getInitialData()
    }
  }

  componentWillReceiveProps(nextProps) {

    const newsId = this.props.match.params.id
    const nextNewsId = nextProps.match.params.id

    if(newsId !== nextNewsId) {
      // 详情id切换时，重新获取数据
      this.getInitialData(nextNewsId)
    }

  }

  render() {

    const { news } = this.props
    const html  =  {__html: news.content}

    return (
      <div>
        <Helmet>
          <title>{ news.title }</title>
          <meta name="description" content={ news.title + "壹点网，壹点新闻网，齐鲁壹点网，齐鲁壹点，新闻资讯，山东新闻" } />
          <meta name="keywords" content={ news.tags } />
        </Helmet>

        <div>
          <header>
            <h1 style={{color: "red"}}>{ news.title }</h1>
            <div></div>
          </header>

          <article>
            <div style={{background: 'red'}} className="normal-news-content" dangerouslySetInnerHTML={html}>
            </div>
          </article>

        </div>

      </div>
    )
  }
}
