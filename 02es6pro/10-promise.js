//异步编程解决方案：ajax、文件读取

//引入node.js中的本地文件扩展模块
const fs = require('fs')

//实例化Promise
//Promise对象有三个状态：初始化、成功、失败
//reslove和reject是函数参数类型，可以将promise的状态设置为成功和失败
const p = new Promise((reslove, reject) => {
  //执行异步操作
  //第一个参数：读取文件的路径
  //第二个参数：读取过程的响应结果的处理
  fs.readFile('../01nodepro/file1.txt', (err, data) => {
    //err在前，data在后
    if (err) {
      //console.log('文件读取失败')
      reject(err) //将promise状态改为失败
    }
    reslove(data) //将promise状态改为成功
    //console.log(data.toString())
  })
})
//当promise状态为城市then方法被调用
//当promise状态为城市catch方法被调用
p.then((response) => {
  //成功业务逻辑
  console.log(response.toString())
}).catch((error) => {
  //失败业务逻辑
  console.log('文件读取出错')
  console.log(error)
})
