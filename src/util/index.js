/** 
 * @author tangshuimei
 * @description 公共函数定义
*/

export default {
    // 获取浏览器地址栏参数值
    getUrlParam(name){
        // 主机
        // location.hostname
        // 端口
        // location.port
        // 取出?开始往后的字符串
        // location.search()
        // 获取变量key=之后&取反的任意字符
        let reg = new RegExp('(^|&)'+name+'=([^&*])')
        let r = window.location.search.substr(1).match(reg)
        if(r != null) return decodeURIComponent(r[2])


    }
}