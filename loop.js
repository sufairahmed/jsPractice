var i = 1;

// while (i <= 10) {
//     console.log(i);
//     i += 2;

// }

// ### for loop
var x = 10;

// for (;;){
//     x++;
//     console.log(x);
//     if (10==x){
//         break;
//     }
// }
// var result = x % 2 == 2 ? result : result ;

// if(x%2 != 0){
//     console.log('number is odd');
// }else{
//     console.log('numer is even');
// }
x = 10;
var result = 1;
for (var i = 1; i <= x; i++) {


    // console.log(i);
    // 2 4 6 8 10 12 14
    // console.log(i * 2);
    // result += i;
    /*
    console.log("add 3 with the value of  I : ", result);
    result = result + 3; 
    */
}
// 0 3 8 15 24 35 48 
/*
for (var i = 1; i < x; i++) {
    result= i*i - 1; 
    console.log(result);
}
*/
// 1 4 3 8 5 12 7 16 9 20....
/*
x = 15;
for (var i = 1; i < x; i++) {
    if (i % 2 == 0) {
        console.log(i * 2);
    } else {
        console.log(i);
    }
}
*/

// fibonacci: 0 1 1 2 3 5 8 13 ......
/*
var series = '0 1 ';
var x = 0;
var y = 1;
var result = 0;
for (var i = 1; i < 10; i++) {
    result = x + y; //ans: 0+1=1; 1+1=2, 1+2=3
    x = y;
    y = result;

    series = series + result + ' ';

}
console.log('fibonachi series: ', series);
console.log(' \n end of the fibonacci loop');
*/
// ধারাপাত/ নামতা প্রিন্ট করব 

var count = 2;
result = 0;

for (var i = 1; i <= count ; i++) {
    console.log("start of i  = ", i);
    for (var j = 1; j <= 10; j++) {

        result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
    console.log('\nend of i:',i);
}