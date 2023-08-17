const getTheTitles = function(array) {
    let titles = [];
    array.forEach(key => {
        titles.push(key.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
