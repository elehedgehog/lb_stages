<template>
	<div id="">
		<div class="inputList">
			<div class="inputItem">
				<span class="inputItemTitle">本人姓名</span>
				<input placeholder=""/>
			</div>
			<div class="inputItem">
				<span class="inputItemTitle">本人身份证号</span>
				<input placeholder=""/>
			</div>
			<div class="inputItem">
				<span class="inputItemTitle">本人存储卡卡号</span>
				<input placeholder=""/>
			</div>
			<div class="inputItem">
				<span class="inputItemTitle">银行预留手机号</span>
				<input placeholder=""/>
			</div>
		</div>
		<div class="submitButton">确认</div>
	</div>
</template>

<script>
	export default{
		name:"OpenAccount",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="less">
	@w:75rem;
	.inputList{
		background-color: #FFFFFF;
		.inputItem{
			height: 150/@w;
			width: 100%;
			line-height: 150/@w;
			font-size: 32/@w;
			color: #646464;
			border-bottom: 1px solid #F3F3F3;
			span{
				margin-left: 30/@w;
			}
			input{
				float: right;
				height: 145/@w;
				border: none;
				outline:none;
				font-size: 32/@w;
				color:#949494;
				
			}
			.inputItemMesg{
				float: right;
				color: #949494;
				img{
					width: 20/@w;
					height: 30/@w;
					vertical-align: middle;
					margin-left: 20/@w; 
					margin-right: 35/@w;
				}
			}
		}
	}
	.submitButton{
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
		text-decoration: none;
	}
	
</style>