function div(){
    let n=prompt("Enter the number for checking wheather it divisible by 5 and 11:")
    if(n%5==0 && n%11==0){
        console.log("Print it is divisible by both.");
    }
    else{
        console.log("It is not divisable by both of them.");
    }
}
div();