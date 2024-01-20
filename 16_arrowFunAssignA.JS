console.log("========================STEP1======================");
const arrow = ()=>{

     console.log(`Good Morning,Today is Thursday`);
}
arrow();

console.log("========================STEP2======================");

const arrowa = (n1 ,n2 ,n3=1)=>{

console.log(`Multiplication is: ${n1 * n2 *n3}`);


}
arrowa(5 , 5 , 2);
arrowa(10 , 4);

console.log("========================STEP3======================");

const arrowb = (n1 ,n2 , n3 , n4 , n5)=>{

           const result = n1+n2+n3+n4+n5;
            return result;     
}
const returnVal = arrowb(100 , 100 , 200 , 349 , 756)
console.log(`Addition is:${returnVal}`);

const returnValue = arrowb("Iam","learning","ES6", "features","in depth")
console.log(`Addition of string is:${returnValue}`);
