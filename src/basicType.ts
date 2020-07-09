/**
 * 基本类型
 */

(function () {
  //  定义字符串
  const str: string = "this is a string";
  const strTpl: string = `you can say ${str}`;

  // 定义布尔值
  const state: boolean = false;
  const truth: boolean = true;

  // 定义数组 需要指定数组项类型
  const list: number[] = [1, 2, 3, 4];
  const arr: Array<number> = [1, 2, 3, 4];
  const array: string[] = ["a", "b"];
  const collection: Array<any> = ["a", "b"];
  // 只读数组
  const readArr: ReadonlyArray<any> = [1, 2, 3];

  // 定义元祖 tuple
  let x: [string, number];
  x = ["a", 2];

  // 定义枚举
  enum Color {
    red,
    green,
    blue,
  }
  let c: string = Color[2];
  c = "blue";
  // 指定了d的类型只能是Color里的字符串或者是其他数字
  let d: Color = Color.blue;
  d = Color.red;
  console.log(d); // 0
  d = 0;

  // 定义 any 类型，相当于未指定类型
  let a: any = 1;
  a = "a";
  a = true;

  // 定义 void 无返回值，多用于函数，如果变量定义，则只有 null 和 undefined
  function noReturn(): void {
    console.log("no return");
  }

  // 定义对象
  let obj: object = { value: 1 };

  // 定义函数 可以指定返回值类型，参数类型
  function say(person: string): string {
    return person + ", hello!";
  }

  document.body.innerHTML = say("Bob");
})();
