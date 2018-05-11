const axios = require('axios')
const querystring = require('query-string')

const baseUrl = require("../../config").reqUrl + '/xxxx'

module.exports = function (req, res, next) {

  const path = req.query.path

  if(!path) {
    return res.json({rc: 1, desc: "路径为空"})
  }

  axios(`${baseUrl}/${path}`, {
    method: 'POST',
    data: req.body,
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
        rc: 1,
        desc: '未知错误'
      })
    }
  })
}
