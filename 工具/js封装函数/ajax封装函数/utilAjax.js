/**
* options{type:'',url:'',data:''}
*
*/
function myAjax(options,fn){
    // 1. 获取实例对象
    var xhr = new XMLHttpRequest();
    //2. 确定get还是post
    if(options.type.toLowerCase() == 'get'){
      var data = options.data?('?'+options.data):'';
      xhr.open('get',options.url+data);
      xhr.send(null);
    }else{
      xhr.open('post',options.url);
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      var data = options.data?options.data:null;
      xhr.send(data);
    }
    xhr.onreadystatechange = function(){
    //5. xhr.readyState == 4 请求已完成
       if (xhr.readyState == 4 && xhr.status == 200) {
            // xhr.responseXML
          var rsObj = JSON.parse(xhr.responseText);
          // 把结果交给外部处理
          fn(rsObj);
       }
   }

}