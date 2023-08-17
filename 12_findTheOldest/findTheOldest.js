const findTheOldest = function(array) {
    let oldest = array.reduce(function(accumulator, current) {
        if (getAge(current.yearOfBirth, current.yearOfDeath) > getAge(accumulator.yearOfBirth, accumulator.yearOfDeath)) {
            return current;
        }
        return accumulator;
    })
    return oldest;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
      }
      return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
