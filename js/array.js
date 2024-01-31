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


/* Array.prototype.at() 非破壊メソッド */
// // at() は Array インスタンスのメソッドで、整数値を受け取り、その位置にある項目を返します。正の整数値と負の整数値が使用できます。
// // 負の整数は、配列の最後の項目から前へ数えます。
// const arrayAt = [1, 3, 5, 7, 9, 11];
// let indexAt = 2;

// console.log(`An index of ${indexAt} returns ${arrayAt.at(indexAt)}`); // An index of 2 returns 5

// indexAt = -2;
// console.log(`An index of ${indexAt} returns ${arrayAt.at(indexAt)}`); // An index of 2 returns 9

// // 配列の末尾を返す例
// const fruits = ['りんご', 'みかん', 'ぶどう'];
// function returnLast(arr) {
//   return arr.at(-1);
// }

// const lastItem1 = returnLast(fruits);
// console.log(lastItem1);  // ぶどう

// fruits.push('バナナ');
// const lastItem2 = returnLast(fruits); // バナナ
// console.log(lastItem2);


/* Array.prototype.concat() 非破壊メソッド */
// // concat() は Array インスタンスのメソッドで、2 つ以上の配列を結合するために使用します。
// // このメソッドは既存の配列を変更せず、新しい配列を返します。
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ["a", "b", "c", "d"];
// const arr3 = arr1.concat(arr2);
// const arr4 = arr1.concat(); // 引数の省略も可能。省略したら既存の配列のシャロ―コピーを返す。

// console.log(arr3);  // [1, 2, 3, 4, 5, "a", "b", "c", "d"]
// console.log(arr4);  // [1, 2, 3, 4, 5]

// // 配列同士の結合だけでなく、配列に対して値を追加することもできる
// const arr5 = arr1.concat(100);
// console.log(arr5);

// // ネストした配列の連結も可能
// const num1 = [[1, 3]];
// const num2 = [2, [4]];
// const numbers = num1.concat(num2);
// console.log(numbers); // [[1, 3], 2, [4]]  そのまま連結される

// // 疎配列の場合もそのまま連結される
// console.log(([1, , 3]).concat([4, 5])); // [1, empty, 3, 4, 5]


/* Array.prototype.copyWithin() 破壊的メソッド */
// /*  
//   syntax
//   copyWithin(target, start)
//   copyWithin(target, start, end)  
// */
// // この配列の一部を配列内の他の場所にシャローコピーし、この配列を長さを変更せずに返します。
// const arr1 = ["a", "b", "c", "d", "e"];
// // 3番目の要素から4番目までを0番目にコピー
// console.log(arr1.copyWithin(0, 3, 4));  // ["d", "e", "c", "d", "e"]
// console.log(arr1);  // 破壊的メソッドなので元の配列も変わる



/* Array.prototype.entries() 非破壊メソッド */
// 配列内の各要素に対するキー/値のペアを含む新しい配列イテレーターオブジェクトを返します。
/*
  syntax
  entries()  引数なし
*/
const arr1 = ["a", "b", "c"];
const iterator1 = arr1.entries();
console.log(iterator1.next().value);  // [0, "a"]
console.log(iterator1.next().value);  // [1, "b"]

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'

for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']