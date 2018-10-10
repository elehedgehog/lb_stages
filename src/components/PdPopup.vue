<template>
	<!--<div id="">-->
		<div class="loan-mask">
	        <div class="loan-mask-popup">
	            <div class="background-top">
	                <span class="close-icon" onclick="closeBtn()"></span>
	                <header></header>
	                <p class="mask-money">放款金额(元)</p>
	                <p class="mask-number"><strong>2000</strong></p>
	                <p class="mask-allmoney">到账金额：760元</p>
	                <p class="mask-deadline">
	                    <span  class="mask-deadline-date">消费单期</span>
	                    <span  class="mask-deadline-day">期限：14天</span>
	                </p>
	            </div>
	            <div class="background-bottom">
	                <p class="credit-points">
	                    <span>授信分</span>
	                    <span>786</span>
	                </p>
	                <ul class="loan-detail">
	                    <li class="loan-detail-list">
	                        <span class="detail-list-title">姓名</span>
	                        <span class="detail-list-content">四大行</span>
	                    </li>
	                    <li class="loan-detail-list">
	                        <span class="detail-list-title">身份证</span>
	                        <span class="detail-list-content">256452454555555555</span>
	                    </li>
	                </ul>
	                <ul class="loan-detail" id="emergencyContact">
	                        <li class="loan-detail-list">
	                            <span class="detail-list-title">紧急联系人</span>
	                            <span class="detail-list-content">桑是啊</span>
	                        </p>
	                        <li class="loan-detail-list">
	                            <span class="detail-list-title">紧急联系电话</span>
	                            <span class="detail-list-content">13252545454</span>
	                        </li>
	                </ul>
	                <ul class="loan-detail" id="emergencyContact">
	                        <li class="loan-detail-list">
	                            <span class="detail-list-title">紧急联系人</span>
	                            <span class="detail-list-content">桑是啊</span>
	                        </p>
	                        <li class="loan-detail-list">
	                            <span class="detail-list-title">紧急联系电话</span>
	                            <span class="detail-list-content">13252545454</span>
	                        </li>
	                </ul>
	                <p class="loan-contract"><span @click="checkContract"><i class="get-icon" :class="{isOn : isCheck }"></i>借款默认阅读以及同意</span><span class="agreement" onclick="window.location.href='https://www.baidu.com/?tn=94855285_hao_pg'">《用户授权协议》</span></p>
	                <p class="contract" onclick="window.location.href='https://www.baidu.com/?tn=94855285_hao_pg'">《借款合同》</p>
	                <p class="loan-button" @click="confirmBorrow"><strong>确认借款</strong></p>
	                <p class="loan-other" onclick="window.location.href='https://www.baidu.com/?tn=94855285_hao_pg'">看看其他</p>
	            </div>
            
        	</div>
    	</div>
	<!--</div>-->
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		name:'PdPopup',
		data(){
			return {
				isCheck : true
			}
		},
		methods:{
			checkContract(){
				this.isCheck=!this.isCheck;
				console.log(this.isCheck);
			},
			confirmBorrow(){
				if(this.isCheck){
					
				}else{
					Toast('请同意授权协议');
				}
			}
		},
		mounted(){
			
		},
		created() {

		}
	}
</script>

