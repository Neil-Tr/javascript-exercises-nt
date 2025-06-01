const findTheOldest = function(people) {
const currentYear = new Date().getFullYear();
return people.reduce((oldest, person) => {
    const oldestDeathYear = oldest.deathYear ?? currentYear;
    const personDeathYear = person.deathYear ?? currentYear;
    const oldestAge = oldestDeathYear - oldest.yearOfBirth;
    const currentAge = personDeathYear - person.yearOfBirth;
    return oldestAge < currentAge ? person : oldest;
});
}

// Do not edit below this line
module.exports = findTheOldest;
