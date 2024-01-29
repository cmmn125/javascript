
const arrayRollNumbers = [113 , 45 , 56 , 11 , 32 , 45 , 109 , 799 , 56 , 45];

console.log(`========STEP 1=========`);

arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`========STEP 2=========`);

arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log(`========STEP 3=========`);

arrayRollNumbers.sort( (a , b) => {

return a-b;

})
console.log(arrayRollNumbers);


console.log(`========STEP 4=========`);

const num = arrayRollNumbers[0];
console.log(`Smallest number is: ${num}`);

console.log(`========STEP 5=========`);

const gnum = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(`Greatest number is: ${gnum}`);