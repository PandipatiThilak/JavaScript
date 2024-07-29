//lenth of number
let n=123455;
k=String(n);
console.log(k.length);
c=0;
while(n>0){
    c=c+1;
    n=Math.floor(n/10);
}
console.log("The no of digits is:"+c);