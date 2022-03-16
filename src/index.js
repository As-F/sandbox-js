const func1 = (str) => {
  return str;
};

console.log(func1("aaa"));

const func2 = (str) => str;
// 引数１つなら実はかっこ省略できる
//処理が一行で済む単一式なら、｛｝とreturn併せて省略できる

console.log(func2("bb"));

const fun3 = (n1, n2) => n1 + n2;
