var sum=0;
var i=1;
var input=require("readline-sync")
while (i<=10){
    var num=input.questionInt("enter your num")
    sum=sum+num
    i++
}
console.log(sum)
