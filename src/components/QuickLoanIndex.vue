<template>
	<div>
 		<mt-header :title="this.productDetail.productName" v-show="showOrHideReturn">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>

		<div class="lbdContent">
			<div class="lbdTop">
		    	<div class="info">
            <p class="loan-des">
              <router-link :to="{ name: 'ProductDetail',params:{pageType:showOrHideReturn}}" tag="span" class="loan-des-pro">产品说明</router-link>
            </p>
		    		<img :src="this.productDetail.productLogo">
		    		<div>
		    			<p class="product">{{productDetail.productName}}</p>
		    			<p class="rate">参考费率：{{productDetail.consultRate}}</p>
		    		</div>
		    	</div>
			</div>

			<div class="condition">
				<p class="title">申请条件</p>
				<hr>
				<p class="content" id="contentP" v-html="applyConditions"></p>
			</div>
			<div class="range">
				<p class="title">借款额度范围：{{productDetail.quota}}元</p>
				<hr>
				<div class="details">
					<form>
						<!-- <select id="amount" name="amount" v-model="selectedAmount"  @change='selectAmountF' > -->
							<!-- <option value="最高可借7000元" style="display: none;">最高可借{{this.productDetail.maxAmount}}元</option> -->

						<select id="amount" name="amount" v-model="selectedAmount"  @change='selectAmountF'>
							<option value="最高可借7000元" style="display: none;">最高可借{{productDetail.maxAmount}}元</option>
							<option v-for="item in range" :key="item">{{item}}</option>
						</select>
					</form>
					<span>期限：{{productDetail.periodsScope}}</span>
				</div>
        <div class="loanRate">
          <p>预估最低还款金额{{loanRate}}元(实放金额与利率以审批额度为准)</p>
        </div>
			</div>
			<div class="identification">
					<p>完成以下资料可贷款</p>
					<ul>
						<li class="shiMing" @click="goShiMing">
					        <span><img src="../assets/img/QuickLoan/shiMing.png">实名认证</span>
					        <a>
					        	<span v-show="this.isShiMingYZ" class="authenticated">已认证</span>
					        	<span v-show="this.isShiMingWZ">去认证</span>
					        	<span v-show="this.isShiMingGQ">过期</span>
					        	<img src="../assets/img/homePage/listArrow.png">
					        </a>
					    </li>
						<li class="cardID" @click="goShenFenZheng">
					        <span><img src="../assets/img/homePage/cardID.png">身份证</span>
					        <a>
					        	<span v-show="this.isShenFenZhengYZ" class="authenticated">已认证</span>
					        	<span v-show="this.isShenFenZhengQR">去认证</span>
					        	<span v-show="this.isShenFenZhengGQ">过期</span>
					        	<img src="../assets/img/homePage/listArrow.png">
					        </a>
					    </li>

					    <li class="yunYingShang" @click="goYunYingShang">
					        <span><img src="../assets/img/QuickLoan/yunYingShang.png">运营商</span>
					        <a>
					        	<span v-show="this.isYunYingShengYR" class="authenticated">已认证</span>
					        	<span v-show="this.isYunYingShengQR">去认证</span>
					        	<span v-show="this.isYunYingShengLZ">认证中</span>
					        	<span v-show="this.isYunYingShengLS">认证失败,请重新认证</span>
					        	<span v-show="this.isYunYingShengGQ">认证过期，重新认证</span>
					        	<img  :style="this.ringArrowYYS" src="../assets/img/homePage/listArrow.png">
					        </a>
					    </li>

					    <li class="xinYongKa" @click="goYouXiang">
					        <span><img src="../assets/img/homePage/xinYongKa.png">信用卡邮箱</span>
					        <a>
					        	<span v-show="this.isYouXiangYR" class="authenticated">已认证</span>
                    <span v-show="this.isYouXiangQR">去认证</span>
                    <span v-show="this.isYouXiangLZ">认证中</span>
                    <span v-show="this.isYouXiangLS">认证失败,请重新认证</span>
                    <span v-show="this.isYouXiangGQ">认证过期，重新认证</span>
					        	<img  :style="this.ringArrowYX"  src="../assets/img/homePage/listArrow.png">
					        </a>
					    </li>


					    <li class="yunYingShang" @click="goBuChong">
					        <span><img src="../assets/img/homePage/otherLittle.png">补充信息</span>
					        <a>
					        	<span v-show="this.isBuChongYZ" class="authenticated">已认证</span>
					        	<span v-show="this.isBuChongWZ">去认证</span>
					        	<span v-show="this.isBuChongGQ">过期</span>
					        	<img src="../assets/img/homePage/listArrow.png">
					        </a>
					    </li>
					</ul>

			</div>
		</div>
    <button v-if="isShowTX" class="bottomBtn"  @click="writeInfo" >填写资料</button>
    <button v-if="isShowWF" class="bottomBtn"  disabled>无法申请</button>
    <button v-if="isShowLJ" class="bottomBtn"  @click="save" >立即申请</button>
	</div>
