console.log("=======================Step1=====================");

function malemarriageEligibility(gender,age,boyName){

    var result = gender=="Male" && age>=21   ? `Hey ${boyName} you are elligible for marriage` :"Unfortunately you are not elligible,Please try next time.";
    console.log(result);

}
malemarriageEligibility("Male",25,"Billgates");
malemarriageEligibility("Male",20,"Elon");

console.log("=======================Step2=====================");

function femalemarriageEligibility(gender,age,girlName){

    var result = gender=="Female" && age>=18  ? `Hey ${girlName} you are elligible for marriage` :"Unfortunately you are not elligible,Please try next time.";
    console.log(result);

}
femalemarriageEligibility("Female",16,"Jenny");
femalemarriageEligibility("Female",27,"Merry");

