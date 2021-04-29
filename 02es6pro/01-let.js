//声明变量

//1、let定义的变量不能重读声明，var可以
// let a
// a = 1
// let a = true

//console.log(a)
//2、var没有块级作用域，let有
// var flag = true
// if (flag) {
//   //作用域
//   let star = 5
// }
// console.log(star)

//3、var和let都具有函数级作用域
// function test() {
//   var f = '函数值'
//   console.log(f)
// }

// test()
// console.log(f)

//var存在变量提升，let不存在
let a
console.log(a)
