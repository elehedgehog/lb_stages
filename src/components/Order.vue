<template>
  <div>
    <mt-header title="订单中心" class="lbd-head-normal">
      <!-- <mt-button icon="back" @click="back" slot="left"></mt-button> -->
      <!-- <mt-button icon="message" slot="right"></mt-button> -->
      <img slot="right" v-if="false" @click="toMessageCenter" class="imgInfor" src="../assets/img/Order/message.png" />
      <img slot="right" v-if="true" @click="toMessageCenter" class="imgInfor" src="../assets/img/Order/messageNo.png" />
    </mt-header>
    <div class="notice">
      <img src="../assets/img/Order/notice.png">您总共申请了{{ productNumber}}个贷款产品</div>
    <scroller :on-refresh="refresh" :on-infinite="infinite" :noDataText="'没有订单啦!'">
      <ul>
        <li class="OrderOne" v-for="item in orderList" :key="item.id">
          <div class="top">
            <img src="../assets/img/Order/kouDai.png">
            <span class="bag">{{ item.productName }}</span>
            <span class="time">{{ item.createdAt }}</span>
            <span class="spanData">
              {{ item.stepStatus===1? orderStatus[item.stepName] : (item.stepStatus===2 ? orderStatuSsuccess[item.stepName] : orderStatusFail[item.stepName])
              }}
            </span>
          </div>
          <div class="bottom">
            <span class="bottom-span">
              <p class="up">{{ item.applyAmount }}</p>
              <p class="down">金额(元)</p>
            </span>
            <span class="bottom-span">
              <p class="up">{{ item.periodTotal }}期</p>
              <p class="down">期限</p>
            </span>
            <a href="javascript:;" class="evidenceBtn" @click="gotoConsumeEvidence(item)" v-show="item.status == '64' ? true : false">上传消费凭证</a>
            <span class="bottom-span" align="right">
              <button class="btnAddData" @click="toNextPage(item)" v-if="(item.stepName=='还款'&&item.stepStatus=='1') || (item.stepName=='绑卡收款'&& item.stepStatus=='1') ">{{ item.stepStatus===1? stepName[item.stepName] : (item.stepStatus===2 ? stepSuccess[item.stepName] : stepFail[item.stepName])
                }}
              </button>
            </span>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)
  import {
    Toast
  } from 'mint-ui';
  import {
    mobileManager
  } from '../utils/WebInfo.js'
  import {
    LBFQCHANNELCODE,
    LBFQPRODUCTCODE
  } from '../config/env.js'
  export default {
    name: 'Order',
    data() {
      return {
        orderList: {},
        newOrderList: {},
        token: '',
        productCode: '',
        channelCode: '',
        borrowOrderCode: '', //订单编号
        borrowOrderId: '', //订单ID
        pageNum: 0,
        pageSize: 10,
        isLastPage: false,
        productNumber: 0, //贷款产品数量
        resStatus: '',
        type: 'orderType',
        //按钮的内容
        stepStatus: {
          1: '中',
          2: '成功',
          3: '失败'
        },
        stepName: {
          '绑卡收款': '去绑卡',
          '审批': '查看详情',
          '还款': '去还款',
          '放款': '查看详情',
          '确定贷款': '去确定贷款',
          '资料重填': '去补充'
        },
        stepFail: {
          '审批': '查看详情',
          '绑卡收款': '绑卡收款失败',
          '还款': '还款失败',
          '放款': '查看详情',
          '确定贷款': '已拒绝贷款',
          '资料重填': '补充失败'
        },
        stepSuccess: {
          '审批': '审批成功',
          '绑卡收款': '绑卡收款成功',
          '还款': '已还清',
          '放款': '已放款',
          '确定贷款': '确定贷款',
          '资料重填': '补充成功'
        },
        //stepName==当前订单审核步骤名称	如：1审批、2绑卡收款、3确定贷款、4放款、5还款
        //stepStatus==当前订单最新审核状态（1进行中，2成功，3失败）
        //订单状态的显示内容
        //stepStatus=1
        orderStatus: {
          '审批': '审批中',
          '绑卡收款': '审批通过',
          '确定贷款': '绑卡成功',
          '放款': '放款中',
          '还款': '还款中',
          '资料重填': '重填资料'
        },
        //stepStatus=2
        orderStatuSsuccess: {
          '审批': '审批成功',
          '绑卡收款': '绑卡成功',
          '确定贷款': '确定贷款',
          '放款': '已放款',
          '还款': '已结清',
          '资料重填': '重填成功'
        },
        //stepStatus=3
        orderStatusFail: {
          '审批': '复审失败',
          '绑卡收款': '绑卡失败',
          '确定贷款': '已拒绝',
          '放款': '放款失败',
          '还款': '还款失败',
          '资料重填': '重填失败'
        },
      }
    },
    created() {
      // mobileManager.hideBottomBar() //隐藏原生底部栏
      sessionStorage.setItem('type',this.type)
      let paramUrl = document.location.href
      let arr = paramUrl.split('?')
      if (arr[1]) {
        let newArr = arr[1].split('&')
        for (var i = 0; i < newArr.length; i++) {
          var item = newArr[i]
          if (/productCode=/.test(item)) {
            this.productCode = item.split('=')[1];
          }
          if (/channelCode=/.test(item)) {
            this.channelCode = item.split('=')[1];
          }
          if (/token=/.test(item)) {
            this.token = item.split('=')[1];
          }
        }
      }
      if (!sessionStorage.orderToken) {
        sessionStorage.orderProductCode = this.productCode
        sessionStorage.orderChannelCode = this.channelCode
        sessionStorage.orderToken = this.token
      }

    },
    mounted() {
      this.getOrderListData()
    },
    methods: {
      back() {
        this.$router.goBack('repayOrder')
      },
      gotoConsumeEvidence(item) {
        this.$router.push({
          name:"ConsumeEvidence",
          params: {
            orderCode: item.code,
            token: sessionStorage.orderToken
          }
        })
      },
      showToast: function (msg) {
        Toast({
          message: msg,
          position: 'bottom',
          duration: 3000
        });
      },
      // 上拉刷新
      refresh(next) {
        setTimeout(async () => {
          this.pageNum = 0;
          await this.getOrderListData();
          if (this.resStatus == '0000') {
            next(true)
          } else {
            next();
          }
        }, 1000);
      },
      infinite(next) {
        if (this.isLastPage) {
          setTimeout(() => {
            next(true);
          }, 1000);
        } else {
          setTimeout(async () => {
            if (this.resStatus == '0000') {
              this.pageNum++;
              await this.getOrderListData();
              next(true)
            } else {
              next(true);
            }
          }, 1000);

        }
      },
      toMessageCenter() { //跳转消息中心
        this.$router.push({
          name: 'MessageCenter',
          params: {},
          query: {}
        })
      },

      getOrderListData() { //获取订单列表数据
        let webInfo = this.lbdUtil.getWebInfoObj();
        let params = {
          orderListType: '3',
          pageNum: 0,
          pageSize: 10,
          token: sessionStorage.orderToken, // "2333706631537350", //
          productCode: sessionStorage.orderProductCode,
          channelCode: sessionStorage.orderChannelCode,
          // productCode: LBFQPRODUCTCODE, // 乐宝分期渠道号和产品号 modify by qph
          // channelCode: LBFQCHANNELCODE
        }
        let parasObj = this.$qs.stringify(Object.assign(params, webInfo))
        this.$http.post(
          // this.lbdUtil.host + '/order/borrowOrder/queryLBDOrderList',
          this.lbdUtil.host + '/order/borrowOrder/queryOrderByChannel', //乐宝分期订单中心新接口 modify by qph
          parasObj
        ).then((res) => {
          this.resStatus = res.data.status
          if (res.data.status == "0000") {
            this.orderList = res.data.data.orderList;
            this.productNumber = res.data.data.pageTotal
            if (this.orderList.length) {
              if (this.pageNum === 0) {
                this.newOrderList = [];
                this.isLastPage = false;
              }
              this.newOrderList = this.newOrderList.concat(this.orderList);
              if (this.orderList.length < this.pageSize) {
                this.isLastPage = true;
              }
            } else {
              this.isLastPage = true;
            }
          }
        }, (err) => {
          console.log(err, '请求失败');
        });
      },
      toNextPage(key) {
        let stepName = key.stepName
        this.borrowOrderCode = key.code
        this.borrowOrderId = key.id
        let params = {
          productCode: sessionStorage.orderProductCode,
          token: sessionStorage.orderToken,
          borrowOrderCode: this.borrowOrderCode,
          borrowOrderId: this.borrowOrderId
        }
        if (key.stepDes === '待绑卡') {
          this.$router.push({
            name: 'BindCard',
            params: {},
            query: params
          })
        } else if (key.stepDes === '审核失败') {
          this.$router.push({
            name: 'OnCheck',
            params: {
              stepName
            },
            query: {}
          })
        } else if (key.stepDes === '审核中') {
          this.$router.push({
            name: 'OnCheck',
            params: {
              stepName
            },
            query: {}
          })
        } else if (key.stepDes === '重填资料') {
          this.$router.push({
            name: 'OnCheck',
            params: {
              stepName
            },
            query: {}
          })
        } else if (key.stepDes === '还款中') {
          this.$router.push({
            name: 'RepaymentOrderDetail',
            params: {},
            query: params
          })
        } else if (key.stepDes === '放款中') {
          this.$router.push({
            name: 'OnLoan',
            params: {},
            query: {}
          })
        }
      },
    },

  }

