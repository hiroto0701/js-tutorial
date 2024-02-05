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
