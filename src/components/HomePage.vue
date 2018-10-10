<template>
	<div>
		  <!-- <header> -->
			<!-- <img class="imgTopArrow" @click="back" src="../assets/img/homePage/topArrow.png"></img> -->
	    	<!-- <span class="title">乐宝口袋</span>
	   		<img class="imgInfor" src="../assets/img/homePage/infor.png"> -->
		  <!-- </header> -->
      <mt-header title="极速贷产品名" class="lbd-head-normal">
        <img  slot="right" v-if="true" @click="toMessageCenter" class="imgInfor" src="../assets/img/Order/message.png"/>
	   		<img  slot="right" v-if="false" @click="toMessageCenter" class="imgInfor" src="../assets/img/Order/messageNo.png"/>
		</mt-header>
		<div class="lbdContent">
			<div class="lbdTop">
		    	<p class="money">金额3000~4000(元)</p>
		    	<p class="interest">{{parseFloat(this.shuRuNumber).toFixed(2)}}<img src="../assets/img/homePage/modify.png" @click="dlgMoney()" ></p>
		    	<p class="limitTime">限期<span>12</span>(月)</p>
			</div>
			<div class="details">
				<div class="top">
					<div>
						<p class="up"><span>{{parseFloat(this.huanKuanNumber).toFixed(2)}}</span>元</p>
						<p class="down">还款金额</p>
					</div>
					<div>
						<p class="up"><span>{{parseFloat(this.liXiNumber).toFixed(2)}}</span>元</p>
						<p class="down">利息费用</p>
					</div>
					<div>
						<p class="up"><span>{{parseFloat(this.daoZhangNumber).toFixed(2)}}</span>元</p>
						<p class="down">到账金额</p>
					</div>
				</div>
				<div class="Bottom">
					<!-- <div> -->
						<p class="gaiShu"><img src="../assets/img/homePage/threeDay.png">三天放款</p>
						<p class="gaiShu"><img src="../assets/img/homePage/monthRate.png">月费率1.66%~3.8%</p>
					<!-- </div> -->
					<!-- <p class="xiangQing">查看产品详情  &gt;&gt;</p> -->
					<p class="xiangQing">详情  &gt;&gt;</p>
				</div>
			</div>
			<div class="identification">
					<div>
						<p>认证材料</p>
					</div>
					<ul>
						<li class="cardID">
					        <span><img src="../assets/img/homePage/cardID.png">身份证</span>
					        <a><span>去认证</span><img src="../assets/img/homePage/listArrow.png"></a>
					    </li>

					    <li class="baseInfo">
					        <span><img src="../assets/img/homePage/baseInfo.png">基本信息</span>
					        <a><span>去认证</span><img src="../assets/img/homePage/listArrow.png"></a>
					    </li>

					    <li class="xinYongKa">
					        <span><img src="../assets/img/homePage/xinYongKa.png">信用卡（邮箱）</span>
					        <a><span>去认证</span><img src="../assets/img/homePage/listArrow.png"></a>
<!-- 					        <span class="failTitle">认证失败,请重新认证</span>
					        <span class="failReason">未获取到信用卡账单,请填写有效邮件</span> -->
					    </li>

					    <li class="yunYingShang">
					        <span><img src="../assets/img/homePage/mobile.png">手机运营商</span>
					        <a><span>去认证</span><img src="../assets/img/homePage/listArrow.png"></a>
					    </li>
					    <li class="yunYingShang">
					        <span><img src="../assets/img/homePage/otherLittle.png">其他信息</span>
					        <a><span>去认证</span><img src="../assets/img/homePage/listArrow.png"></a>
					    </li>
					</ul>


			</div>

			<div class="submitBtn">
				<button id="btnSubmit" @click="androidFunction" :style="'background-color:'+this.isGray">提交申请</button>
			</div>
<!--
			<div class="BottomNavBar">
				<img src="../assets/img/homePage/buttomImg/firstPage.png">
				<img src="../assets/img/homePage/buttomImg/order.png">
				<img src="../assets/img/homePage/buttomImg/me.png">
			</div>
 -->
		</div>
