import axios from '@/libs/api.request'

export const login = (userName, password, vcode) => {
  return axios.request({
    url: '/users/validate.do',
    data: {
      userName: userName,
      pwd: password,
      vcode: vcode
    },
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/users/getUserInfo.do',
    data: {
      token: token
    },
    method: 'post'
  })
}
export const getVcode = (vm) => {
  return axios.request({
    url: '/tools/getVcode',
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
