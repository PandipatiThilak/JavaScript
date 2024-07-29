// ! 12 Write a javascript program to input electricity unit charges and calculate total electricity bill according to the given condition:

//! For first 50 units Rs. 0.50/unit
//! For next 100 units Rs. 0.75/unit
//! For next 100 units Rs. 1.20/unit
//! For unit above 250 Rs. 1.50/unit
//! An additional surcharge of 20% is added to the bill
ElectricityUnit=50;
function electricity(units,price){
    bill=units*price;
    add=bill*0.2;
    total=bill+add;
    console.log("The bill is :"+total);
    
}
if(ElectricityUnit<=50){
electricity(ElectricityUnit,0.5);
}
else if(ElectricityUnit<=100){
    electricity(ElectricityUnit,0.75);

}
else if(ElectricityUnit>100 && ElectricityUnit<=250){
electricity(ElecricityUnit,1.2);

}
else{
electricity(ElectricityUnit,1.5);
}