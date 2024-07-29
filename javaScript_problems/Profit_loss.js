let BuyingPrice = 200;
let SellingPrice = 200;
function profit(n1,n2){
 if(BuyingPrice===SellingPrice){
     console.log("This is neither profit nor loss")
 }
 else if(BuyingPrice>SellingPrice){
     console.log("It is a loss")
 }
 else{
     console.log("It is a profit")
 }
}
profit(BuyingPrice,SellingPrice);