const friends = ['kailam', 'jalam', 'malam', 'solam'];

console.log(friends.includes('gelam'))
console.log(friends.includes('kailma'))

if(friends.includes('kailam')){
    console.log('party')
}
else{
    console.log('no food. We are fasting')
}

console.log(friends.indexOf('malam'))