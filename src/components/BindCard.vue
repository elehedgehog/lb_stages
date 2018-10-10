<template>
  <div>
    <mt-header title="审批详情" class="lbd-head-normal">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="wrap">
      <img class="header-bg" :src="headerBgImage">
      <div class="header-banner">
        <p class="total-tip">到账金额</p>
        <p class="total-count">{{repayPrincipal || 0}}</p>
      </div>
      <div class="borrow-list">
        <!-- 借款信息 -->
        <div class="group">
          <mt-cell class="first-cell" title="分期期数" :value="periodTotal || 0"></mt-cell>
          <mt-cell title="每期本息" :value="principalAndInterest"></mt-cell>
          <mt-cell title="每期服务费" :value="eachServiceAmount || 0"></mt-cell>
          <mt-cell title="每期还款额合计" :value="eachPayAmount || 0"></mt-cell>
        </div>
        <div class="group" style="display: none">
          <mt-cell class="first-cell" title="其他费用合计" value=""></mt-cell>
          <mt-cell title="履约险/担保费" value=""></mt-cell>
          <mt-cell title="人生意外险" value=""></mt-cell>
          <mt-cell title="其他费用（房款后一次性从银行卡扣除收取）"></mt-cell>
        </div>
      </div>
      <div class="footer">
        <p class="agreement">
          <i :class="{'select': checkTrue}" @click="checkContract"></i>本人已阅读并同意
          <a href="javascript:;" @click="toUserAgreement">《用户授权相关协议》</a>
        </p>
        <div class="binding">
          <a class="bindBtn" :style="bindingStyle" href="javascript:;" @click="bingCardGather">绑卡收款</a>
          <p>金额将直接发放至该银行卡</p>
        </div>
      </div>
    </div>
    <div v-if="false" class="mui-content feedBackbody" id="content">
      <div>
        <div class="describe">
          <div class="title">乐宝口袋</div>
          <div class="describeText">根据你的资质可贷款（元）</div>
          <div class="moneyNum">{{ repayPrincipal }}</div>
          <div class="time">还剩余
            <span class="timeNum">{{ countDown }}</span>关闭放款入口</div>
        </div>
        <div class="messageList">
          <div class="item">
            <p class="item-top">{{ periodTotal }}期</p>
            <p class="item-bottom">贷款期限</p>
          </div>
          <div class="item">
            <p class="item-top" id="repayPrincipal">{{ repayPrincipal }}</p>
            <p class="item-bottom">到账金额</p>
          </div>
          <div class="item">
            <p class="item-top" id="repayAmount">{{ repayAmount }}</p>
            <p class="item-bottom">总还款金额</p>
          </div>
        </div>
      </div>
      <div class="pageBottom">
        <div class="read" id="read">
          <div class="read-contract">
            <i :class="['read-icon',{'on': checkTrue}]" @click="checkContract"></i>
            <span class="right">本人已阅读并同意
              <span class="contract" @click="toLoanContract">
                <!-- <router-link :to="{ name: 'LoanContract', params: {}, query: {} }" tag="a"> -->
                <a>《借款合同》</a>
                <!-- </router-link> -->
              </span>
            </span>
          </div>
        </div>

        <div class="submitBtn">
          <button :class="['submitBtn-text',{'on':checkTrue}]" id="submitBtn-text" @click="bingCardGather">
            <a>绑卡收款</a>
          </button>
        </div>
        <div class="bottom-text">绑卡成功视为收款，审批金额将直接发放至该银行卡</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Toast,
    Indicator,
    MessageBox,
    Cell
  } from 'mint-ui';
  import {
    mobileManager
  } from '../utils/WebInfo.js'
  import {
    IMGBASEURL
  } from '../config/env.js'
  export default {
    data() {
      return {
        headerBgImage: IMGBASEURL + 'lbkimg/approval_bg@2x.png',
        checkTrue: false,
        applyAmount: '', //还款金额
        auditDate: '', //审核时间
        periodTotal: '', //贷款期限
        repayAmount: '', //总还款金额
        repayPrincipal: '', //到账金额
        wecashOrderNo: '',
        productCode: '',
        isUpdate: false,
        approvalItem: {}, //审批数据
        principalAndInterest: 0,
        periodInterest: 0,
        periodRepayment: 0,
        eachServiceAmount: 0, //每一期的服务费
        eachPayAmount: 0, //每一期的还款金额
        bindCardType: '',
      }
    },
    computed: { //检测数值变化
      countDown() {
        if (!this.auditDate) return '';
        var s2 = new Date()
        var runTime = parseInt((this.auditDate + 7 * 24 * 60 * 60 * 1000 - s2.getTime()) / 1000)
        var year = Math.floor(runTime / 86400 / 365);
        runTime = runTime % (86400 * 365);
        var month = Math.floor(runTime / 86400 / 30);
        runTime = runTime % (86400 * 30);
        var day = Math.floor(runTime / 86400);
        runTime = runTime % 86400;
        var hour = Math.floor(runTime / 3600);
        runTime = runTime % 3600;
        var minute = Math.floor(runTime / 60);
        runTime = runTime % 60;
        var second = runTime;
        if (day <= 0 || hour <= 0 || minute <= 0) {
          this.isUpdate = true
          return '0' + '天' + '0' + '小时' + '0' + '分'
        } else {
          return day + '天' + hour + '小时' + minute + '分'
        }

      },
      bindingStyle() {
        // 选择协议之后才能点击绑卡收款
        if (this.checkTrue) {
          return {
            "background-color": '#EC7B28',
            "pointer-events": "auto"
          }
        } else {
          return {
            "background-color": '#999',
            "pointer-events": "none"
          }
        }
      },
      agreeStyle() {
        // 同意协议
        if (this.checkTrue) {
          return {
            "background-image": "../assets/img/consumeEvidence/selected@2x.png"
          }
        } else {
          return {
            "background-image": "../assets/img/consumeEvidence/unselect@2x.png"
          }
        }
      }
    },
    created() {
      // mui('body').on('tap', 'a', function () {
      //   document.location.href = this.href;
      // });
      // mui('body').on('click', 'a', function () {
      //   document.location.href = this.href;
      // });
      mobileManager.hideBottomBar() //隐藏原生底部栏
      this.bindCardType = this.$route.params.type;
      this.getOrderDetailById();
      // if (this.$route.params.type) {
      //   sessionStorage.setItem('type', this.bindCardType)
      // }
    },
    // async mounted() {
    //   await this.getOrderDetailById()
    //   if (this.$route.params.type) {
    //     sessionStorage.setItem('type', this.bindCardType)
    //   }
    // },
    methods: {
      back() {
        this.$router.goBack('')
      },
      showToast: function (msg) {
        Toast({
          message: msg,
          position: 'bottom',
          duration: 3000
        });
      },
      checkContract() {
        // 同意并勾选协议
        this.checkTrue = !this.checkTrue
      },
      bingCardGather() { //绑卡收款按钮
        // if (!this.checkTrue) {
        //   this.showToast('请阅读并同意借款合同')
        // }
        if (this.isUpdate) { //订单过期时执行
          MessageBox.alert('当前订单已过期，请重新申请订单').then(action => {
            this.cancelApplyOrder()
          })
          return
        }
        let params = this.$route.query;
        this.$router.push({
          name: 'SelectBankCard',
          params: {
            type: this.bindCardType
          },
          query: params
        })
      },
      getOrderDetailById() { //获取接口数据
        let params = this.$route.query;
        // params = {
        //   token: "2602731615585215",
        //   borrowOrderCode: "HLBK20180801590809"
        // }
        let webInfo = this.lbdUtil.getWebInfoObj();
        let parasObj = this.$qs.stringify(Object.assign(params, webInfo))
        Indicator.open({
          spinnerType: 'fading-circle'
        });
        this.$http.post(
          this.lbdUtil.host + '/order/borrowOrder/queryApplyOrderDetailById', //更换成申请借款的接口   queryRepayOrderDetailById',
          parasObj
        ).then((res) => {
          Indicator.close();
          if (res.data.status == "0000") {
            let eachPrincipalAmount = res.data.data.repayPrincipal / res.data.data.periodTotal;
            let eachInterest = res.data.data.repayPrincipal * 0.0066 //每一期的利息
            this.principalAndInterest = eachPrincipalAmount + eachInterest; //每一期的本息
            this.principalAndInterest = this.ForDight(this.principalAndInterest, 2);
            this.eachServiceAmount = res.data.data.repayPrincipal * 0.01;
            this.eachServiceAmount = this.ForDight(this.eachServiceAmount, 2);
            this.eachPayAmount = this.principalAndInterest + this.eachServiceAmount;
            this.eachPayAmount = this.ForDight(this.eachPayAmount, 2);
            this.applyAmount = res.data.data.applyAmount
            this.auditDate = res.data.data.auditDate
            this.periodTotal = res.data.data.periodTotal
            this.repayAmount = res.data.data.repayAmount
            this.repayPrincipal = res.data.data.repayPrincipal
            this.wecashOrderNo = res.data.data.wecashOrderNo
            this.productCode = res.data.data.productCode
            if (this.auditDate) {
              setInterval(() => {
                this.auditDate -= 60 * 1000;
              }, 60 * 1000)
            }
          } else {
            this.showToast(res.data.msg)
          }
        }, (err) => {
          console.log(err, '请求失败');
          Indicator.close();
        });
      },
      ForDight(Dight, How) {
        Dight = Math.round(Dight * Math.pow(10, How)) / Math.pow(10, How);
        return Dight;
      },
      toLoanContract() {
        let params = this.$route.query;
        window.location.href = this.lbdUtil.host +
          `/orderApply/contract?productCode=${this.productCode}&orderNo=${this.wecashOrderNo}&token=${params.token}`
      },
      cancelApplyOrder() { //放弃借款
        let params = this.$route.query;
        let webInfo = this.lbdUtil.getWebInfoUrl();
        this.$http.get(
          this.lbdUtil.host + '/orderApply/cancelApplyOrder?' +
          `borrowOrderCode=${params.borrowOrderCode}&token=${params.token}` + webInfo,
        ).then((res) => {
          Indicator.close();
          if (res.data.status === '0000') {
            if (sessionStorage.type == 'bindCardType') {
              // this.$router.push({ name: 'HomePageMiss', params: params, query:{token: this.$route.query.token,channelCode: this.$route.query.channelCode} }) //从首页进入的绑卡跳转放款中页面
              this.$router.push({
                name: 'HomePageLoaning',
                params: params,
              }) //从首页进入的绑卡跳转放款中页面
            } else {
              this.$router.push({
                name: 'Order',
                params: params,
                query: {}
              }) //跳转至入口（首页或者订单中心）
            }
          }
        }, (err) => {
          console.log(err, '请求失败');
        });
      },
      toUserAgreement() {
        // 跳转用户授权相关协议
        this.$router.push({
          path: '/UserAgreement',
          query: {
            orderNo: this.wecashOrderNo,
            token: this.$route.query.token
          }
        })
      }
    }
  }

