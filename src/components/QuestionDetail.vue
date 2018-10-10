<template>
	<div>
		<header>
			<img class="imgTopArrow" @click="back" src="../assets/img/homePage/topArrow.png">
	    	<span class="title">问题详情</span>
		</header>
		<div class="content">
			<div class="divQ">
				<span class="QTitle">Q:</span>
				<span class="QCentont">我可以使用哪些银行卡来借钱</span>
			</div>
			<div class="divA">
				<span class="ATitle">A:</span>
				<div class="ACentont">乐宝口袋贷款，大品牌，上市公司，乐宝口袋贷款，大品牌，上市公司，乐宝口袋贷款，大品牌，上市公司，乐宝口袋贷款，大品牌，上市公司，乐宝口袋贷款，大品牌，上市公司，乐宝口袋贷款，大品牌，上市公司，</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Order',
		data(){
			return {
				searchValue:'',
				showPop:true,
				bankList :{}
 			}
		},
		methods:{
			back(){
				this.$router.goBack('repayOrder')
			}
		},
		mounted(){

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
	.title{
		font-family:Microsoft YaHei;
		font-size: 36/@w;
		color: #ffffff;
		position: absolute;
		top: 20/@w;
    	left: 136/@w;
	}

}
.content{
	 border-top: 15/@w solid #DEDEDE;
	 background-color: #FFFFFF;
	 padding-left: 37/@w;
	 .divQ{
	 	height: 80/@w;
	 	border-bottom: 1px solid #DEDEDE;

	    line-height:80/@w;
	 	.QTitle{
			font-family:Microsoft YaHei;
			font-size: 31/@w;
			color: #FFA800;
			margin-right:12/@w;
		 }
		 .QCentont{
			font-family:Microsoft YaHei;
			font-size: 28/@w;
			color: #4D4D4D;
		 }

	 }
	 .divA{
	 	display: flex;
		 .ATitle{
			font-family:Microsoft YaHei;
			font-size: 31/@w;
			color: #FFA800;
			margin-right: 20/@w;
		 }
		 .ACentont{
			font-family:Microsoft YaHei;
			font-size: 22/@w;
			color: #4D4D4D;
		 }
	 }







}



</style>
