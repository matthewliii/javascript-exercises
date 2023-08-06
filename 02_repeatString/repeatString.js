const repeatString = function(string, num) {
    let accumulation = "";
    if (num<0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        accumulation += string;
    }
    
    return accumulation;
};

// Do not edit below this line
module.exports = repeatString;
