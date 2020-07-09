/**
 * 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 */

(function () {
  // 定义一个函数，参数指定格式

  // function print(param: { name: string }): void {
  //   console.log(`param is: ${param.name}`);
  // }

  // 也可以把参数指定的类型格式抽离出来，就是接口
  interface paramType {
    name?: string; // ？表示可有可无
    readonly value: number; // 只读
    // 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly
  }
  function print(param: paramType): void {
    console.log(`param is: ${param.name}`);
    // param.value++;  报错
  }
  // 定义参数 如果没有 对象内没有name属性，会报错
  const p = { value: 1, namee: "huhu" };
  // print({ value: 1, namee: "huhu" }); 报错，对象字面量方式传参会被检测不被目标类型包含的属性
  // print({ value: 1, namee: "huhu" } as paramType); //类型断言绕过检测
  interface paramType {
    name?: string;
    [name: string]: any; // 增加额外属性名类型指定，这种方式比较优雅，显性的定义其他属性类型
  }

  print({ value: 1, namee: "huhu" });
  print(p); // 这种方式不会报错
})();
