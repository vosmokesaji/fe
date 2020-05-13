
var MAX_LENGTH_1 = 10;
var MAX_LENGTH_2 = 20;
var MAX_LENGTH_3 = 30;
var MAX_LENGTH_4 = 40;
var MAX_LENGTH_5 = 50;


var TEST_LENGTH = MAX_LENGTH_4;


// console.time("斐波那契递归实现");

// (function(){
//     function fib(n){
//         if(n === 1 || n === 2){
//             return 1
//         }else{
//             return fib(n - 1) + fib(n - 2);
//         }
//     }

//     fib(TEST_LENGTH);

// })()

// console.timeEnd("斐波那契递归实现");



console.log("===============我  是===============");
console.log("===============分割线===============");



console.time("斐波那契备忘录解法");

// 把已经求得的解放在 Map 里，下次直接取，而不去重复结算。

(function(){
    function fib(n){
        if(n === 1 || n === 2){
            return 1
        }else{
            return fib(n - 1) + fib(n - 2);
        }
    }

    fib(TEST_LENGTH);

})()

console.timeEnd("斐波那契备忘录解法");
