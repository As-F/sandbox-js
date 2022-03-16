// ３項演算子　→ifとelseを一行で
const formatnum = (num) => (typeof num === "number" ? "数字" : "じゃない");
console.log(formatnum(1));

/**
 *
 *
 */

// ||はじつはorではなくて左がfalseとなるとき右側を返す。結果的にorの動きになるけど、下の例で数値をnullにしたり入れたりすると分かる
const num = 100;
const fee = num || "左がfalse";
// console.log(fee);

// &&は左がtrueなら右を返す
const num2 = 100;
const fee2 = num && "数値入れた";
console.log(fee2);
