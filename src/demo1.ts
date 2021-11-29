/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-11-18 17:05:48
 * @LastEditTime: 2021-11-18 17:35:00
 * @LastEditors: houcw
 * @Reference:
 */
// 接口定义 相关知识

interface dataDemo {
  name: string;
  age: number;
  bust: number;
  like?: string;
  [propname: string]: any;
  say(): string;
}

const getInfo = (customer: dataDemo) => {
  if (customer.age > 18) {
    console.log("object");
  } else {
    console.log("未成年");
  }
  customer.like && console.log(customer.name + "的爱好是：" + customer.like);
  customer.sex && console.log(customer.name + "的性别是：" + customer.sex);
};

const customer = {
  name: "张三",
  age: 12,
  bust: 93,
  like: "玩游戏",
  sex: "女",
  say() {
    return "hahah";
  },
};
getInfo(customer);

// 类和接口的结合

class customer1 implements dataDemo {
  name = "刘英";
  age = 18;
  bust = 90;
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  }
}


// 接口间的继承

interface dataDemo1 extends dataDemo {
    teach():string
}

const m = {
    name: "张三",
    age: 12,
    bust: 93,
    like: "玩游戏",
    sex: "女",
    say() {
      return "hahah";
    },
    teach(){
        return 'teacher'
    }
}

const putMsg=(m:dataDemo1)=>{
    console.log('hello word');
}

putMsg(m)