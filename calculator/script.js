
const addButton = document.querySelector('#addition');
const one = document.querySelector('#inputOne');
const two = document.querySelector('#inputTwo');

const resultValue = document.querySelector('#resultValue');

addButton.addEventListener('click' , () => {

  const addOne = +one.value;
  const addTwo = +two.value;
  
  const result = addOne + addTwo;
  console.log(addOne + addTwo);

 
  resultValue.innerHTML = result;
})

const subButton = document.querySelector('#subtraction');
const three = document.querySelector('#inputOne');
const four = document.querySelector('#inputTwo');

const resultV = document.querySelector('#resultValue');

subButton.addEventListener('click' , () => {

    const subT = +three.value;
    const subF = +four.value;

    const result = subT - subF;
    console.log(subT - subF);

    resultV.innerHTML = result;

})

const mulButton = document.querySelector('#multiplication');
const five = document.querySelector('#inputOne');
const six = document.querySelector('#inputTwo');

const resultVa = document.querySelector('#resultValue');

mulButton.addEventListener('click' , () => {

  const mulF = +five.value;
const mulS = +six.value;

const result = mulF * mulS;

console.log(mulF * mulS);

resultVa.innerHTML = result

})

const divButton = document.querySelector('#division');
const seven = document.querySelector('#inputOne');
const eight = document.querySelector('#inputTwo');

const resultval = document.querySelector('#resultValue');

divButton.addEventListener('click' , () => {

  const sevenS = +seven.value;
  const eightE = +eight.value;

  const result = sevenS/eightE;
  console.log(sevenS/eightE);

  resultval.innerHTML = result

})
