// 类型声明
// 1.布尔类型
let isDone:boolean = false
console.log(isDone)
//2.数字类型，所有数字均为浮点数，除了支持10进制和16机制字面量外，也支持2进制和8进制 
// ······会默认将16进制，2进制，8进制转换成为10进制的数字输出

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(decLiteral)
console.log(hexLiteral)
console.log(binaryLiteral)
console.log(octalLiteral)


// 3.字符串类型 注意：必须使用双引号或者单引号
let stuName:string = 'bob'
console.log(stuName)
//       模板字符串拼接
let age: number = 37;
let sentence: string = `Hello, my name is ${ stuName }`

// 字符串拼接
let Str:String = "Hello, my name is"+stuName+"\n"+"my age is"+age
console.log(Str)

// 4.数组
// ·······直接定义数组
    let list:number[] = [1,2,3]
//········使用泛型定义数组
    let list1:Array<number> = [1,2,3]