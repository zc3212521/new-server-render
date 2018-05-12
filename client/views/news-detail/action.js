import type from 'type'

import { axiosPost } from 'config/global'

const changeNormalDetail = (data) => ({
  type: type.newsDetail.NORMAL,
  data: data
})

const getNormalDetail = (id) => (dispatch) => {
  return axiosPost("newsdetail.do", {
    "token":"",
    "fromid": 1,
    "newsid": id
  }, (data) => {
    dispatch(changeNormalDetail(data))
  }, (err) => {
    console.error(err)
  })
}

export {
  getNormalDetail
}
