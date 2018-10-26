import axios from '@/libs/api.request'

export const getTenderNoticeRegistration = (currentPage, pageSize, option, title) => {
  return axios.request({
    url: 'getTender/getTenderNoticeRegistration.do',
    method: 'post',
    data: {
      currentPage: currentPage,
      pageSize: pageSize,
      option: option,
      title: title
    }
  })
}

export const getTenderNoticeDetail = (pkSingleplanpublish) => {
  return axios.request({
    url: 'getTender/getTenderNoticeDetail.do',
    method: 'post',
    data: {
      pk_singleplanpublish: pkSingleplanpublish
    }
  })
}

export const TenderNoticeApply = (pkSingleplanpublish, pkCorp, pkSingleplan, vfoundname, vbillno, voperatorid) => {
  return axios.request({
    url: 'getTender/TenderNoticeApply.do',
    method: 'post',
    data: {
      pk_singleplanpublish: pkSingleplanpublish,
      pk_corp: pkCorp,
      pk_Singleplan: pkSingleplan,
      vfoundname: vfoundname,
      vbillno: vbillno,
      voperatorid: voperatorid
    }
  })
}
