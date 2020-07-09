"use strict";
/**
 * 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 */
(function () {
    // 定义一个函数，参数指定格式
    function print(param) {
        console.log("param is: " + param.name);
        // param.value++;  报错
    }
    // 定义参数 如果没有 对象内没有name属性，会报错
    var p = { value: 1, namee: "huhu" };
    print({ value: 1, namee: "huhu" });
    print(p); // 这种方式不会报错
})();
