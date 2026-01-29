// different variables
const Numbers = [ 22, 35, 33];
const fruits = ["mango", "apple", "jackfruits", "orange"];
const data = {city: "dhaka"};
const name = "saurav"

// function to check array
function checkArray(variable, variableName){
    if (Array.isArray(variable)){
        console.log(variableName + " is an array");
    }
    else{
    console.log(variableName + " is NOT an array");
}
}


// check array variable
checkArray(Numbers,"numbers");
checkArray(name, "name")
checkArray(data, "data")