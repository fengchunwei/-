import http from "./http.js";
// 这个方法的功能：调用接口获取我们榜单列表
// 输入： 
// type：类型
// size: 返回多少条数据
// offset：偏移量
// 输出：
//     请求到的数据。
function getMusicBillList(type = 1, size = 6, offset = 0) {
    const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`;
    // http.get(url).then(res => {
    //     // 想办法把res的数据返回出去那
    //     return res;
    // });
    // 这个http.get()返回的是一个promise对象，我们我们调用getMusicBillList()就能拿到这个Promise对象
    // 通过Promise对象的then方法就能拿到请求到的数据。
    return http.get(url);
}

// 这是一个普通导出
export {
    getMusicBillList
}

// 默认导出只能导出一个