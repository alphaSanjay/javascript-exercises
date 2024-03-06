const removeFromArray = function(array, ...num) {
    let n = num.length;
    for(let i = 0; i < n; i++){
        while(true){
            let position = array.indexOf(num[i]);
            if(position == -1)break;
            array.splice(position,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
