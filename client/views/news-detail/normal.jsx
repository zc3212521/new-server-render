import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import {getNormalDetail} from './action'

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
          <link href="https://cdn.bootcss.com/foundation/5.5.3/css/foundation.min.css" rel="stylesheet" />          <style>{`
            html {
              line-height: initial;
              font-size: 50px;
            }
           .news-title {
              font-size: 24px;
              text-align: center;
              color: #000;
              font-size: 0.48rem;
              line-height: 0.64rem;
              padding:0.32rem;
              margin: 0;
            }
            .news-origin {
              font-size: 12px;
              color: #98a1ab;
              font-size:0.28rem;
              margin-bottom:0.64rem;
              text-align:center;
            }
            .news-origin span:first-child {
              margin-right: 0.24rem;
            }
            .news-subtitle-yidianhao {
                font-size: 0.28rem;
                line-height: 0.30rem;
                border: 1px #ffe2d6 solid;
                color: #ff6d34;
                margin-right:0.12rem;
                padding: 0.08rem;
                display: inline-block;
            }
            .normal-news-content {
              padding: 0 0.32rem;
              overflow: hidden;
              backgrond: red;
            }
            .normal-news-content p img {
              width: 100%;
            }
            .normal-news-content p, .normal-news-content h3,
            .normal-news-content h1, .normal-news-content h2,
            .normal-news-content  h4, .normal-news-content h5,
            .normal-news-content h6, .normal-news-content ul {
              font-size: 32px;
              font-size: 0.32rem;
              -webkit-animation-duration: 1s;
              animation-duration: 1s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
              color:#464c56;
              background: transparent;
              word-break: break-all;
              text-align: justify;
              line-height: 0.56rem;
              margin-bottom: 0.48rem;
            }
            .hidden-in-6 {
              display: none;
              opacity: 0;
              visibility: hidden;
            }
            `}
          </style>
       </Helmet>

        <div>
          <header>
            <h1 className="news-title">{ news.title }</h1>
            <div className="news-origin">
              {(() => {
                if (news.ownertype == 3) {
                  return(
                    [
                      <span className="news-subtitle-yidianhao" key="title_yidianhao">壹点号</span>,
                      <span key="news_authorname">{news.ownername}</span>
                    ]
                  )
                } else {
                    return <span>{news.source}</span>
                }
              })()}
              <span>{ news.publishtime }</span>
            </div>
          </header>

          <article>
            <div className="normal-news-content" dangerouslySetInnerHTML={html}>
            </div>
          </article>

        </div>

      </div>
    )
  }
}
