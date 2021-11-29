/*
 * @Description: 
 * @Author: houcw
 * @Date: 2021-11-18 17:34:28
 * @LastEditTime: 2021-11-29 11:35:30
 * @LastEditors: houcw
 * @Reference: 
 */
// ts 类 相关知识 

class lady {
    content = 'hello word';
    sayHello(){
        return this.content
    }
}

const one = new lady()
console.log(one.sayHello());

// 继承

// class xiaojiejie extends lady{
//     sayHi(){
//         return 'i love you'
//     }
// }

// 重写  - 子类可以重写父类的方法
// class xiaojiejie extends lady{
//     sayHi():string{
//         return 'i love you'
//     }
//     sayHello(): string {
//         return '你好'
//     }
// }


// super 关键字 代表父类中的方法 使用super 关键字可以对父类中的方法进行修改


class xiaojiejie extends lady{
    str = '你说啥';
    sayHello(): string {
        return super.sayHello() +this.str
    }
}

const two = new xiaojiejie()
console.log(two.sayHello());