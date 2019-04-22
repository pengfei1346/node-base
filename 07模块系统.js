// var hello  = require('./hello')
// hello.world()
//
// exports.world = function() {
//     console.log('Hello World');
// }
//
// module.exports = function() {
//     // ...
// }

/************/
//demo
//hello.js
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
}
module.exports = Hello;








// exports 和 module.exports 的使用
// 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports





























