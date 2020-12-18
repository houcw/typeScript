// 类型声明
// 1.布尔类型
var isDone = false;
console.log(isDone);
//2.数字类型，所有数字均为浮点数，除了支持10进制和16机制字面量外，也支持2进制和8进制 
// ······会默认将16进制，2进制，8进制转换成为10进制的数字输出
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
// 3.字符串类型 注意：必须使用双引号或者单引号
var stuName = 'bob';
console.log(stuName);
//       模板字符串拼接
var age = 37;
var sentence = "Hello, my name is " + stuName;
// 字符串拼接
var Str = "Hello, my name is" + stuName + "\n" + "my age is" + age;
console.log(Str);
