/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-11-29 11:36:27
 * @LastEditTime: 2021-11-29 15:01:51
 * @LastEditors: houcw
 * @Reference:
 */

// 访问类型  主要包含三种 public  private  protected

class Person {
  private name?: string;
  public age?: number;
  public sayHello(): string {
    return "hello word";
  }
  //   只能在类的内部调用
  private sayHi(): string {
    return "12";
  }
  //   只能在类的内部调用
  protected sayPro(): string {
    return "ni hao";
  }
  public fun(): string {
    return this.sayPro();
  }
}

const xiaoming = new Person();
xiaoming.age = 16;
// console.log(xiaoming.age);
// console.log(xiaoming.sayHello());
// console.log(xiaoming.fun());

// 类的构造函数
class Person1 {
  public name?: string;
  public age?: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const ps = new Person1("xiaoliu", 12);
console.log(ps.name, ps.age);

// 继承的构造函数实现
class p {}

class teacher extends p {
  constructor(public name?: string, public age?: number) {
    super();
  }
}

const t1 = new teacher("zhan", 12);
console.log(t1.name, t1.age);

// 构造函数的作用 ->  可以在初始化类的时候，直接通过传参的形式给 类中的变量赋值

//
