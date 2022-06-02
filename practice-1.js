// Write a function called repeat, which accepts a
// string and a number and returns a new string
// with the string repeated that number of times.
// Do not use the built in repeat method - the
// tests will fail if you do!

function repeat(str, multipler) {
    let multStr = '';
    for (let i = 0; i < multipler; i++) {
        multStr += str;
    }
    return multStr;
}


// Write a function called removeFromString,
// which accepts a string, a starting index
// (number), and a number of characters to
// remove. The function should return a new
// string with that number of characters removed,
// starting from that index.

function removeFromString(str, index, count) {
    let str1 = str.replace(str.substr(index, count), '')
    return str1;  
}


// Write a function called reverse, which accepts
// an array and returns the same array with all of
// the values reversed. In other words, do not
// solve this by creating a new array. Note:
// returning the same array is called an in-place
// operation, since no additional space is used.
// https://en.wikipedia.org/wiki/in-
// place_algorithm Do not use the built in
// Array.reverse() function!

function reverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i])
    }
    const arrLength = arr.length;
    for (let i = 0; i <= (arrLength / 2) - 1; i++) {
        arr.shift();
    }
    return arr;
}


// Write a function called min, which accepts an
// array of numbers and returns the lowest value.
// Do note use the built-in Math.min() function!

function min(arr) {
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < num) {
            num = arr[i];
        }
    }
    return num;

}


// Write a function called slice, which accepts an
// array, and two numbers. The function should
// return a new array with the elements starting
// at the index of the first number and going until
// the index of the second number. If the third
// parameter is greater than the length of the
// array, it should slice until the end of the array.
// Do not use the built in Array.slice() function!

function slice(arr, index, len) {
    let slicedArr = []
    if (len <= arr.length - 1) {
        for (let i = arr.indexOf(index + 1); i <= arr.indexOf(len); i++) {
            slicedArr.push(arr[i]);
        }
    }
    if (len > arr.length - 1) {
        for (let i = arr.indexOf(index + 1); i <= arr.length; i++) {
            slicedArr.push(arr[i]);

        }
    }
    return slicedArr;
}


// Write a function called keys, which accepts an
// object and returns an array of all of the keys in
// the object. Do not use the built in Object.keys()
// function!

function keys(json) {
    var obj = JSON.parse(json);
    const arr = Object.entries(obj);
    const keyArr = [];
    for (let i = 0; i < arr.length; i++) {
        keyArr.push(arr[i][0]);
    }
    return keyArr;
}


// Write a function called values, which accepts
// an object and returns an array of all of the
// values in the object. Do not use the built in
// Object.values() function!

function values(json) {
    var obj = JSON.parse(json);
    const arr = Object.entries(obj);
    const valArr = [];
    for (let i = 0; i < arr.length; i++) {
        valArr.push(arr[i][1]);
    }
    return valArr;
}


// Write a function called swapKeyAndValue,
// which accepts an object and a key. The
// function should return a new object with the
// given key and its value flipped, and all the
// other key/value pairs unchanged. We have
// provided some starter code to you which will
// ensure the input and output are in the format
// that HackerRank expects.

function swapKeyAndValue(json, swapKey) {
    var obj = JSON.parse(json);
    const entries = Object.entries(obj);
    const newArr = [...entries];
    let newObj = {};
    
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][0] == swapKey) {
            newArr[i].reverse();
        }
    }
    
    for (let i = 0; i < newArr.length; i++) {
        let key = newArr[i][0];
        let value = newArr[i][1];
        
        newObj[key] = value;
    }
    
    return JSON.stringify(newObj);
}


// Implement a function called multiples that
// accepts two numbers: x and n. The function
// should return an array of the first n multiples
// of the number x. Assume that x is a positive
// integer.

function multiples(x, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(x * i);
    }
    return arr;
}


// Write a function called pluck, which takes an
// array of objects and the name of a key. The
// function should return an array containing the
// value associated with that key for each object,
// or -1 if that key is not present in the object.

function pluck(json, key) {
    var obj = JSON.parse(json);
    const arrKeys = [];
    for (let i = 0; i < obj.length; i++) {
        if (Object.keys(obj[i]).includes(key)) {
            arrKeys.push(obj[i][key])
        }
        else {
            arrKeys.push(-1);
        }
    }
    return arrKeys;
}


// Write a function called twoHighest that takes
// an array of numbers as its argument and
// returns the two highest numbers within the
// array, The returned value should be an array
// in the following format: [secondHighest,
// highest). The order of the numbers passed in
// could be any order. Do not use the build in
// sort) method - the tests will fail!

function twoHighest(arr) {
    const newArr = [];
    let x = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (x < arr[i]) {
            x = arr[i];
        }
    }
    newArr.unshift(x);
    arr.splice(arr.indexOf(x), 1);
    const arrCopy = [...arr];
    let y = arrCopy[0];
    for (let i = 0; i < arrCopy.length; i++) {
        if (y < arrCopy[i]) {
            y = arrCopy[i];
        }
    }
    arrCopy.splice(arrCopy.indexOf(y), 1);
    newArr.unshift(y);
    return newArr;
    
}


// Write a function called minMaxKeylnObject
// that accepts an object with numeric keys. We
// have provided you with a JSON string as an
// input, that we have parsed into a JavaScript
// object in the first line of the function. The
// function should return an array with the
// following format: [lowestKey, highestKey].
// Remember all object keys are strings, even if
// they hold numeric values.

function minMaxKeyInObject(json) {
    var obj = JSON.parse(json);
    const keys = Object.keys(obj);
    const bigKeys = [];
    let x = parseInt(keys[0]);
    
    for (let i = 0; i <= keys.length; i++) {
        if (parseInt(keys[i]) > x) {
            x = parseInt(keys[i]);
        }
    }
    
    keys.splice(keys.indexOf(x), 1);
    bigKeys.unshift(x);
    const keysCopy = [...keys];
    let y = parseInt(keysCopy[0]);
    
    for (let i = 0; i < keysCopy.length; i++) {
        if (parseInt(keysCopy[i] < y)) {
            y = parseInt(keysCopy[i]);
        }
    }
    keysCopy.splice(keysCopy.indexOf(y), 1);
    bigKeys.unshift(y);
    return bigKeys;
}


// Write a function called stringFromObject that
// generates a string from an object's key/value
// pairs. The format should be "key = value, key =
// value", Each key/value pair should be
// separated by a comma and space except for
// the last pair.

function stringFromObject(json) {
    var obj = JSON.parse(json);
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    let combo = '';
    
    for (let i = 0; i < keys.length; i++) {
        if (i == keys.length - 1) {
            combo += `${keys[i]} = ${values[i]} `;
            
        }
        else {
            combo += `${keys[i]} = ${values[i]}, `;
        }
    }
    
    return combo;
}


// Write a function called countNumbers, which
// accepts an array of strings. The function should
// return a count of the number of strings in the
// array that can be successfully converted into a
// number. For example, the string "1" can be
// successfully converted to the number 1, but
// the string "hello" cannot be converted into a
// number.

function countNumbers(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i], 10) == arr[i]) {
            counter++;
        }
    }
    return counter;

}