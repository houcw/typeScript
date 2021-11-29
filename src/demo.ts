/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-11-18 16:06:27
 * @LastEditTime: 2021-11-18 17:05:56
 * @LastEditors: houcw
 * @Reference:
 */

import { type } from "os";

// 接口定义
// interface XiaoJieJie {
//     uname: string;
//     age: number;
//   }

// 对象类型推断
//   const xiaohong: XiaoJieJie = {
//     uname: "小红",
//     age: 18,
//   };
// console.log(xiaohong.uname);

// 对象类型

const xiaoJieJie: {
  name: string;
  age: number;
} = {
  name: "大脚",
  age: 18,
};
console.log(xiaoJieJie.name);

// 类型注解
let count: number;
count = 123;
// count变量就是一个数字类型，这就叫做类型注解

// 类型推断
// ts会根据你添加的变量注解自动推荐出、分析出来 其他变量的类型

function getTotal(one: number, two: number) {
  return one + two;
}

const total = getTotal(1, 2);

// 函数的返回值增加对应的类型注解

function getTotal1(one: number, two: number): number {
  return one + two;
}

// 没有返回值的时候 void类型
// 定义为void类型之后，我们就不能在给函数设置任何返回值
function sayHello(): void {
  console.log("ss");
  // return 1
}

// 参数为对象的时候，设置类型注解
function add({ one, two }: { one: number; two: number }): number {
  return one + two;
}

const three = add({ one: 1, two: 2 });

console.log(three);

//   数组的相关定义：
// 1.一般数组类型定义
const numberArr: number[] = [1, 2, 3];
const arr: (number | string)[] = [1, "string", 2];
// 2.对象数组类型定义
const xiaoJieJies: { name: string; age: Number }[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
// 类型别名
type Lady = {
  name: string;
  age: Number;
};
const xiaoJieJies1: Lady[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

// class 类定义

class Madam {
  name: string;
  age: number;
}

const xiaoJieJies2: Madam[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];


// console.log();
