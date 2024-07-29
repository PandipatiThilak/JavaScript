function leap()
{
    n=prompt("Enter year:");
    if((n%4==0||n%400==0)&&n%100!=0)
    {
        console.log("It is leap year.");
    }
    else{
        console.log("It is not a leap year.");
    }
}
leap();