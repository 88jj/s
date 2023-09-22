# quanx 关键函数
* ##$prefs：
持久化数据存储（读取和写入）。  
* ##$task：
网络请求。  
* ##$done：
请求完毕时需要调用。  
* ##$request：
重写网络请求，用来获取请求中的Cookie等，甚至可以用来篡改响应体。  
* ##$notify：
弹框提示信息。  
`$notify(title, subtitle, message, Opts(rawopts));  `

* ##$done: 
脚本结束，必须要有  
`$done({})`


