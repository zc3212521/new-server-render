import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { getNormalDetail } from './action'
import { loadInitData } from 'config/global'
import NewsHeader from 'component/business/news-header'

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
    loadInitData(this.props.location.pathname, this.getInitialData)
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
    const html  =  {__html: news.content}  // todo newscontent里面的齐鲁壹点要加链接

    return (
      <div>
        <Helmet>
          <title>{ news.title }</title>
          <meta name="description" content={ news.title || "" + "壹点网，壹点新闻网，齐鲁壹点网，齐鲁壹点，新闻资讯，山东新闻" } />
          <meta name="keywords" content={ news.tags } />
          <link href="https://cdn.bootcss.com/foundation/5.5.3/css/foundation.min.css" rel="stylesheet" />
          <style>{`
            html {
              line-height: initial;
              font-size: 50px;
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

          <NewsHeader news={news} />

          <article>
            <div className="normal-news-content" dangerouslySetInnerHTML={html}>
            </div>
          </article>

          {/* todo 评论板块*/}
          
        </div>

      </div>
    )
  }
}
