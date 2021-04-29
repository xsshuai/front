//1、声明一个字符串
let str = '一个字符串' //单双引号都可以声明一个字符串
let str2 = `这也是自个字符串`

console.log(str)
console.log(str2)

//2、反引号原样数组
let htmlStr = `<ul>
<li>沈腾</li>
<li>玛丽</li>
<ul>`
console.log(htmlStr)

//3、反引号支持变量拼接(插值表达式)
let star = '张雪'
let out = '我喜欢' + star + '这个女生'
let out1 = `我喜欢${star}这个女生`
console.log(out)
console.log(out1)
