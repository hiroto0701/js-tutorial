// 1. 1から100までの数字が格納された配列の作成をして下さい。
// const arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

// const arr = Array.from({ length: 100 }, (_, i) => i + 1);
// console.log(arr);

// const arr = [...Array(100).keys()].map(i => i + 1);
// console.log(arr);

// const arr = new Array(100).fill(0).map((_, i) => i + 1);
// console.log(arr);


// 2.次の連想配列(images)のheightだけを取得し、新しい配列(heights)を作成して下さい。
// const images = [
//   { height: "20px", width: "40px" },
//   { height: "34px", width: "56px" },
//   { height: "28px", width: "64px" },
// ];

// const heights = images.map(({ height }) => height);
// console.log(heights);

// 3.次の連想配列(member)の中から名前(name)の値だけを抜き取った配列が返るような関数getNameを作成して下さい。
// const members = [
//   { name: "松井", age: 39, gender: "male" },
//   { name: "今田", age: 34, gender: "female" },
//   { name: "鈴木", age: 24, gender: "male" },
//   { name: "山田", age: 56, gender: "male" },
//   { name: "田中", age: 89, gender: "female" },
// ];

// const getName = (members) => {
//   return members.map(({ name }) => name ); 
// }
// console.log(getName(members));

// 4.以下の連想配列(users)の中から、管理者権限(admin)を持っている(true)ユーザーに絞り込み、filteredUsersという変数に格納して下さい。
// const users = [
//   { id: 1, admin: true },
//   { id: 2, admin: true },
//   { id: 3, admin: false },
//   { id: 4, admin: true },
//   { id: 5, admin: false },
// ];

// const filteredUsers = users.filter(user => user.admin);
// ​const filteredUsers = users.filter(({ admin }) => admin);
// console.log(filteredUsers);

// 5.次の多次元配列のインデックス0番目のみを取り出した配列を作成して下さい。
// const array = [
//   ["Ruffy", "captain"],
//   ["Zoro", "combatant"],
// ];
// console.log(array.map(key => key[0]));

// 6.次の多次元配列の0番目の配列のみを取り出し新しい配列に作成して下さい。​
// const array2 = [
//   ["Ruffy", "captain"],
//   ["Zoro", "combatant"],
// ];

// const indexArray = array2[0];
// console.log(indexArray);
// ​const arr = array.filter((key, i) => {
//   if (i === 0) {
//     return key;
//   }
// });

// //別解
// const arr = array.filter((_, index) => index === 0)

// console.log(arr); //["Ruffy", "captain"]

// 7.次の連想配列(member)の中から35歳以上の名前(name)の値だけを抜き取った配列が返るような関数getNameOver35を作成して下さい。
// const members2 = [
//   { name: "松井", age: 39, gender: "male" },
//   { name: "今田", age: 34, gender: "female" },
//   { name: "鈴木", age: 24, gender: "male" },
//   { name: "山田", age: 56, gender: "male" },
//   { name: "田中", age: 89, gender: "female" },
// ];

// const getNameOver35 = (members) => {
//   return members.filter(member => member.age >= 35).map(({ name }) => name);
// }
// console.log(getNameOver35(members2));

// type GetNameOver35<T extends Members, U> = (array: T) => U[];

// const getNameOver35: GetNameOver35<Members, string> = (array) => {
//   return array.filter(({ age }) => age > 35).map(({ name }) => name);
// };
// console.log(getNameOver35(members));
// //["松井", "山田", "田中"]

// 8.以下のような重複値を含む配列arrの中から、重複値を除く互いに素な配列を作成して下さい。
// Set オブジェクトは、プリミティブ値やオブジェクト参照を問わず、あらゆる型で多数の一意の値を格納することができます。
// const num = [2, 4, 7, 5, 4];
// console.log([...new Set(num)]);

// const num2 = num.filter((elem, index) => {
//   return num.indexOf(elem) === index;
// })
// console.log(num2)

// 9.次の連想配列の中からnameプロパティをもったユーザーに絞り込み、getNameという変数に格納して下さい。
// const users = [
//   { id: 1, name: "豊臣" },
//   { id: 2 },
//   { id: 3, name: "織田" },
// ];
// const getName = users.filter(({name}) => name);
// console.log(getName);

