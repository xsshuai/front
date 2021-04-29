//引入Node.js文件系统模块
//fs是Node.js自带模块，使用Node.js中的关键字require将模块引入，使用const定义常量模块
const fs = require('fs')

//调用readFile方法读取磁盘文件：异步操作
fs.readFile('./file.txt', function (err, data) {
  //文件读取失败时，获取到err值，输出错误信息
  if (err) throw err
  //文件读取成功，获取data值，输出相应内容
  console.log(data.toString())
})
console.log('文件读取')
