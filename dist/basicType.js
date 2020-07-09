"use strict";
/**
 * 基本类型
 */
(function () {
    //  定义字符串
    var str = "this is a string";
    var strTpl = "you can say " + str;
    // 定义布尔值
    var state = false;
    var truth = true;
    // 定义数组 需要指定数组项类型
    var list = [1, 2, 3, 4];
    var arr = [1, 2, 3, 4];
    var array = ["a", "b"];
    var collection = ["a", "b"];
    // 只读数组
    var readArr = [1, 2, 3];
    // 定义元祖 tuple
    var x;
    x = ["a", 2];
    // 定义枚举
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["blue"] = 2] = "blue";
    })(Color || (Color = {}));
    var c = Color[2];
    c = "blue";
    // 指定了d的类型只能是Color里的字符串或者是其他数字
    var d = Color.blue;
    d = Color.red;
    console.log(d); // 0
    d = 0;
    // 定义 any 类型，相当于未指定类型
    var a = 1;
    a = "a";
    a = true;
    // 定义 void 无返回值，多用于函数，如果变量定义，则只有 null 和 undefined
    function noReturn() {
        console.log("no return");
    }
    // 定义对象
    var obj = { value: 1 };
    // 定义函数 可以指定返回值类型，参数类型
    function say(person) {
        return person + ", hello!";
    }
    document.body.innerHTML = say("Bob");
})();
