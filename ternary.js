// ternary --> three parts

// condition ? do something when true: do something when flse

// const age = 10;
// if(age >= 18){
//     console.log('You can vote')
// }
// else{
//     console.log('joa baccha gumai thako')
// }
// 

let price = 500;
const isLeader = true;

// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }

// console.log(price)

price = isLeader === true ? 0 : price + 100
console.log(price)

// optional: semi-advanced ternary

if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else {
        price = 0;
    }
    else {
        price = price = 100;
    }
}

// feel free to ignore
price = isLeader === true ? 
price > 1000 ? 
price /2 : 0 : price + 1000;