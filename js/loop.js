// loop property

// do-while
// 条件がfalseになるまで繰り返す
/**
  do
    文
  while (条件式);
*/
let i = 0; 
do {
  i += 1;
  console.log(i);
} while (i < 10);


// while
// 条件がtrueに評価される限り文を実行する。
/**
  while (条件式)
  文
*/
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(x);
}


// for-in
// for-in文はオブジェクトにあるすべての列挙可能なプロパティに対して指定された変数を通して反復処理を行う
/**
  for (変数 in オブジェクト)
  文
*/
// オブジェクトの作成
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// for-in文でオブジェクトのプロパティを反復処理
for (let key in person) {
  // プロパティごとに処理を行う
  console.log(key + ': ' + person[key]);
}

// Array の要素に対して反復処理を行う方法として for...in 文を使用したくなるかもしれませんが、これは数値のインデックスに加えてユーザー定義プロパティの名前も返します。

// そのため、配列に対しての反復処理には、数値のインデックスを使い従来の for ループを使用するほうが良いです。
// なぜなら、(カスタムプロパティやカスタムメソッドを追加するといった) Array オブジェクトの変更を行った場合、for...in 文は配列要素に加えてユーザー定義プロパティに対しても反復処理するからです。


// for-of
// for...of 文は、反復可能オブジェクト (en-US)（Array、Map、Set、arguments オブジェクトなどを含む）を反復処理するループを生成し、
// それぞれのプロパティの値に対して実行したい文をともなって作られた反復処理フックを呼び出します。
/**
  for (変数 of オブジェクト)
  文
*/
const arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // "0", "1", "2", "foo" が出力される
}

for (let i of arr) {
  console.log(i); // 3, 5, 7 が出力される
}
// forEachでも同じように記述可能
arr.forEach(elem => console.log(elem));

// mapでも同じように記述できるが、mapは新しい配列を生成する。
arr.map(elem => console.log(elem));