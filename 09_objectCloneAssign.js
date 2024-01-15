

const bankSbi = {

    name : "State bank of India",
    typeOfBank : "Public sector",
    noOfBranches : "500 across India",
    Chairman : "Shakti Das"
}
const bankLocation = {

    street : "M.G. road", 
    city : "Pune",
    pin : 433212
}
console.log(bankSbi);
console.log(bankLocation);

  const mergeObject = Object.assign({} ,bankSbi , bankLocation);
console.log(mergeObject);

  rateOfInterest = {
    homeLoanInterest : "5%",
    personalLoanInterest : "6%",
    duelInterest : "7%",
  }
const sbiDetails = Object.assign({}, bankSbi , bankLocation , rateOfInterest);
console.log(sbiDetails);  

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Key==>${key}  value==>${element}`);
    }
}
