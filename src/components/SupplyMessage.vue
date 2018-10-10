<template>
  <div>
    <mt-header title="补充申请信息" class="lbd-head-normal">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="mui-content" id="content">
			<div class="title">该银行卡用于还款及收款 , 仅支持借记卡</div>
			<div class="inputList">
				<div class="homeaddress" id="">
					<label>现居地址</label>
					<div class="province honme-province">
						<select class="selected" id="home-province" v-model="homeProvince">
							<option value="">选择省</option>
						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
					<div class="city">
						<select class="selected" id="home-city" v-model="homeCity">
							<option value="">选择市</option>
						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
					<div class="area">
						<select class="selected" id="home-area" v-model="homeArea">
							<option value="">选择区</option>
						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
				</div>
				<div class="item AddressNow">
					<input placeholder="请输入详细地址, 具体到门牌号" type="text" id="presentAddress" v-model="presentAddress">
				</div>
				<div class="item">
					<label>性别</label>
					<select class="selected" id="sex" v-model="sex">
						<option value="">请选择</option>
						<option value="1">男</option>
						<option value="2">女</option>
					</select>
					<img src="../assets/img/fdddds@2x.png"/>
				</div>
				<div class="item">
					<label>借款理由</label>
					<select class="selected" id="loadReason" v-model="loadReason">
						<option value="">请选择</option>
						<option value="日常消费">日常消费</option>
						<option value="家庭装修">家庭装修</option>
						<option value="旅游度假">旅游度假</option>
						<option value="教育培训">教育培训</option>
						<option value="健康医疗">健康医疗</option>
					</select>
					<img src="../assets/img/fdddds@2x.png"/>
				</div>
				<div class="item">
					<label>单位名称</label>
					<input placeholder="请输入" type="text" id="companyName" v-model="companyName">
				</div>

				<div class="companyAddress" id="">
					<label>单位地址</label>
					<div class="province company-province">
						<select class="selected" id="company-province" v-model="companyProvince">
							<option value="">选择省</option>

						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
					<div class="city">
						<select class="selected" id="company-city" v-model="companyCity">
							<option value="">选择市</option>
						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
					<div class="area">
						<select class="selected" id="company-area" v-model="companyArea">
							<option value="">选择区</option>
						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
				</div>

				<div class="item company">
					<input placeholder="请输入详细地址, 具体到门牌号" type="text" id="companyAddress" v-model="companyAddress">
					<!--<img src="../assets/img/fdddds@2x.png"/>-->
				</div>
				<!--<div class="item detailedAddr">
					<input placeholder="请输入详细地址, 具体到门牌号" type="text" id="companyAddress">
				</div>-->
				<div class="item">
					<label>紧急联系人A姓名</label>
					<input placeholder="请输入" type="text" id="contactsName1" v-model="contactsName1">
				</div>
				<div class="item">
					<label>紧急联系人A关系</label>
					<select class="selected" id="contactsRelation1" v-model="contactsRelation1">
						<option value="">请选择</option>
						<option value="1">父母</option>
						<option value="2">配偶</option>
						<option value="3">兄弟</option>
						<option value="4">姐妹</option>
						<option value="5">朋友</option>
					</select>
					<img src="../assets/img/fdddds@2x.png"/>
				</div>
				<div class="item">
					<label>紧急联系人A电话</label>
					<input placeholder="请输入" type="text" id="contactsPhone1" v-model="contactsPhone1">
				</div>

				<div class="line"></div>

				<div class="item">
					<label>紧急联系人B姓名</label>
					<input placeholder="请输入" type="text" id="contactsName2" v-model="contactsName2">
				</div>
				<div class="item">
					<label>紧急联系人B关系</label>
					<select class="selected" id="contactsRelation2" v-model="contactsRelation2">
						<option value="">请选择</option>
						<option value="1">父母</option>
						<option value="2">配偶</option>
						<option value="3">兄弟</option>
						<option value="4">姐妹</option>
						<option value="5">朋友</option>
					</select>
					<img src="../assets/img/fdddds@2x.png"/>
				</div>
				<div class="item">
					<label>紧急联系人B电话</label>
					<input placeholder="请输入" type="text" id="contactsPhone2" v-model="contactsPhone2">
				</div>
			</div>
    </div>
    <div class="submitBtn">
      <button id="submitBtn" @click="saveButton()" class="submitBtn-text">保存</button>
    </div>
  </div>

