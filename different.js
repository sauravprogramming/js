// for (let i = 0; i < 20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }


// 1 to 20 divisible by 3

let total = 0
for (let i = 1; i <=20; i++){
    if(i % 2 === 0){
        console.log(i);
        total = total + i;
    }
}
console.log('total of the numbers', total)