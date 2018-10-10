<template>
  <div>
     <mt-header title="借款" class="lbd-head-normal">  <!--审批通过-->
	    	<mt-button icon="back" @click="back" slot="left"></mt-button>
		</mt-header>
    <div class="miss-header">
      <div class="miss-header-top">
        <p class="loan-most">乐宝口袋</p>
        <p class="loan-slogan">根据您的资质可贷款(元)</p>
        <p class="loan-money">50000.00</p>
        <p  class="loan-day">（还剩<span class="loan-time">6天54分</span>关闭放款入口）</p>
      </div>
    </div>
		<div class="OrderDetail">
			<ul class="OrderDetailList">
        <li class="">
          <a href="#">
            <span class="">12期</span>
            <div class="mui-media-body">贷款期限</div>
          </a>
        </li>
        <li class="">
          <a href="#">
            <span class="applyAmount">4000元</span>
            <div class="mui-media-body">到账金额</div>
          </a>
        </li>

        <li class="">
          <a href="#">
            <span class="">4888</span>
            <div class="mui-media-body">总还款金额</div>
          </a>
        </li>
      </ul>
		</div>
    <div class="read" id="read">
      <div class="read-contract">
        <i :class="['read-icon',{'on': checkTrue}]" @click="checkContract"></i>
        <span class="right">本人已阅读并同意
          <span class="contract"><a>《借款合同》</a></span>
        </span>
      </div>
    </div>
    <div class="miss-header-bottom" align="center" v-if="true" >
      <button>绑卡收款</button>
    </div>
    <div class="bindCard-remind">绑卡成功视为确认借款，审批金额将直接发至该银行卡</div>
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
         back(){
           this.$router.goBack('')
         },
        checkContract(){
          this.checkTrue = !this.checkTrue
        },
       }
  }
</script>
<style lang="less" scoped>
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
    }
    &.loan-day{
      color: #fff;
      text-align: center;
    }
    &.loan-slogan{
      text-align: center;
      color: #FFDCAB;

      }
    .loan-time{
        color: #FC5905;
        font-weight: bold;
        margin: 0 5/@w;
      }
    }

  }
  .miss-header-bottom{
    padding: 27/@w 0 20/@w 0;
    button{
      border: none;
      outline: none;
      height: 75/@w;
      line-height: 75/@w;
      width: 90%;
      background-color: #FFA800;
      color: #fff;
      border-radius: 10/@w;
      font-size: 32/@w;
    }
  }
  .bindCard-remind{
    margin-top: 20/@w;
    color: #999999;
    font-size: 26/@w;
    text-align: center;
  }
  .imgInfor{
    position: absolute;
    top: 15px;
    right: 37/@w;
    width: 44/@w;
  }
  .miss-requirement{
    margin: 30/@w;
    text-align: center;
    color: #999999;
    p{
      margin: 0;
      font-size: 26/@w;
      letter-spacing: 1px;
      &:nth-child(1){
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
      &:nth-child(2){
        margin: 10/@w 0;
        >span{
          color: #808080;
          font-weight: bold;
          margin: 0 10/@w;

        }
      }
      &:nth-child(3){
        font-size: 26/@w;
      }
    }
  }
  .check-ing{
    color: #4D4D4D;
    font-size: 30/@w;
    .loan-refuse-title{
      position: relative;
      height: 80/@w;
      line-height: 80/@w;
      padding: 0 30/@w;
      background-color: #fff;
      &:after{
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #F0F0F0;
      }
    }
    .loan-refuse-list{
      background-color: #fff;
      >ul{
        li{
          position: relative;
          &:after{
            @diff: 60/@w;
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            margin: 0 30/@w;
            display: block;
            width: calc(~"100% - @{diff}");
            height: 1px;
            // margin-left: 30/@w;
            background-color: #F0F0F0;
          }
          >a{
            display: inline-block;
            height: 80/@w;
            line-height: 80/@w;
            padding: 0 30/@w;
          }
          p{
            margin: 0;
            font-size: 26/@w;
            padding: 10/@w 30/@w 20/@w;
            background-color: #f1f3f7;
          }
        }

      }
    }
  }
  .stateInfo{
    height: 210/@w;
    width: 100%;
    text-align: center;
    line-height: 210/@w;
    font-size: 35/@w;
    background-color: #FBC205;
  }
  .OrderDetail{
    width: 100%;
    background-color: #fff;
    height: 165/@w;
  }
  .read{

    position: relative;
    height: 100/@w;
    line-height: 100/@w;
    font-size: 30/@w;
    color: #ACADAD;
    .read-contract{
        text-align: center;
        .read-icon{
          position: absolute;
          top: 37/@w;
          left: 50/@w;
          display: inline-block;
          width: 22/@w;
          height: 22/@w;
          border-radius: 160px;
          border: 1px solid #EC7B28;
          &.on{
            background-color: #007AFF;
            background-image: url(../assets/img/checkCon.png);
            background-repeat: no-repeat;
            background-size: 100%;
            border: 1px solid #007AFF;
            }
        }
        .right{
          position: absolute;
          left: 81/@w;
          .contract{

            display: inline-block;
            top: 40/@w;
            left: 370/@w;

            float: right;
            font-style: normal;
            a{
              color: #40B2FC;
            }
          }
        }
    }

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
    ul>li{
      margin-top: 20/@w;
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
        font-size: 34/@w;
        color: #FC4601;
      }
      div{
        margin-top: 10/@w;
        color: #A0A0A0;
        font-size: 28/@w;
      }
    }
  }
  .Router{
    background-color: #fff;
  }
</style>
