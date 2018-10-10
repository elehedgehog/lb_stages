<template>
  <div>
     <!-- <mt-header title="贷款审批中" class="lbd-head-normal">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header> -->
    <div class="mui-content feedBackbody" id="content">
			<div class="describe">
				<div class="describeText">根据你的资质可贷款(元)</div>
				<div class="moneyNum">40000.00</div>
				<div class="time">还剩余<span class="timeNum">6天23小时59分</span>关闭放款入口</div>
			</div>
			<div class="messageList">
				<div class="item">
					<span class="item-left">贷款期限</span>
					<span class="item-right">12期</span>
				</div>
				<div class="item">
					<span class="item-left">到账金额</span>
					<span class="item-right" id="repayPrincipal"></span>
				</div>
				<div class="item">
					<span class="item-left">总还款金额</span>
					<span class="item-right" id="repayAmount"></span>
				</div>
			</div>
			<div class="read" id="read">
				<div class="read-contract">
          <i :class="['read-icon',{'on': checkTrue}]" @click="checkContract"></i>
					<span>本人已阅读并同意</span>
				  <span class="contract"><a style="color:#1974B7;margin-left:-5px;">《借款合同》</a></span>
				</div>
			</div>
			<div class="submitBtn">
				<button :class="['submitBtn-text',{'on':checkTrue}]" id="submitBtn-text"><a>绑卡收款</a></button>
				<div class="bottom-text">绑卡成功视为收款，审批金额将直接发放至该银行卡</div>
			</div>
		</div>
  </div>
</template>
<script>
  export default {
      data(){
        return{
          checkTrue: false,

        }
      },
      mounted(){

      },
       methods:{
         checkContract(){
           this.checkTrue = !this.checkTrue
         }

       }
  }
</script>
<style lang="less" scoped>
	@w:75rem;
  .describe{
    clear: both;
    margin-top: 5/@w;
    font-size: 32/@w;
    color: #434343;
    height: 300/@w;
    text-align: center;
    background-color: #FFFFFF;
  }
  .describeText{
    padding-top: 65/@w;
  }
  .moneyNum{
    font-size: 40/@w;
    margin-top: 30/@w;
    margin-bottom: 30/@w;
    font-weight: 700;
  }
  .timeNum{
    color: #FC5605;
    font-size: 30/@w;
  }

  .messageList{
    background-color: #FFFFFF;
    font-size: 32/@w;
    margin-top: 10/@w;
  }
  .item{
    height: 100/@w;
    width: 100%;
    line-height: 100/@w;
    border-bottom: 1px solid #EFEFF4;

  }
  .item>.item-left{
    float: left;
    padding-left: 40/@w;
  }

  .item>.item-right{
    float: right;
    padding-right: 40/@w;
  }

  .read{
    position: relative;
    background-color: #FFFFFF;
    height: 100/@w;
    line-height: 100/@w;
    font-size: 30/@w;
    color: #ACADAD;
  }
  .checkboxModul{
    width: 60%;
  }
  .read-icon{
    position: absolute;
    top: 32/@w;
    left: 115/@w;
    display: inline-block;
    width: 32/@w;
    height: 32/@w;
    border-radius: 160px;
    border: 1px solid #AAAAAA;
    &.on{
      background-color: #007AFF;
      background-image: url(../assets/img/bank_radio2.png);
      background-repeat: no-repeat;
      background-size: 100%;
      border: 1px solid #007AFF;
    }
  }
  .read>span.contract{
    display: inline-block;
    top: 40/@w;
    left: 370/@w;
    position: absolute;
    float: right;
    font-style: normal;
    >a{
      color: #1974B7!important;
    }
  }
  .read-contract{
    text-align: center;
  }
  .submitBtn{
    background-color: #FFFFFF;
    width: 100%;
    padding-top: 60/@w;
  }
  .submitBtn>button{
    background:#D7D7D7;
    border: none;
    padding: 0 0 !important;
    outline: none;
    >a{
      color: #007aff;
      }
  }
  .submitBtn-text{
    display: block;
    height: 80/@w;
    width: 80%;
    font-size: 32/@w;
    margin: 0 auto;
    text-align: center;
    line-height: 80/@w;
    border-radius: 30/@w;
    &.on{
      background-color: #FBC205;
    }

  }
  .bottom-text{
    font-size: 25/@w;
    color: #a0a0a0;;
    text-align: center;
    padding-top: 30/@w;
  }
  .Router{
    background-color: #fff;
  }
</style>
