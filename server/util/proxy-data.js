const axios = require('axios')
const baseUrl = require("../config/baseUrl").reqUrl + '/qlwb'

module.exports = function (req, res) {

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
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'version': '6.5.3',
      // 'source:': ''   news:5, newsjin:3, newsyi:4, app:1, uc:6
      'header': req.headers['user-agent'],
      'ip': req.ip
    }
  }).then(resp => {
    if (resp.status === 200) {
      res.send(resp.data)
    } else {
      res.status(resp.status).send(resp.data)
    }
  }).catch(err => {
    console.log("error")
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
