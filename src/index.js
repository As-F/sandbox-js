const myPro = {
  name: "asa",
  age: 28
};

const message = `my name is ${myPro.name}!`;
console.log(message);
// ↓取り出せる！「分割代入」
const { name, age } = myPro;
const message2 = `my name is ${name}!!`;

console.log(message2);

const mylist = ["aaa", "bbb"];
const mes = `before is ${mylist[0]}`;
console.log(mes);

// ↓配列も取り出せる！「分割代入」
const [before, after] = mylist;
const mes2 = `before is ${before}`;
console.log(mes2);
