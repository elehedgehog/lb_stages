<!--一键贷款 补充信息页-->
<template>
  <div>
  	<div class="header">
  		<mt-header title="评估额度-补充信息" class="lbd-head-normal" v-if="pageType">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
    	</mt-header>
  	</div>
		<div :class="['supplyMsgcontent',{'on': !pageType}]">
    	<div class="progress">
				<div class="progress-top">恭喜, 您已满足借款要求, 完成补充信息立即领取贷款！</div>
				<div class="progress-line">
					<span class="gray"></span>
					<span class="orange" :style="{ width: progressWidth+ 'rem' }"><i :style="{ left: pointleft+ 'rem' }"><i></i></i></span>
				</div>
				<div class="progress-bottom">已完成{{this.nowPercent}}%</div>
			</div>
			
			<div class="inputList">
				<div class="homeaddress" id="">
					<label>现居地址</label>
					<div class="province honme-province">
						<select class="selected" id="home-province" v-model="homeProvince" @change="provinceChange">
							<option value="">选择省</option>
							<option v-for="item in provinceDataList" :value="item.id">{{item.name}} </option>
						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
					<div class="city">
						<select class="selected" id="home-city" v-model="homeCity" @change="cityChange">
							<option value="">选择市</option>
							<option v-for="(item,index) in cityDataList" :value="item.id">{{item.name}} </option>
						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
					<div class="area">
						<select class="selected" id="home-area" v-model="homeArea">
							<option value="">选择区</option>
							<option v-for="item in AreaDataList" :value="item.id">{{item.name}} </option>
						</select>
						<img src="../assets/img/heiti@2x.png"/>
					</div>
				</div>
				<div class="item AddressNow">
					<input placeholder="请输入详细地址, 具体到门牌号" type="text" id="presentAddress" v-model="presentAddress">
				</div>
				<div class="item">
					<label>借款用途</label>
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
				<div class="line"></div>
				
				<div class="item">
					<label>紧急联系人关系1</label>
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
					<label>姓名</label>
					<input placeholder="输入姓名" type="text" id="contactsName1" v-model="contactsName1">
				</div>
				<div class="item contacts">
					<label>电话</label>
					<span @click="ToGetContact1">
						<input placeholder="请选择手机号码" type="text" id="contactsPhone1" disabled="disabled" v-model="contactsPhone1">
					  <img src="../assets/img/Contacts@2x.png" />
					</span>
				</div>

				<div class="line"></div>

				
				<div class="item">
					<label>紧急联系人关系2</label>
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
					<label>姓名</label>
					<input placeholder="输入姓名" type="text" id="contactsName2" v-model="contactsName2">
				</div>
				<div class="item contacts">
					<label>电话</label>
					<span @click="ToGetContact2">
						<input placeholder="请选择手机号码" type="text" id="contactsPhone2" disabled="disabled" v-model="contactsPhone2">
						<img src="../assets/img/Contacts@2x.png" />
					</span>
					
				</div>
			</div>
    </div>
    <div class="submitBtn">
      <button id="submitBtn" @click="saveButton()" class="submitBtn-text">保  存</button>
      <div class="buttom-text"><i class="buttom-text-icon"></i>智能加密,实时保证您的信息安全</div>
    </div>
  </div>

