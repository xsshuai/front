//传统方法
let person1 = {
  sayHi: function () {
    console.log('Hi')
  },
  sing: function () {
    console.log('一闪一闪亮晶晶')
  },
}

//简写方式
let person = {
  sayHi() {
    console.log('Hi')
  },
  sing() {
    console.log('一闪一闪亮晶晶')
  },
}

person.sayHi()
person.sing()
