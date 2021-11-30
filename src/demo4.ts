/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-11-29 15:04:47
 * @LastEditTime: 2021-11-29 16:16:17
 * @LastEditors: houcw
 * @Reference:
 */

// getter setter 属性 用来修改  private 类型的变量

class Xiaojiejie {
  constructor(private _age: number) {}

  // get -可以访问使用private 定义的变量
  // get -可以修改 private 的值

  get age() {
    return this._age - 10;
  }

  // setter 可以给private 修饰的变量 设置指定值
  set setAge(age: number) {
    this._age = age + 13;
  }
}

// static 类的静态修饰符，可以不用 new 就可以直接调用 类中的属性和方法

const s = new Xiaojiejie(12);
s.setAge = 25;
console.log(s.age);


class Girl{
    static sayHi(){
        return 'hi '
    }
}

console.log(Girl.sayHi());

// 只读属性 readonly

class man {
    public readonly _name:string;
    constructor(name:string){
        this._name = name
    }
}

const person = new man('nh')
// 不能这样赋值，会报错 _name 是只读属性
// person._name = 'ws'