<!--  		<div class="lbd-ar-main">
			<p class="lbd-ar-top">借款编号 ：{{this.$route.query.borrowOrderCode}}</p>
			<div class="lbd-ar-center">
				<cell :title="bankList.bankName"  :label="bankList.bankCardNo">
					 <img slot="icon"  :src="bankList.bankImageUrl">
				</cell>
			</div>
			<div class="lbd-ar-bottom">
				<p>温情提示：</p>
				<p>1、收款银行卡即为您的还款银行卡，请在每个还款日前存入相应的还款金额，以便银行进行代扣，避免银行卡余额不足导致逾期，产生逾期费用哦；</p>
				<p>2、如不想自动代扣，您也可以进行手动还款；</p>
			</div>
		</div>  -->




	</div>
</template>
<script>
	import {MessageBox,Toast} from 'mint-ui';
	export default{
		name:'HomePage',
		data(){
			return {
				isGray:'',//'#EBEBEB',
				params:this.$route.query,
				webInfo:this.lbdUtil.getWebInfoUrl(),
				shuRuNumber:500.00,
				huanKuanNumber:5996.00,
				liXiNumber:996.00,
				daoZhangNumber:500.00
 			}
		},
		methods:{
			back(){
				//this.$router.goBack('repayOrder')
      },
      toMessageCenter() {

      },
			androidFunction(){//这里是仅仅与Android联调，没添加其他功能
				this.adroideF();
			},
			dlgMoney(){


				//用mint-ui中的MessageBox和Toast实现确认弹框后，再出现提示框
				MessageBox.prompt('请输入借款金额','',{
					showConfirmButton:true,
					showCancelButton:false,
					inputType:'number',
					autofocus:false,
					inputPlaceholder:'3000~4000（元）'}).then((value) => {
				  let money=value.value;
				   if(money<3000 || money>4000){
					   	Toast({
						  message: '请输入3k至4k的金额数',
						  position: 'middle',
						  duration: 2000
						});
				   }else{
				   		let liLv = 0.0166;//利率
						this.shuRuNumber=money;
						this.huanKuanNumber=parseFloat(money*liLv*12+money).toFixed(2);
						this.liXiNumber=parseFloat(money * liLv*12).toFixed(2);
						this.daoZhangNumber=parseFloat(money).toFixed(2);
				   }
				}).catch((msg) => {
	    		  console.log(msg);
		    	});

/*
		  		//自定义MessageBox弹框
		        MessageBox({
            		message: `<div class="homeTelPhone">
                    <input type="number" class="home_input" placeholder="联系方式" ref=homeTel @blur="homeTel()" maxlength="11" v-model="inputtext.phone"/>
                    <span class="home_num_error" v-show="isShowPhoneError"  style="font-size:.26rem; box-shadow: 0 0 0 0;">请输入正确的联系方式</span>
			                </div>`,
			            confirmButtonText:'提交'
			    }).then(action => {
			            that.$router.push({ path: '/home' });
			    })

*/



			},
/*
可以成功执行的调用后台接口的方法
			isLogin(){
				let params  = this.$route.query;
				let webInfo = this.lbdUtil.getWebInfoUrl();
				console.log(webInfo.substr(1));
			  	this.$http.get(
			  	 	this.lbdUtil.host + '/user/webUserLogin/isLogin?'+webInfo.substr(1)+'&token=1409128300677104',//这里的token要app传递给我
					{params}
					).then((res) => {
						console.log(res.data.status);
					},(err)=>{
						console.log('失败：'+err);
				});
			},

*/
			isLogin(){

				// 接口地址：http://119.23.148.208:8084/appServer/user/webUserLogin/isLogin
				//这个接口的token值有app传给我
				let params  = this.params;
				let webInfo = this.webInfo;
				console.log(webInfo.substr(1));
			  	this.$http.get(
			  	 	this.lbdUtil.host + '/user/webUserLogin/isLogin?'+webInfo.substr(1)+'&token=1409128300677104',//这里的token要app传递给我
					{params}
					).then((res) => {
						// if(res.data.status == "0000"){
						// 	//已登录，执行一下操作
						// }else{
						// 	//未登录，跳入原生登陆页
						// }
						console.log(res.data.status);

					},(err)=>{
						console.log('isLogin失败：'+err);
				});
			},


			isOrder(){
				let params  = this.params;
				let webInfo = this.webInfo;
			  	this.$http.get(
			  	 	this.lbdUtil.host + '/app/webFrame/home/jump?'+webInfo.substr(1)+'&token=1752377911880613&channelCode=lbb&productCode=LBD_LBB',
					{params}
					).then((res) => {
						let resData=res.data;
						if(resData.data.status==0){
							this.isGray='gray';//'提交申请'按钮变灰
						};

					},(err)=>{
						console.log('isOrder失败：'+err);
				});
			},
			allPreIntercepting(){
				// Toast('提示信息');
				// MessageBox('提示', '操作成功');
				let params  = this.params;
				let webInfo = this.webInfo;
			  	this.$http.get(
			  	 	this.lbdUtil.host + '/userInfo/allPreIntercepting?'+webInfo.substr(1)+'&token=1776205579152226&channelCode=lbb',
					{params}
					).then((res) => {
						let resData=res.data;
						if(resData.status=="0000"){
	            			if(resData.data.hashUser == 1){
		            			//有用户
		            			if( resData.data.isHit == 1 ){
		            				this.isGray='gray';//'提交申请'按钮变灰
	                    			if(resData.data.remind == 0){
	                    				//未提示过并且，命中
	    	            				alert(' 对不起，您目前不符合贷款要求！');
	                    			}
		            			}else{
		            				//mui("#submitBtn")[0].innerHTML='提交申请';
		            			}
		            		}else{
		            			//mui("#submitBtn")[0].innerHTML='提交申请';
		            		}
	            		}else{
	            			//mui("#submitBtn")[0].innerHTML='提交申请';
	            		}
					},(err)=>{
						console.log('allPreIntercepting失败：'+err);
				});
			},
			getH5UserIntegrity(){
				let params  = this.params;
				let webInfo = this.webInfo;
			  	this.$http.get(
			  	 	this.lbdUtil.host + '/app/webFrame/home/jump?'+webInfo.substr(1)+'&token=1776205579152226&channelCode=lbb&productCode=LBD_LBB',
					{params}
					).then((res) => {
						let resData=res.data;
						if(resData.data.status==0){
							this.isGray='gray';//'提交申请'按钮变灰
						};

					},(err)=>{
						console.log('getH5UserIntegrity失败：'+err);
				});
			},
			//通讯录是否授权
			isPull(){
				let params  = this.params;
				let webInfo = this.webInfo;
			  	this.$http.get(
			  	 	this.lbdUtil.host + '/user/userContact/isPull?'+webInfo.substr(1)+'&token=1776205579152226&channelCode=lbb&productCode=LBD_LBB',
					{params}
					).then((res) => {
						let resData=res.data;
						if(resData.status=='0000'){//已经授权,下一步是提交
							console.log('isPull：通讯录授权');
						}else{
							console.log('isPull：通讯录未授权');
						};

					},(err)=>{
						console.log('isPull失败：'+err);
				});
			},
			pullOwnList(){//保存通讯录接口
				let params  = this.params;
				let webInfo = this.webInfo;
			  	this.$http.get(
			  	 	this.lbdUtil.host + '/user/userContact/pullOwnList?'+webInfo.substr(1)+'&token=1776205579152226&channelCode=lbb&productCode=LBD_LBB',
					{params}
					).then((res) => {
						let resData=res.data;
						if(resData.status=='0000'){//已经授权,下一步是提交
							console.log('pullOwnList：通讯录保存');
						}else{
							console.log('pullOwnList：通讯录未保存');
						};

					},(err)=>{
						console.log('pullOwnList失败：'+err);
				});
			},
			save(){//提交申请接口
				let params  = this.params;
				let webInfo = this.webInfo;
			  	this.$http.get(
			  	 	this.lbdUtil.host + '/orderApply/v3/save?'+webInfo.substr(1)+'&token=1776205579152226&channelCode=lbb&productCode=LBD_LBB',
					{params}
					).then((res) => {
						let resData=res.data;
						if(resData.status=='0000'){//已经授权,下一步是提交
							console.log('save：提交申请接口成功');
						}else{
							console.log('save：提交申请接口未成功');
						};

					},(err)=>{
						console.log('save失败：'+err);
				});
			},


			f(){
				javaScriptFunction.checkIdCard();
			}

		},
		mounted(){


			//this.isLogin();
			//this.isOrder();
			//this.allPreIntercepting();

			//this.getH5UserIntegrity();
			//this.isPull();
			//this.pullOwnList();

			//this.save();
			//javaScriptFunction.checkIdCard();



		}

	}
