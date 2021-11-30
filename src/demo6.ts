/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-11-29 16:30:51
 * @LastEditTime: 2021-11-29 18:27:33
 * @LastEditors: houcw
 * @Reference:
 */

// ts 项目中的tsconfig.json 文件
// include 属性是用来指定要编译的文件的
// exlude 除什么文件之外进行编译
// files  编译什么文件
// complerOptions {}
// complerOptions{
// removeComments true  编译出来的js文件显示不显示注释
// strict true 编译时按照严格的ts书写规范 false 相对不严格
// noImplicitAny 允许你的注解类型any不用特意表明
// }

// 联合类型
interface Waiter {
  name: string;
  level: string;
  sayHi: () => {};
}
interface Teacher {
  name: string;
  level: string;
  skill: () => {};
}
// 这时候可以能是Waiter,也可能是Teacher。所以我们使用了联合类型
// function judegeWho(animal: Waiter | Teacher) {
// 会报错，因为judgeWho不能准确的判断联合类型具体的实例是什么
//   animal.skill();
// }

// 类型保护

// 类型断言   -- as
function judegeWho(animal: Waiter | Teacher) {
  if (animal.level) {
    (animal as Teacher).skill();
  } else {
    (animal as Waiter).sayHi();
  }
}
//   类型保护  -- in

function judegeWho1(animal: Waiter | Teacher) {
  if ("sayHi" in animal) {
    animal.sayHi();
  } else {
    animal.skill();
  }
}
//   类型保护  -- typeof
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}
//   类型保护  -- instanceof  针对对象进行类型保护

class NumberObj {
  count: number;
  constructor(count: number) {
    this.count = count;
  }
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  } else {
    return "不符合类型";
  }
}

let num1 = new NumberObj(12);
let num2 = new NumberObj(12);
const res = addObj(num1, num2);
console.log(res);
