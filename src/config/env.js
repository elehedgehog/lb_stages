const LBFQAUTHINFO = 'LBFQAUTHINFO' //乐宝分期基本信息
const LBFQCHANNELCODE = 'LBK' //乐宝分期渠道号
const LBFQPRODUCTCODE = 'H5_LBK' //乐宝分期产品号

const BASEURLPATH = "http://119.23.148.208:8084/appServer";//打包外侧 host+ip
// const BASEURLPATH = "https://app.lbdfun.com/appServer";
// const BASEURLPATH = "/appServer";//本地测试
/**
 * 配置编译环境和线上环境之间的切换
 * IMGBASEURL: 图片所在域名地址
 */
const IMGBASEURL = 'static/'

export {
    LBFQAUTHINFO,
    LBFQCHANNELCODE,
    LBFQPRODUCTCODE,
    BASEURLPATH,
    IMGBASEURL
}