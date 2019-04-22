// Node.js 异步编程的直接体现就是回调。回调函数在完成任务后就会被调用
// 例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
// 回调函数一般作为函数的最后一个参数出现,回调函数接收错误对象作为第一个参数。

// //阻塞式
// var fs = require('fs')
// var data = fs.readFileSync('01.txt')
//
// console.log(data.toString());
// console.log("程序执行结束!");

// // 非阻塞
// var fs = require("fs");
//
// fs.readFile('01.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
//
// console.log("程序执行结束!");


// // 基于新版本 ES 的语法糖，Node 的异步操作可以替换成以下两种写法。
// // promise
// const _submit = (payload, formid, destination) => {
//     return new Promise((resolve, reject) => { // 返回一个Promise对象，实现异步回调
//         app.requestPost(destination, {
//             payload,
//             formid: formid
//         }, true).then((res) => { // 调用一个异步函数，使用then方法对接成功回调
//             if (res) {
//                 resolve(); // call成功回调
//             } else {
//                 reject(); // call失败回调
//             }
//         }).catch(() => { // 调用一个异步函数，使用catch方法对接失败回调
//             reject();
//         })
//     });
// }
//
// // async await
// async function query(collection, querySelector, queryOptions) {
//     let db, data;
//     try {
//         db = await MongoClient.connect(_dburl); // 使用await标记上游异步函数，此时event loop会将与该变量有关的操作阻塞
//         data = await db.db(DBNAME).collection(collection).find(querySelector, queryOptions || {}).toArray();
//     } catch (e) {
//         log(e.message, 2);
//     }
//     return data;
// }
