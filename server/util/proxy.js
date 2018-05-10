const axios = require('axios')
const querystring = require('query-string')

const baseUrl = require("../../config").reqUrl + '/qlwb/'

module.exports = function (req, res, next) {
  const path = req.path
  const user = req.session.user || {}
  const needAccessToken = req.query.needAccessToken

  if (needAccessToken && !user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    })
  }

  const query = Object.assign({}, req.query, {
    accesstoken: (needAccessToken && req.method === 'GET') ? user.accessToken : ''
  })
  if (query.needAccessToken) delete query.needAccessToken

  console.log(`${baseUrl}qlydchannel_contentlist.do`)

  axios(`${baseUrl}qlydchannel_contentlist.do`, {
    method: req.method,
    params: query,
    data: {
      "channelid": 1,
      "pageno": 1,
      "pagesize": 10
    },
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'zh-CN,zh;q=0.8',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'client_imei': '095C15DD31C094BEFB8501CEE389573C'
    }
  }).then(resp => {
    if (resp.status === 200) {
      res.send(resp.data)
    } else {
      res.status(resp.status).send(resp.data)
    }
  }).catch(err => {
    if (err.response) {
      res.status(500).send(err.response.data)
    } else {
      res.status(500).send({
        success: false,
        msg: '未知错误'
      })
    }
  })
}
