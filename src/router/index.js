import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '@/components/HomePage'
// import MessageCenter from '@/components/MessageCenter'
const MessageCenter = r => require.ensure([], () => r(require('../components/messageCenter')), 'messageCenter')
// import Order from '@/components/Order'
const Order = r => require.ensure([], () => r(require('../components/Order')), 'Order')
// import OrderNo from '@/components/OrderNo'
const OrderNo = r => require.ensure([], () => r(require('../components/OrderNo')), 'OrderNo')
// import MyCredit from '@/components/MyCredit'
const MyCredit = r => require.ensure([], () => r(require('../components/MyCredit')), 'MyCredit')
// import HelpCenter from '@/components/HelpCenter'
const HelpCenter = r => require.ensure([], () => r(require('../components/HelpCenter')), 'HelpCenter')
// import QuestionDetail from '@/components/QuestionDetail'
const QuestionDetail = r => require.ensure([], () => r(require('../components/QuestionDetail')), 'QuestionDetail')
// import QuickLoanIndex from '@/components/QuickLoanIndex'
const QuickLoanIndex = r => require.ensure([], () => r(require('../components/QuickLoanIndex')), 'QuickLoanIndex')
// import OrderHome from '@/components/OrderHome'
const OrderHome = r => require.ensure([], () => r(require('../components/OrderHome')), 'OrderHome')
// import RepaymentDetail from '@/components/RepaymentDetail'
const RepaymentDetail = r => require.ensure([], () => r(require('../components/RepaymentDetail')), 'RepaymentDetail')
// import AutoRepay from '@/components/AutoRepay'
const AutoRepay = r => require.ensure([], () => r(require('../components/AutoRepay')), 'AutoRepay')
// import RepaymentOrderDetail from '@/components/RepaymentOrderDetail'
const RepaymentOrderDetail = r => require.ensure([], () => r(require('../components/RepaymentOrderDetail')), 'RepaymentOrderDetail')
// import OrderDetails from '@/components/OrderDetails'
const OrderDetails = r => require.ensure([], () => r(require('../components/OrderDetails')), 'OrderDetails')
// import BankCard from '@/components/BankCard'
const BankCard = r => require.ensure([], () => r(require('../components/BankCard')), 'BankCard')
// import BindSuccess from '@/components/BindSuccess'
const BindSuccess = r => require.ensure([], () => r(require('../components/BindSuccess')), 'BindSuccess')
// import LoanConfirm from '@/components/LoanConfirm'
const LoanConfirm = r => require.ensure([], () => r(require('../components/LoanConfirm')), 'LoanConfirm')
// import OpenAccount from '@/components/OpenAccount'
const OpenAccount = r => require.ensure([], () => r(require('../components/OpenAccount')), 'OpenAccount')
// import ManualPayments from '@/components/ManualPayments'
const ManualPayments = r => require.ensure([], () => r(require('../components/ManualPayments')), 'ManualPayments')
// import BfManualPayments from '@/components/BfManualPayments'
const BfManualPayments = r => require.ensure([], () => r(require('../components/BfManualPayments')), 'BfManualPayments')
// import PaymentDetails from '@/components/PaymentDetails'
const PaymentDetails = r => require.ensure([], () => r(require('../components/PaymentDetails')), 'PaymentDetails')
// import ConfirmPayments from '@/components/ConfirmPayments'
const ConfirmPayments = r => require.ensure([], () => r(require('../components/ConfirmPayments')), 'ConfirmPayments')
// import BasicsMessage from '@/components/BasicsMessage'
const BasicsMessage = r => require.ensure([], () => r(require('../components/BasicsMessage')), 'BasicsMessage')
// import SupplyMessage from '@/components/SupplyMessage'
const SupplyMessage = r => require.ensure([], () => r(require('../components/SupplyMessage')), 'SupplyMessage')
// import ProductDetail from '@/components/ProductDetail'
const ProductDetail = r => require.ensure([], () => r(require('../components/ProductDetail')), 'ProductDetail')
// import OnCheck from '@/components/OnCheck'
const OnCheck = r => require.ensure([], () => r(require('../components/OnCheck')), 'OnCheck')
// import OnLoan from '@/components/OnLoan'
const OnLoan = r => require.ensure([], () => r(require('../components/OnLoan')), 'OnLoan')
// import BindCard from '@/components/BindCard'
const BindCard = r => require.ensure([], () => r(require('../components/BindCard')), 'BindCard')
// import SelectBankCard from '@/components/SelectBankCard'
const SelectBankCard = r => require.ensure([], () => r(require('../components/SelectBankCard')), 'SelectBankCard')
// import UpdateBandCardInfo from '@/components/UpdateBandCardInfo'
const UpdateBandCardInfo = r => require.ensure([], () => r(require('../components/UpdateBandCardInfo')), 'UpdateBandCardInfo')
// import NoSenseBandCard from '@/components/NoSenseBandCard'
const NoSenseBandCard = r => require.ensure([], () => r(require('../components/NoSenseBandCard')), 'NoSenseBandCard')
// import ThirdBandCard from '@/components/ThirdBandCard'
const ThirdBandCard = r => require.ensure([], () => r(require('../components/ThirdBandCard')), 'ThirdBandCard')
// import HomePageMiss from '@/components/HomePageMiss'
const HomePageMiss = r => require.ensure([], () => r(require('../components/HomePageMiss')), 'HomePageMiss')
// import TiedCardCollection from '@/components/TiedCardCollection'
const TiedCardCollection = r => require.ensure([], () => r(require('../components/TiedCardCollection')), 'TiedCardCollection')
// import OnekeyAuthentication from '@/components/OnekeyAuthentication'
const OnekeyAuthentication = r => require.ensure([], () => r(require('../components/OnekeyAuthentication')), 'OnekeyAuthentication')
// import TopSpeedAuthentication from '@/components/TopSpeedAuthentication'
const TopSpeedAuthentication = r => require.ensure([], () => r(require('../components/TopSpeedAuthentication')), 'TopSpeedAuthentication')
// import OnekeyQuotaSupplyMessage from '@/components/OnekeyQuotaSupplyMessage'
const OnekeyQuotaSupplyMessage = r => require.ensure([], () => r(require('../components/OnekeyQuotaSupplyMessage')), 'OnekeyQuotaSupplyMessage')
// import TopSpeedQuotaSupplyMessage from '@/components/TopSpeedQuotaSupplyMessage'
const TopSpeedQuotaSupplyMessage = r => require.ensure([], () => r(require('../components/TopSpeedQuotaSupplyMessage')), 'TopSpeedQuotaSupplyMessage')
// import PdPopup from '@/components/PdPopup'
const PdPopup = r => require.ensure([], () => r(require('../components/PdPopup')), 'PdPopup')
// import HomePageLoaning from '@/components/HomePageLoaning'
const HomePageLoaning = r => require.ensure([], () => r(require('../components/HomePageLoaning')), 'HomePageLoaning')
// import LoanContract from '@/components/LoanContract'
const LoanContract = r => require.ensure([], () => r(require('../components/LoanContract')), 'LoanContract')
// import OperatorAuthorization from '@/components/OperatorAuthorization'
const OperatorAuthorization = r => require.ensure([], () => r(require('../components/OperatorAuthorization')), 'OperatorAuthorization')
const ConsumeEvidence = r => require.ensure([], () => r(require('../components/ConsumeEvidence')), 'ConsumeEvidence')
const UserAgreement = r => require.ensure([], () => r(require('../components/UserAgreement')), 'UserAgreement')
const PersonalAgreement = r => require.ensure([], () => r(require('../components/agreements/personalAgreement')), 'personalAgreement')
const AuthorizeAgreement = r => require.ensure([], () => r(require('../components/agreements/authorizeAgreement')), 'authorizeAgreement')
const LbkServiceAgreement = r => require.ensure([], () => r(require('../components/agreements/lbkServiceAgreement')), 'lbkServiceAgreement')
const OnCheckNoPass = r => require.ensure([], () => r(require('../components/OnCheckNoPass.vue')), 'OnCheckNoPass')
// import OnCheckNoPass from '@/components/OnCheckNoPass'
Router.prototype.goBack = function (homeTabSelected) {
  homeTabSelected = homeTabSelected || ''
  this.isBack = true
  window.history.go(-1)
  sessionStorage.setItem('homeTabSelected', homeTabSelected)
}
Vue.use(Router)

