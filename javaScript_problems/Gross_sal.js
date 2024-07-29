// ! 11 Write a javascript program to input basic salary of an employee and calculate its Gross salary according to following:
// !Basic Salary <= 10000 : HRA = 20%, DA = 80%
// !Basic Salary <= 20000 : HRA = 25%, DA = 90%
// !Basic Salary > 20000 : HRA = 30%, DA = 95%
//? gross = basic + hra + da 
let basic_s=10000;
function gross(hra,da,base_s){
    h=hra*base_s;
    d=da*base_s;
    total=base_s+h+d;
    console.log("Total Gross salary is:"+total);
    
}
if(basic_s<=10000){
    hra = 0.2 ;
   da = 0.8 ;
    gross(hra,da,basic_s);

}
else if(basic_s<=20000){
    hra = 0.25 * BasicSalary;
    da = 0.9 * BasicSalary;
     gross(hra,da,basic_s);
  
}
else {
    hra = 0.3;
    da = 0.95;
    gross(hra,da,basic_s);
    }
