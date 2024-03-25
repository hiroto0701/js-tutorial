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
// /*
//   syntax
//   entries()  引数なし
// */
// const arr1 = ["a", "b", "c"];
// const iterator1 = arr1.entries();
// console.log(iterator1.next().value);  // [0, "a"]
// console.log(iterator1.next().value);  // [1, "b"]

// const a = ["a", "b", "c"];

// for (const [index, element] of a.entries()) {
//   console.log(index, element);
// }
// // 0 'a'
// // 1 'b'
// // 2 'c'

// for (const element of [, "a"].entries()) {
//   console.log(element);
// }
// // [0, undefined]
// // [1, 'a']


/* Array.prototype.every() 非破壊メソッド */
// // 列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します
// /*
//   syntax
//   every(callbackFn)
//   every(callbackFn, thisArg)
// */
// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));  // true

// // 全ての配列要素の大きさをテストする
// const arr = [1, 10, 100, 1000, 10000];
// console.log(arr.every((elem) => elem >= 10));  // false

// // 疎配列に対してはスルーされる
// console.log([1, , 3].every((x) => x !== undefined)); // true
// console.log([2, , 2].every((x) => x === 2)); // true



/* Array.prototype.fill() 破壊的メソッド */
// // インデックスの範囲内にある配列のすべての要素を一定の値に変更します。これは変更した配列を返します。
// /*
//   syntax
//   fill(value)
//   fill(value, start)
//   fill(value, start, end)
// */
// const arr = [1, 2, 3, 4];
// console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0]
// console.log(arr); // [1, 2, 0, 0]

// console.log(arr.fill(1, 0));  // [1,1,1,1]
// console.log(arr);  // [1,1,1,1]

// console.log(arr.fill(9999));  // [9999, 9999, 9999, 9999]
// console.log(arr); // [9999, 9999, 9999, 9999]



/* Array.prototype.filter() 非破壊メソッド */
// // 指定された配列の中から指定された関数で実装されているテストに合格した要素だけを抽出したシャローコピーを作成します。
// // filter() メソッドは反復処理メソッドです。
// // 指定された callbackFn 関数を配列の各要素に対して一度ずつ呼び出し、 callbackFn が真値を返したすべての要素からなる新しい配列を生成します。 
// // callbackFn は値が代入されている配列の添字に対してのみ呼び出されます。
// /*
//   syntax
//   filter(callbackFn)
//   filter(callbackFn, thisArg)
// */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.filter((num) => num % 2 ===0);
// console.log(result);  // [2, 4, 6, 8]

// // 10未満の数値を取り除く
// function isBigEnough(value) {
//   return value >= 10;
// }

// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // [12, 130, 44]

// // 配列内の検索
// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']


/* Array.prototype.find() 非破壊メソッド */
// // 提供されたテスト関数を満たす配列内の最初の要素を返します。 テスト関数を満たす値がない場合は、 undefined を返します。
// // ・配列内で見つかった要素のインデックスが必要な場合は、findIndex() を使用してください。
// // ・値のインデックスを検索する必要がある場合は、indexOf() を使用してください。(findIndex() と似ていますが、それぞれの要素の等価性はテスト関数ではなく値でチェックします。)
// // ・配列内に値が存在するかどうかを調べる必要がある場合は、 includes() を使用してください。
// // ・指定したテスト関数を満たす要素があるかどうかを調べる必要がある場合は、 some() を使用してください。
// /*
//   syntax
//   find(callbackFn)
//   find(callbackFn, thisArg)
// */
// const arr = [1, 3, 5, 7, 9, 11];
// const found = arr.find(elem => elem % 2 === 0);
// console.log(found); // undefined

// // 配列内のオブジェクトをプロパティの一つで検索
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "grapes", quantity: 5 },
// ];

// function isGrapes(fruit) {
//   return fruit.name === "grapes";
// }

// console.log(inventory.find(isGrapes));  // { name: 'grapes', quantity: 5 }

// // 分割代入とアロー巻子を使用してより簡単に
// const result = inventory.find(({ name }) => name === "grapes");
// console.log(result);  // { name: 'grapes', quantity: 5 }


/* Array.prototype.findIndex() 非破壊メソッド */
// // 配列内の指定されたテスト関数に合格する最初の要素のインデックスを返します。 テスト関数に合格する要素がなかった場合は -1 を返します。
// // find() メソッドも参照してください。こちらのメソッドは、配列内で見つかった要素の位置ではなく、値を返します
// /*
//   syntax
//   findIndex(callbackFn)
//   findIndex(callbackFn, thisArg)  
// */
// const arr = [5, 12, 8, 130, 44];
// const isLargeNumber = e => e > 13;
// console.log(arr.findIndex(isLargeNumber));  // 3


/* Array.prototype.flat() 非破壊メソッド */
// すべてのサブ配列の要素を指定した深さで再帰的に結合した新しい配列を生成します。
/*
  syntax
  flat()
  flat(depth)
*/
// // ネストされた配列の平坦化
// const arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat()); // [ 1, 2, 3, 4 ]

// const arr2 = [
//   1, 2,
//   [
//     3, 4,
//     [
//       5, 6
//     ]
//   ]
// ];
// console.log(arr2.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// const arr3 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr3.flat(2));  // [ 1, 2, 3, 4, 5, 6 ]

// const arr4 = [1, 2, [3, 4, [5, , [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));  // [1, 2, 3, 4, 5, 7, 8, 9, 10]

// /* Array.prototype.from() 非破壊メソッド */
// // Array.from() 静的メソッドは、反復可能オブジェクトや配列風オブジェクトからシャローコピーされた、新しい Array インスタンスを生成します。
// /*
//   syntax
//  Array.from(arrayLike)
//   Array.from(arrayLike, mapFn)
//   Array.from(arrayLike, mapFn, thisArg)
// */
// console.log(Array.from('foo'));
// // Expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], (x) => x * 2));
// // Expected output: Array [2, 4, 6]

// // 例
// // 文字列から配列の生成
// console.log(Array.from('inagaki')); // [  'i', 'n', 'a', 'g', 'a', 'k', 'i']

// // Setから配列の生成
// const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(Array.from(set)); // [ 'foo', 'bar', 'baz' ]


/* Array.prototype.includes() 非破壊メソッド */
// includes() は Array インスタンスのメソッドで、特定の要素が配列に含まれているかどうかを true または false で返します。
 /*
  syntax
  includes(searchElement)
  includes(searchElement, fromIndex)
*/
console.log([1 , 2, 3].includes(2));  // true
console.log([1 , 2, 3].includes(4));  // false
console.log([1 , 2, "3"].includes(3));  // false
console.log([1 , 2, 3, 4, 5, 6].includes(3, 4));  // false（検索開始位置がインデックス番号4の要素からだから）