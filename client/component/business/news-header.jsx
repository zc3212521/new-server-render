import React from 'react'
import Helmet from 'react-helmet-async'

export default class NewsHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { news } = this.props

    return(
      <div>
        <Helmet>
          <style>{`
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

          `}</style>
        </Helmet>

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

      </div>
    )
  }

}