</script>
<style lang="less" scoped>
  @w: 75rem;
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #FFA800;
    -webkit-box-shadow: none;
    box-shadow: none;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index: 1;
    .imgTopArrow {
      position: absolute;
      left: 37/@w;
      width: 12/@w;
      height: 34/@w;
    }
    .imgInfor {
      position: absolute;
      top: 11px;
      right: 37/@w;
      width: 44/@w;
    }
    .title {
      font-family: Microsoft YaHei;
      font-size: 32/@w;
      color: #ffffff;
    }

  }

  .notice {
    height: 70/@w;
    line-height: 70/@w;
    background-color: #FFC659;
    color: #fff;
    z-index: 1;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    img {
      width: 25/@w;
      height: 22/@w;
      vertical-align: middle;
      margin: 8/@w 7/@w 12/@w 26/@w;
    }
  }



  .OrderOne {
    background: #fff;
    padding-top: 10/@w;
    border-top: solid 15/@w #DEDEDE;
    .top {
      // display: flex;
      // justify-content: space-around;
      height: 80/@w;
      line-height: 80/@w;
      padding: 0 60/@w;
      img {
        float: left;
        width: 40/@w;
        height: 40/@w;
        margin: 20/@w 15/@w 0 12/@w;
      }
      span {
        display: inline-block;
        &.bag {
          float: left;
          width: 180/@w;
          font-size: 32/@w;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &.time {
          float: left;
          color: #ABABAB; // margin-left: 30/@w;
        }
        &.spanData {
          float: right;
          color: lightsalmon;
        }
      }

    }
    .bottom {
      height: 160/@w; // display: flex;
      .evidenceBtn {
        display: inline-block;
        color: #FC5605;
        margin-top: 5/@w;
      }
      .bottom-span {
        display: inline-block;
        width: 33.3%;
        float: left;
        vertical-align: top;
      }
      justify-content: space-around;
      .up {
        font-family: Microsoft YaHei;
        font-size: 36/@w;
        color: #FC5605;
        margin-bottom: 0;
        text-align: center;
      }
      .down {
        margin-top: 0;
        font-family: Microsoft YaHei;
        font-size: 26/@w;
        color: #999999;
        text-align: center;
      }
      .btnAddData {
        width: 138/@w;
        height: 60/@w;
        background-color: #FFA800;
        border-radius: 16/@w;
        border: none;
        margin: 40/@w 60/@w 30/@w 0;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

  }

  .downInfor {
    margin: 30/@w 90/@w 80/@w;
    margin-top: 30/@w;
    display: flex;
    .hr {
      width: 120/@w;
    }
    span {
      font-family: Microsoft YaHei;
      font-size: 18/@w;
      color: #999999;
    }
  }

</style>
