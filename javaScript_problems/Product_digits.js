let n=123;
s=1;
while(n>0){
    r=n%10;
    s=s*r;
    n=Math.floor(n/10);
    
}
console.log(s);