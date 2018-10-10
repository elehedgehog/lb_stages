import axios from './api'
//   LKB API
/**
 * 获取用户消费凭证
 * @param {*} data 参数对象
 */
export const searchConsumEvidence = (data) => {
  return axios({
    url: "/user/userOrderVoucher/getOrderVoucher",       
    data: data
  })
}

/**
 * 删除用户消费凭证
 * @param {*} data 
 */
export const deleteConsumEvidence = (data) => {
  return axios({
    url: "/user/userOrderVoucher/deleteOrderVoucher",
    data: data
  })
}

/**
 * 上传用户消费凭证
 * @param {*} data 
 */
export const uploadConsumeEvidence = (data) => {
  return axios({
    url: "/user/userOrderVoucher/updateOrderVoucher",
    data: data,
    isFormData: true
  })
}
export default {
  searchConsumEvidence,
  deleteConsumEvidence,
  uploadConsumeEvidence
}