</template>
<script>
  import { mobileManager } from '../utils/WebInfo.js'
  export default {
      data(){
        return{
          homeProvince: '',  //现居住地址省市区
          homeCity: '',
          homeArea: '',
          presentAddress:'',
          sex: '',         //性别
          loadReason: '',  //借口理由
          companyName:'',  //单位名称
          companyProvince: '',   //单位地址
          companyCity: '',
          companyArea: '',
          companyAddress:'',
          contactsName1:'',  //紧急联系人 姓名/关系/电话
          contactsPhone1:'',
          contactsRelation1: '',
          contactsName2:'',
          contactsPhone2: '',
          contactsRelation2: '',

        }
      },
       created() {
        mobileManager.hideBottomBar()   //隐藏原生底部栏
      },
       methods:{
          back(){
          this.$router.goBack()
          },
          saveButton(){

          }
       }
  }

</script>
<style lang="less" scoped>
  @w:75rem;
  .title{
      width: 100%;
      height: 80/@w;
      font-size: 30/@w;
      color: #FFFFFF;
      line-height: 80/@w;
      text-align: center;
      background: #FBC205;
    }
    .save{
      border: none;
      color: #FFFAF0;
      font-size: 16/@w;
      margin-top: 5/@w;
      background-color: #FBC205;
    }
    .inputList{
      font-size: 32/@w;
      color: #646464;
      background: #FFFFFF;
      margin-top: 10/@w;
    }
    .inputList>.item{
      position: relative;
      width: 100%;
      height: 120/@w;
      line-height: 120/@w;
      border-bottom: 1px solid #F3F3F3;
    }
    .inputList>.item>label{
      display: inline-block;
      margin-left: 30/@w;
      float: left;
      width: 37%;
    }

    input{
      outline: none;
      border: none;
    }
     .inputList{
      input{
      float: right;
      width: 50%;
      height: 80/@w;
      line-height: 35/@w;
      padding-left: 0 !important;
      padding-right: 40/@w !important;
      font-size: 32/@w;
      color: #b0b0b0;
      margin-top: 20/@w;
      margin-bottom: 0;
      border: none;
      outline: none;
      text-align: right;
      }
    }
    .AddressNow>input{
      float: right;
      width: 100%;
      text-align: center;
      padding-left: 0 !important;
    }
    .company>input{
      float: right;
      width: 100%;
      text-align: center;
      padding-left: 0 !important;
    }
    .detailedAddr>input{
      width: 100% ;
      text-align: center;
    }
    .item>.selected{
    float: right;
    width: 40%;
    font-size: 32/@w;
    height: 100%;
    // line-height: 35 !important;
    margin-bottom: 0 !important;
    padding-right: 0 !important;
    margin-right: 75/@w;
    margin-top: 0 !important;
    direction: rtl;
    /*padding: 0 0 0 20px;*/
    color: #646464;
  }
    .item>.selected>option{
      padding: 0 auto;
    }
    .item{
      select {
        border: 0!important;
        background-color: #fff;
        color: #646464;
        align-items: center;
        white-space: pre;
        -moz-appearance: none;
        -webkit-appearance:none;
        appearance:none;
        outline: none;
        }
      img{
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -10/@w;
        width: 20/@w;
        height: 36/@w;
        margin-right: 40/@w;
      }
    }

    .line{
      height: 15/@w;
      width: 100%;
      background: #F1F3F7;
    }
    .contactB{
      margin-top: 30/@w;
    }


    .submitBtn{
      background-color: #FFFFFF;
      width: 100%;
      padding-top: 80/@w;
      margin-bottom: 100/@w;
      /*height: 1rem;*/
    }
    .submitBtn-text{
      display: block;
      height: 80/@w;
      width: 80%;
      font-size: 32/@w;
      margin: 0 auto;
      text-align: center;
      line-height: 80/@w;
      background-color: #FBC205;
      border-radius: 30/@w;
      border: none;

    }
    .submitBtn>button{
      padding: 0 0 !important;
    }

    /*省市区联动*/
    .homeaddress,.companyAddress{
      position: relative;
      width: 100%;
      height: 120/@w;
      line-height: 120/@w;
      border-bottom: 1px solid #F3F3F3;
    }
    .homeaddress>label,.companyAddress>label {
      float: left;
      margin-left: 40/@w;
    }

    .province,.city,.area{
      float: left;
      /*margin-left: 0.3rem;*/
    }
    .province>select,.city>select,.area>select{
      font-size: 32/@w;
      // line-height: 35/@w;
      width:120/@w !important;
      padding: 0 0 0 15/@w !important;
      padding-left: 10/@w;
      height: auto;
      margin-top: 1px;
      border: 0!important;
      background-color: #fff;
      -moz-appearance: none;
      -webkit-appearance:none;
      appearance:none;
      outline: none;
      color: #646464;

    }
    .homeaddress,.companyAddress{
      img{
        clear: both;
        float: right;
        height: 40/@w;
        width: 40/@w;
        margin-top: 40/@w;
        margin-left: 2/@w;
      }
    }
    .submitBtn {
    background-color: #FFFFFF;
    width: 100%;
    padding-top: 1.06666667rem;
    margin-bottom: 1.33333333rem;
    height: 2rem;
    }

</style>
