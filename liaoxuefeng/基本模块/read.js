'use strict';

var fs = require('fs');

// fs.readFile('bbbb.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// // 同步读文件
// var data = fs.readFileSync('bbbb.txt', 'utf-8');
// console.log(data);

// // 读二进制文件
// fs.readFile('bbbb.png', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + ' bytes');
//     }
// });

// 获取文件大小，创建时间等信息
fs.stat('bbbb.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

// stat()也有一个对应的同步函数statSync()