// マップ関数について

const nameArr = ["A", "B", "C"];
// ↓はreturnしてるので新たな配列を作ってる。アローのようで微妙に違うので注意
const nameArr1 = nameArr.map((name) => {
  return name;
});
console.log(nameArr1);

// ↓はforと同じで、単純に繰り返し処理してる
// 二つ目の引数には順番が入ってくるので、もしインデックスが欲しければ下記のように２つ目にindexとかなんか指定すればいい
nameArr.map((name, index) => console.log(`${index}はname`));

// こういうのもできる
const nameArr3 = nameArr.map((name) => {
  if (name === "B") {
    return `${name}こいつｂ`;
  } else {
    return name;
  }
});
console.log(nameArr3);