import {
  mobileManager
} from '../utils/WebInfo'
let router = new Router({
  routes: [{ //首页未命中
      path: '/HomePageMiss',
      name: 'HomePageMiss',
      meta: {
        title: '借款'
      },
      component: HomePageMiss
    },
    {
      path: '/MessageCenter',
      name: 'MessageCenter',
      meta: {
        title: '消息中心'
      },
      component: MessageCenter
    },
    {
      path: '/Order',
      name: 'Order',
      meta: {
        title: '订单中心'
      },
      component: Order
    },
    {
      path: '/OrderNo',
      name: 'OrderNo',
      meta: {
        title: '订单中心'
      },
      component: OrderNo
    },
    {
      path: '/MyCredit',
      name: 'MyCredit',
      meta: {
        title: '我的征信信息'
      },
      component: MyCredit
    },
    {
      path: '/HelpCenter',
      name: 'HelpCenter',
      meta: {
        title: '帮助中心'
      },
      component: HelpCenter
    },
    {
      path: '/QuestionDetail',
      name: 'QuestionDetail',
      meta: {
        title: '帮助中心'
      },
      component: QuestionDetail
    },
    {
      path: '/QuickLoanIndex',
      name: 'QuickLoanIndex',
      meta: {
        title: ''
      },
      component: QuickLoanIndex
    },




    {
      path: '/AutoRepay',
      name: 'AutoRepay',
      meta: {
        title: '自动代扣'
      },
      component: AutoRepay
    },
    {
      path: '/RepaymentDetail',
      name: 'RepaymentDetail',
      meta: {
        title: '还款详情'
      },
      component: RepaymentDetail
    },
    {
      path: '/RepaymentOrderDetail',
      name: 'RepaymentOrderDetail',
      meta: {
        title: '订单详情'
      },
      component: RepaymentOrderDetail
    },
    //	{
    //    path: '/',
    //    name: 'OrderDetails',
    //    component: OrderDetails
    // },
    {
      path: '/OrderHome',
      name: 'OrderHome',
      meta: {
        title: '申请订单'
      },
      component: OrderHome
    },
    {
      path: '/OrderDetails',
      name: 'OrderDetails',
      meta: {
        title: '订单详情'
      },
      component: OrderDetails
    },
    {
      path: '/BankCard',
      name: 'BankCard',
      meta: {
        title: '绑定银行卡'
      },
      component: BankCard
    },
    {
      path: '/BindSuccess',
      name: 'BindSuccess',
      meta: {
        title: '绑卡结果'
      },
      component: BindSuccess
    },
    {
      path: '/LoanConfirm',
      name: 'LoanConfirm',
      meta: {
        title: '订单确认'
      },
      component: LoanConfirm
    },
    {
      path: '/OpenAccount',
      name: 'OpenAccount',
      meta: {
        title: '个人信息'
      },
      component: OpenAccount
    },
    { //确认还款
      path: '/ConfirmPayments',
      name: 'ConfirmPayments',
      meta: {
        title: '确认还款'
      },
      component: ConfirmPayments
    },
    { //确认还款银行卡选择 融宝
      path: '/ManualPayments',
      name: 'ManualPayments',
      meta: {
        title: '确认还款'
      },
      component: ManualPayments
    },
    { //确认还款银行卡选择   宝付
      path: '/BfManualPayments',
      name: 'BfManualPayments',
      meta: {
        title: '确认还款'
      },
      component: BfManualPayments
    },
    { //还款信息详情页
      path: '/PaymentDetails',
      name: 'PaymentDetails',
      meta: {
        title: '还款详情'
      },
      component: PaymentDetails
    },
    { //基本信息认证
      path: '/BasicsMessage',
      name: 'BasicsMessage',
      meta: {
        title: '基本信息认证'
      },
      component: BasicsMessage
    },
    { //补充申请信息
      path: '/SupplyMessage',
      name: 'SupplyMessage',
      meta: {
        title: '补充申请信息'
      },
      component: SupplyMessage
    },
    { //产品详情页
      path: '/ProductDetail',
      name: 'ProductDetail',
      meta: {
        title: '产品说明'
      },
      component: ProductDetail
    },
    { //贷款审批中
      path: '/OnCheck',
      name: 'OnCheck',
      meta: {
        title: '贷款审批中'
      },
      component: OnCheck
    },
    // {     //放款中
    //   path: '/OnLoan',
    //   name: 'OnLoan',
    //   meta: {
    //     title: '放款中'
    //   },
    //   component: OnLoan
    // },
    { //绑卡收款
      path: '/BindCard',
      name: 'BindCard',
      meta: {
        title: '绑卡收款'
      },
      component: BindCard
    },
    { //选择银行卡
      path: '/SelectBankCard',
      name: 'SelectBankCard',
      meta: {
        title: '选择银行卡'
      },
      component: SelectBankCard
    },
    { //页面进行绑卡
      path: '/UpdateBandCardInfo',
      name: 'UpdateBandCardInfo',
      meta: {
        title: '绑定银行卡'
      },
      component: UpdateBandCardInfo
    },
    { //新增加银行卡页面、绑卡
      path: '/NoSenseBandCard',
      name: 'NoSenseBandCard',
      meta: {
        title: '绑定银行卡'
      },
      component: NoSenseBandCard
    },
    { //第三方绑卡
      path: '/ThirdBandCard',
      name: 'ThirdBandCard',
      meta: {
        title: '聚合开户'
      },
      component: ThirdBandCard
    },
    // {  //绑卡收款
    //   path: '/TiedCardCollection',
    //   name: 'TiedCardCollection',
    //   meta: {
    //     title: '借款'
    //   },
    //   component: TiedCardCollection
    // },
    {
      path: '/OnekeyAuthentication',
      name: 'OnekeyAuthentication',
      meta: {
        title: '实名认证' //(一键贷款)
      },
      component: OnekeyAuthentication
    },
    {
      path: '/TopSpeedAuthentication',
      name: 'TopSpeedAuthentication',
      meta: {
        title: '实名认证' //(极速)
      },
      component: TopSpeedAuthentication
    },
    {
      path: '/OnekeyQuotaSupplyMessage',
      name: 'OnekeyQuotaSupplyMessage',
      meta: {
        title: '评估额度-补充信息' //(一键贷款)
      },
      component: OnekeyQuotaSupplyMessage
    },
    {
      path: '/TopSpeedQuotaSupplyMessage',
      name: 'TopSpeedQuotaSupplyMessage',
      meta: {
        title: '评估额度-补充信息' //(极速)
      },
      component: TopSpeedQuotaSupplyMessage
    },
    {
      path: '/PdPopup',
      name: 'PdPopup',
      meta: {
        title: 'pd弹框'
      },
      component: PdPopup
    },
    { //首页放款中
      path: '/HomePageLoaning',
      name: 'HomePageLoaning',
      meta: {
        title: '首页放款中'
      },
      component: HomePageLoaning
    },
    { //借款合同
      path: '/LoanContract',
      name: 'LoanContract',
      meta: {
        title: '借款合同'
      },
      component: LoanContract
    },
    {
      path: '/OperatorAuthorization',
      name: 'OperatorAuthorization',
      meta: {
        title: '运营商认证中(过度页面)'
      },
      component: OperatorAuthorization
    },
    {
      path: '/ConsumeEvidence',
      name: 'ConsumeEvidence',
      meta: {
        title: "消费凭证"
      },
      component: ConsumeEvidence
    },
    {
      path: '/OnCheckNoPass',
      name: 'OnCheckNoPass',
      meta: {
        title: '审批未通过'
      },
      component: OnCheckNoPass
    },
    {
      path: '/UserAgreement',
      name: 'UserAgreement',
      meta: {
        title: '用户授权相关协议'
      },
      component: UserAgreement
    },
    {
      path: '/personalAgreement',
      name: 'personalAgreement',
      meta: {
        title: '《乐宝卡服务与隐私协议》'
      },
      component: PersonalAgreement
    },
    {
      path: '/authorizeAgreement',
      name: 'authorizeAgreement',
      meta: {
        title: '《委托及授权协议》'
      },
      component: AuthorizeAgreement
    },
    {
      path: '/lbkServiceAgreement',
      name: 'lbkServiceAgreement',
      meta: {
        title: '《乐宝卡服务与隐私协议》'
      },
      component: LbkServiceAgreement
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (/^\/HomePageMiss/.test(to.path) || /^\/Order/.test(to.path) || /^\/OnCheck/.test(to.path) || /^\/HomePageLoaning/.test(to.path) || /^\/OnCheckNoPass/.test(to.path)) {
    mobileManager.showBottomBar() //显示原生底部栏
  } else {
    mobileManager.hideBottomBar() // 隐藏原生底部栏
  }
  next()
})

export default router