</template>
<script>
	import {MessageBox,Toast,Indicator} from 'mint-ui';
 	import {grantManager} from '../utils/grant.js'
 	import {mobileManager} from '../utils/WebInfo.js'

	export default{
		name:'HomePage',
		data(){
			return {
				productDetail:{
					productName:'',
					consultRate:'1.6~3.3%',
					quota:'',
					periodsScope:'',
					minAmount:0,
					maxAmount:0,
					currSelectedAmount:0,
					productCode:'',
					productLogo:'',
					applyCondition:'',
					jinDanMoney:''

				},
				urlTypeValue:'',
				isLoad:true,
				isShiMingYZ:false,
				isShiMingWZ:false,
				isShiMingGQ:false,

				isShenFenZhengYZ:false,
				isShenFenZhengQR:false,
				isShenFenZhengGQ:false,

				isYunYingShengYR:false,
				isYunYingShengQR:false,
				isYunYingShengLZ:false,
				isYunYingShengLS:false,
				isYunYingShengGQ:false,

				isYouXiangYR:false,
				isYouXiangQR:false,
				isYouXiangLZ:false,
				isYouXiangLS:false,
				isYouXiangGQ:false,

				isBuChongYZ:false,
				isBuChongWZ:false,
				isBuChongGQ:false,

				isGray:'',//'#EBEBEB',
				params:this.$route.query,
				webInfo:this.lbdUtil.getWebInfoUrl(),
				selectedAmount:'最高可借7000元',
				isShowTX:true,
				isShowWF:false,
				isShowLJ:false,
				ringArrowYYS:'',
				ringArrowYX:'',
        showOrHideReturn:true,

        nativeId: '',
        applyConditions: '',
        range: [],            //借款额度范围
        loanRate: '',         //贷款利率

 			}
    },
    async created(){
      // mobileManager.enableRefresh(false)
      document.body.scrollTop = document.documentElement.scrollTop = 0;
			//先处理'全部产品'传递过来的url中的参数，如果没有id和token就用'去申请'传递过来的
			let str=window.location.search;
            let url=str.substr(1),arr=url.split('&'),len=arr.length,obj={};
            for(let i=0;i<len;i++){
                obj[arr[i].split('=')[0]]=arr[i].split('=')[1];
            };
            if(obj.token){//如果地址栏中有token，先获取这个
				sessionStorage.QuickLoanIndextToken=obj.token;
			};


      if(obj.id === undefined){//如果地址栏url中无id，调用'去申请'传递过来的sessionStorage.QuickLoanIndexId
        this.getProductDetail(sessionStorage.QuickLoanIndexId);
      } else{//'全部产品'进来
        this.getProductDetail(obj.id);
      };
			this.urlTypeValue=obj.type;

			if(obj.type=='detail'){//存在type，显示左上角箭头
        this.showOrHideReturn=false;
        sessionStorage.setItem('detail', obj.type)
			} else{
        if(sessionStorage.detail){ //跳转运营商返回时获取缓存的值
          this.showOrHideReturn=false;
        } else {
				  this.showOrHideReturn=true;
        }
			};
			if(obj.channelCode){
				sessionStorage.QuickLoanIndexChannelCode=obj.channelCode;
			}else{
				sessionStorage.QuickLoanIndexChannelCode='LBFQ';
			};
			await this.getH5UserIntegrity();//在这里判断按钮状态，认证状态
			mobileManager.extremeLoan();
			window.refreshJSDPage=this.refreshJSDIndexPage;
		},
		mounted(){
			mobileManager.hideBottomBar();  //隐藏原生底部栏
      this.jinDan();
      let paramUrl = document.location.href
      let arr = paramUrl.split('?')
      if (arr[1]) {
        let newArr = arr[1].split('&')
        for(var i=0; i < newArr.length; i++) {
          var item = newArr[i]
          if (/id=/.test(item)) {
              this.nativeId = item.split('=')[1];
              sessionStorage.setItem('nativeId',this.nativeId)
          }
          if(this.nativeId) {
            this.getProductDetail(this.nativeId);
          } else {
            if(sessionStorage.QuickLoanIndexId){
              this.getProductDetail(sessionStorage.QuickLoanIndexId);
            } else {
              this.getProductDetail(sessionStorage.nativeId);
            }
          }
        }
      }

		},
		methods:{
			 refreshJSDIndexPage(){
					this.getH5UserIntegrity();
			 },
			back(){
        // mobileManager.refreshHomeUrl()//原生控制首页
        mobileManager.goBack()//原生返回上一级
      },
      //计算还款金额
      loanCaculate(val){
        let num = val*(1+0.0066*12)  //2500*（1+0.66%*12）
        this.loanRate = Math.floor(num*100)/100
      },
			//从首页进入改页面时，获取路由中的id，调用下面的接口，获得数据
			//http://119.23.148.208:8084/appServer/product/detail?id=1&reqApplicationType=11&reqApplicationVersion=2&osName=22&osVersion=1.0&appDownChannel=3.3&mobileModel=3.3
			async getProductDetail(id){
				let params  = this.params;
				let webInfo = this.webInfo;
				await this.$http.get(
						this.lbdUtil.host + '/product/detail?id='+id+'&reqApplicationType=11'
			  	 		+'&reqApplicationVersion=2&osName=22&osVersion=1.0&appDownChannel=3.3&mobileModel=3.3'
			  	 		+'&token='+sessionStorage.QuickLoanIndextToken+'&channelCode='+sessionStorage.QuickLoanIndexChannelCode+'&productCode='+sessionStorage.QuickLoanIndexProductCode
						+webInfo,
					{params}
					).then((res) => {
						let resData=res.data;
						if(resData.status=='0000'){
							this.productDetail.productCode=resData.data.productCode;
							this.productDetail.productName=resData.data.productName;
							window.document.title=this.productDetail.productName;
							this.productDetail.consultRate=resData.data.consultRate;//税率
							this.productDetail.quota=resData.data.quota;//借款额度范围
							this.productDetail.periodsScope=resData.data.periodsScope;//期限
              this.productDetail.productLogo=resData.data.productLogo;
              this.productDetail.currSelectedAmount=this.selectedAmount;
							//当后台数据库中有<br/>之类的html标签时，换行显示
							let condetion =resData.data.applyCondition;
							if(condetion ==''){
								this.productDetail.applyCondition='暂无';
							} else{//
								this.productDetail.applyCondition=resData.data.applyCondition;
							};
              this.applyConditions = this.productDetail.applyCondition;   //申请条件

							this.productDetail.maxAmount=resData.data.maxAmount;//默认显示最大金额
							this.productDetail.minAmount=resData.data.minAmount;
							let max=this.productDetail.maxAmount;//60000
              let min=this.productDetail.minAmount;//500
              let arr = [];
              let num = min >= 500 ? min : 500;
              if (min < 500) {
                arr.push(min);
              }
              while (num <= max) {
                arr.push(num);
                num += 500;
              }
              this.range = arr;
              this.loanCaculate(this.productDetail.maxAmount)
						}else{
							if(resData.data!=null){
								//this.showToast(resData.data.msg);
							};
						};

					},(err)=>{
						console.log('goYouXiang失败：'+err);
				});


			},
			showToast:function(msg){
          Toast({
            message: msg,
            position: 'bottom',
            duration: 1000
          });
      },

			selectAmountF(){
        this.productDetail.currSelectedAmount=this.selectedAmount;
        this.loanCaculate(this.productDetail.currSelectedAmount)
			},
			//用户信息完整性接口
			async getH5UserIntegrity(){
				let params  = this.params;
				let webInfo = this.webInfo;
			  await this.$http.get(
			  	 	this.lbdUtil.host + '/userInfo/getH5UserIntegrity?'+webInfo.substr(1)+'&token='+sessionStorage.QuickLoanIndextToken+'&channelCode='+sessionStorage.QuickLoanIndexChannelCode//,//+'&productCode='+this.productDetail.productCode,
					// {params}
					).then((res) => {
						let resData=res.data;
						if(resData.status=='0000'){
							if(resData.data.userBaseInfoGrant==1){//已经实名认证
								this.isShiMingYZ=true;
								this.isShiMingWZ=false;
								this.isShiMingGQ=false;
							};
							if(resData.data.userBaseInfoGrant==0){
								this.isShiMingYZ=false;
								this.isShiMingWZ=true;
								this.isShiMingGQ=false;
							};
							if(resData.data.userBaseInfoGrant==4){
								this.isShiMingYZ=false;
								this.isShiMingWZ=false;
								this.isShiMingGQ=true;
							};
							if(resData.data.isLivingGrant==1){//已经身份认证
								this.isShenFenZhengYZ=true;
								this.isShenFenZhengQR=false;
								this.isShenFenZhengGQ=false;

							};
							if(resData.data.isLivingGrant==0){
								this.isShenFenZhengYZ=false;
								this.isShenFenZhengQR=true;
								this.isShenFenZhengGQ=false;
							};
							if(resData.data.isLivingGrant==4){//等于4的情况
								this.isShenFenZhengYZ=false;
								this.isShenFenZhengQR=false;
								this.isShenFenZhengGQ=true;
							};


							if(resData.data.hasOperatorInfo==1){//已经运营商认证
								this.isYunYingShengYR=true;
								this.isYunYingShengQR=false;
								this.isYunYingShengLZ=false;
								this.isYunYingShengLS=false;
								this.isYunYingShengGQ=false;
								this.ringArrowYYS='filter=alpha(opacity:0);-moz-opacity:0;opacity:0;';

							};
							if(resData.data.hasOperatorInfo==0){
								this.isYunYingShengYR=false;
								this.isYunYingShengQR=true;
								this.isYunYingShengLZ=false;
								this.isYunYingShengLS=false;
								this.isYunYingShengGQ=false;
								this.ringArrowYYS='';
							};
							if(resData.data.hasOperatorInfo==2){
								this.isYunYingShengYR=false;
								this.isYunYingShengQR=false;
								this.isYunYingShengLZ=true;
								this.isYunYingShengLS=false;
								this.isYunYingShengGQ=false;
								this.ringArrowYYS='filter=alpha(opacity:0);-moz-opacity:0;opacity:0;';
							};
							if(resData.data.hasOperatorInfo==3){
								this.isYunYingShengYR=false;
								this.isYunYingShengQR=false;
								this.isYunYingShengLZ=false;
								this.isYunYingShengLS=true;
								this.isYunYingShengGQ=false;
								this.ringArrowYYS='';
							};
							if(resData.data.hasOperatorInfo==4){
								this.isYunYingShengYR=false;
								this.isYunYingShengQR=false;
								this.isYunYingShengLZ=false;
								this.isYunYingShengLS=false;
								this.isYunYingShengGQ=true;
								this.ringArrowYYS='';
							};

							if(resData.data.hasEmailInfo==1){//已经邮箱认证
								this.isYouXiangYR=true;
								this.isYouXiangQR=false;
								this.isYouXiangLZ=false;
								this.isYouXiangLS=false;
								this.isYouXiangGQ=false;
								this.ringArrowYX='filter=alpha(opacity:0);-moz-opacity:0;opacity:0;';

							};
							if(resData.data.hasEmailInfo==0){
								this.isYouXiangYR=false;
								this.isYouXiangQR=true;
								this.isYouXiangLZ=false;
								this.isYouXiangLS=false;
								this.isYouXiangGQ=false;
								this.ringArrowYX='';
							};
							if(resData.data.hasEmailInfo==2){
								this.isYouXiangYR=false;
								this.isYouXiangQR=false;
								this.isYouXiangLZ=true;
								this.isYouXiangLS=false;
								this.isYouXiangGQ=false;
								this.ringArrowYX='filter=alpha(opacity:0);-moz-opacity:0;opacity:0;';
							};
							if(resData.data.hasEmailInfo==3){
								this.isYouXiangYR=false;
								this.isYouXiangQR=false;
								this.isYouXiangLZ=false;
								this.isYouXiangLS=true;
								this.isYouXiangGQ=false;
								this.ringArrowYX='';
							};
							if(resData.data.hasEmailInfo==4){
								this.isYouXiangYR=false;
								this.isYouXiangQR=false;
								this.isYouXiangLZ=false;
								this.isYouXiangLS=false;
								this.isYouXiangGQ=true;
								this.ringArrowYX='';
							};

							if(resData.data.userSupplyInfo==1){//已经补充信息认证
								this.isBuChongYZ=true;
								this.isBuChongWZ=false;
								this.isBuChongGQ=false;
							};
							if(resData.data.userSupplyInfo==0){
								this.isBuChongYZ=false;
								this.isBuChongWZ=true;
								this.isBuChongGQ=false;
							};
							if(resData.data.userSupplyInfo==4){
								this.isBuChongYZ=false;
								this.isBuChongWZ=false;
								this.isBuChongGQ=true;
							};

							if(resData.data.userBaseInfoGrant==1 && resData.data.isLivingGrant==1 && resData.data.hasOperatorInfo==1 && resData.data.hasEmailInfo==1 && resData.data.userSupplyInfo==1){
								//全部‘已认证’就显示立即申请
								this.isShowTX=false;
								this.isShowWF=false;
								this.isShowLJ=true;
							};
							//window.location.reload();
							//再调用一个接口，判断是否命中
							//用户借款的三要素前置拦截
							//按钮显示“无法申请”的条件是isHit == 1（已命中）
							//“立即申请”的条件是1、isHit == 0(未命中);2、五项认证都变成‘已认证’
							//剩下的情况是"填写资料"的条件
							this.$http.get(
						  	 	this.lbdUtil.host + '/userInfo/allPreIntercepting?'+webInfo.substr(1)+'&token='+sessionStorage.QuickLoanIndextToken+'&channelCode='+sessionStorage.QuickLoanIndexChannelCode,
								{params}
								).then((res) => {
									let resData=res.data;
									if(resData.status=="0000"){
				            			if(resData.data.hashUser == 1){

					            			if( resData.data.isHit == 1 ){
					            				//有命中就显示‘无法申请’
					            				this.isShowTX=false;
												this.isShowWF=true;
												this.isShowLJ=false;
												//window.location.reload();
					            			};
					            			//window.location.reload();
					            		}else{
					            			//mui("#submitBtn")[0].innerHTML='提交申请';
					            		}
				            		}else{
				            			//mui("#submitBtn")[0].innerHTML='提交申请';
				            		}
								},(err)=>{
									console.log('allPreIntercepting失败：'+err);
							});
						};//end if

						if(resData.status=='1100'){//未登录,所有认证项显示为“去认证”
							this.isLoad=false;

							this.isShiMingYZ=false;
							this.isShiMingWZ=true;
							this.isShiMingGQ=false;

							this.isShenFenZhengYZ=false;
							this.isShenFenZhengQR=true;
							this.isShenFenZhengGQ=false;

							this.isYunYingShengYR=false;
							this.isYunYingShengQR=true;
							this.isYunYingShengLZ=false;
							this.isYunYingShengLS=false;
							this.isYunYingShengGQ=false;

							this.isYouXiangYR=false;
							this.isYouXiangQR=true;
							this.isYouXiangLZ=false;
							this.isYouXiangLS=false;
							this.isYouXiangGQ=false;
							this.ringArrowYX='';

							this.isBuChongYZ=false;
							this.isBuChongWZ=true;
							this.isBuChongGQ=false;

						};

					},(err)=>{
						console.log('getH5UserIntegrity失败：'+err);
				});
			},
			goShiMing(){
				if(this.isLoad==false){
					mobileManager.startLoginActivity()  //跳转app首页
				}else{
					this.$router.push({name:'TopSpeedAuthentication',params:{token:sessionStorage.QuickLoanIndextToken,productCode: this.productDetail.productCode, channelCode:sessionStorage.QuickLoanIndexChannelCode,
						pageType:this.showOrHideReturn},query:{token:sessionStorage.QuickLoanIndextToken,productCode: this.productDetail.productCode, channelCode:sessionStorage.QuickLoanIndexChannelCode,
						pageType:this.showOrHideReturn}});
				}
			},
			goShenFenZheng(){
				if(this.isLoad==false){
					mobileManager.startLoginActivity();

				} else{

					if(this.isShiMingYZ==false){//没有进行实名认证，就提示先进行实名认证
						this.showToast('请先完成实名认证');
						return;
					};
					grantManager.checkIdCard(2);
				}


			},
			goYunYingShang(){
				if(this.isLoad==false){
					mobileManager.startLoginActivity()  //跳转app首页
				} else{
					if(this.isShiMingYZ==true && this.isShenFenZhengYZ==true){
					if(this.isYunYingShengYR==true){
						return;
					};
					if(this.isYunYingShengLZ==true){
						return;
					}
					let params  = this.params;
					let webInfo = this.webInfo;
          // let returnPageUrl=encodeURIComponent(this.lbdUtil.host+'/webpage/hybridAppForWeb/lbd_v3.5/dist/index.html#/QuickLoanIndex?1=1&channelCode=lbdApp&productCode=LBD_LBB'+'&token='+sessionStorage.QuickLoanIndextToken+'&id='+sessionStorage.QuickLoanIndexId+'&type='+this.urlTypeValue,"UTF-8");
          let  returnPageUrl
          if(this.urlTypeValue) {
            returnPageUrl=encodeURIComponent(this.lbdUtil.host+`/webpage/hybridAppForWeb/lbd_v3.5/dist/index.html#/QuickLoanIndex?1=1&channelCode=${sessionStorage.QuickLoanIndexChannelCode}&productCode=${sessionStorage.QuickLoanIndexProductCode}&token=${sessionStorage.QuickLoanIndextToken}&id=${sessionStorage.QuickLoanIndexId}&type=${this.urlTypeValue}`,"UTF-8")
          } else {
            returnPageUrl=encodeURIComponent(this.lbdUtil.host+`/webpage/hybridAppForWeb/lbd_v3.5/dist/index.html#/QuickLoanIndex?1=1&channelCode=${sessionStorage.QuickLoanIndexChannelCode}&productCode=${sessionStorage.QuickLoanIndexProductCode}&token=${sessionStorage.QuickLoanIndextToken}&id=${sessionStorage.QuickLoanIndexId}`,"UTF-8")
          }
					let url=this.lbdUtil.host + '/grantUserByTianji/grantUserMobileByTianji?'+webInfo.substr(1)+'&token='+sessionStorage.QuickLoanIndextToken+'&channelCode='+sessionStorage.QuickLoanIndexChannelCode+'&productCode='+this.productDetail.productCode+'&returnPageUrl='+returnPageUrl;


					window.location.href=url;

				} else{
					this.showToast('请先完成实名认证或身份认证');
				};

				}

			},
			//go 邮箱
			goYouXiang(){
				if(this.isLoad==false){
					mobileManager.startLoginActivity()  //跳转app首页
				} else{
					if(this.isShiMingYZ==true && this.isShenFenZhengYZ==true){
					if(this.isYouXiangYR==true){
						return;
					};
					if(this.isYouXiangLZ==true){
						return;
					}
					let params  = this.params;
					let webInfo = this.webInfo;
				  	this.$http.get(
				  	 	this.lbdUtil.host + '/grantUserByTianji/saveCreditSDKInfo?'+webInfo.substr(1)+'&token='+sessionStorage.QuickLoanIndextToken+'&channelCode='+sessionStorage.QuickLoanIndexChannelCode+'&productCode='+this.productDetail.productCode,
						{params}
						).then((res) => {
							let resData=res.data;
							if(resData.status=='0000'){//已经授权,下一步是提交
								let idCard=resData.data.idCard;
								let mobile=resData.data.mobile;
								let name=resData.data.name;
								let taskId=resData.data.outUniqueId;
								mobileManager.applyParams('ec',mobile,idCard,name,taskId,2);
							}else{
								this.showToast(resData.data.msg)
							};
						},(err)=>{
							console.log('goYouXiang失败：'+err);
					});

				} else{
					this.showToast('请先完成实名认证或身份认证');
				};

				}
			},

			goBuChong(){
				if(this.isLoad==false){
					mobileManager.startLoginActivity()  //跳转app首页
				} else{
					if(this.isShiMingYZ==true && this.isShenFenZhengYZ==true){
					this.$router.push({name:'TopSpeedQuotaSupplyMessage',params:{productCode: this.productDetail.productCode,pageType:this.showOrHideReturn},query:{productCode: this.productDetail.productCode,pageType:this.showOrHideReturn}})

				} else{
					this.showToast('请先完成实名认证或身份认证');
				};
				}

			},


			writeInfo(){
				if(this.isLoad==false){
					mobileManager.startLoginActivity();  //跳转app首页
				} else{
					if(this.isShiMingWZ || this.isShiMingGQ){
						this.goShiMing();
						return;
					};
					if(this.isShenFenZhengQR || this.isShenFenZhengGQ){
						grantManager.checkIdCard(2);
						return;
					};
					if(this.isYunYingShengQR || this.isYunYingShengLS || this.isYunYingShengGQ){
						this.goYunYingShang();
						return;
					};
					if(this.isYouXiangQR || this.isYouXiangLS || this.isYouXiangGQ){
						this.goYouXiang();
						return;
					};
					if(this.isBuChongWZ || this.isBuChongGQ){
						this.goBuChong();
						return;
					};
				};


			},
			jinDan(){
				let params  = this.params;
				let webInfo = this.webInfo;
				this.$http.get(
			  	 	this.lbdUtil.host + '/user/userOrgInfo/queryUserOrgInfo?'+webInfo.substr(1)+'&token='+sessionStorage.QuickLoanIndextToken,
					{params}
					).then((res) => {
						let resData=res.data;
						if(resData.status=='0000'){//已经授权,下一步是提交
							this.productDetail.jinDanMoney=resData.data.applayAmount;
						}else{
							//this.showToast(resData.msg)
						};

					},(err)=>{
						console.log('进单获取金额失败：'+err);
				});


			},
			save(){//提交申请接口
				//调用app别人的接口时，先判断是否为空，如果为空也会提示未定义的
				//token,channelCode,productCode从路由中获取，地址栏的url字符串中有
				Indicator.open({
				  text: '订单申请中...',
				  spinnerType: 'fading-circle'
				});
				if(this.isLoad==false){
					mobileManager.startLoginActivity()  //跳转app首页
				} else{

					if(this.productDetail.currSelectedAmount==0){
						this.productDetail.currSelectedAmount=this.productDetail.maxAmount;
					}


					let params  = this.params;
					let webInfo = this.webInfo;
					if(this.selectedAmount=='最高可借7000元'){
						amount=7000;
					};
					let amount=this.selectedAmount == '最高可借7000元'? 7000 : this.selectedAmount;
					let period=12;//期数先固定为12
					let addParms='&applyAmount='+this.productDetail.jinDanMoney+'&periodTotal='+period;


				  	this.$http.get(
				  	 	this.lbdUtil.host + '/orderApply/v3/save?'+webInfo.substr(1)+'&token='+sessionStorage.QuickLoanIndextToken+'&channelCode='+sessionStorage.QuickLoanIndexChannelCode+'&productCode='+this.productDetail.productCode+addParms+'&loadSrc=5&orderType=2',
						{params}
						).then((res) => {
							let resData=res.data;
							if(resData.status=='0000'){//已经授权,下一步是提交

								this.$router.push({
									name: 'OnCheck',
									params: {},
									query:{
                    productCode:this.productDetail.productCode,
										channelCode: sessionStorage.QuickLoanIndexChannelCode,
										token: sessionStorage.QuickLoanIndextToken,
										applyAmount:this.productDetail.jinDanMoney
									}
								});
							} else if(resData.status=='1100'){//未登录
								this.isLoad=false;
							}else{
								this.showToast(resData.msg);
							};
							Indicator.close();
						},(err)=>{
							console.log('save失败：'+err);
							Indicator.close();
					});
				}

			}
		},


	}
