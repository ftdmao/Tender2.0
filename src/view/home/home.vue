<template>
  <div>
    <Row :gutter="20">
      <Table :loading="loading" :columns="columns1" :data="DailyBulletin"></Table>
    </Row>
    <Row :gutter="20">
      <Table style="margin-top: 40px" :loading="loading" :columns="columns2" :data="BusinessBulletin"></Table>
    </Row>
  </div>
</template>

<script>
import { getDailyBulletin, getBusinessBulletin } from '@/api/bulletin'
export default {
  name: 'home',
  methods: {
    initDailyBulletin () {
      var _this = this
      getDailyBulletin(1, 5).then(res => {
        _this.DailyBulletin = res.list
        _this.loading2 = false
      })
    },
    initBusinessBulletin () {
      var _this = this
      getBusinessBulletin(1, 10).then(res => {
        _this.BusinessBulletin = res.list
        _this.loading = false
      })
    }
  },
  data () {
    return {
      loading: true,
      loading2: true,
      columns1: [
        {
          title: '日常公告',
          key: 'vdef5',
          align: 'left',
          width: 800
        },
        {
          title: '发布时间',
          key: 'vname',
          align: 'left'
        },
        {
          title: '更多',
          align: 'left'
        }
      ],
      columns2: [
        {
          title: '业务公告',
          key: 'msgTitle',
          align: 'left',
          width: 800
        },
        {
          title: '业务类型',
          key: 'msgType',
          align: 'left'
        },
        {
          title: '发布时间',
          key: 'msgDate',
          align: 'left'
        }
      ],
      DailyBulletin: [],
      BusinessBulletin: []
    }
  },
  mounted () {
    this.initDailyBulletin()
    this.initBusinessBulletin()
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
