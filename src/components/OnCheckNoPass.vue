<template>
  <div>
     <mt-header title="审批未通过" class="lbd-head-normal">
        <!-- <mt-button icon="back" slot="left" @click="back"></mt-button> -->
    </mt-header>
    <div class="mui-content" id="content">
			<div class="stateInfo">审批未通过</div>
		</div>
		<div class="OrderDetail">
			<ul class="OrderDetailList">
	            <li class="">
	            	<a href="#">
	                    <span class="applyAmount">{{applyAmount}}元</span>
	                    <div class="mui-media-body">申请金额</div>
	            	</a>
	            </li>
	            <li class="">
	            	<a href="#">
	                    <span class="">12期</span>
	                    <div class="mui-media-body">产品期数</div>
	            	</a>
	            </li>
	            <li class="">
	            	<a href="#">
	                    <span class="">3-4小时</span>
	                    <div class="mui-media-body">审批预计时间</div>
	            	</a>
	            </li>
		    </ul>
		</div>
    <!--OnLoan贷款审批中-->
		<div class="lbbImg" v-if="false">
			<img src="../assets/img/reminder.png"/>
		</div>
    <div style="clear: both;"></div>
     <!--OnRefuse审批拒绝-->
    <!-- <div class="question">
			<div class="title"><span class="title-text">常见问题</span></div>
			<div class="question-list">
           <ul class="mui-table-view">
				        <li :class="['mui-table-view-cell','mui-collapse',{'mui-active': authenticationPop}]" @click="authenticationPop=!authenticationPop">
				            <a :class="['mui-navigate-right',{ less: authenticationPop }]"><span>申请借款需要做哪些认证？</span></a>
				            <div class="mui-collapse-content"  v-if="authenticationPop">
				                <p>用户注册之后，需要完成信息认证才可以申请借款。其中，认证信息有：个人信息、手机运营商、信用卡（邮箱）、工作单位、紧急联系人等信息。信息越完善，审批通过率和信用额度就越高。</p>
				            </div>
				        </li>
				         <li :class="['mui-table-view-cell', 'mui-collapse',{'mui-active': auditPop}]"  @click="auditPop=!auditPop">
				            <a :class="['mui-navigate-right',{ less: auditPop }]"><span>提交申请后，多久我可以收到审核结果？</span></a>
				            <div class="mui-collapse-content" v-if="auditPop">
				                <p>审核结果会在提交申请后24小时内以短信的形式发送至申请手机，如遇周末或节假日顺延。您未能及时接听审批人员来电也会影响审核进度，请留意来电并耐心等待审核结果。</p>
				            </div>
				        </li>
				         <li :class="['mui-table-view-cell','mui-collapse',{ 'mui-active': accountPop },{'mui-active': accountPop}]" @click="accountPop=!accountPop">
				            <a :class="['mui-navigate-right',{ less: auditPop }]"><span>放款多久到账？</span></a>
				            <div class="mui-collapse-content" v-if="accountPop">
				                <p>若您的借款申请已经审核通过，在您点击“确认借款”按钮后，工作日正常1小时内放款到账， 最晚下一个工作日早上到账。具体到账时间以收款银行到账通知为准。</p>
				            </div>
				        </li>
				    </ul>
			</div>
		</div> -->
		<!-- <div class="buttom">
			<span class="buttomText">请耐心等待审批结果,如有疑问可拨打客服专线</span>
			<span class="phoneNum">4008116669</span>
		</div> -->
		<div class="loading" id="confirmRead" v-if="onRefusePop">
			<p class="onCheck-popup">
				<span class="popup-title">审批未通过</span>
				<span class="popup-content">由于您的资质不符，暂未通过申请，请3个月后重新尝试，感谢您的支持</span>
				<span class="popup-btn" @click="onRefusePop=!onRefusePop">知道了</span>
			</p>
		</div>

  </div>
</template>
<script>
  export default {
      data(){
        return{
            authenticationPop: false,
            auditPop: false,
            accountPop: false,
            onRefusePop: true,    //资料重填
            applyAmount: ''

        }
      },
      mounted(){
        let stepName = this.$route.params.stepName
        // let paramUrl = `http://119.23.148.208:8084/appServer/webpage/hybridAppForWeb/lb_stages/dist/index.html#/OnCheckNoPass?applyAmount=4000.00&productCode=H5_LBFQ&channelCode=LBFQ&token=2080510230093747`
        let paramUrl = document.location.href
        let arr = paramUrl.split('?')
        if (arr[1]) {
          let newArr = arr[1].split('&')
          for(var i=0; i < newArr.length; i++) {
            var item = newArr[i]
            if (/applyAmount=/.test(item)) {
                this.applyAmount = item.split('=')[1];
                sessionStorage.setItem('applyAmounts', this.applyAmount)
            }
            if(!this.applyAmount){
              this.applyAmount = sessionStorage.applyAmounts
            }
          }
        }
      },
       methods:{
          back(){
           this.$router.goBack('')
          },
       }
  }