// 10.以下の連想配列(users)の中から、管理者権限(admin)を持っている(true)ユーザーを探し、最初に見つけた(true)ユーザーをadminという変数に格納して下さい。
// expect: { id: 2, admin: true }
// const users = [
//   { id: 1, admin: false },
//   { id: 2, admin: true },
//   { id: 3, admin: false },
//   { id: 4, admin: true },
// ];
// const admin = users.find(({ admin }) => admin);
// console.log(admin);
// // 省略しなかったらこんな感じ
// const admin2 = users.find(user => user.admin);
// console.log(admin2)

// 11.次の連想配列(member)の中から,田中さんのオブジェクトを抽出するfindTanakaという関数,変数を作成しなさい。
// expect: {name: "田中", age: 89, gender: "female"}
// const members = [
//   { name: "松井", age: 39, gender: "male" },
//   { name: "今田", age: 34, gender: "female" },
//   { name: "鈴木", age: 24, gender: "male" },
//   { name: "山田", age: 56, gender: "male" },
//   { name: "田中", age: 89, gender: "female" },
// ];
// const findTanaka = (members) => {
//   return members.find(member => member.name === '田中');
// }
// console.log(findTanaka(members));

// shorthand
// const findTanaka = (members) => {
//   return members.find(({ name }) => name === '田中')
// }

// 別解
// const findTanaka = members.members.slice(-1)[0];

// 12.アンケートを実施した結果がusersという連想配列に格納されています。ユーザー全員が回答済みかどうかを確認し、hasSubmitted変数に結果(trueかfalse)を示して下さい。
// expect: false
// const users = [
//   { id: 2, hasSubmitted: true },
//   { id: 3, hasSubmitted: false },
//   { id: 4, hasSubmitted: true },
// ];
// const hasSubmitted = users.every(({ hasSubmitted }) => hasSubmitted);
// console.log(hasSubmitted);

// 13.次のtripという連想配列に格納されたdistanceの合計を求めて、totalDistanceという変数に格納して下さい。
// const trips = [
//   { distance: 34 },
//   { distance: 12 }, 
//   { distance: 1 }
// ];
// const totalDistance = trips.reduce((sum, element) => {
//   return sum + element.distance
// }, 0);
// console.log(totalDistance);

// 14.次の変数engineersに格納されたエンジニアの種類(フロントエンド、バックエンド)の数を種類を集計し、一つのオブジェクトに格納して下さい。
// expect: {Frontend: 3, Backend: 4}
// const engineers = [
//   { type: 'Frontend' },
//   { type: 'Backend' },
//   { type: 'Backend' },
//   { type: 'Frontend' },
//   { type: 'Frontend' },
//   { type: 'Backend' },
//   { type: 'Backend' }
// ];

// const engineerCounts = {};

// engineers.forEach(engineer => {
//   const { type } = engineer;
//   if (engineerCounts[type]) {
//     engineerCounts[type]++;
//   } else {
//     engineerCounts[type] = 1;
//   }
// });

// console.log(engineerCounts);

// // 模範解答らしいです
// const engineerType = engineers.reduce(
//   (sum, { type }) => {
//     if (type === 'Frontend') {
//       sum.Frontend++
//     } else {
//       sum.Backend++
//     }
//     return sum
//   },
//   { Frontend: 0, Backend: 0 }
// )
// console.log(engineerType)

// ★★★★ 分からなかった ★★★★
// 15.次の変数objを連想配列[{A:'a'},{B:'b'}]にして下さい。
// const obj = {
//   a: "A",
//   b: "B",
// };
// // Object.entries() は静的メソッドで、与えられたオブジェクトが所有する、文字列をキーとした列挙可能なプロパティのキーと値の組の配列を返す。
// // それをmapメソッドを使ってキーとバリューを入れ替えている
// const arr = Object.entries(obj).map((key) => {
//   return { [key[1]]: key[0] };
// });
// console.log(arr);

// const arr2 = Object.entries(obj).map;
// console.log(arr2);
// [['a', 'A'], ['b', 'B']]

// 16.次の変数arrをオブジェクト{a:"0", b:"1"}にして下さい。
// const arr = ["a", "b"];
// // オブジェクトを作成する
// const obj = {};
// arr.forEach((key, index) => {
//   obj[key] = index.toString();
// });

// console.log(obj);

// // 模範解答
// const obj = arr.reduce((prev, curr, i) => {
//   return { ...prev, [curr]: `${i}` };
// }, {});
