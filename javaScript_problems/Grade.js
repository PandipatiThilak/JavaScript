let Physics = 100;
 let Chemistry = 100;
 let Biology = 100;
 let Mathematics = 100;
 let Computer = 100;
function grade(Physics,Chemistry,Biology,Mathematics,Computer){
 let percentage = (Physics+Chemistry+Biology+Mathematics+Computer)/5;

 if(percentage>=90){
     console.log("The grade is A ")
 }
else if(percentage>=80){
     console.log("The grade is B ")
}
 else if(percentage>=70){
   console.log("The grade is C ")
}
else if(percentage>=60){
     console.log("The grade is D ")
 }
 else if(percentage>=40){
     console.log("The grade is E ")
}
else{
     console.log("You have failed go and study !")
 }}
 grade(Physics,Chemistry,Biology,Mathematics,Computer);