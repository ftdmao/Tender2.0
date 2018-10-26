import axios from '@/libs/api.request'

export const getDailyBulletin = (currentPage, pageSize) => {
  return axios.request({
    url: '/bulletin/getDailyBulletin.do',
    data: {
      currentPage: currentPage,
      pageSize: pageSize
    },
    method: 'post'
  })
}

export const getBusinessBulletin = (currentPage, pageSize) => {
  return axios.request({
    url: '/bulletin/getBusinessBulletin.do',
    data: {
      currentPage: currentPage,
      pageSize: pageSize
    },
    method: 'post'
  })
}
