/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-11-29 18:28:07
 * @LastEditTime: 2021-11-30 11:15:30
 * @LastEditors: houcw
 * @Reference:
 */
// 枚举
// 枚举类型是有对应的数字值的，默认是从 0 开始的
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN,
}

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(2);

console.log(`我要去${result}`);

// 泛型
function add<T>(first: T, second: T) {
  console.log(first);
  console.log(second);
  return `${first}${second}`;
}
const result1 = add<number>(1, 2);
console.log(result1);

// 泛型在数组中使用

function myFun<ANY>(params: Array<ANY>) {
  return params;
}

let li: Array<number> = [1, 2, 3];
myFun(li);
console.log(myFun(li));

//泛型与类的结合使用

// class SelectGirl {
//     constructor(private girls: string[]) {}
//     getGirl(index: number): string {
//       return this.girls[index];
//     }
//   }

//   const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
//   console.log(selectGirl.getGirl(1));

class SelectGirl<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
console.log(selectGirl.getGirl(1));

//   泛型中的继承

interface Haha {
  name: string;
}

// class Xixi<T extends Haha> {
//   constructor(private t: T[]) {}

//   getT(index: number): string {
//     return this.t[index].name;
//   }
// }

// const t2 = new Xixi([{ name: "大脚" }, { name: "刘英" }, { name: "晓红" }]);

// console.log(t2.getT(2));

// 泛型约束

class Xixi<T extends string> {
  constructor(private t: T[]) {}
  getT(index: number): string {
    return this.t[index];
  }
}

const t2 = new Xixi<string>(["大脚", "刘英", "晓红"]);

console.log(t2.getT(2));
