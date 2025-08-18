const getAge = function(person) {
  if (!person.yearOfDeath) {
    return new Date().getFullYear() - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    const oldestAge = getAge(oldest);
    const personAge = getAge(person);
    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
