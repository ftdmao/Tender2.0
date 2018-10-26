<style lang="less">
  @import 'login.less';
</style>

<template>
  <div>
    <Modal
      v-model="modal1"
      title="用户须知"
      @on-ok="agreeRules"
      fullscreen >
      <textarea style="overflow:auto; width: 100%;height: 90%;margin: 20px auto;" readonly="readonly">
        尊敬的用户：
        在您使用本网站前，请仔细阅读以下服务条款。
        易门户（以下简称 “本网站”）是西藏益森贸易有限公司（以下简称“益森”）负责运营，同时供各合作伙伴（具体公司见“合作伙伴名单”）进行信息发布的平台。益森与各合作伙伴对各自所发布信息的准确性和完整性负责，如有因此造成用户的任何损失，本网站不承担相关责任。本协议适用于本网站的用户（以下简称“用户”），若用户使用本网站的功能，将被视为完全接受本协议下的全部条款。

        接受
        当用户使用本网站时，用户已经完全知晓、认可并同意遵守本协议中的条款。如果用户拒绝接受本用户服务协议，用户必须立即放弃使用本网站。本网站有权在必要时更新本协议。本网站保留对网站结构、服务、功能等进行调整的权利。除非特别声明以外，新功能、新服务均适用于本协议。无论本协议的每次更新还是服务内容调整，都会在本网站即刻发布，无需另行通知用户并立即生效。

        用户
        1.依据中华人民共和国相关法律，凡具有民事权利能力和民事行为能力，依法独立享有民事权利和承担民事义务的企业、组织和个人，皆有资格申请成为本网站的用户。若用户不具备此资格，请不要使用本网站。
        2.凡在本网站注册通过的企业、组织和个人即视为本网站的用户，并同意按本服务条例的规定享受权利、履行义务。
        3.为保证招投标活动的有序合规，使用本网站从事投标活动或与之相关工作的用户，均须取得其所属企业、组织的合法授权，且提交的资料通过本网站审核，方可获取相应业务操作资格。
        4.本网站有权禁止被取消用户资格的自然人、法人及其他组织再次使用本网站。

        使用条款
        1.用户在使用本网站时，须保证遵守国家的法律法规和规章制度，遵守本网站的有关协议、规定、规则、程序和惯例，不得利用本网站从事任何非法活动。
        2.用户自主负责对会员帐号、密码和权限的管理，并对其帐号发生的所有行为负责。如果因用户未妥善管理帐号、密码或者管理不善造成的信息泄露、利益受损或其他不合规行为，均由用户自己承担，益森不承担任何责任。
        3.用户不得将帐号、密码及相关服务销售、转让、或赠与任何第三方，由此造成的一切后果和责任均由用户承担。如遇以上情形，益森并有权单方面终止对用户提供的服务。
        4.用户确保通过本网站提交的所有信息（内容包括但不限于个人信息、商业信息，形式包括但不限于文字、图片、视频）的真实性、准确性、即时性、完整性和合法性，并独立承担所有责任。
        5.用户通过本网站与其他的用户发生所发生的任何业务和法律纠纷，均由用户方自行解决，与益森无关。倘若用户与一名或一名以上用户发生争议，用户同意免除益森（包括益森代理人和雇员）在因该等争议而引起的，或在任何方面与该等争议有关的不同种类和性质的任何(实际和后果性的)权利主张、要求和损害赔偿等方面的责任。
        6.如因用户通过本网站使用的服务或线下的商务行为，致使任何单位、个人对益森及益森关联企业提起的诉讼、仲裁或其他法律程序而产生的费用及遭受的损失，一切均由用户负责赔偿。

        信息收集
        当用户在本网站注册成为会员时，本网站需要收集用户的企业信息、供应信息、产品和服务信息、价格信息、联系人信息等信息，供各合作伙伴访问。

        免责声明
        1.益森不保证网站是不受干扰的、没有故障的，也不对使用效果做任何保证。益森不对因人为或非人为因素造成的用户与本网站之间的连接受阻而无法访问负责。用户同意独立承担因网站意外中断、操作或传输的迟延、电脑病毒、黑客攻击、网络连接故障、未经授权的进入等引起的损失。
        2.益森将尽最大努力来减少错误，但网站上提供的服务和信息仍可能包含错误内容，益森对用户因使用本网站而造成的损失不负法律责任。益森对其服务和信息不作保证，不论什么情况下对用户因使用本网站而造成的直接、间接、偶尔的、特殊的、惩罚性的损害或其他一切损害不负法律责任，即便事先被告知损害存在的可能性也是如此。若用户对本网站提供的部分或所有服务不满，用户有权停止使用这些服务。
        3.由于不可抗力因素（包括但不限于各种自然灾害、意外事故、战争、罢工、骚乱、暴动、法律法规等），造成本网站相关服务履行迟延或不能履行的，益森不承担任何责任。
        4.益森对任何因用户不正当或非法使用服务，或因用户发布言论、信息而产生的直接、间接、偶然、特殊及后续的损害不承担任何责任。
        5.对由于用户在使用本网站的过程中，违反本协议或通过提及而纳入本协议的条款和规则或用户违反任何法律或第三方的权利而产生或引起的任何索赔、要求、诉讼、损失和损害而言，无论是直接或间接的，包括合理的律师费，用户同意就此对益森进行补偿并使其免受损害。

        知识产权
        益森对本网站享有知识产权，受法律保护。除非有合同书面约定，益森未向用户授予与任何软件著作权、专利权、商标专用权、商业秘密及其他权利有关的任何权利。

        费用
        注册及使用本网站相关功能是免费的。益森保留修改费用条款的权利，一旦费用条款被修改，将立即在本网站上公布。请注意：益森不承担用户因使用本网站的功能而需支付的软硬件、税收及其它费用。益森有权在未经通知的情况下随时改变或不继续提供某些或全部服务（暂时性的或永久的）。

        适用法律与其他
        1.本协议的订立、变更、执行和解释，以及与本协议有关的争议解决，均应适用中华人民共和国法律。如与本协议有关的某一特定事项缺乏明确法律规定，则应参照通用的国际商业惯例和行业惯例。
        2.如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。
        3.任何不在本协议或附件书面约定的条款范围内的口头承诺对用户和益森双方均不具备约束力。
      </textarea>
    </Modal>
    <div class="header" style="height: 250px">
      <div style="width: 1280px;margin: 0 auto">
        <div style="margin-top: 10px;height: 50px">
          <img class="img " src="../../assets/images/logo3.png" style="width:275px;height:44px"/>
        </div>
        <div >
          <carousel autoplay style="height: 200px">
            <carousel-item style="height: 200px">
              <img alt="" src="../../assets/images/banner01.jpg" style="width:100%;height:100%">
            </carousel-item>
            <carousel-item style="height: 200px">
              <img alt="" src="../../assets/images/banner02.jpg" style="width:100%;height:100%">
            </carousel-item>
            <carousel-item style="height: 200px">
              <img alt="" src="../../assets/images/banner03.jpg" style="width:100%;height:100%">
            </carousel-item>
          </carousel>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="content">
        <Tabs @on-click="getTenderInfo" type="card" style="width: 80%;margin: 20px auto">
          <TabPane label="合作伙伴">
            <div name="partnerImg" class="partnerImg">
              <div class="partner-img1"></div>
              <div class="partner-img2"></div>
              <div class="partner-img3"></div>
              <div class="partner-img4"></div>
              <div class="partner-img5"></div>
              <div class="partner-img6"></div>
              <div class="partner-img7"></div>
              <div class="partner-img8"></div>
            </div>
          </TabPane>
          <TabPane label="招标预告">
            <Table :loading="loading" :columns="columns2" :data="trailerList"></Table>
            <Page :page-size="6" style="margin-top: 10px" @on-change="trailerTurnPage" :total="this.trailerTotalPage"  show-elevator show-total/>
          </TabPane>
          <TabPane label="中标公告">
            <Table :loading="loading" :columns="columns1" :data="bidNoticeList.slice((this.bidNoticeCurrentPage-1)*6,this.bidNoticeCurrentPage*6)"></Table>
            <Page :page-size="6" style="margin-top: 10px" @on-change="turnPage" :total="bidNoticeList.length"  show-elevator show-total/>
          </TabPane>
        </Tabs>
        <div class="content-2">
          <ul class="ul-parnert">
            <li style="width: 33%;float: left">●广州市舜德酒店管理有限公司</li>
            <li style="width: 33%;float: left">●江西省国利建设集团有限公司</li>
            <li style="width: 33%;float: left">●西藏凯弘贸易有限公司</li>
            <li style="width: 33%;float: left">●广州比华利庄园有限公司</li>
            <li style="width: 33%;float: left">●江西亿仑建筑公司有限公司</li>
            <li style="width: 33%;float: left">●西藏荣凯贸易有限公司</li>
            <li style="width: 33%;float: left">●广州市景耀房地产中介有限公司</li>
            <li style="width: 33%;float: left">●江西中联建设集团有限公司</li>
            <li style="width: 33%;float: left">●中山市完全物业管理有限公司</li>
          </ul>
        </div>
      </div>
      <div class="sider">
        <div class="login" @keydown.enter="handleLogin">
          <div class="login-con">
            <Card icon="log-in" title="欢迎登录" :bordered="false">
              <div class="form-con">
                <login-form @on-success-valid="handleSubmit"></login-form>
              </div>
            </Card>
          </div>
        </div>
        <div name="helpInfo" class="helpInfo">
          <div style="float: left;width: 100%">
            <div style="float: left"><Icon type="md-cloud-download" size="40" /></div>
            <div style="float: left;font-size: 22px;line-height: 40px;margin-left: 5px;color: black">帮助信息</div>
          </div>
          <div>
            <ul style="float: left;list-style-type: none;margin-top: 5px">
              <li v-for="item in fileList" :key="item.pk" style="height: 26px">
                <div style="float: left;"><Icon type="md-download" size="20" /></div>
                <div style="float: left;line-height: 18px;padding-left: 5px"><a>{{ item.name }}</a></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="mod-content">
      <div class="mod-main"
           style="padding-left: 60px; margin-top: 20px; float: left">
        西藏益森贸易有限公司©版权所有</div>
      <div style="float: right; margin-right: 80px">
        <img id="u666_img" class="img " src="../../assets/images/logo.png"
             style="width: 275px; height: 44px" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import axios from '@/libs/api.request'
