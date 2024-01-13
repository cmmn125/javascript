
console.log("=========STEP1============");
let professor = {
    
    firstName: "Gajanan",
    age : 35,
    designation : "Tech arch",
    isMarried : true,
    address : "Wakad",

    

    degrees : {
        engineering : "CSC",
        PHD : "Adv Computing",
        college : "COEP Pune",
        },

        certificates : ["Hacker Rank Participation" , "Certificate in IFE Course" , "Certificate in Adv Programming"]
     
    
}

console.log("=========STEP2============");

professor.totalExperience = "14 years";
console.log(professor);

console.log("=========STEP3============");

professor.age = 33;
console.log(professor);

console.log("=========STEP4============");

professor.certificates.splice(2 , 0 , "Oracle Certified")
console.log(professor.certificates);


console.log(professor);
console.log(professor.degrees);
console.log(professor.certificates);

console.log("=========STEP5============");

for (const element of professor.certificates) {
    console.log(element);
    
}