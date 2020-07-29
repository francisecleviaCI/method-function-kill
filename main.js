/******************
 * YOUR CODE HERE *
 ******************/

const newPerson = function(newFirstName, newLastName, newAge, isMarried){
    return {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
      married: isMarried,
      goingOn: function(){
        return newAge + 1;
      },
      ageUp: function(){
        return newAge + 1;
      },
      getFullName: function(){
        return newFirstName + ' ' + newLastName
      },

}

if (newFirstName === undefined){
  newFirstName = 'Anonymous'
}

if (newLastName === undefined){
  newLastName = 'Person'
}

if (isMarried !== undefined){
  isMarried = false
}

    

 



const person1 = newPerson(newFirstName, newLastName, newAge, isMarried);

person1.firstName;

person1.goingOn()

}





 
























/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
