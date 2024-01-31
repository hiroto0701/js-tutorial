// array property

/* Array.prototype[@@iterator]() */

// [@@iterator]() は Array インスタンスのメソッドで、反復可能プロトコル を実装しており、
// スプレッド構文 や for...of ループのような反復可能オブジェクトを期待するほとんどの構文で配列を利用することができます。
// 配列の各インデックスの値を返す配列イテレーターオブジェクトを返します。
const array = ['a', 'b', 'c'];
const iterator = array[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
// このように @@iterator を直接的に使うことは少ないですが、
// for...of ループや spread 演算子を利用する際には裏でこれが使われていることになります。
// 特に、カスタムのイテレータを定義したい場合には、Symbol.iterator を使用して @@iterator を実装します