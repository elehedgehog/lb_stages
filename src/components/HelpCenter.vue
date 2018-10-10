<template>
	<div>
		<header>
			<img class="imgTopArrow" @click="back" src="../assets/img/homePage/topArrow.png">
	    	<span class="title">帮助中心</span>

<!--
			<mt-popup v-model="showPop"  position="bottom" model="false">
	    		<button>aaa</button>
			</mt-popup>
		-->

	   		<img class="imgInfor" src="../assets/img/helpCenter/more.png">


		</header>
		<div class="content">
			<div class="divSearch">
				<mt-search  v-model="searchValue"  placeholder="有什么可以帮助您的呢？" cancel-text=''></mt-search>
			</div>
			<div class="questionList">
				<ul>
					<li>
						<span>我可以使用哪些银行卡借钱</span>
						<img src="../assets/img/helpCenter/leftArrow.png">
					</li>
					<li>
						<span>我可以使用哪些银行卡借钱</span>
						<img src="../assets/img/helpCenter/leftArrow.png">
					</li>
					<li>
						<span>我可以使用哪些银行卡借钱</span>
						<img src="../assets/img/helpCenter/leftArrow.png">
					</li>
					<li>
						<span>我可以使用哪些银行卡借钱</span>
						<img src="../assets/img/helpCenter/leftArrow.png">
					</li>
					<li>
						<span>我可以使用哪些银行卡借钱</span>
						<img src="../assets/img/helpCenter/leftArrow.png">
					</li>
					<li>
						<span>我可以使用哪些银行卡借钱</span>
						<img src="../assets/img/helpCenter/leftArrow.png">
					</li>
					<li>
						<span>我可以使用哪些银行卡借钱</span>
						<img src="../assets/img/helpCenter/leftArrow.png">
					</li>
					<li>
						<span>我可以使用哪些银行卡借钱</span>
						<img src="../assets/img/helpCenter/leftArrow.png">
					</li>
				</ul>
			</div>
			<div class="questionType">
				<p class="pType">问题分类</p>
				<div>
					<table align="center">
						<tr>
							<td><img src="../assets/img/helpCenter/question.png"><p>常见问题</p></td>
							<td><img src="../assets/img/helpCenter/apply.png"><p>关于申请</p></td>
							<td><img src="../assets/img/helpCenter/lend.png"><p>关于借款</p></td>
							<td><img src="../assets/img/helpCenter/repayment.png"><p>关于还款</p></td>
						</tr>
						<tr>
							<td><img src="../assets/img/helpCenter/question.png"><p>关于安全</p></td>
							<td><img src="../assets/img/helpCenter/apply.png"><p>关于账户</p></td>
							<td><img src="../assets/img/helpCenter/lend.png"><p>关于征信</p></td>
							<td><img src="../assets/img/helpCenter/repayment.png"><p>其他问题</p></td>
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


@w:90rem;
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
		top: 36/@w;
		right: 37/@w;
		width: 39/@w;
		height: 9/@w;
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

	.divSearch{
		.mint-search{
			height: 86/@w;
			.mint-searchbar{
				background-color: #FFA800;
				    padding: 0 37/@w;
				.mint-searchbar-inner{
					border-radius: 20/@w;
				}
			}
		}


	}
	.questionList{
		/*border-top: 25/@w solid #F0F0F0;*/
		border-top: 15/@w solid #DEDEDE;
		ul{
			padding: 0 37/@w;
			li{
				border-bottom: 1px solid #DEDEDE;
			    display: flex;
			    justify-content: space-between;
			    height: 80/@w;
			    line-height: 80/@w;
			    span{
					font-family:Microsoft YaHei;
					font-size: 24/@w;
					color: #4D4D4D;
			    }
			    img{
			    	height: 24/@w;
			    	width: 24/@w;
			    	margin-top: 30/@w;
			    }
			}
		}
	}
	.questionType{
		border-top: 15/@w solid #DEDEDE;
		.pType{
			font-family:Microsoft YaHei;
			font-size: 30/@w;
			color: #000000;
			border-left: 5px solid #FBC205;
			padding-left: 23/@w;
			height: 79/@w;
			line-height: 79/@w;
			border-bottom: 1px solid #DEDEDE;
    		margin-left: 23/@w;


		}
		table{
			    border-collapse: collapse;
			    width: 95%;
			td{
				/*border: 1px solid white;*/
				text-align: center;
				img{
/*					width: 57/@w;
					height: 62/@w;*/
				}
				p{
					font-family:Microsoft YaHei;
					font-size: 22/@w;
					color: #4D4D4D;
				}
			}
		}
	}




}



</style>
