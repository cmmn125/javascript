

class Employee {

    constructor(emp_id , emp_name , emp_dept , emp_salary , emp_company) {

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }

    details(){
        console.log(`Employee name is:${this.emp_name} , Comapny name:${this.emp_company}`);
    }
    getDetails(){
        console.log(`Department name:${this.emp_dept} , Employee name:${this.emp_name}`);
    }
    empDetails(){
        console.log(`Employee name:${ this.emp_name} ,  Comapny name:${this.emp_company} , Salary:${ this.emp_salary}`);
    }
    empGetDetails(){
        console.log(`Employee id:${this.emp_id} , Employee name:${ this.emp_name} , Department name:${this.emp_dept} , Salary:${ this.emp_salary} , Comapny name:${this.emp_company}`);
    }
}

const emp_anil = new Employee(22 , "Anil" , "IT" , 50000 , "TCS");
const emp_radha = new Employee(33 , "Radha" , "HR" , 74000 , "Wipro");
const emp_rishi = new Employee(55 , "Rishi" , "Finance" , 47000 , "TCS");
const emp_sonali = new Employee(66 , "Sonali" , "Finance" , 45000 , "Infy");
const emp_Monika = new Employee(77 , "Monika" , "IT" , 40000 , "Wipro");
const emp_viny = new Employee(88 , "Vinayak" , "IT" , 75000 , "TCS");
const emp_mahi = new Employee(99 , "Mahesh" , "HR" , 85000 , "Infy");

const arrayOfEmployees = [emp_anil , emp_radha , emp_rishi , emp_sonali , emp_Monika , emp_viny , emp_mahi];

console.log(`===============STEP1=======================`);

const arrayOfSalary = arrayOfEmployees.map( (element) => {

          return element.emp_salary;
})
console.log(`Employee salary is: ${arrayOfSalary}`)

console.log(`===============STEP2=======================`);

const arrayOfDept = arrayOfEmployees.map( (element) => {

                return element.emp_dept;
})
console.log(`Various departments are: ${arrayOfDept}`);

console.log(`===============STEP3=======================`);

const arrayOfId = arrayOfEmployees.map( (element) => {

   return element.emp_id
})
console.log(`Employee ID'S are: ${arrayOfId}`);