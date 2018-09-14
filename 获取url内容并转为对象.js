// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组

function getUrlParam(sUrl, sKey) {
    var res = new Object();
    var i = sUrl.indexOf("?")
    var content = sUrl.slice(i+1).split("#")[0];
    var arr = content.split("&");
    for (var k in arr){
      key = arr[k].split("=")[0];
      value = Number(arr[k].split("=")[1]);
      var objArr = [];
      if(res.hasOwnProperty(key) == false){
        res[key]=objArr;
        objArr.push(value)
      }else{
        res[key].push(value);
      }
    }   
    if (sKey){
      console.log(res[sKey]);
    }else{
      console.log(res);     
    }
}

getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe");
// { key: [ 1, 2, 3 ], test: [ 4 ] }
getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe","key");
// [ 1, 2, 3 ]