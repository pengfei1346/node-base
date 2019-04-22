var http = require('http')

http.createServer(function (req,res) {
    //发送http 头部
    // http状态码 200
    //内容类型 text
    res.writeHeader(200,{'Content-Type': 'text/plain'})

    //发送响应数据
    res.end('Hello World\n');


}).listen(8888)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
