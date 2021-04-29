//1、数组的解构
// const F4 = ['小沈阳', '刘能', '赵四', '宋小宝']
// console.log(F4)
// // let shenyang = F4[0]
// // let liuneng = F4[1]
// let [shenyang, liuneng, zhaosi, xiaobao] = F4

// console.log(shenyang)
// console.log(liuneng)
// console.log(zhaosi)
// console.log(xiaobao)

//对象的解构
const abs = {
  username: '赵本山',
  age: 78,
  job: function () {
    console.log('演小品')
  },
}
// let username = abs.username
// let age = abs.age
// let job = abs.job

let { username, age, job } = abs

console.log(username)
console.log(age)
job()
