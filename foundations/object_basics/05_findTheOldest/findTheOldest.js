const findTheOldest = function(people) {
const currYear = new Date().getFullYear();
    const oldSorted = people
        .map(person => {
            if(person.yearOfDeath === undefined) person.yearOfDeath = currYear;
            return person;
        })
        .sort((a, b) => ((b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)));
    return oldSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