</script>
<style lang="less" scoped>
  @w: 75rem;
  .describe {
    margin-top: 5/@w;
    text-align: center;
    font-family: Microsoft YaHei;
    padding-bottom: 102/@w;
    background: url('~Img/homePageMiss/miss_top.png')no-repeat center / 100% 100%;
    .title {
      font-size: 32/@w;
      color: #FFFFFF;
      height: 60/@w;
      line-height: 60/@w;
    }
    .describeText {
      margin-top: 29/@w;
      font-size: 28/@w;
      color: #FFDCAB;
    }
    .moneyNum {
      font-size: 70/@w;
      color: #FEFEFE;
      margin-top: 27/@w;

    }
    .time {
      margin-top: 27/@w;
      font-size: 22/@w;
      color: #FEFEFE;
      .timeNum {
        color: #FC5605;
      }
    }
  }

  .messageList {
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 40/@w 0;
    .item {
      text-align: center;
      font-family: Microsoft YaHei;
      p {
        margin: 0;
        padding: 0;
      }
      .item-top {
        font-size: 34/@w;
        color: #FC5605;
      }
      .item-bottom {
        font-size: 28/@w;
        color: #999999;
        margin-top: 10/@w;
      }
    }
  }

  .pageBottom {
    background-color: #F0F0F0;
    height: 640/@w;
  }

  .read {

    position: relative;
    height: 100/@w;
    line-height: 100/@w;
    font-size: 30/@w;
    color: #ACADAD;
    .read-contract {
      text-align: center;
      .read-icon {
        position: absolute;
        top: 35/@w;
        left: 45/@w;
        display: inline-block;
        width: 30/@w;
        height: 29/@w;
        border-radius: 160px;
        border: 1px solid #EC7B28;
        box-sizing: border-box;
        &.on {
          // background-color: #007AFF;
          background-image: url(../assets/img/bank_radio2.png);
          background-repeat: no-repeat;
          background-size: 100%;
          border: none;
        }
      }
      .right {
        position: absolute;
        left: 90/@w;
        .contract {

          display: inline-block;
          top: 40/@w;
          left: 370/@w;

          float: right;
          font-style: normal;
          a {
            color: #1974B7;
          }
        }
      }
    }

  }

  .submitBtn-text {
    border: none;
    background-color: #FFA800;
    margin: 0 24px;
    height: 80/@w;
    width: 88%;
    font-size: 32/@w;
    text-align: center;
    line-height: 80/@w;
    border-radius: 15/@w;
    &.on {
      background-color: #FBC205;
    }
    a {
      color: #FFFFFF;
    }
  }

  .bottom-text {
    font-family: Microsoft YaHei;
    font-size: 21/@w;
    color: #999999;
    ;
    text-align: center;
    padding-top: 30/@w;
  }

  /*  .Router{
    background-color: #fff;
  }
*/

  // 新审批详情页
  .wrap {
    margin-top: 48px;
    position: relative;
    .header-bg {
      width: 100%;
      height: 316/@w;
    }
    .header-banner {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      height: 316/@w;
      width: 100%;
      p {
        text-align: center;
      }
      .total-tip {
        color: white;
        font-size: 28/@w;
        padding: 80/@w 0 15/@w 0;
        margin-bottom: 0;
      }
      .total-count {
        margin: 0;
        padding-bottom: 108/@w;
        color: white;
        font-size: 70/@w;
      }
    }
    .borrow-list {
      .group {
        margin-top: 20/@w;
        background-color: white;
      }
    }
    .footer {
      .agreement {
        margin: 30/@w 30/@w;
        color: #999;
        font-size: 23/@w;
        i {
          display: inline-block;
          width: 30/@w;
          height: 30/@w;
          background-image: url("../assets/img/consumeEvidence/unselect@2x.png");
          background-size: 30/@w 30/@w;
          background-position: center center;
          vertical-align: middle;
          margin-right: 10/@w;
        }
        .select {
          background-image: url("../assets/img/consumeEvidence/selected@2x.png");
        }
        a {
          color: #34affd;
        }
      }
      .binding {
        text-align: center;
        margin: 0 30/@w;
        .bindBtn {
          display: inline-block;
          background-color: #bbb;
          pointer-events: none;
          color: white;
          font-size: 31/@w;
          width: 100%;
          height: 90/@w;
          line-height: 90/@w;
          border-radius: 10/@w;
        }
        p {
          font-size: 21/@w;
          color: #999;
          margin: 15px 0 40px 0;
        }
      }
    }
  }

</style>
<style lang="less">
  @w: 75rem;
  .wrap {
    .group {
      .mint-cell {
        min-height: 40px;
        color: #999;
        font-size: 24/@w;
        .mint-cell-wrapper {
          background-image: none;
        }
        .mint-cell-value {
          color: #999;
          font-size: 24/@w;
        }
      }
      .first-cell {
        color: #4c4c4c;
        font-size: 28/@w;
        .mint-cell-value {
          color: #4c4c4c;
          font-size: 28/@w;
        }
      }
    }
  }

</style>
