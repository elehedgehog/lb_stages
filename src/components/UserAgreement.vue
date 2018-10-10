<template>
  <div class="user-agreement">
    <mt-header title="用户授权相关协议">
      <mt-button icon="back" slot="left" @click="$router.goBack('')"></mt-button>
    </mt-header>
    <div class="main-wrap">
      <mt-cell title="《委托及授权协议》" :to="{name:'authorizeAgreement', query: {isShowNav: true}}" is-link></mt-cell>
      <mt-cell title="《乐宝卡服务与隐私协议》" :to="{name:'lbkServiceAgreement', query: {isShowNav: true}}" is-link></mt-cell>
      <mt-cell title="《个人消费借款及服务合同》" :to="{name:'personalAgreement', query: {isShowNav: true, orderNo: $route.query.orderNo, token: $route.query.token}}"
        is-link></mt-cell>
    </div>
  </div>
</template>
<script>
  import {
    Cell
  } from 'mint-ui';
  export default {
    name: "user-agreement",
    data() {
      return {
      }
    }
  }

</script>

<style lang="less" scoped>
  .user-agreement {
    .main-wrap {
      margin-top: 48px;
    }
  }

</style>
