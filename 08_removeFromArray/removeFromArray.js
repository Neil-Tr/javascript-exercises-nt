const removeFromArray = function(array, ...args) {

// const originalArray = array;    

    return array.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
