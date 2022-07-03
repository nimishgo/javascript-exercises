const findTheOldest = function(people) {

    const oldest = people.sort((prev,next) => {
        if(!prev.yearOfDeath)
            {
                prev.yearOfDeath = (new Date()).getFullYear();
            }
        if(!next.yearOfDeath)
        {
            next.yearOfDeath = (new Date()).getFullYear();
        }
        let AAge = prev.yearOfDeath - prev.yearOfBirth;
        let BAge = next.yearOfDeath - next.yearOfBirth;

        return (AAge > BAge) ? -1 : 1;
    })
    
    console.log(oldest[0].name);
    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
