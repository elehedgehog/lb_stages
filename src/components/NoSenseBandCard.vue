<template>
  <div>
      <mt-header title="绑定新银行卡" class="lbd-head-normal">
          <mt-button icon="back" slot="left" @click="back"></mt-button>
      </mt-header>
      <div class="mui-content" id="content">
        <!-- <div class="title">该银行卡用于还款及收款 , 仅支持借记卡</div> -->
        <div class="inputList">
          <div class="item">
            <label>持卡人姓名</label>
            <span class="idName">{{ encryptName }}</span>
          </div>
          <div class="item">
            <label>身份证号码</label>
            <span class="idCard">{{ encryptIdCard }}</span>
          </div>
          <div class="item detail-input">
            <p>该银行卡用于还款/收款，贷款金额仅支持<span style="color:#FC5605">借记卡</span>转汇款</p>
          </div>
          <div class="item">
            <label>银行卡号</label>
            <span class="idName" v-if="query.bankAccount">{{ query.bankAccount }}</span>
            <input v-else class="inputList-item item-indent" placeholder="请输入银行卡号" type="text" v-model="bankAccount">
          </div>
          <div class="item">
            <label>手机号</label>
            <span  class="idName" v-if="query.reservedMobile">{{ query.reservedMobile }}</span>
            <input v-else class="inputList-item item-indent" placeholder="请输入手机号" type="text" v-model="telephone">
          </div>
          <div class="item bankName-item">
            <label>开户银行</label>
            <span class="bankName-openAcount" id="bankName">
              <span  class="idName bankOpen" v-if="query.bankName">{{ query.bankName }}</span>
              <input v-else class="inputList-item item-indent-bank" placeholder="选择开户行" type="text" v-model="bankName">
            </span>
            <img v-if="!query.bankName" src="../assets/img/select_icon.png" @click="maskBankPop=true"/>
          </div>
          <div class="item bankAddress" id="bankAddress">
            <label>开户所在地</label>
            <div class="province-city">
              <div class="province">
                <span class="bankName provinceName province-inner" id="provinceName">
                  <input class="province-input" type="text" placeholder="选择省" disabled v-model="provinceName">
                </span>
                <img src="../assets/img/select_icon.png" @click="provincePop=true"/>
              </div>
              <div class="city">
                <span class="bankName cityName city-inner" id="cityName">
                  <input class="province-input province-input-city" type="text" placeholder="选择市" disabled v-model="cityName">
                </span>
                <img src="../assets/img/select_icon.png" @click="cityPopBtn()"/>
              </div>
            </div>
          </div>
        </div>
        <div class="submitBtn" id="submitBtn">
          <span class="submitBtn-text" @click="confirmBindCard">确认绑卡</span>
        </div>
      </div>
      <!-- 选择开户银行 -->
      <div v-if="maskBankPop">
        <div  class="mask" id="mask"></div>
        <div class="bankCardModul" id="bankCardModul">
            <div class="bankListTitle" id="selectBankName">选择开户银行</div>
            <div class="bankList">
              <ul>
                <li @click="toggleBank('中国银行')"><img src="../assets/img/BOC.png"/>中国银行</li>
                <li @click="toggleBank('工商银行')"><img src="../assets/img/ICBC.png"/>工商银行</li>
                <li @click="toggleBank('农业银行')"><img src="../assets/img/ABC.png"/>农业银行</li>
                <li @click="toggleBank('建设银行')"><img src="../assets/img/CCB.png"/>建设银行</li>
                <li @click="toggleBank('邮政储蓄银行')"><img src="../assets/img/PSBC.png"/>邮政储蓄银行</li>
                <li @click="toggleBank('中信银行')"><img src="../assets/img/CITIC.png"/>中信银行</li>
                <li @click="toggleBank('光大银行')"><img src="../assets/img/CEB.png"/>光大银行</li>
                <li @click="toggleBank('民生银行')"><img src="../assets/img/CMBC.png"/>民生银行</li>
                <li @click="toggleBank('平安银行')"><img src="../assets/img/PAYH.png"/>平安银行</li>
                <li @click="toggleBank('兴业银行')"><img src="../assets/img/CIB.png"/>兴业银行</li>
                <li @click="toggleBank('招商银行')"><img src="../assets/img/CMB.png"/>招商银行</li>
                <li @click="toggleBank('广发银行')"><img src="../assets/img/CGB.png"/>广发银行</li>
                <li @click="toggleBank('华夏银行')"><img src="../assets/img/HXB.png"/>华夏银行</li>
                <li @click="toggleBank('浦发银行')"><img src="../assets/img/SPDB.png"/>浦发银行</li>
                <li @click="toggleBank('北京银行')"><img src="../assets/img/BCCB.png"/>北京银行</li>
                <li @click="toggleBank('上海银行')"><img src="../assets/img/SHBANK.png"/>上海银行</li>
                <li @click="toggleBank('交通银行')"><img src="../assets/img/BOCM.png"/>交通银行</li>
            </ul>
            </div>
            <div class="closeBtn" id="closeBtn">
              <img src="../assets/img/hthh@2x.png" @click="maskBankPop=false"/>
            </div>
        </div>
      </div>
      <!--省地址数据这里渲染-->
      <div v-if="provincePop">
        <div class="mask"></div>
        <div class="addressModule">
            <div>
              <ul>
                <li v-for="item in ProvinceList" :key="item.id" @click="toggleProvince(item)">{{ item.name }}</li>
              </ul>
            </div>
            <div class="closeBtn">
              <img src="../assets/img/hthh@2x.png" @click="provincePop=false"/>
            </div>
        </div>
      </div>
       <!--市地址数据这里渲染-->
       <div v-if="cityPop">
         <div class="mask"></div>
         <div class="addressModule">
          <div>
              <ul>
                <li v-for="item in queryCityList" :key="item.id" @click="toggleCity(item)">{{ item.name }}</li>
              </ul>
          </div>
          <div class="closeBtn">
            <img src="../assets/img/hthh@2x.png" @click="cityPop=false"/>
          </div>
        </div>
       </div>

    </div>
