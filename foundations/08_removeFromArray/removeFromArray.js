const removeFromArray = function(array, ...args) {
    const newArray = array.filter(val => !args.includes(val));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
