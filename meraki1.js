var input=require("readline-sync")
var name=input.question("enter a name")
var store=name;
str=""
for (i=name.length-1; i>=0; i--){
    str=str+name[i]
}
if (store==str){
    console.log("its palindrom")
}
else{
    console.log("its not palindrom")
}