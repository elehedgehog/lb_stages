<template>
  <div class="">
		<mt-header title="借款" class="lbd-head-normal">
	    	<!-- <mt-button icon="back" @click="back" slot="left"></mt-button> -->
        <!-- <mt-button icon="message" slot="right"></mt-button> -->
        <img  slot="right" v-if="false" @click="toMessageCenter" class="imgInfor" src="../assets/img/Order/message.png"/>
	   		<img  slot="right" v-if="true" @click="toMessageCenter" class="imgInfor" src="../assets/img/Order/messageNo.png"/>
		</mt-header>
    <div class="miss-header">
      <div class="miss-header-top">
        <p class="loan-des">
          <span class="loan-des-one">一键分期消费</span>
          <!-- <router-link :to="{ name: 'ProductDetail',params:{pageType: true}}" tag="span" class="loan-des-pro">产品说明</router-link> -->
        </p>
        <p class="loan-most">当前分期额度（元）</p>
        <p class="loan-money">{{ repayPrincipal }}</p>
        <p class="loan-loaning">放款中</p>
        <!-- <p class="loan-slogan">我们将在1-2天内将借款汇入您所绑定的银行卡，请耐心等待~</p> -->
      </div>
    </div>
    <!-- <div class="miss-bottom">
      <p class="loan-list-header">
        <span>极速放款</span>
        <span @click="allProduct">全部产品</span>
      </p>
      <ul class="loan-list-detail">
          <li class="OrderOne" v-for="item in quickLoan" :key="item.id">
            <div class="top">
              <img :src="item.productLogo">
              <span class="bag">{{ item.productName }}</span>
              <i></i>
            </div>
            <div class="bottom">
              <span class="bottom-span">
                <p class="up">{{ item.minAmount}}-{{item.maxAmount }}</p>
                <p class="down">预估额度(元)</p>
              </span>
              <span class="bottom-span">
                <p class="up-out"><span class="up">{{ item.applyCount }}</span>人在申请</p>
                <p class="down">期限范围{{ item.periodsScope }}期</p>
              </span>
              <span class="bottom-span" align="right">
                <button class="btnAddData" @click="toHomePage(item)">去申请</button>
              </span>
            </div>
            <div class="tail">{{ item.remark ? item.remark : '暂无描述' }}</div>
          </li>

      </ul>
    </div> -->
    <div class="miss-requirement">
      <!-- <p class="total-loan">累计放款</p>
      <p class="total-number">
        <span>410</span>亿<span>8888</span>万<span>8888</span>元
      </p> -->
      <p class="total-condition">申请条件：借款人需22—55周岁，非在校生</p>
    </div>
	</div>
