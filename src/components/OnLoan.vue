<template>
  <div>
     <mt-header title="放款中" class="lbd-head-normal">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="mui-content" id="content">
			<div class="stateInfo">放款中.....</div>
		</div>
		<div class="OrderDetail">
			<ul class="OrderDetailList">
	            <li class="">
	            	<a href="#">
	                    <span class="applyAmount">4000元</span>
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
		<div class="lbbImg">
			<img src="../assets/img/repaymentMsg.png"/>
		</div>
  </div>
</template>
<script>
  export default {
      data(){
        return{


        }
      },
      mounted(){

      },
       methods:{
         back(){
           this.$router.goBack('')
         },

       }
  }
</script>
<style lang="less" scoped>
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
        font-size: 33/@w; ;
        color: #FC4601;
      }
      div{
        margin-top: 10/@w;
        color: #A0A0A0;
      }
    }
  }
  .Router{
    background-color: #fff;
  }
</style>
