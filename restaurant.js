const age = 14;
const price = 500;
if(age < 5){
    console.log('You can eat for free');
}
else if(age >= 60){
// 50% discount
const discount = price * 50 / 100;
const payAmount = price - discount;
console.log(payAmount)
}
else if(age < 15){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price)
}