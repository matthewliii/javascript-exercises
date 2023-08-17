const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let previous = 1;
    let current = 0;
    for (let i = 1; i <= number; i++) {
        let temp = previous;
        previous = current;
        current += temp;
        
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
