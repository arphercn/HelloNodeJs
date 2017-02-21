'use strict'

// 实现文件服务器
var 
    path = require('path'),
    http = require('http'),
    fs = require('fs'),
    url = require('url');
// 从命令行参数获取root目录 默认是当前目录
var root = path.resolve(process.argv[2] || '.');

console.log(' root dir: ' + root);

// 创建服务

function error(request, response){
    console.log('404 ' + request.url);
    // 发送404响应
    response.writeHead(400);
    response.end('404 not found');
}

var server = http.createServer(function(request, response){

    // 获取url的path,类似'/css/xx.css'
    var pathname = url.parse(request.url).pathname;
    console.log(' pathname : ' + pathname);

    // 获取对应的本地文件地址 类似'/www/css/xx.css'
    var filepath = path.join(root, pathname);
    console.log(' filepath : ' + filepath);

    // 获取文件状态
    fs.stat(filepath, function(err, stats){
        // 报错
        if(err){
            // 出错了或者文件不存在
            error(request, response);
        }
        var reqUrl = request.url;
        // 解决浏览器访问网站图标的问题
        if(reqUrl.indexOf('favicon.ico') != -1){
            response.end;
        }else{
            // 判断是否为文件
            if(stats.isFile()){
                // 没有出错并且文件存在
                console.log('200 ' + request.url);
                // 发送200响应
                response.writeHead(200);
                // 将文件流导向response
                fs.createReadStream(filepath).pipe(response);
            // 是否为文件夹
            }else if(stats.isDirectory()){
                var files = ['index.html','default.html'];
                for(var i = 0; i < files.length; i++){
                    // 判断文件是否存在
                    var defaultFile = path.join(root, files[i]);
                    if(fs.existsSync( defaultFile))    {
                        // 没有出错并且文件存在
                        console.log('200 ' + request.url);
                        // 发送200响应
                        response.writeHead(200);
                        // 将文件流导向response
                        fs.createReadStream(defaultFile).pipe(response);
                        return;
                    }
                }
                // 出错了或者文件不存在
                error(request, response);
            }

        }

    });

});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');