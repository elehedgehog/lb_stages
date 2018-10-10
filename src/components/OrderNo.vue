<template>
	<div>
		<header>
			<!-- <img class="imgTopArrow" @click="back" src="../assets/img/homePage/topArrow.png"></img> -->
	    	<span class="title">订单中心</span>
	   		<img class="imgInfor" src="../assets/img/Order/message.png">
		</header>

		<div>
			<img class="ico" src="../assets/img/Order/noOrderPageIcon.png">
			<p class="info">暂无订单信息</p>
			<p class="apply">去申请一趟吧 >></p>
		</div>



	</div>
</template>
<script>
  import { mobileManager } from '../utils/WebInfo.js'
	export default{
		name:'OrderNo',
		data(){
			return {
				bankList :{}
 			}
		},
		methods:{
			back(){
				this.$router.goBack('repayOrder')
			}
		},
		mounted(){

      mobileManager.hideBottomBar()   //隐藏原生底部栏
			// let params  = this.$route.query;
		 //  	let webInfo = this.lbdUtil.getWebInfoUrl();
		 //  	this.$http.get(
	  // 	 		this.lbdUtil.host + '/payment/repay/userPhotoPomparison?'+webInfo,
			// 	{params}
			// 	).then((res) => {
			// 		if(res.data.code =="0000"){
			// 			this.bankList = res.data.data;
			// 		}
			// 	},(err)=>{
			// 		console.log(err,'请求失败');

			// });
		}
	}
</script>
<style lang="less" scoped>


@w:50rem;
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

div{
	margin: 0;
	padding: 0;
	text-align: center;
	.ico{
		width: 355/@w;
		height: 168/@w;
	    margin-top: 250/@w;
	}
	.info{
		font-family:Microsoft YaHei;
		font-size: 28/@w;
		color: #D4D4D4;
	}
	.apply{
		font-family:Microsoft YaHei;
		font-size: 20/@w;
		color: #4087F1;
	}
}
</style>