</script>
<style lang="less">
	@w:75rem;
  .stateInfo{
    height: 210/@w;
    width: 100%;
    text-align: center;
    line-height: 210/@w;
    font-size: 35/@w;
    background-color: #FBC205;
  }
  .OrderDetail>ul{
    background-color: #FFFFFF !important;
    >li{
      border: none !important;
      >span{
        font-size: 32/@w; ;
        color: #FC4601;
      }
      >div{
        font-size: 28/@w !important;
        color: #A0A0A0 !important;
        height: 50/@w !important;
        line-height: 50/@w !important;
        margin-top:8/@w !important;
      }
    }
  }

  .question{
    background-color: #FFFFFF;
    color: #8D8E8E;
    .title{
      height: 80/@w;
      position: relative;
      .title-text{
        font-size: 30/@w;
        height: 40/@w;
        line-height: 40/@w;
        position: absolute;
        top: 50%;
        margin-top: -20/@w;
        display: inline-block;
        border-left: 2px solid #FBC205;
        margin-left: 40/@w;
        padding-left: 20/@w;
      }
    }
  }
  .question-list{
    font-size: 80/@w;
    margin-top: 30/@w;
    >ul>li{
      // margin-top: 20/@w;
      list-style: none;
    }
  }
  .buttom{
    width: 100%;
    position:absolute;
      bottom:60/@w;
    background-color: #FFFFFF;
    font-size: 28/@w;
    text-align: center;
  }
  .buttomText{
    display: block;
    color:#8D8E8E;
  }
  .phoneNum{
    display: block;
    margin-top: 10/@w;
    color: #0579BA;
  }

  .lbbImg{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
  }
  .lbbImg>img{
    position: relative;
    width: 700/@w;
    height: 600/@w;
    left: 50%;
    margin-left: -350/@w;
    margin-top: 80/@w;
  }
  .OrderDetailList{
    margin: 0 1%;
    >li{
      float: left;
      width: 23.3%;
      padding: 5%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span{
        font-size: 33/@w;
        color: #FC4601;
      }
      div{
        margin-top: 10/@w;
        color: #A0A0A0;
      }
    }
  }
  .Router{
    background-color: #fff!important;
  }

  .question{
    background-color: #FFFFFF;
    color: #8D8E8E;
  }
  .question{
    .title{
      height: 80/@w;
      position: relative;
      .title-text{
        font-size: 30/@w;
        height:40/@w;
        line-height: 40/@w;
        position: absolute;
        top: 50%;
        margin-top: -20/@w;
        display: inline-block;
        border-left: 2px solid #FBC205;
        margin-left: 40/@w;
        padding-left: 20/@w;
      }
    }
  }
  .question-list{
    font-size: 28/@w;
    margin-top: 30/@w;

  }
  .buttom{
    width: 100%;
    position:absolute;
      bottom:60/@w;
    background-color: #FFFFFF;
    font-size: 28/@w;
    text-align: center;
  }
  .buttomText{
    display: block;
    color:#8D8E8E;
  }
  .phoneNum{
    display: block;
    margin-top: 10/@w;
    color: #0579BA;
  }

  .lbbImg{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
  }
  .lbbImg>img{
    position: relative;
    width: 700/@w;
    height: 600/@w;
    left: 50%;
    margin-left: -350/@w;
    margin-top: 80/@w;
  }
   .mui-table-view-cell>a:not(.mui-btn) {
    position: relative;
    display: block;
    overflow: hidden;
    margin: -11/@w -15/@w;
    padding: inherit;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: inherit;
    height: 80/@w;
  }
  .mui-navigate-right:after, .mui-push-right:after {
    right: 15/@w;
    content: '\e583';
  }
  .mui-navigate-right:after, .mui-push-left:after, .mui-push-right:after {
      font-family: Muiicons;
      font-size: inherit;
      line-height: 1;
      position: absolute;
      top: 50%;
      display: inline-block;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      text-decoration: none;
      color: #bbb;
      -webkit-font-smoothing: antialiased;
  }
  .mui-table-view-cell {
    position: relative;
    // padding: 12/@w 30/@w;
  }
  .mui-table-view-cell:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
.mui-table-view-cell.mui-collapse.mui-active {
    margin-top: -1px;
    background-color: #eee;
    // padding-bottom: 10/@w;
}
.mui-table-view-cell.mui-collapse>.mui-navigate-right:after{
    display: inline-block;
    right:60/@w;
    width: 32/@w;
    height: 32/@w;
    content: '';
    background-image: url(../assets/img/more.png);
    background-repeat: no-repeat;
    background-size: 100%;
}
.mui-table-view-cell.mui-collapse>.mui-navigate-right.less:after{
    background-image: url(../assets/img/less.png);
}

.mui-table-view-cell.mui-collapse>.mui-collapse-content{
    position: relative;
    overflow: hidden;
    // margin: 11/@w -15/@w -11/@w;
    padding: 15/@w 30/@w;
    background: #fff;
    >p{
      padding:0;
      margin:0;
    }
}
.mui-table-view-cell::after{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 30/@w;
    height: 1px;
    content: '';
    // -webkit-transform: scaleY(0.5);
    // transform: scaleY(0.5);
    background-color: #c8c7cc;
}
.mui-table-view-cell.mui-active {
    background-color: #eee!important;
}
.mui-navigate-right>span {
    position: absolute;
    top: 20/@w;
    left: 40/@w;
    font-size: 30/@w;
}
.mui-table-view:before {
    position: absolute;
    right: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
    top: -1px;
}
.mui-table-view {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
}

.mui-table-view:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.loading{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0,0,0,.3);
  color:#8f8f94;
}
.onCheck-popup{
  position: absolute;
  width: 70%;
  height: 360/@w;
  z-index: 1000;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: inline-block;
  background: #fff;
  text-align: center;
  border-radius: 10/@w;
  padding-top: 30/@w;
  &.reload{
    height: 340/@w;
  }
}
.popup-title{
  display: block!important;
}
.popup-title,.popup-content,.popup-btn{
  display: inline-block;
  font-size:30/@w;
}
.popup-content{
  display: block!important;
  line-height: 40/@w;
  text-align: left;
  padding: 30/@w;
}
.popup-btn{
  border: 1px solid #BBBBBB;
  border-radius: 10/@w;
  padding: 10/@w 50/@w;
}
</style>
