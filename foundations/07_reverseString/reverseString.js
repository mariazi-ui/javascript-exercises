const reverseString = function(text) {
    let letters = text.split("");
    let reversedString = "";
    for (let i = text.length-1; i >= 0; i--) {
        reversedString += letters[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
