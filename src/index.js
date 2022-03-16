// var val1 = "aab";
// console.log(val1);
// var val1 = "aab";
let var2 = "senngen";
// let var1 = "senngen";
console.log(var2);

var2 = "上書きOK";

// let var2 = "再宣言できない";

const ob = { name: "aaa", age: 28 };
// console.log(ob);

ob.name = "bbb";
// constでもオブジェクトの中身（プロパティ）は変えられる。
// ので基本constで定義

console.log(ob);

// constでも配列の中身は変えられる。

const arrr = ["1", "2", "3"];
console.log(arrr);
arrr[0] = ["4"];