</template>
<script>
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import {grantManager} from '../utils/grant.js';
	import {mobileManager} from '../utils/WebInfo.js'
  export default {
      data(){
        return{
        	nowPercent:0,
					progressWidth:0,
					pointleft:0,
        	provinceDataList:'',
        	cityDataList:'',
        	AreaDataList:'',
        	
          homeProvince: '',  //现居住地址省市区(id)
          homeCity: '',
          homeArea: '',
          presentAddress:'',
          loadReason: '',  //借款用途
          contactsName1:'',  //紧急联系人 姓名/关系/电话
          contactsPhone1:'',
          contactsRelation1: '',
          contactsName2:'',
          contactsPhone2: '',
          contactsRelation2: '',
          userSupplyInfoId:'',
          pageType: false
        }
      },
      created:function(){
      	mobileManager.hideBottomBar();
      	let Pageparams = this.$route.params; //上页面传过来的值
				this.getAuthenticationProcess();
				this.getProvinceData();
				this.getSupplyMessage();
				//显示隐藏头部
				if(this.$route.params.pageType){
		      this.pageType = this.$route.params.pageType
		      sessionStorage.isShowHeader=true;//防止下拉刷新获取不到url的参数
		    }
				if(sessionStorage.isShowHeader){
					this.pageType=true;
				}
				//原生访问的方法
				window.selectContact=this.selectContact;
			},
      mounted(){

      },
      methods:{
	      back(){
	      	this.$router.goBack();
	      },
	      
	       //点击电话icon调原生方法获取通讯录
	      ToGetContact1(){
	      	mobileManager.showContacts(1);
	      },
	      ToGetContact2(){
	      	mobileManager.showContacts(2);
	      },
	      //给原生调的方法
	      selectContact(Contacts) {
	      	if(Contacts.index==1){
	      		this.contactsName1=JSON.parse(Contacts.selectValue).name;
	      		this.contactsPhone1=JSON.parse(Contacts.selectValue).mobile;
	      	}
	      	if(Contacts.index==2){
	      		this.contactsName2=JSON.parse(Contacts.selectValue).name;
	      		this.contactsPhone2=JSON.parse(Contacts.selectValue).mobile;
	      	}
	      },
	      
	      getAuthenticationProcess() {
					let webInfo = this.lbdUtil.getWebInfoUrl();
					this.$http.get(this.lbdUtil.host +'/userInfo/authenticationProcess?'+webInfo,{
						params:{	
					    	token: sessionStorage.QuickLoanIndextToken,
						    channelCode: sessionStorage.QuickLoanIndexChannelCode
					  	},
					}).then((res)=>{
						if(res.data.status==='0000'){
							this.nowPercent=res.data.data.nowPercent;
							this.progressWidth=6.94444444*(this.nowPercent/100);
							this.pointleft=this.progressWidth==0? 0 : this.progressWidth-0.28;
						}else{
//							this.showToast(res.data.msg);
						}
					},(err)=>{
//						this.showToast('网络出错');
						console.log(err,'请求失败');
					});
				},
				
				getSupplyMessage() {
					Indicator.open({ spinnerType: 'fading-circle' });
					let webInfo=this.lbdUtil.getWebInfoObj();
					let params={	
				    	token: sessionStorage.QuickLoanIndextToken,
						  channelCode: sessionStorage.QuickLoanIndexChannelCode
				  	}
					let data = this.$qs.stringify(Object.assign(params,webInfo));
					this.$http.post(this.lbdUtil.host +'/user/supplyInfo/getUserSupplyInfo',
						data
					).then((res)=>{
						if(res.data.status==='0000'){
							let dataList = res.data.data;
							if(dataList==null){
								Indicator.close();
								return;
							}
							let addressJsonData=JSON.parse(dataList.presentProvinces);
							this.homeProvince=addressJsonData.provinceId;//展示省
							this.showUserCity(addressJsonData.provinceId,addressJsonData.cityId);//展示市
							this.showUserArea(addressJsonData.cityId,addressJsonData.areaId);//展示区
							
							this.userSupplyInfoId=dataList.id;
							this.presentAddress=dataList.presentAddress;
							this.loadReason=dataList.loanReason;
							this.contactsRelation1=dataList.urgentContactARelation;
							this.contactsName1=dataList.urgentContactAName;
							this.contactsPhone1=dataList.urgentContactAPhone;
							this.contactsRelation2=dataList.urgentContactBRelation;
							this.contactsName2=dataList.urgentContactBName;
							this.contactsPhone2=dataList.urgentContactBPhone;
//							this.contactsRelation1=dataList.contactsRelation1;
						}else{
//							this.showToast(res.data.msg);
						}
						Indicator.close();
					},(err)=>{
						Indicator.close();
						console.log(err,'请求失败');
					});
				},
				
				getProvinceData() {
//					let webInfo = this.lbdUtil.getWebInfoUrl();
					this.$http.get(this.lbdUtil.host +'/user/userAccount/queryProvinceList',{
						params:{},
					}).then((res)=>{
						if(res.data.status==='0000'){
							this.provinceDataList=res.data.data.provinceList;
						}else{
//							this.showToast(res.data.msg);
						}
					},(err)=>{
//						this.showToast('网络出错');
						console.log(err,'请求失败');
					});
				},
				
				provinceChange() {
					this.$http.get(this.lbdUtil.host +'/user/userAccount/queryCityList',{
						params:{
							provinceId : this.homeProvince
						},
					}).then((res)=>{
						if(res.data.status==='0000'){
							this.cityDataList=res.data.data.cityList;
							
							this.homeCity=this.cityDataList[0].id;//默认选中第一项
							this.cityChange();
						}else{
//							this.showToast(res.data.msg);
						}
					},(err)=>{
//						this.showToast('网路出错');
					});
				},
				
				cityChange() {
					this.$http.get(this.lbdUtil.host +'/user/userAccount/queryDistricList',{
						params:{
							cityId : this.homeCity
						},
					}).then((res)=>{
						if(res.data.status==='0000'){
							this.AreaDataList=res.data.data.districtList;
							this.homeArea=this.AreaDataList[0].id;
						}else{
//							this.showToast(res.data.msg);
						}
					},(err)=>{
//						this.showToast('网路出错');
					});
				},
				
				//把服务器返回的用户的 '市' 地址显示出来(省的地址通过改变this.homeProvince值就会显示出来, 因为省的数据在页面初始就有了)
				showUserCity(UserProvinceId,UserCityId) {
					this.$http.get(this.lbdUtil.host +'/user/userAccount/queryCityList',{
						params:{
							provinceId : UserProvinceId
						},
					}).then((res)=>{
						if(res.data.status==='0000'){
							this.cityDataList=res.data.data.cityList;
							this.homeCity=UserCityId;
						}else{
//							this.showToast(res.data.msg);
						}
					},(err)=>{
//						this.showToast('网路出错');
					});
				},
				
				//把服务器返回的用户的 '区' 地址显示出来
				showUserArea(UserCityId,UserAreaId) {
					this.$http.get(this.lbdUtil.host +'/user/userAccount/queryDistricList',{
						params:{
							cityId : UserCityId
						},
					}).then((res)=>{
						if(res.data.status==='0000'){
							this.AreaDataList=res.data.data.districtList;
							this.homeArea=UserAreaId;
						}else{
//							this.showToast(res.data.msg);
						}
					},(err)=>{
//						this.showToast('网路出错');
					});
				},
				
				saveButton() {
//					let phoneCheck=/^[1][3,4,5,7,8][0-9]{9}$/;  
					if(this.homeProvince==''){
						this.showToast('请选择省');
					}else if(this.homeCity==''){
						this.showToast('请选择市');
					}else if(this.homeArea==''){
						this.showToast('请选择区');
					}else if(this.presentAddress==''){
						this.showToast('请输入详细地址');
					}else if(this.loadReason==''){
						this.showToast('请选择接款用途');
					}else if(this.contactsRelation1==''){
						this.showToast('请选择紧急联系人1关系');
					}else if(this.contactsName1==''){
						this.showToast('请填写紧急联系人1姓名');
					}else if(this.contactsPhone1==''){
						this.showToast('请选择紧急联系人1手机号码');
					}else if(!this.checkPhoneNum(this.contactsPhone1)){
						this.showToast('请选择紧急联系人1正确的手机号码');
					}else if(this.contactsRelation2==''){
						this.showToast('请选择紧急联系人2关系');
					}else if(this.contactsName2==''){
						this.showToast('请填写紧急联系人2姓名');
					}else if(this.contactsPhone2==''){
						this.showToast('请选择紧急联系人2手机号码');
					}else if(!this.checkPhoneNum(this.contactsPhone2)){
						this.showToast('请选择紧急联系人2正确的手机号码');
					}else{
						this.submitMessage();
					}
				},
				
				submitMessage() {
					let webInfo=this.lbdUtil.getWebInfoObj();
					let params={
						token: sessionStorage.QuickLoanIndextToken,
						channelCode: sessionStorage.QuickLoanIndexChannelCode,
						userSupplyInfoId:this.userSupplyInfoId,
						loadReason: this.loadReason,
						presentAddress:this.presentAddress,
						presentProvinceId:this.homeProvince,
						presentProvinceName: this.getSelectedText('home-province'),
						presentCityId: this.homeCity,
						presentCityName: this.getSelectedText('home-city'),
						presentAreaId: this.homeArea,
						presentAreaName: this.getSelectedText('home-area'),
						contactsName1: this.contactsName1,
						contactsPhone1: this.formatPhoneNum(this.contactsPhone1),
						contactsRelation1: this.contactsRelation1,
						contactsName2: this.contactsName2,
						contactsPhone2: this.formatPhoneNum(this.contactsPhone2),
						contactsRelation2: this.contactsRelation2
					}
					let data = this.$qs.stringify(Object.assign(params,webInfo));
					Indicator.open({ spinnerType: 'fading-circle' });
					this.$http.post(this.lbdUtil.host+'/user/supplyInfo/saveOrUpdate',
						data
				).then((res)=>{
						if(res.data.status==='0000'){
							this.showToast('保存成功!');
							this.$router.goBack();
						}else{
							this.showToast(res.data.msg);
						}
						Indicator.close();
					},(err)=>{
						Indicator.close();
						this.showToast('保存失败,网络出错');
					});
				},
				
				
				//验证从通讯录里选择的手机号码
				checkPhoneNum(str) {
					var str=str.replace('+86', '');
	  			str = str.replace(/-/g,"");  
	  			str =str.replace(/[ ]/g,"");
	  			str =str.replace(/(^\s*)|(\s*$)/g, "");
	  			var phoneCheck=/^[1][3,4,5,7,8][0-9]{9}$/;
	  			var isPhone = phoneCheck.test(str);
	  			return isPhone;
				},
				//格式化手机
				formatPhoneNum(str) {
					var str=str.replace('+86', '');//去系统自动的+86 :+8613800000000
	  			str = str.replace(/-/g,"");    //去掉系统自动的-  :1-380-000-0000
	  			str =str.replace(/[ ]/g,"");   //去掉系统自带的空格 :138 0000 0000
	  			str =str.replace(/(^\s*)|(\s*$)/g, "");//去掉两边空格
	  			
	  			return str;
				},
				
				//获取省市区选择项的文本
				getSelectedText(DomId) {
					var obj = document.getElementById(DomId); //定位id
					var index = obj.selectedIndex; // 选中索引
					var text = obj.options[index].text; // 选中文本
					return text;
				},
				showToast(title) {
					Toast({
					  message: title,
					  position: 'bottom',
					  duration: 2000
					});
				}
      }
  }