</script>
<style scoped lang="less">
@w:68rem;
// .Router{
//   background: #FFFFFF;
&.loan-des{
        position: relative;
        padding: 30/@w 0 20/@w 40/@w;
        span{
          display: inline-block;
          &.loan-des-one{
            position: relative;
            height: 40/@w;
            line-height: 40/@w;
            left: 40/@w;
            font-size: 26/@w;
            &:before{
              content: '';
              display: block;
              left: -35/@w;
              top: 5/@w;
              position: absolute;
              width: 28/@w;
              height: 28/@w;
              background-image: url(../assets/img/homePageMiss/one_loan.png);
              background-repeat: no-repeat;
              background-size:100%;
            }
          }
          &.loan-des-pro{
            position: absolute;
            right: 0;
            top: 20/@w;
            padding: 10/@w 32/@w;;
            font-size: 28/@w;
            border-top-left-radius: 50/@w;
            border-bottom-left-radius: 50/@w;
            background-color: #F9761E;
            text-align: center;
            color: #fff;
          }
        }
      }
    &.loan-most{
      font-size: 28/@w;
      text-align: center;
      }
  p{
    margin: 0;
  }

	header{
	background-color: #FFA800;/*#FBC205;*/
    box-shadow: none;
	height: 42px;
		text-align: center;
		position: relative;
		padding-top: 32/@w;
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
      // height: 30/@w;
      // line-height: 30/@w;
			font-family:Microsoft YaHei;
			font-size: 36/@w;
			color: #ffffff;
		}
	}

	.lbdContent{
		margin: 0;
		.lbdTop{
			margin: 0;
			background-image: url('../assets/img/QuickLoan/QuickLoanBk.png');
		  	background-repeat: no-repeat;
		  	background-size: cover;
		  	.btn{
		  		text-align: right;
		  		a{
					background-color: #F9761E;
				    color: #FFFFFF;
				    border-bottom-left-radius: 30/@w;
    				border-top-left-radius: 30/@w;

				    height: 50/@w;
				    width: 184/@w;
				    border: 0;
				    font-family:Microsoft YaHei;
					font-size: 28/@w;
					color: #FFFFFF;
					padding: 10/@w 37/@w;
    				line-height:50/@w;
				}
		  	}
		  	.info{

		  		img{
		  			width: 118/@w;
		  			height: 118/@w;
		  			margin: 0 30/@w 47/@w 37/@w;
		  		}
		  		div{
					color: #ffffff;
					float: right;
				    width: 70%;
				    direction: i;
				    height: 118/@w;
				    display: flex;
				    justify-content: center;
				    flex-direction: column;
					.product{
						font-family:Microsoft YaHei;
						font-size: 32/@w;
						margin: 0;
			  		}
			  		.rate{
			  			font-family:Microsoft YaHei;
			  			font-size: 32/@w;
			  			margin: 0;
			  			margin-top: 10/@w;
			  		}
		  		}
		  	}
		}
		.condition{
      margin-top: 10/@w;
			background-color: #fff;
			.title{
          @diff : 80/@w;
          width:  calc(~"100% - @{diff}");
          height: 80/@w;
          line-height: 80/@w;
	  			font-family:Microsoft YaHei;
	  			font-size: 28/@w;
	  			color: #4D4D4D;
	  			margin: 0 40/@w;
			}
			hr{
          margin: 0;
				  height: 1px;
			    border: none;
			    border-top: 1px solid #F0F0F0;
			}
			.content{
          @diff : 80/@w;
          width:  calc(~"100% - @{diff}");
	  			font-family:Microsoft YaHei;
	  			font-size: 26/@w;
	  			color: #999999;
          margin:0 40/@w;
          padding: 15/@w 0;
			}
		}
		.range{
      background-color: #FEF6E1;
      margin-top: 10/@w;
			// border-top: 15/@w solid #F0F0F0;
			.title{
        height: 60/@w;
        line-height: 60/@w;
				text-align: center;
				font-family:Microsoft YaHei;
        font-size: 26/@w;
        color: #B69555;
			}
			hr{
        margin: 0;
				height: 1px;
        border: none;
        border-top: 1px solid #F0F0F0;
			}
			.details{
        height: 100/@w;;
        margin: 30/@w 60/@w 0;
				form{
          position: relative;
          display: inline-block;
          background-color: #fff;
          border: 1px solid #F1EDE4;
				     select {
              padding: 0 40/@w 0 20/@w;
              margin-right: 20/@w;
              height: 60/@w;
              font-family:Microsoft YaHei;
              font-size: 28/@w;
              color: #FFA800;
              border-radius:10/@w;
              appearance:none;
              -moz-appearance:none;
              -webkit-appearance:none;
              outline: none;
              border: none;
              background-color: #fff;
              background: url(../assets/img/QuickLoan/QuickLoanSelectArrow.png) no-repeat  right center white;
              background-size: 15px;
              // padding: 12/@w 24/@w 12/@w 22/@w;
              // border-color: #F1EDE4;
              // background-origin: content-box;
              // background-position-x: 30/@w;
              // width: 120%;
          }

				}
				span{
					font-family:Microsoft YaHei;
		  			font-size: 26/@w;
		  			color: #B69555;
		  			float: right;
		  			margin-top: 20/@w;
				}
      }
      .loanRate{
        height: 50/@w;
        line-height: 30/@w;
        font-size: 24/@w;
        color: #B69555;
        padding-bottom: 20/@w;
        p{
          padding: 0 40/@w;
        }
      }
		}

		.identification{
        background-color: #fff;
        margin-top: 10/@w;
		    p{
          @diff : 40/@w;
          width:  calc(~"100% - @{diff}");
          height: 80/@w;
          line-height: 80/@w;
		    	font-family:Microsoft YaHei;
          font-size: 26/@w;
          color: #4D4D4D;
			    margin-left: 40/@w;
		    }

	    	ul{
	    		li{
            height: 68/@w;
            line-height: 68/@w;
	    			border-top: solid 1px #F0F0F0;
	    			display: flex;
	    			justify-content: space-between;
	    			/*height: 30/@w;*/
	    			span{
	    				font-family:Microsoft YaHei;
						font-size: 28/@w;
						color: #4d4d4d;
	    				img{
	    					vertical-align:middle;
	    					margin: 8/@w 15/@w 18/@w 37/@w;
	    					width: 38/@w;
	    					height: 38/@w;
	    				}
	    			}
	    			a{
	    				vertical-align: middle;
					    img{
					    	vertical-align: middle;
					    	margin: 16/@w 37/@w 16/@w 35/@w;
					    	widows: 24px;
					    	height: 14px;
					    }
	    			}
	    			.authenticated{
	    				font-family:Microsoft YaHei;
						font-size: 26/@w;
						color: #FC5605;
	    			}
	    		}
	    	}
		}
	}
	.bottomBtn{
    // position: fixed;
    // bottom: 0;
    margin-top: 30/@w;
    height: 80/@w;
		background-color: #FFA800;
		font-family:Microsoft YaHei;
		font-size: 32/@w;
		color: #FFFFFF;
		width: 100%;
		border-radius: 8/@w;
		z-index: 10000;
	}

// }
</style>
