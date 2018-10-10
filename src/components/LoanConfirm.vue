<template>
	<div id="">
		<div class="header">
			<div class="logo">
				<img src="../assets/img/hydlogo.png"/>
			</div>
			<div class="orderNum">
				订单号 : HSG123456789
			</div>
		</div>
		<div class="content">
			<div class="money">
				<span class="moneyNum value">500.00</span>
				<span class="moneyText info">申请金额(元)</span>
			</div>
			
			<div class="line"></div>
			
			<div class="tiem">
				<span class="timeNum value">12个月</span>
				<span class="timeText info">申请期限</span>
			</div>
		</div>
		<div class="Btn">
			<router-link :to="{name : 'OpenAccount'}">
				<div class="confirmBtn">确认收款500.00元</div>
			</router-link>
			<div class="giveUp">放弃贷款</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"LoanConfirm",
		data(){
			return{
				
			}
		},
		created:function(){
			
		},
		methods:{
//			GetOrderDetail:function(){
//				let params  = this.$route.query;
//				this.$http.get('/order/borrowOrder/queryApplyOrderDetailById?token=9682996366387399&osVersion=v1.1.2&reqApplicationType=ios&reqApplicationVersion=2.1&osName=ios&mobileModel=ios&appDownChannel=appStore',
//					{params}
//				).then((res)=>{
//					this.OrderDetailData=res.data.data;
//					console.log(res,'请求成功00');
//				},(err)=>{
//					console.log(err,'请求失败');
//				})
//			}
		}
	}
</script>

<style scoped lang="less">
	@w:75rem;
	body{
		background-color: #F3F3F3;
	}
	.orderDetails{
		background-color: #F3F3F3;
	}
	.header{
		width: 100%;
		height: 75/@w;
		border-bottom: 1px solid #E4E4E4;
		background-color: #FFFFFF;
		.logo{
			float: left;
			img{
				width: 140/@w;
				height: 40/@w;	
				margin-top: 20/@w;
				margin-left: 30/@w;
			}
		}
		
		.orderNum{
			font-size: 28/@w;
			color: #a0a0a0;
			float: right;
			line-height: 75/@w;
			margin-right: 30/@w;
		}
	}
	.content{
		width: 100%;
		height: 230/@w;
		text-align: center;
		position: relative;
		background-color: #FFFFFF;
		
		span{
			display: block;
		}
		.money{
			width: 50%;
			float: left;
		}
		.line{
			height: 230/@w;
			position: absolute;
			border-left: 1px solid #E4E4E4;
			margin-left: 50%;
		}
		.tiem{
			width:50%;
			float: right;
		}
		.value{
			color: #313131;
			font-size: 46/@w;
			margin-top: 60/@w;
		}
		.info{
			font-size: 20/@w;
			color: #a0a0a0;
			margin-top: 8px;
		}
	}
	
	.Btn{
		.confirmBtn, .giveUp{
			height: 80/@w;
			width: 80%;
			font-size: 32/@w;
			color: #000000;
			margin: 0 auto;
			background-color: #FBC205;
			border-radius: 30/@w;
			margin-top: 70/@w;
			text-align: center;
			line-height: 80/@w;
		}
		.giveUp{
			
			margin-top: 50/@w;
			
		}
	}
</style>