</template>
<script>
  import { Toast, Indicator } from 'mint-ui';
  import { mobileManager } from '../utils/WebInfo.js'
// import HomePageLoaningVue from './HomePageLoaning.vue.js';
   export default {
      data(){
        return{
          maskBankPop: false,
          provincePop: false,
          cityPop: false,
          bankAccount: '',  //银行账户
          telephone: '', //手机
          bankName: '', //开户行
          provinceName: '', //省
          cityName: '', //市
          bindCardData: '',
          ProvinceList: {},
          queryCityList: {},
          selectedProvinceId: '',  //选中的省ID
          query: {},
          encryptName: '',
          encryptIdCard: '',
        }
      },
      created() {
        mobileManager.hideBottomBar()   //隐藏原生底部栏
        if(this.$route.params.type){
          this.bindCardType = this.$route.params.type
        } else {
          this.bindCardType = sessionStorage.type
        }
      },

      mounted(){
        this.getQueryUserOrgInfo()
        this.getProvinceList()
        this.query = this.$route.query;
        let params = this.$route.query;
        params.bankAccount && (this.bankAccount = params.bankAccount);
        params.reservedMobile && (this.telephone = params.reservedMobile);
        params.bankName && (this.bankName = params.bankName);
      },
      watch: {
        selectedProvinceId(val, oldVal) {
           this.getQueryCityList()
        }
      },
      methods:{
        back(){
          this.$router.goBack('')
        },
        showToast:function(msg){
            Toast({
              message: msg,
              position: 'bottom',
              duration: 3000
            });
        },
        toggleBank(key){
          this.bankName = key
          this.maskBankPop=false
        },

        getProvinceList() {   //省接口
          let webInfo = this.lbdUtil.getWebInfoUrl();
          Indicator.open({ spinnerType: 'fading-circle' });
          this.$http.get(
            this.lbdUtil.host + '/user/userAccount/queryProvinceList?'+ webInfo,
            ).then((res) => {
              Indicator.close();
              if(res.data.status==='0000'){
                this.ProvinceList = res.data.data.provinceList
              } else {
                this.showToast(res.data.msg);
              }

            },(err)=>{
            this.showToast('网络出错');
            Indicator.close();
					});
        },
        cityPopBtn() {
          if(!this.provinceName){
            this.showToast('请先选择省')
            return
          }
          this.cityPop = true

        },
        getQueryCityList() {   //市接口
          let webInfo = this.lbdUtil.getWebInfoUrl();
          Indicator.open({ spinnerType: 'fading-circle' });
          this.$http.get(
            this.lbdUtil.host + '/user/userAccount/queryCityList?'+ webInfo + `&provinceId=${this.selectedProvinceId}`,
            ).then((res) => {
              Indicator.close();
              if(res.data.status==='0000'){
                this.queryCityList = res.data.data.cityList
              } else {
                  this.showToast(res.data.msg);
              }

            },(err)=>{
            this.showToast('网络出错');
            Indicator.close();
					});
        },
        toggleProvince(key){  //选择省
            this.provinceName = key.name
            this.provincePop = false
            this.selectedProvinceId = key.id

        },
        toggleCity(item) {  //选择市
          this.cityName = item.name
          this.cityPop = false
        },
        getBindCard() {   //绑卡接口
          let params = {    //判断数据是否填充
            bankAccount:  this.$route.query.bankAccount ? this.$route.query.bankAccount : this.bankAccount,
            bankName:  this.$route.query.bankName ? this.$route.query.bankName : this.bankName,
            bankAddress:  this.$route.query.bankBranch ? this.$route.query.bankBranch : (this.provinceName + this.cityName),
            borrowOrderCode:  this.$route.query.borrowOrderCode ? this.$route.query.borrowOrderCode : this.borrowOrderCode,
            reservedMobile:  this.$route.query.reservedMobile ? this.$route.query.reservedMobile : this.telephone,
            userAccountId:  this.$route.query.userAccountId ? this.$route.query.userAccountId : this.userAccountId,
            productCode: this.$route.query.productCode,
            token: this.$route.query.token,
          }

          // let webInfo = this.lbdUtil.getWebInfoUrl();
          let webInfo = this.lbdUtil.getWebInfoObj();
          let parasObj = this.$qs.stringify(Object.assign(params,webInfo))
          Indicator.open({ spinnerType: 'fading-circle' });
          this.$http.post(
            this.lbdUtil.host + '/orderApply/bindCard',
            parasObj
            ).then((res) => {
              Indicator.close();
              this.bindCardData = res.data.data
              if(res.data.status==='0000'){
                  if(this.bindCardData.bindCardUrl) {  //有感绑卡需要跳转的H5地址
                      this.$router.push({ name: 'ThirdBandCard', params: { bindCardData: this.bindCardData.bindCardUrl }, query:{} })
                  } else {
                    this.getApplyOrder()  //无感绑卡确认绑卡接口
                  }
              } else {
                 this.showToast(res.data.msg);
              }
            },(err)=>{
            this.showToast('网络出错');
            Indicator.close();
					});
        },
        confirmBindCard(){   //确认绑卡按钮
          let regular=11 && /^1[3-9]{1}[0-9]{9}$/;
          if(this.telephone === ''){
              this.showToast('请填写手机号码');
              return false;
          }else if(!regular.test(this.telephone)){
              this.showToast('手机号码格式不正确');
              return false;
          } else if(this.bankName=== ''){
            this.showToast('请选择开户行');
              return false;
          }else if(this.provinceName === ''){
              this.showToast('请选择省');
              return false;
          } else if(this.cityName === ''){
              this.showToast('请选择市');
              return false;
          }
          let params  = this.$route.query;
          let bankAddress = this.provinceName + ' ' + this.cityName
          this.getBindCard()


        },
        getQueryUserOrgInfo(){   //查询用户组织信息
            let params  = this.$route.query
            params.channelCode = sessionStorage.QuickLoanIndexChannelCode
            let webInfo = this.lbdUtil.getWebInfoObj();
            let parasObj = this.$qs.stringify(Object.assign(params,webInfo))
            Indicator.open({ spinnerType: 'fading-circle' });
            this.$http.post(
              this.lbdUtil.host + '/user/userOrgInfo/queryUserOrgInfo',
              parasObj
              ).then((res) => {
                Indicator.close();
              if(res.data.status==='0000'){
                  this.encryptName = res.data.data.encryptName
                  this.encryptIdCard = res.data.data.encryptIdCard
                } else {
                   this.showToast(res.data.msg);
                }

              },(err)=>{
              this.showToast('网络出错');
              Indicator.close();
            });
          },
          getApplyOrder() {   //确认绑卡接口
            let params  = this.$route.query;
            let webInfo = this.lbdUtil.getWebInfoObj();
            let parasObj = this.$qs.stringify(Object.assign(params,webInfo))
            Indicator.open({ spinnerType: 'fading-circle' });
            this.$http.post(
              this.lbdUtil.host + '/orderApply/applyOrder',
              parasObj
              ).then((res) => {
              Indicator.close();
              if(res.data.status==='200003'){
                  this.showToast(res.data.msg);
                } else {
                  this.showToast('绑卡成功')
                  if(sessionStorage.type == 'bindCardType'){
                    this.$router.push({ name: 'HomePageLoaning', params: params, query: params }) //从首页进入的绑卡跳转放款中页面
                  } else {
                    this.$router.push({ name: 'Order', params: params, query:{} }) //跳转至入口（首页或者订单中心）
                  }
                }
              },(err)=>{
              this.showToast('网络出错');
              Indicator.close();
            });
          },
        },



  }
