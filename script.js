
/* Create a function which returns the number of true values there are in an array.

function countTrue(arr){
    let result = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == true){
            result++;
        }
    }
    return result;
}
console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))

output: 2
        0
        0

------------------------------------------------------------------------------------------------*/

/* Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

function num_of_digits(arr){
    return Math.abs(arr).toString().length
}

console.log(num_of_digits(1000))
console.log(num_of_digits(12))
console.log(num_of_digits(1305981031)) 
console.log(num_of_digits(0))

output: 4
        2
        10
        1
-------------------------------------------------------------------------------------------------*/



/* Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

function addName( obj, name, value){
        const newObj = {...obj}
        newObj[name] = value
        return newObj
}

console.log(addName({}, "Brutus", 300))
console.log(addName({ piano: 500 }, "Brutus", 400))
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))

output: { Brutus: 300 }
        { piano: 500, Brutus: 400 }
        { piano: 500, stereo: 300, Caligula: 440 }

-------------------------------------------------------------------------------------------------*/

/* Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj){
    return Object.entries(obj)
}

console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))

output: [ [ 'a', 1 ], [ 'b', 2 ] ]
        [ [ 'shrimp', 15 ], [ 'tots', 12 ] ]
        []

-------------------------------------------------------------------------------------------------*/

/* Given a number, n, return a function which adds n to the number passed to it.
function add(n){
    return function(x){
        return x + n
    }
}


console.log(add(10)(20))
console.log(add(0)(20))
console.log(add(-30)(80))

output: 30
        20
        50

-------------------------------------------------------------------------------------------------*/