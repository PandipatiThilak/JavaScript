function big3(a,b,c)
{
    if(a>b && a>c){
        return a;
    }
    else if(b>a &&b>c){
        return b;
    }
    else {
        return c;
    }
}
let n1=100;
let n2=40;
let n3=543;
console.log("The biggest number is:"+big3(n1,n2,n3));