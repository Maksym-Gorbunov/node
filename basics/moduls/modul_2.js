function size1(arr){
    return "Size of current array is " + arr.length
}

function size2(arr){
    return "Size: " + arr.length
}

function multiply(a,b){
    return `${a * b}`;
}

module.exports = {
    size1, 
    size2,
    multiply
};

// or sign functions name while exporting them
/* 
module.exports = {
    size1: size1, 
    size2: size2,
    mult: multiply
};
*/

// or just export methods directly on function creation
module.exports.goodbye = function(name) {
    return `Goodbye ${name}`
}

