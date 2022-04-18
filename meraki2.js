var input=require("readline-sync")
var num=input.questionInt("enter your num")
let i=1
var count=0;
while (i<=num){      
    if (num%i==0) {
       count=count+1
    }
    i++;
}
if (count==2) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}