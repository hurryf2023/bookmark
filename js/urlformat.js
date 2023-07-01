// const datelist = require('./urlDate.js')

web_url_list = date_url
// console.log(web_url_list)

for (i=0;i<web_url_list.length;i++ ){
    var web_url = web_url_list[i].web_url;
    var url_s = web_url.slice(0,4)
    // console.log(url_s)
    // 域名过滤器
    if(url_s == "http"){
        var url = new URL(web_url)
        var domain = url.hostname;
        Object.assign(web_url_list[i],{domain:domain})      
    }
}




