const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear(); //get current year
  }
  return death - birth;
};

const findTheOldest = function (people) {
  let oldest = people[0]; //declare the first index as "oldest" for now

  for (let i = 1; i < people.length; i++) {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath); //define the oldest person at index 0
    const currentAge = getAge(people[i].yearOfBirth, people[i].yearOfDeath);//check age of the current person

    if (currentAge > oldestAge) { 
      oldest = people[i];//change index of current age to oldest age
    }
  }
  return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
