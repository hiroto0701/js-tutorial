// array property

/* Array.prototype[@@iterator]() */

// [@@iterator]() は Array インスタンスのメソッドで、反復可能プロトコル を実装しており、
// スプレッド構文 や for...of ループのような反復可能オブジェクトを期待するほとんどの構文で配列を利用することができます。
// 配列の各インデックスの値を返す配列イテレーターオブジェクトを返します。
// const array = ['a', 'b', 'c'];
// const iterator = array[Symbol.iterator]();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }
// このように @@iterator を直接的に使うことは少ないですが、
// for...of ループや spread 演算子を利用する際には裏でこれが使われていることになります。
// 特に、カスタムのイテレータを定義したい場合には、Symbol.iterator を使用して @@iterator を実装します


/* Array.prototype.at() */
// at() は Array インスタンスのメソッドで、整数値を受け取り、その位置にある項目を返します。正の整数値と負の整数値が使用できます。
// 負の整数は、配列の最後の項目から前へ数えます。
const arrayAt = [1, 3, 5, 7, 9, 11];
let indexAt = 2;

console.log(`An index of ${indexAt} returns ${arrayAt.at(indexAt)}`); // An index of 2 returns 5

indexAt = -2;
console.log(`An index of ${indexAt} returns ${arrayAt.at(indexAt)}`); // An index of 2 returns 9

// 配列の末尾を返す例
const fruits = ['りんご', 'みかん', 'ぶどう'];
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem1 = returnLast(fruits);
console.log(lastItem1);  // ぶどう

fruits.push('バナナ');
const lastItem2 = returnLast(fruits); // バナナ
console.log(lastItem2);