console.log(`=================STEP1=========================`);

const arrayNumbers = [20 , 11 , 40 , 25 , 23 , 11 , 9 , 31 , 60 , 2 , 19];

const arrayNum = arrayNumbers.map( (currentValue) => {

    return currentValue + 10;

})
console.log(arrayNum);

console.log(`=================STEP2=========================`);

const arrayM = arrayNumbers.map( (currentValue) => {
                
    return currentValue*currentValue*currentValue;
})
console.log(arrayM);

console.log(`=================STEP3=========================`);

const arrayA = arrayNumbers.map( (currentValue , index) => {
              
    return currentValue + index;
})
console.log(arrayA);