<style scoped lang="less">
	*{
	    margin: 0;
	    padding: 0;
	}
	ul>li{
    	list-style: none;
	}
	p{
	    font-size: 14px;
	}
	.close-icon{
	    position: absolute;
	    width: 29px;
	    height: 29px;
	    right: 0px;
	    top: -9px;
	    font-size: 18px; 
	    background: url('../assets/img/PdPopup/close@2x.png');
	    background-repeat: no-repeat;
	    background-size: 100% 100%;
	}
	.loan-mask{
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 998;
	    background-color: rgba(0,0,0,.1);
	}
	.loan-mask-popup{
	    position: absolute;
	    width: 90%;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	    -webkit-transform: translate(-50%,-50%);
	    -moz-transform: translate(-50%,-50%);
	    -o-transform: translate(-50%,-50%);
	    -ms-transform: translate(-50%,-50%);
	    border-radius: 10px;
	    -webkit-border-radius: 10px;
	    -moz-border-radius: 10px;
	    -o-border-radius: 10px;
	    -ms--radius: 10px;
	    background-image: url('../assets/img/PdPopup/background.png');   
	    background-repeat: no-repeat;
	    background-size: 100% 100%;
	}
	p{
	    text-align: center;
	    color: rgba(255,255,255,0.8);
	}
	header{
	    margin: 0 auto;
	    width: 286px;
	    height: 30px;
	    line-height: 20px;
	    font-size: 16px;
	    text-align: center;
	    background: url('../assets/img/PdPopup/header@2x.png');
	    background-repeat: no-repeat;
	    background-size: 100% 100%;
	}
	.mask-money,.mask-allmoney{
	    font-size: 14px;
	    height: 30px;
	    line-height: 30px;
	    margin-top: 5px;
	}
	.mask-number{
	    height: 30px;
	    line-height: 30px;
	    font-size: 28px;
	    margin-top: 5px;
	    color: #fff;
	}
	.mask-deadline{
	    font-size: 15px;
	    height: 30px;
	    line-height: 15px;
	    margin: 0 30px;
	}
	.mask-deadline>span{
	    display: inline-block;
	}
	.mask-deadline>span.mask-deadline-date{
	    float: left;
	    font-size: 14px;
	}
	.mask-deadline>span.mask-deadline-day{
	    float: right;
	    font-size: 14px;
	}
	.credit-points{
	    margin-top: 10px;
	    font-size: 18px;
	    line-height: 25px;
	}
	.credit-points>span{
	    /* display:block; */
	}
	ul.loan-detail{
	    padding: 0 30px;
	    font-size: 14px;
	}
	ul.loan-detail>li{
	    height: 25px;
	    line-height: 25px;
	    color: rgba(255,255,255,0.8);
	    font-size: 15px;
	}
	.detail-list-title{
	    float: left;
	
	}
	.detail-list-content{
	    float: right;
	
	}
	.loan-contract{
	    margin-top: 10px;
	 	font-size: 13px;
	    color: #000;
	}
	 .contract{
	 	text-align: right;
	 	color: #34afdd;
	 	font-size: 13px;
	 	padding-right: 78px;
	 }
	.loan-contract .agreement{
	    color: #34afdd;
	}
	.get-icon{
		display: inline-block;
	    width: 15px;
	    height: 15px;
	    background: #FFFFFF;
	    border-radius: 50%;
	    vertical-align:middle;
	    margin-right: 5px;
	   	
	}
	.isOn{
		background-image: url('../assets/img/PdPopup/check@2x.png');
	    background-repeat: no-repeat;
	    background-size: 100% 100%;
	}
	.loan-button{
	    margin: 10px auto;
	    width: 120px;
	    height: 27px;
	    line-height: 27px;
	    border-radius: 50px;
	    -webkit-border-radius: 50px;
	    -moz-border-radius: 50px;
	    -o-border-radius: 50px;
	    -ms-border-radius: 50px;
	    background-color: #fff;
	    color: #FFa600;
	    box-shadow: 0px 2px 6px #313131;
	
	}
	.loan-other{
	    font-size: 14px;
	    padding-bottom: 20px;
	    color: #FFFFFF;
	}
	.background-top{
	    padding-top: 30px;
	    width: 100%;
	    height: 179px;
	}
	.background-bottom{
	    padding-top: 20px;
	    width: 100%;
	}
	.background-center{
	    width: 100%;
	    background: url('../assets/img/PdPopup/background_center.png');
	    background-repeat: no-repeat;
	    background-size: 100% 100%;
	}
</style>