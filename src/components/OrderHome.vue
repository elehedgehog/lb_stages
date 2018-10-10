<template>
 <div>
  <div class="orderHome">
    <mt-navbar v-model="selected">
      <mt-tab-item id="applyOrder">申请订单</mt-tab-item>
      <mt-tab-item id="repayOrder">还款订单</mt-tab-item>
    </mt-navbar>
  </div>
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="applyOrder">

      <OrderApply />

    </mt-tab-container-item>
    <mt-tab-container-item id="repayOrder">

      <RepaymentOrder />

    </mt-tab-container-item>
  </mt-tab-container>
</div>


</template>

<script>
	import  OrderApply from './OrderApply'
	import  RepaymentOrder from './RepaymentOrder'
  import { mobileManager } from '../utils/WebInfo.js'
export default {
  name: 'OrderHome',
  components: {
  	OrderApply:OrderApply,
  	RepaymentOrder:RepaymentOrder
  },
  data () {
    return {
      selected: 'applyOrder',
    }
  },
  created: function (){
      mobileManager.hideBottomBar()   //隐藏原生底部栏
    //返回到首页时选中指定选项卡 tab-home/tab-order/tab-myinfo
    var tabSelected = sessionStorage.getItem('homeTabSelected')
    if(tabSelected) {
      this.selected = tabSelected
    }else{
      this.selected = 'applyOrder';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  .orderHome .mint-navbar{
    /* padding-top: 20px; */
  }
  .mint-tab-item-label{
    font-size:16px;
  }
</style>
