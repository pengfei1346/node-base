// JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

// 在浏览器 JavaScript 中，通常 window 是全局对象，
// 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

// 在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

//_filename__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。
// 如果在模块中，返回的值是模块文件的路径。

// __dirname 表示当前执行脚本所在的目录。


// util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。

// Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入文件系统模块(fs)语法如下所示：
// 读取文件内容的函数 异步的 fs.readFile() 和同步的 fs.readFileSync()。
//打开文件  fs.open(path, flags[, mode], callback)
//获取文件信息 fs.stat(path, callback)
//写入文件  fs.writeFile(file, data[, options], callback)
//关闭文件  fs.close(fd, callback)
//截取文件  fs.ftruncate(fd, len, callback)
// 删除文件  fs.unlink(path, callback)
// 创建目录  fs.mkdir(path[, options], callback)
// 读取目录  fs.readdir(path, callback)
// 删除目录  fs.readdir(path, callback)

