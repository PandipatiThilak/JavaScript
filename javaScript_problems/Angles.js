function traingle()
{
    n1=prompt("enter the first angle:");
    n2=prompt("Enter the second angle:");
    n3=prompt("enter the third angle:");
    sum=n1+n2+n3;
    if(sum===180)
    {
        console.log("It forms a triangle.");

    }
    else{
        console.log("It not form Triangle.")
    }
}
traingle();
