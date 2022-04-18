var input=require("readline-sync")
var name=input.question("enter")
var str=""
store=name
for (i=name.length-1; i>=0; i--){
    str=str+name[i]
}
if (store==str){
    console.log("its palindrom")
}
else{
    console.log("its not palindrom")
}