import { mapActions } from 'vuex'
import { login, getUserInfo } from '@/api/user'
export default {
  components: {
    LoginForm
  },
  data () {
    return {
      loading: true,
      columns1: [
        {
          title: '中标公告',
          key: 'vdef5',
          align: 'center',
          width: 300
        },
        {
          title: '中标单位',
          key: 'vname',
          align: 'center',
          width: 300
        },
        {
          title: '中标时间',
          key: 'vdef4',
          align: 'center'
        },
        {
          title: '发布时间',
          key: 'dpublishdate',
          align: 'center'
        }
      ],
      columns2: [
        {
          title: '招标预告',
          key: 'vfoundname',
          align: 'center',
          width: 300
        },
        {
          title: '预计招标时间',
          key: 'vdef2',
          align: 'center',
          width: 300
        },
        {
          title: '发布时间',
          key: 'dpublishdate',
          align: 'center'
        }
      ],
      fileList: [
        {name: '文件1', pk: 1},
        {name: '文件2', pk: 2},
        {name: '文件3', pk: 3}
      ],
      bidNoticeList: [],
      bidNoticeCurrentPage: 1,
      trailerList: [],
      trailerCurrentPage: 1,
      trailerTotalPage: 0,
      modal1: false,
      userName: '',
      tempToken: ''
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({userName, password, vcode}) {
      this.userName = userName
      var _this = this
      login(userName, password, vcode).then(res => {
        _this.tempToken = res.token
        if (res !== false) {
          if (res.isRead !== '0') {
            this.$store.commit('setToken', res.token)
            this.getUserInfo().then(res => {
              this.$router.push({
                name: 'home'
              })
            })
          } else {
            _this.modal1 = true
          }
        }
      })
    },
    turnPage (page) {
      this.bidNoticeCurrentPage = page
    },
    getTenderInfo (id) {
      if (id === 1) {
        this.getTenderTrailer()
      }
      if (id === 2) {
        this.getBidNotice()
      }
    },
    getBidNotice () {
      this.loading = true
      var _this = this
      axios.request({
        url: '/getTender/getBidNotice.do',
        method: 'get',
        dataType: 'json'
      }).then(function (res) {
        _this.bidNoticeList = res.bidNoticeList
        _this.loading = false
      })
    },
    getTenderTrailer () {
      this.loading = true
      var _this = this
      axios.request({
        url: '/getTender/getTenderTrailer.do',
        method: 'post',
        params: {
          currentPage: _this.trailerCurrentPage,
          pageSize: 6
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        dataType: 'json'
      }).then(function (res) {
        _this.trailerList = res.trailerList
        _this.trailerTotalPage = res.numm
        _this.loading = false
      })
    },
    trailerTurnPage (page) {
      this.trailerCurrentPage = page
      this.getTenderTrailer()
    },
    /**
     * 回写阅读状态到数据库
     */
    agreeRules () {
      var _this = this
      axios.request({
        url: '/users/agreeRules.do',
        method: 'post',
        data: {
          userid: this.userName
        }
      }).then(function (res) {
        _this.$store.commit('setToken', _this.tempToken)
        getUserInfo(_this.tempToken).then(res => {
          _this.$router.push({
            name: 'home'
          })
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