</script>
<style lang="less" scoped>


@w:72rem;
.Router{
	background: #FFFFFF;
	header{
	background-color: #FFA800;/*#FBC205;*/
    box-shadow: none;
	height: 44px;
	/*div{*/
		text-align: center;
		position: relative;
		padding-top: 32/@w;
	    /*padding-bottom: 28/@w;*/
	    .imgTopArrow{
			position: absolute;
			left: 37/@w;
			width: 12/@w;
			height: 34/@w;
		}
		.imgInfor{
      position: absolute;
      top: 15px;
      right: 37/@w;
      width: 44/@w;
    }
		.title{
			font-family:Microsoft YaHei;
			font-size: 36/@w;
			color: #ffffff;
		}
	/*}*/


	}

	.lbdContent{
		margin: 0;
		.lbdTop{
			margin: 0;
			background-image: url('../assets/img/homePage/banner.png');
		  	background-repeat: no-repeat;
		  	background-size: cover;
			.money{
				margin: 0;
				text-align: center;
				font-family:Microsoft YaHei;
				font-size: 20/@w;
				color: #ffdcab;
				padding-bottom: 14/@w;
			}
			.interest{
				margin: 0;
				padding-top: 0;
				text-align: center;
				font-family:Microsoft YaHei;
				font-size: 70/@w;
				color: #fefefe;
				padding-bottom: 10/@w;
				img{
					width: 24/@w;
					height: 24/@w;
				}
			}

			.limitTime {
				margin: 0;
				padding-top: 0;
				text-align: center;
				font-family:Microsoft YaHei;
				font-size: 20/@w;
				color: #ffdcab;
				padding-bottom: 30/@w;

				span{
					font-family:Microsoft YaHei;
					font-size: 44/@w;
					color: #fefefe;
					margin:0 16/@w;
				}
			}
		}
		.details{
			.top{
				margin: 0;
				padding: 0;
				display: flex;
				div{
					flex: 1;
	    			text-align: center;
	    			.up{
	    				font-family:Microsoft YaHei;
						font-size: 32/@w;
	    				color: #FC5605;
	    				margin: 27/@w 0 0 0;
	    			}
	    			.down{
	    				font-family:Microsoft YaHei;
						font-size: 22/@w;
	    				color: #999999;
	    				margin: 14/@w 0 32/@w 0;
	    			}
				}
			}
			.Bottom{
				border-top: solid 1px lightgray;
				display: flex;
				justify-content: space-around;
				/*div{*/
					.gaiShu{
	    				font-family:Microsoft YaHei;
						font-size: 18/@w;
	    				color: #999999;
	    				img{
	    					vertical-align: middle;
	    					margin-right: 7/@w;
	    				}
					}
				/*}*/
				.xiangQing{
				    font-family:Microsoft YaHei;
					font-size: 24/@w;
					color: #4d4d4d;
	/*				height: 88/@w;
	    			line-height: 88/@w;*/
				}

			}

		}
		.identification{
	    	background-color: #fff;
	    	border-top: 15/@w solid #F0F0F0;
	    	div{
	    		padding-left: 36/@w;
			    p{
			    	font-family:Microsoft YaHei;
					font-size: 30/@w;
					color: #4d4d4d;
					border-left: 5px solid #FBC511;
				    text-indent: 21/@w;
				    height: 33/@w;
				    line-height: 33/@w;
				    padding-left: 21/@w;

			    }
	    	}
	    	ul{
	    		li{
	    			border-top: solid 1px lightgray;
	    			display: flex;
	    			justify-content: space-between;
	    			height: 44px;
	    			span{
	    				font-family:Microsoft YaHei;
						font-size: 24/@w;
						color: #4d4d4d;
	    				img{
	    					vertical-align:middle;
	    					margin: 8/@w 15/@w 18/@w 37/@w;

	    				}
	    			}
	    			a{
	    				vertical-align: middle;
					    height: 44px;
					    line-height: 44px;
					    font-family:Microsoft YaHei;
						font-size: 20/@w;
						color: #999999;
					    img{
					    	vertical-align: middle;
					    	margin: 16/@w 37/@w 16/@w 35/@w;
					    	widows: 24px;
					    	height: 14px;
					    }
	    			}
	    		}
	    	}
		}

		.submitBtn{
			background-color: #F0F0F0;
			padding: 19/@w 0;
			text-align: center;
			button{
				width: 420/@w;
				height: 80/@w;
				background-color: #FFA800;
				border-radius: 24/@w;
				border: none;
			}
		}
		.BottomNavBar{
			background: #FFFFFF;
		    display: flex;
		    justify-content: space-around;
		}
	}

}




