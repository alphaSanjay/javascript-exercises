const reverseString = function(word) {
    let reverseWord = "";
    let n = word.length - 1;
    for(let i = n; i >= 0; i--){
        reverseWord += word[i];
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
