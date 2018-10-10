<template>
	<div>
		<mt-header title="消息中心" >
	    	<mt-button icon="back" @click="back" slot="left" ></mt-button>
	    	<mt-button slot="right" class="readed">全部已读</mt-button>
		</mt-header>

		<div class="messageContent">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1" class="gongGao">公告</mt-tab-item>
			  <mt-tab-item id="2" class="tiXing">消息提醒</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <!--<mt-tab-container-item id="1">
			    <div>
			    	<p class="pTitel"><span class="title">银行还款维护通知</span><span class="time">2018-06-02</span></p>
			    	<p class="content">关于使用招商、关于使用招商、关于使用招商、关于使用招商、关于使用招商、关于使用招商、关于使用招商、</p>
			    </div>
			    <div>
			    	<p class="pTitel"><span class="title">1万元免息券</span><span class="time">2017-06-02</span></p>
			    	<p class="content">1万元免息券，1万元免息券，1万元免息券，1万元免息券，1万元免息券</p>
			    </div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">

			    <div>
			    	<p class="pTitel"><span class="title">消息提醒1</span><span class="time">2018-06-02</span></p>
			    	<p class="content">这里是消息提醒1，这里是消息提醒1，这里是消息提醒1，这里是消息提醒1，这里是消息提醒1</p>
			    </div>
			    <div>
			    	<p class="pTitel"><span class="title">消息提醒2</span><span class="time">2017-06-02</span></p>
			    	<p class="content">这里是消息提醒2，这里是消息提醒2，这里是消息提醒2，这里是消息提醒2，这里是消息提醒2</p>
			    </div>

			  </mt-tab-container-item>-->
			</mt-tab-container>
			<div class="noMessage">暂无消息</div>
		</div>

	</div>
</template>

<script>
  import { mobileManager } from '../utils/WebInfo.js'
	export default{
		name:'messageCenter',
		data(){
			return {
				selected:"1",
				bankList :{}
 			}
		},
		methods:{
			back(){
				this.$router.goBack('repayOrder')
			}
    },
    created() {
      mobileManager.hideBottomBar()   //隐藏原生底部栏
    },
		mounted(){
		}
	}
</script>
<style lang="less" scoped>
@w:60rem;
.mint-navbar{
	padding-top: 25px;
	.mint-button-text{
	font-family:Microsoft YaHei;
	font-size: 22px;
	color: #ffffff;
}
}
.readed{
  font-size: 14px;
}
.messageContent{
	margin-top:30px;
	.gongGao{
		font-family:Microsoft YaHei;
		font-size: 24/@w;
  }
  .is-selected{
		color: #FFA800!important;


  }
	.tiXing{
		font-family:Microsoft YaHei;
		font-size: 24/@w;
		color: #999999;
	}
	.mint-tab-container{
		margin: 0 37/@w 0 37/@w;
	    .mint-tab-container-item{
	    	 div{
		    	margin-top: 15/@w;
				  background-image: url('../assets/img/messageCenter/bk.png');
			  	background-repeat: no-repeat;
			  	position: relative;
			  	padding: 5/@w 0;
			  	p{
			  		padding: 0 31/@w;
			  	}
			  	.pTitel{
			  		display: flex;
			  		justify-content: space-between;
			  		.title{
						font-family:Microsoft YaHei;
						font-size: 28/@w;
						color: #4D4D4D;
					}
					.time{
						font-family:Microsoft YaHei;
						font-size: 18/@w;
            color: #999999;
					}
			  	}
				.tontent{
					font-family:Microsoft YaHei;
					font-size: 22/@w;
					color: #4D4D4D;
				}

	    	 }

	    }
	}




}

.noMessage{
	margin-top:50/@w;
	text-align:center;
}

</style>
