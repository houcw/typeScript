/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-11-29 18:28:07
 * @LastEditTime: 2021-11-30 10:22:44
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
function add<T>(first:T,second:T){
    console.log(first);
    console.log(second);
    return `${first}${second}`
    
}

// 泛型在数组中使用


const result1 = add<number>(1,2)
console.log(result1);
