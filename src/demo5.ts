/*
 * @Description:
 * @Author: houcw
 * @Date: 2021-11-29 16:20:00
 * @LastEditTime: 2021-11-29 16:26:10
 * @LastEditors: houcw
 * @Reference:
 */
// 抽象类

abstract class Girl1 {
  abstract skill(): string;
}

class Waiter extends Girl1 {
  skill() {
    return "nihao ";
  }
}

class BaseTeacher extends Girl1 {
  skill() {
    return "初级技术 ";
  }
}

class seniorTeacher extends Girl1 {
  skill() {
    return "高级技术";
  }
}
const t = new Waiter();
t.skill();