</script>
<style scoped lang="less">
  @w:75rem;
  .supplyMsgcontent{
  	padding-top: 51px !important;
  	&.on{
      padding-top: 0px!important;
    }
  }
  .progress{
			height: 160/@w;
			background: #FFFFFF;
			font-size:28/@w;
			padding-left: 37/@w;
			margin-bottom:20/@w;
			.progress-top{
				color: #EE5F11;
				padding-top:20/@w;
			}
			.progress-line{
				margin-top:20/@w;
				margin-bottom:15/@w;
				height: 18/@w;
				position: relative;
				span{
					display: block;
					height: 18/@w;
					width: 500/@w;
					border-radius: 9/@w;
					position: absolute;
				}
				.gray{
					
					background: #F0F0F0;
				}
				.orange{
					width: 250/@w;
					background: #FFA800;
					i{
						display: inline-block;
						position: absolute;;
						height: 32/@w;
						width: 32/@w;
						line-height: 32/@w;
						background: #FFA800;
						float: right;
						margin-top: -7/@w;
						border-radius: 50%;
						i{
							display: inline-block;
							position: absolute;
							height: 16/@w;
							width: 16/@w;
							background: #FFFFFF;
							border-radius: 50%;
							top: 50%;
							left: 50%;
							margin-top:-8/@w;
							margin-left:-8/@w;
						}
					}
				}
			}
			.progress-bottom{
				clear: both;
				overflow: auto;
			}
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
        margin-top: -18/@w;
        width: 20/@w;
        height: 36/@w;
        margin-right: 40/@w;
      }
    }
    .contacts input{
    	width: 40%;
    	padding-right: 120/@w !important;
    	background: #FFFFFF;
    }
    .contacts img{
    	position: absolute;
      right: 0;
	    top: 50%;
	    margin-top: -24/@w;
	    width: 48/@w;
	    height: 48/@w;
	    margin-right: 40/@w;
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
      /*height: 1rem;*/
    }
    .submitBtn-text{
      display: block;
      height: 80/@w;
      width: 80%;
      font-size: 32/@w;
      color: #FFFFFF;
      margin: 0 auto;
      text-align: center;
      line-height: 80/@w;
      background-color: #FFA800;
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
      /*width:120/@w !important;*/
      max-width:150/@w !important;
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
    /*margin-bottom: 1.33333333rem;*/
    height: 4rem;
    }
    .buttom-text{
			margin-top: 34/@w;
			font-size: 25/@w;
			color: #999999;
			text-align: center;
			margin-bottom: 150/@w;
			.buttom-text-icon{
				display: inline-block;
				width: 30/@w;
				height: 38/@w;
				background-image: url(../assets/img/safe.png);
				background-size: 100%;
				vertical-align:middle;
				margin-right: 8/@w;
			}
		}

</style>
