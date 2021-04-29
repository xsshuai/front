//传统方式定义对象
let name = 'Tom'
let age = 18
let sing = function () {
  console.log('我会唱歌')
}
let person = {
  name,
  age,
  sing,
}
console.log(person.name)
console.log(person.age)
person.sing()
