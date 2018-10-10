<template>
	<div>
		<header>
			<img class="imgTopArrow" @click="back" src="../assets/img/homePage/topArrow.png">
	    	<span class="title">我的征信信息</span>
	   		<img class="imgInfor" src="../assets/img/homePage/infor.png">
		</header>
		<div>
			<div class="notice"><img src="../assets/img/Order/notice.png">据说资料越完整，通过率、额度越高哦</div>

			<div class="creditOne">
				<div class="top">
					<p>基础认证</p>
					<span>必填</span>
				</div>
				<div class="bottom">
					<table border="0" align="left" >
						<tr>
							<td>
								<img src="../assets/img/MyCredit/base/shiMing.png">
								<p class="type">实名认证</p>
								<p class="state">去填写>></p>
							</td>

							<td>
								<img src="../assets/img/MyCredit/base/shenFenZheng.png">
								<p class="type">身份证认证</p>
								<p class="state">已认证</p>
							</td>
							<td>
								<img src="../assets/img/MyCredit/base/renXiang.png">
								<p class="type">活体识别</p>
								<p class="state">去填写>></p>
							</td>
						</tr>
						<tr>
							<td>
								<img src="../assets/img/MyCredit/base/linXiRen.png">
								<p class="type">紧急联系人</p>
								<p class="state">去填写>></p>
							</td>

							<td>
								<img src="../assets/img/MyCredit/base/bankCard.png">
								<p class="type">储蓄卡</p>
								<p class="state">未开放</p>
							</td>
							<td></td>
						</tr>
					</table>
				</div>
			</div>

			<div class="creditOne">
 				<div class="top">
					<p>提额认证</p>
					<span>完成三项认证项通过率达80%</span>
				</div>
				<div class="bottom">
					<table border="0" align="left" >
						<tr>
							<td>
								<img src="../assets/img/MyCredit/tiEr/emailBox.png">
								<p class="type">信用邮箱</p>
								<p class="state">去填写>></p>
							</td>

							<td>
								<img src="../assets/img/MyCredit/tiEr/yunYingShang.png">
								<p class="type">运营商</p>
								<p class="state">去填写>></p>
							</td>
							<td>
								<img src="../assets/img/MyCredit/tiEr/zhiFuBao.png">
								<p class="type">支付宝</p>
								<p class="state">去填写>></p>
							</td>
						</tr>
						<tr>
							<td>
								<img src="../assets/img/MyCredit/tiEr/taoBao.png">
								<p class="type">淘宝授权</p>
								<p class="state">去填写>></p>
							</td>

							<td>
								<img src="../assets/img/MyCredit/tiEr/jingDong.png">
								<p class="type">京东授权</p>
								<p>未开放</p>
							</td>
							<td>
								<img src="../assets/img/MyCredit/tiEr/gongJiJin.png">
								<p class="type">公积金</p>
								<p class="state">去填写>></p>
							</td>
						</tr>
						<tr>
							<td>
								<img src="../assets/img/MyCredit/tiEr/sheBao.png">
								<p class="type">社保授权</p>
								<p class="state">去填写>></p>
							</td>

							<td></td>
							<td></td>
						</tr>
					</table>
				</div>
			</div>


		</div>



	</div>
</template>
<script>
  import { mobileManager } from '../utils/WebInfo.js'
	export default{
		name:'Order',
		data(){
			return {
				params:this.$route.query,
				webInfo:this.lbdUtil.getWebInfoUrl(),
				bankList :{}
 			}
		},
		methods:{
			back(){
				this.$router.goBack('repayOrder')
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
							if(resData.data.hasUser===1){//实名认证，调用原生ocr页面


							};
							if(resData.data.hasUserOCR===1){//身份证认证------》原生ocr认证

							};
							if(resData.data.isLivingGrant===1){//活体识别------》原生ocr认证

							};
							if(resData.data.userSupplyInfo===0){//紧急联系人------》其他信息认证页

							};
							if(resData.data.userSupplyInfo===0){//紧急联系人------》其他信息认证页

							};
							//储蓄卡未开放，不用判断
							if(resData.data.hasEmailInfo===1){//邮箱-----》原生sdk授权

							};
							if(resData.data.hasOperatorInfo===1){//运营商-------》第三方授权H5

							};
							//其他后台没有接口的，隐藏或显示未开通
						};

					},(err)=>{
						console.log('getH5UserIntegrity失败：'+err);
				});
			},

		},
		mounted(){
      mobileManager.hideBottomBar()   //隐藏原生底部栏
			this.getH5UserIntegrity();

		}
	}
</script>
<style lang="less" scoped>


@w:60rem;
header{
	background-color: #FFA800;/*#FBC205;*/
    box-shadow: none;
	height: 44px;

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
			right: 37/@w;
			width: 39/@w;
			height: 36/@w;
		}
		.title{
			font-family:Microsoft YaHei;
			font-size: 36/@w;
			color: #ffffff;
		}

}
.notice{
	height: 40/@w;
	background-color: #FFC659;
	font-family:Microsoft YaHei;
	font-size: 20/@w;
	color: #ffffff;
	img{
		vertical-align: middle;
		width: 25/@w;
		margin: 8/@w 7/@w 12/@w 22/@w;
	}
}
.creditOne{
	height: 350/@w;
	border-top: solid 15/@w #DEDEDE;
	.top{
/*		height: 57/@w;
		line-height: 57/@w;*/
/*		border-bottom: solid 1px #DEDEDE;*/
		padding-left: 22/@w;
/*		border: 0;*/
		p{
		    text-indent: 10px;
		    height: 0.5rem;
		    line-height: 0.5rem;
		    border-left: 3px solid #FBC511;
		    display: inline-block;
		    font-family:Microsoft YaHei;
			font-size: 30/@w;
			color: #4d4d4d;
			margin: 25/@w 24/@w 21/@w 21/@w;
		}
		span{
		    font-family:Microsoft YaHei;
			font-size: 20/@w;
			color: #999999;
			margin: 25/@w 24/@w 21/@w 21/@w;
		}
	}
	.bottom{
		table{
			    border-collapse: collapse;
			    width: 100%;
			td{
				border: 1px solid #DEDEDE;
				text-align: center;
				img{
					width: 45/@w;
					height: 68/@w;
					/*margin-top: 10/@w;*/
				}
				.type{
				    font-family:Microsoft YaHei;
					font-size: 24/@w;
					color: #4D4D4D;
				}
				.state{
				    font-family:Microsoft YaHei;
					font-size: 18/@w;
					color: #999999;
				}
				p{
					margin: 0;


				}
			}
		}
	}
}

</style>
