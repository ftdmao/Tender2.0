<template>
  <div>
    <Modal v-model="showModal" @on-ok="TenderApply" :okText="okText" fullscreen title="招标预告明细">
      <div style="margin: 0 auto;width: 1000px">
        <Form ref="detailModal" :model="detailModal" :label-width="100">
          <FormItem label="预告标题">
            <Input v-model="detailModal.vfoundname" :readonly="true"></Input>
          </FormItem>
          <FormItem label="产品">
            <textarea  v-model="detailModal.vdef5" style="width: 100%; height: 270px; resize: none;" :readonly="true"></textarea>
          </FormItem>
          <FormItem label="预计招标时间">
            <Input v-model="detailModal.vdef2" :readonly="true"></Input>
          </FormItem>
          <FormItem label="发布时间">
            <Input v-model="detailModal.dpublishdate" :readonly="true"></Input>
          </FormItem>
           <FormItem label="报名截止日期">
            <Input v-model="detailModal.vdef3" :readonly="true"></Input>
          </FormItem>
          <FormItem label="招标负责人">
            <Input v-model="detailModal.vlinkman" :readonly="true"></Input>
          </FormItem>
          <FormItem label="联系电话">
            <Input v-model="detailModal.vphone" :readonly="true"></Input>
          </FormItem>
          <FormItem label="电子邮箱">
            <Input v-model="detailModal.vdef1" :readonly="true"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
    <Row :gutter="20">
      <div>
        <Select @on-change="searchByOptions" placeholder="按是否过期分类" v-model="option" style="width:200px">
          <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div style="margin-top: 10px">
        <Input v-model="title" @on-search="searchByTitle" style="width: 200px" search enter-button placeholder="搜索招标名称..."/>
      </div>
    </Row>
    <Row :gutter="20" style="margin-top: 20px">
      <Table @on-row-click="showDetails" :loading="loading" :columns="columns1" :data="noticeList"></Table>
      <Page :page-size="pageSize" @on-change="turnPage" style="margin-top: 10px"  :total="total" show-elevator show-total/>
    </Row>
  </div>
</template>

<script>
import {getTenderNoticeRegistration, getTenderNoticeDetail, TenderNoticeApply} from '@/api/notice'
export default {
  name: 'TenderNoticeRegistration',
  data () {
    return {
      loading: false,
      columns1: [
        {
          title: ' ',
          key: 'pkSingleplanpublish',
          render: (h, params) => {
            return h('div', {
              style: {
                visibility: 'hidden',
                width: '0px',
                height: '0px'
              }
            }, params.row.pkSingleplanpublish)
          }
        },
        {
          title: ' ',
          key: 'pkSingleplan',
          render: (h, params) => {
            return h('div', {
              style: {
                visibility: 'hidden',
                width: '0px',
                height: '0px'
              }
            }, params.row.pkSingleplanpublish)
          }
        },
        {
          title: ' ',
          key: 'pkCorp',
          render: (h, params) => {
            return h('div', {
              style: {
                visibility: 'hidden',
                width: '0px',
                height: '0px'
              }
            }, params.row.pkSingleplanpublish)
          }
        },
        {
          title: '序号',
          type: 'index',
          align: 'center',
          width: 60
        },
        {
          title: '招标名称',
          key: 'vfoundname',
          align: 'center',
          width: 300
        },
        {
          title: '招标预计时间',
          key: 'vdef2',
          align: 'center',
          width: 180
        },
        {
          title: '报名截止时间',
          key: 'vdef3',
          align: 'center',
          width: 180
        },
        {
          title: '发布时间',
          key: 'dpublishdate',
          align: 'center',
          width: 180
        },
        {
          title: '是否已过期',
          align: 'center',
          key: 'isPastDue',
          minWidth: 120
        },
        {
          title: '是否已报名',
          key: 'isApply',
          align: 'center',
          minWidth: 120,
          render: (h, params) => {
            if (params.row.isApply === 'N') {
              return h('div', '未报名')
            }
            if (params.row.isApply === 'Y') {
              return h('div', '已报名')
            }
          }
        }
      ],
      noticeList: [],
      options: [
        {
          value: '',
          label: '全部'
        },
        {
          value: 'Y',
          label: '已过期'
        },
        {
          value: 'N',
          label: '未过期'
        }
      ],
      option: '',
      title: '',
      total: 0,
      pageSize: 10,
      currentPage: 1,
      showModal: false,
      detailModal: {
        vfoundname: '',
        vdef5: '',
        vdef2: '',
        dpublishdate: '',
        vlinkman: '',
        vphone: '',
        vdef1: '',
        vdef3: '',
        pkCorp: '',
        pkSingleplan: '',
        pkSingleplanpublish: '',
        vbillno: '',
        voperatorid: ''
      },
      okText: ''
    }
  },
  methods: {
    showDetails (row, index) {
      this.showModal = true
      if (row.isPastDue === '已过期') {
        this.okText = '已过期'
      } else {
        if (row.isApply === 'Y') {
          this.okText = '已报名'
        } else {
          this.okText = '报名'
        }
      }
      var _this = this
      getTenderNoticeDetail(row.pkSingleplanpublish).then(res => {
        if (res !== false) {
          _this.detailModal = res.detail
        }
      })
    },
    searchByTitle () {
      this.getTableDate(this.currentPage, this.pageSize, this.option, this.title)
    },
    searchByOptions () {
      this.getTableDate(this.currentPage, this.pageSize, this.option, this.title)
    },
    getTableDate (currentPage, pageSize, option, title) {
      var _this = this
      getTenderNoticeRegistration(currentPage, pageSize, option, title).then(res => {
        _this.noticeList = res.list
        _this.total = res.count
      })
    },
    turnPage (page) {
      this.currentPage = page
      this.getTableDate(this.currentPage, this.pageSize, this.option, this.title)
    },
    TenderApply () {
      if (this.okText === '报名') {
        TenderNoticeApply(this.detailModal.pkSingleplanpublish, this.detailModal.pkCorp, this.detailModal.pkSingleplan,
          this.detailModal.vfoundname, this.detailModal.vbillno, this.detailModal.voperatorid).then(res => {
          alert('报名成功');
        })
      }
    }
  },
  mounted () {
    this.getTableDate(this.currentPage, this.pageSize, this.option, this.title)
  }
}
</script>

<style lang="less">
  .ivu-form-item{
    margin-bottom: 10px;
  }
</style>
