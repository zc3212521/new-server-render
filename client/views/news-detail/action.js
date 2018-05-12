import type from 'type'
import axios from "axios"

const changeNormalDetail = (data) => ({
  type: type.newsDetail.NORMAL,
  data: data
})

const baseUrl = process.env.API_BASE || ''

const getNormalDetail = (id) => (dispatch) => {
  return axios.post(baseUrl + "/data?path=newsdetail.do", {
    "token":"",
    "fromid": 1,
    "newsid": id
  }).then(res => {
    if(res.data.rc == 0) {
      dispatch(changeNormalDetail(res.data.data))
    } else {
      new Error(res.data.desc)
    }
  }).catch(err => {
    console.log(err)
    return err
  })
}

export {
  getNormalDetail
}