</script>
<style lang="less" scoped>
  @w:75rem;
  .mui-content{
    width: 100%;
    padding-top: 44px;
  }
  .title{
    width: 100%;
    height: 80/@w;
    font-size: 30/@w;
    color: #FFFFFF;
    line-height: 80/@w;
    text-align: center;
    background: #FBC205;
  }
  .inputList{
    font-size: 30/@w;
    color: #646464;
    background: #FFFFFF;
    margin-top: 10/@w;
    // min-height: calc(~"100% - 44px");
  }
  .inputList .item{
    width: 100%;
    height: 110/@w;
    line-height: 110/@w;
    border-bottom: 1px solid #F3F3F3;
    .idName{
      float: right;
      margin-right: 85/@w;
      color: #999999;
      &.bankOpen{

      margin-right: 0;
      }
    }
    .idCard{
      float: right;
      margin-right: 85/@w;
    }
    .item-indent{
      float: right;
      margin-right: 85/@w;
      text-align: right;
    }
    .item-indent-bank{
      text-align: right;
    }
    &.detail-input{
      height: 100/@w;
      line-height: 50/@w;
      border-top: 20/@w solid #F0F0F0;
      font-size: 26/@w;
      >p{
        margin-left: 40/@w;
      }

    }
  }
  .inputList .item label{
    float: left;
    width: 27%;
    display: inline-block;
    margin-left: 40/@w;
  }
  .inputList input.inputList-item{
    float: right;
    width: 50%;
    margin-top: 15/@w;
    height: 80/@w;
    font-size: 32/@w;
    color: #646464;
    margin-bottom: 0;
    border: none;
    outline: none;
    background: none;
  }
  .bankName-input{
    border: none;
    outline: none;
    font-size: 0.42666667rem;
    color: #757575;
    background: none;
  }
  .bankName-item img{
    float: right;
    // height: 40/@w;
    width: 34/@w;
    margin-top: 42/@w;
    margin-right: 85/@w;
  }
  .bankName-item .bankName{
    display: inline-block;
    width: 50%;

  }
  .bankName-openAcount{
     display: inline-block;
      width: 50%;
  }
  .bankAddress label{
    display: inline-block;
    float: left;
  }
  .province-city{
    float: right;
    width: 65%;
  }
  .province-inner,.city-inner{
    float: left;
  }
  .bankAddress .province,.city{
    float: left;
    input.province-input{
      width: 100/@w;
      padding: 0 10/@w;
      border: none;
      outline: none;
      font-size: 30/@w;
      color: #646464;
      background: none;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    input.province-input-city{
      width: 160/@w;
    }
  }
  .city{
    margin-right: 85/@w;
    float: right;
  }
  .bankAddress .province img ,.city img{
    float: left;
    // margin-left: 20/@w;
    // height: 40/@w;
    width: 34/@w;
    margin-top: 42/@w;
  }


  .submitBtn{
    width: 100%;
    padding-top: 80/@w;
    height: 100/@w;
  }
  .submitBtn-text{
    display: block;
    height: 80/@w;
    width: 80%;
    font-size: 32/@w;
    margin: 0 auto;
    text-align: center;
    line-height: 80/@w;
    background-color: #FFA800;;
    border-radius:10/@w;
    color: #fff;
  }


  .mask{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #7F7F7F;
    z-index: 1000;
    opacity: 0.5;
  }
  .bankCardModul{
    position: absolute;
    top: 170/@w;
    left: 50%;
    margin-left: -302/@w;;
    width: 600/@w;
    height: 790/@w;
    background: #FFFFFF;
    z-index: 200;
    border-radius: 40/@w;
    z-index: 1000;
  }
  .bankCardModul .bankListTitle{
    height: 90/@w;
    line-height: 90/@w;
    font-size: 35/@w;
    color: #000000;
    text-align: center;
    border-top-left-radius: 40/@w;
    border-top-right-radius: 40/@w;
    background-color: #FBC205;
  }
  .bankCardModul .bankList ul{
    height: 600/@w;
    width: 100%;
    overflow: scroll;
  }
  .bankCardModul .bankList ul li{
    font-size: 32/@w;
    height: 100/@w;
    line-height: 100/@w;
    border-bottom: 1px solid #F3F3F3;

  }
  .bankCardModul .bankList ul li img{
    height: 70/@w;
    width: 69/@w;
    margin-left: 66/@w;
    margin-right: 80/@w;
    vertical-align: middle;
  }
  .bankCardModul .closeBtn{
    text-align: center;
    height: 100/@w;
    /*line-height:1rem;*/

  }
  .bankCardModul .closeBtn img{
    margin-top: 18/@w;
    width: 64/@w;
    height: 64/@w;
    vertical-align: middle;
  }

  .addressModule{
    position: absolute;
    top: 180/@w;
    left: 50%;
    margin-left: -35%;
    width: 70%;
    height: 720/@w;
    background: #FFFFFF;
    z-index: 1000;
    border-radius: 40/@w;
  }
  .addressModule ul{
    height: 640/@w;
    width: 100%;
    overflow: scroll;
  }

  .addressModule li{
    list-style: none;
    height: 80/@w;
    line-height: 80/@w;
    text-align: center;
    border-bottom: 1px solid #F3F3F3;
  }
  .addressModule .closeBtn{
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    height: 80/@w;

  }
  .addressModule .closeBtn img{
    margin-top: 8/@w;
    width: 64/@w;
    height: 64/@w;
    vertical-align: middle;
  }

  input::-webkit-input-placeholder{
      color:#999999;
      font-size: 30/@w;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
      color:#999999;
      font-size: 30/@w;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
      color:#999999;
      font-size: 30/@w;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
      color:#999999;
      font-size: 30/@w;
  }
</style>