</template>
<script>
  import { Toast,Indicator } from 'mint-ui';
  import { mobileManager } from '../utils/WebInfo.js'
  export default{
		name:'HomePageMiss',
		data(){
			return{
        repayPrincipal: '',
        productCode: '',
        channelCode: '',
        token: '',
        quickLoan: {},
        oneLoanMaxAmount: '',
        productCode: '',
        channelCode : '',
        token: '',
        nowGrantStep: '', //当前需要进行的授权
        nowGrantStepDetails: {
          1: '实名认证',
          2: '身份证认证',
          3: '运营商认证',
          4: '信用卡邮箱认证',
          5: '补充信息认证',
        },
        nowGrantStatus: '',  //	当前认证项的状态
        nowGrantStatusDetails:{
          3: '失败',
          4: '信息过期',
        },
        isLoginStatus: '',
        appParams: {},
        productName: '',
        productSupermarketId: '',

			}
    },
    created() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      mobileManager.clearHomeHistory()  //清首页缓存
      mobileManager.showBottomBar()  //显示原生底部栏
      // mobileManager.enableRefresh(false)  //下拉刷新
      let paramUrl = document.location.href
      let arr = paramUrl.split('?')
      if (arr[1]) {
        let newArr = arr[1].split('&')
        for(var i=0; i < newArr.length; i++) {
          var item = newArr[i]
          if (/repayPrincipal=/.test(item)) {
              this.repayPrincipal = item.split('=')[1];
          }
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
      if(!this.repayPrincipal){
        this.repayPrincipal = this.$route.params.repayPrincipal
      }
      sessionStorage.repayPrincipal = this.repayPrincipal
      if(this.token){
        sessionStorage.QuickLoanIndexChannelCode = this.channelCode
        sessionStorage.QuickLoanIndextToken = this.token
        sessionStorage.productCode = this.productCode
      } else if(!sessionStorage.QuickLoanIndextToken){
        this.productCode = sessionStorage.QuickLoanIndexProductCode
        this.channelCode = sessionStorage.QuickLoanIndexChannelCode
        this.token = sessionStorage.QuickLoanIndextToken

      }

    },
    mounted() {
      this.getListThirdProduct()
      window.loginOut = this.loginOut
    },
		methods:{
			back(){
				this.$router.goBack('')
      },
      showToast:function(msg){
          Toast({
            message: msg,
            position: 'bottom',
            duration: 3000
          });
      },
      loginOut(){  //退出登录
        this.isLoginStatus !='1234'
       },
      async isLogin() { //用户是否登录接口
        let webInfo = this.lbdUtil.getWebInfoUrl();
        Indicator.open({ spinnerType: 'fading-circle' });
        if(!this.token) this.token = sessionStorage.QuickLoanIndextToken
        let url = this.lbdUtil.host + '/user/webUserLogin/isLogin?'+ `token=${sessionStorage.QuickLoanIndextToken}` + webInfo
        let res
        try {
          res = await this.$http.get(url);
        }
        catch (e) {
          this.showToast('网络出错');
          Indicator.close();// 加载不到逻辑
        }
        Indicator.close();  //加载后执行
        this.isLoginStatus = res.data.status
      },
       toMessageCenter() {   //跳转消息中心
        this.$router.push({ name: 'MessageCenter' })
      },
      getListThirdProduct(){
        Indicator.open({ spinnerType: 'fading-circle' });
        this.$http.get(
          this.lbdUtil.host + '/product/listThirdProduct?type=2',
          ).then((res) => {
             Indicator.close();
            if(res.data.status =="0000"){
                this.quickLoan = res.data.data

            } else {
                this.showToast(res.data.msg);
            }
          },(err)=>{
            Indicator.close();
            this.showToast('网络出错');
					});
      },
       async toHomePage(item){   //跳转急速贷款产品详情页
        await this.isLogin()
        if(this.isLoginStatus !== '0000') {
          mobileManager.startLoginActivity()  //跳转app首页
          return
        }
        if(sessionStorage.QuickLoanIndextToken){
          this.clickRecord(item.productName, item.id)
        }

        sessionStorage.QuickLoanIndexId = item.id
        let id = item.id
        this.$router.push({ name: 'QuickLoanIndex', params: {id: id, productCode: sessionStorage.QuickLoanIndexProductCode, channelCode: sessionStorage.QuickLoanIndexChannelCode, token: sessionStorage.QuickLoanIndextToken, type: 'homePageLoaning'}, query:{id: id} })

      },
      clickRecord(productName,productSupermarketId){   //申请人数接口
        let webInfo = this.lbdUtil.getWebInfoUrl();
          Indicator.open({ spinnerType: 'fading-circle' });
          this.$http.get(
          this.lbdUtil.host + `/product/clickRecord?productName=${productName}&productSupermarketId=${productSupermarketId }&channelCode=${sessionStorage.QuickLoanIndexChannelCode}&token=${sessionStorage.QuickLoanIndextToken}` + webInfo,
          ).then((res) => {
             Indicator.close();
            if(res.data.status =="0000"){
            } else {
              this.showToast(res.data.msg)
            }
          },(err)=>{
            this.showToast('网络出错');
            Indicator.close();
					});
      },

      allProduct(){ //全部产品跳转
        mobileManager.startWecashActivity()
      }
		}
	}
</script>
<style scoped lang="less">
  @w:72rem;
  .miss-header{
    padding-top: 44px;
    color: #fff;
    &::after{
      content: '';
      clear: both;
    }
  }
  .miss-header-top{
    width: 100%;
    height: 350/@w;
    background-image: url(../assets/img/homePageMiss/miss_top.png);
    background-repeat: no-repeat;
    background-size:100%;
    p{
      margin: 0;
      &.loan-des{
      position: relative;
      padding: 30/@w 0 20/@w 40/@w;
      span{
        display: inline-block;
        &.loan-des-one{
          position: relative;
          height: 40/@w;
          line-height: 40/@w;
          left: 40/@w;
          font-size: 26/@w;
          &:before{
            content: '';
            display: block;
            left: -35/@w;
            top: 5/@w;
            position: absolute;
            width: 28/@w;
            height: 28/@w;
            background-image: url(../assets/img/homePageMiss/one_loan.png);
            background-repeat: no-repeat;
            background-size:100%;
          }
        }
        &.loan-des-pro{
          position: absolute;
          right: 0;
          top: 20/@w;
          padding: 10/@w 32/@w;;
          font-size: 28/@w;
          border-top-left-radius: 50/@w;
          border-bottom-left-radius: 50/@w;
          background-color: #F9761E;
          text-align: center;
        }
      }
    }
    &.loan-most{
      font-size: 28/@w;
      text-align: center;
    }
    &.loan-money{
      margin: 0;
      font-size: 70/@w;
      text-align: center;
      color: #FEFEFE;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    &.loan-loaning{
      color: #FD3C04;
      text-align: center;
    }
    &.loan-slogan{
      text-align: center;
      color: #FFDCAB;
      font-size: 24/@w;
    }
    }

  }
  .miss-header-bottom{
    padding: 27/@w 0 20/@w 0;
    background-color: #fff;
    button{
      border: none;
      outline: none;
      height: 75/@w;
      line-height: 75/@w;
      width: 400/@w;
      background-color: #FFA800;
      color: #fff;
      border-radius: 10/@w;
      font-size: 32/@w;
    }
  }
  .miss-bottom{
    margin-top: 20/@w;
    background-color: #fff;
    &::before{
      display:block;
      content:"clear";
      height:0;
      clear:both;
      overflow:hidden;
      visibility:hidden;
    }
    &::after{
      display:block;
      content:"clear";
      height:0;
      clear:both;
      overflow:hidden;
      visibility:hidden;
    }
    .loan-list-header{
      margin: 0 30/@w;
      height: 80/@w;
      line-height: 80/@w;
      background-color: #fff;
      span{
        display: inline-block;
        &:nth-child(1){
          position: relative;
          left: 20/@w;
          font-size: 30/@w;
          color: #4d4d4d;
          &:before{
            position: absolute;
            top: 15/@w;
            left: -20/@w;
            content: '';
            display: block;
            height: 50/@w;
            width: 6/@w;
            background-color: #FBC205;
          }
        }
        &:nth-child(2){
          float: right;
          font-size: 28/@w;
          color: #4d4d4d;
        }
      }

    }
  }
  .miss-banner{
    width: 100%;
    height: 200/@w;
    margin-top: 20/@w;
    background-color: #fcc;
  }
  .miss-requirement{
    margin: 30/@w;
    text-align: center;
    color: #999999;
   p{
      margin: 0;
      font-size: 26/@w;
      letter-spacing: 1px;
      &.total-loan{
        position: relative;
        width: 130/@w;
        margin: 0 auto;
        left: 25/@w;
        white-space: nowrap;
        &:before{
          content: '';
          position: absolute;
          left: -25/@w;
          width: 30/@w;
          height: 30/@w;
          background-image: url(../assets/img/homePageMiss/total_lend.png);
          background-repeat: no-repeat;
          background-size:100%;

        }
      }
      &.total-number{
        margin: 10/@w 0;
        >span{
          color: #808080;
          font-weight: bold;
          margin: 0 10/@w;

        }
      }
      &.total-condition{
        font-size: 26/@w;
      }
    }
  }
  .imgInfor{
    position: absolute;
    top: 15px;
    right: 37/@w;
    width: 44/@w;
  }
  .OrderOne{
    background: #fff;
    border-top: solid 10/@w #F0F0F0;
    letter-spacing: 1px;
    .top{
      position: relative;
      height: 80/@w;
      line-height: 80/@w;
      margin: 0 30/@w;
      border-bottom: 1px solid #F0F0F0;
      img{
        float: left;
        width: 40/@w;
        height: 40/@w;
        margin: 20/@w 15/@w 0 12/@w;
      }
      span{
        display: inline-block;
        &.bag{
          float: left;
          width: 180/@w;
          font-size: 30/@w;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &.time{
          float: left;
          color: #ABABAB;
        }
        &.spanData{
          float: right;
          color: lightsalmon;
        }
      }
      i{
        position: absolute;
        top: 0;
        right: 30/@w;
        display: inline-block;
        width: 30/@w;
        height: 40/@w;
        background-image: url(../assets/img/homePageMiss/new_icon1.png);
        background-repeat: no-repeat;
        background-size:100%;
      }
    }
    .bottom{
      height: 140/@w;
      margin: 0 30/@w;
      justify-content: space-around;
      text-align: center;
      border-bottom: 1px solid #F0F0F0;
      .bottom-span{
        display: inline-block;
        width: 33.3%;
        float:left;
      }
      p.up-out{
        margin-top: 20/@w;
        margin-bottom: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .up{
        margin-top: 20/@w;
        font-family:Microsoft YaHei;
        font-size: 30/@w;
        color: #FC5605;
        margin-bottom: 0;
        text-align: center;
        width:100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .down{
        margin-top: 10/@w;
        font-family:Microsoft YaHei;
        font-size: 26/@w;
        color: #999999;
        text-align: center;
      }

      .btnAddData{
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
    .tail{
      @margin:60/@w;
      width: calc(~"100% - @{margin}");
      margin: 0 30/@w;
      height: 70/@w;
      line-height: 70/@w;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #A0A0A0;
    }

  }

</style>