/*@w:35rem;
header{
	background-image: url('../assets/img/homePage/banner.png');
	background-repeat: no-repeat;
}
header div{
	text-align: center;
	position: relative;
	padding-top: 78px;
    padding-bottom: 56px;
    background-color: red;
}
.imgTopArrow{
	position: absolute;
	left: 37px;
	width: 12px;
	height: 34x;
}
.imgInfor{
	position: absolute;
	right: 37px;
	width: 39px;
	height: 36px;
}
.title{
	font-family:Microsoft YaHei;
	font-size: 36px;
	color: #ffffff;
}
.money{
	margin: 0px;
	text-align: center;
	font-family:Microsoft YaHei;
	font-size: 20px;
	color: #ffdcab;
	padding-bottom: 27px;
	background-color: gray;
}
.interest{
	margin: 0px;
	text-align: center;
	font-family:Microsoft YaHei;
	font-size: 70px;
	color: #fefefe;
	padding-bottom: 47px;
	background-color: green;
}
.interest img{
	width: 24px;
	height: 24px;
}
.limitTime {
	margin: 0px;
	text-align: center;
	font-family:Microsoft YaHei;
	font-size: 20px;
	color: #ffdcab;
	background-color: blue;

}
.limitTime span{
	font-family:Microsoft YaHei;
	font-size: 44px;
	color: #fefefe;
}
*/


/*
	@w:35rem;
	.lbd-ar-main{
		font-size:16/@w;
		padding-top:56px;
		p{
			margin: 0;
			font-size:15/@w;
			color: #9A9A9A;
		}
		.lbd-ar-top{
			height:30/@w;
			line-height: 30/@w;
			padding-left:10/@w;
		}
		.mint-cell-title{
			position: relative;
		}
		.lbd-ar-bottom{
			p{
				font-size:14/@w;
			}
			padding:13/@w 18/@w;
		}
		.mint-cell{
			height: 70/@w;
			img{
				width: 40/@w;
				height:40/@w;
				margin-top: 15/@w;
				padding-bottom: 20/@w;
			}
			.mint-cell-text{
				padding-left: 16/@w;
				font-size:15/@w;
			    vertical-align: super;
			}
			.mint-cell-label{
				position:absolute;
				left:60/@w;
				top:35/@w;
				font-size:12/@w;
			}
		}
	}*/


</style>
