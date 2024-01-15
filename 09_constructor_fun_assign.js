
console.log("=============STEP 1=============");
function Bank(bankName , location , ifscCode , branchCode){

    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;

    this.display = function(){

        console.log(`Bank name:${this.bankName} , Location:${this.location} , Ifsc Code:${this.ifscCode} , Branch Code:${this.branchCode}`);


    }
   
}
const yesBank = new Bank("Yes Bank" , "Pune" , 11111 , 11 );
const sbiBank = new Bank("Sbi Bank" , "Mumbai" , 22222 , 22 );
const mahBank = new Bank("Mah Bank" , "Nagpur" , 33333 , 33 );
const axisBank =new Bank ("Axis Bank" , "Jalgaon" , 44444 , 44 );

yesBank.display();
sbiBank.display();
mahBank.display();
axisBank.display();

Bank.prototype.openTime = "9 AM IST"
Bank.prototype.closeTime = "6 PM IST"

console.log("=============STEP 2=============");

console.log(`Sbi bank open at:${sbiBank.openTime} , Sbi bank close at:${sbiBank.closeTime}`);

console.log("=============STEP 3=============");

console.log(`Bank name is:${axisBank.bankName} , Axis bank closes at:${axisBank.closeTime}`);

console.log("=============STEP 4=============");

console.log(`Bank name is:${yesBank.bankName} , Branch code:${yesBank.branchCode} , Opens at:${yesBank.openTime}`);