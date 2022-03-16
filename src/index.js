/**スプレッド構文 */
// みためどおり、続きを展開するみたいな動き！
const arr1 = [1, 2];
console.log(arr1);
// 配列展開
console.log(...arr1);

const sum = (n1, n2) => console.log(n1 + n2);
sum(arr1[0], arr1[1]);
console.log(
  "↓...で配列を展開している。結果的にn1にarr[0],n2にarr[1]が入ってるので上と同じ動き"
);
sum(...arr1);

//
const arr2 = [1, 2, 3, 4, 5];
// 分割代入
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列コピー
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);
// つなげられる！
const arr7 = [...arr4, ...arr5];
console.log(arr7);

// イコールでそのままコピーしても見た目は同じだけど、
const arr8 = arr4;
// ↑これだとarr8は４を参照してるので手を加えるとarr４も変わってしまう
