import type from 'type'
import axios from "axios"

const changeNormalDetail = (data) => ({
  type: type.newsDetail.NORMAL,
  data: data
})

const getNormalDetail = (id = 1) => dispatch => {
  return axios.post("/data?path=newsdetail.do", {
    "token":"",
    "fromid": 1,
    "newsid": 7926964
  }).then(res => {
    dispatch(res)
  }).catch(err => console.log(error))
}
