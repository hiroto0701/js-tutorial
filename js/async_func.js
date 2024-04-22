// // // resolve1!!をreturnしているため、この値がresolveされる
// // async function resolveSample() {
// //   return 'resolve!!';
// // }

// // // resolveSampleがPromiseを返し、resolve!!がresolveされるため
// // // then()が実行されコンソールにresolve!!が表示される
// // resolveSample().then(value => {
// //   console.log(value); // => resolve!!
// // });


// // // reject!!をthrowしているため、この値がrejectされる
// // async function rejectSample() {
// //   throw new Error('errrooooooor');
// // }

// // // rejectSampleがPromiseを返し、reject!!がrejectされるため
// // // catch()が実行されコンソールにreject!!が表示される
// // rejectSample().catch(err => {
// //   console.log(err); // => reject!!
// // });


// // // resolveErrorはasync functionではないため、Promiseを返さない
// // function resolveError() {
// //   return 'resolveError!!';
// // }

// // // resolveErrorはPromiseを返さないため、エラーが発生して動かない
// // // Uncaught TypeError: resolveError(...).then is not a function
// // resolveError().then(value => {
// //   console.log(value);
// // });

// function sampleResolve(value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value);
//     }, 1000);
//   })
// }

// async function sample() {
//   return await sampleResolve(5) * await sampleResolve(10) + await sampleResolve(20);
// }

// async function sample2() {
//   const a = await sampleResolve(5);
//   const b = await sampleResolve(10);
//   const c = await sampleResolve(20);
//   return a * b + c;
// }

// sample().then((v) => {
//   console.log(v); // => 70
// });

// sample2().then((v) => {
//   console.log(v); // => 70
// });


// // 練習問題
// // 1 次の非同期関数delayedHelloは、1秒後に'Hello, World!'という文字列を返すPromiseを返すものとします。この関数を完成させ、1秒後にコンソールに'Hello, World!'を出力してください
// function delayedHello() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Hello, world');
//     }, 1000)
//   })
// }

// // 使用例
// delayedHello().then(message => {
//   console.log(message);
// });

// // 2 以下の非同期関数fetchDataは50%の確率でエラーをスローする関数です。この関数を使い、エラーがスローされた場合は"データの取得に失敗しました。"、
// //   成功した場合は取得したデータをコンソールに出力するコードをasync/awaitを使って書いてください。
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("データ取得成功！");
//       } else {
//         reject("エラーが発生しました。");
//       }
//     }, 1000);
//   });
// }

// // ここに上記の非同期関数を使ったコードを書いてください。
// async function getFunc() {
//   try {
//     const data = await fetchData();
//     console.log(data)
//   } 
//   catch(error) {
//     console.log("データの取得に失敗しました。");
//   }
// }
// getFunc();

// // 3 以下の2つの非同期関数fetchData1とfetchData2があります。これらの関数はそれぞれ異なる時間でデータを返します。
// //   両方の関数からデータを取得し、それらのデータを合体させて（例: data1 + " " + data2）コンソールに出力してください。ただし、両方のデータの取得は並行して行ってください。
// function fetchData1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("問題3：Hello,");
//     }, 500);
//   });
// }

// function fetchData2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("World!");
//     }, 1000);
//   });
// }

// // ここに並行してデータを取得し、コンソールに出力するコードを書いてください。
// async function multiFetchData() {
//   let [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
//   console.log(result1 + result2);
// }
// multiFetchData();



// // もっと理解したい！
// // ・コールバック地獄を体験する。
// // API1: リクエストを送り、結果を受け取る
// // API2: API1の結果を使ってリクエストを送り、結果を受け取る
// // API3: API2の結果を使ってリクエストを送り、結果を受け取る
// // API1. 非同期でAPIにリクエストを送って値を取得する処理
// function request1(callback) {
//   setTimeout(() => {
//     // 1 は適当な例、なんでもいいです
//     callback(1);
//   }, 1000);
// }
 
// // API2. 受け取った値を別のAPIにリクエストを送って値を取得する処理
// function request2(result1, callback) {
//   setTimeout(() => {
//     callback(result1 + 1);
//   }, 1000);
// }
 
// // API3. 受け取った値を別のAPIにリクエストを送って値を取得する処理
// function request3(result2, callback) {
//   setTimeout(() => {
//     callback(result2 + 2);
//   }, 1000);
// }

// request1((result1) => {
//   request2(result1, (result2) => {
//     request3(result2, (result3) => {
//       console.log("結果は" + result3)
//       // 3秒後に4が表示される。
//     });
//   });
// });


// // Promise
// // const promise = new Promise((resolve, reject) => {});
// // console.table(promise);

// const promise = new Promise((resolve) => {
//   resolve();
// }).then(() => {
//   console.log('resolveしました');
// })

// console.log(promise)






// 同期処理非同期処理違い

// 引数にmsを与えるとそのms分だけメインスレッドを占有するような関数
function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('clicked!');
});

setTimeout(function() {
  sleep(2000);
}, 3000)