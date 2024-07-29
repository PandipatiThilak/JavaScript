let side1 = 20;
let side2 = 10; 
let side3 = 30;
function tri(n1,n2,n3){
if(side1===side2 && side2 ===side3){
    console.log("The triangle is equilateral !")
}
else if(side1===side2 || side1===side3 || side2===side3 ){
    console.log("The traingle is isoceles triangle ")
}
else{
   console.log("The triangle is scalene")
}
}
tri(side1,side2,side3);