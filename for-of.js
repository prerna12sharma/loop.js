// var a=["shreya","komal","riya","kanak"]
// for (i of a){
//     console.log(i)
// }


// object

// var x={"a":"name","b":"age","c":"date"}
// for (i in x){
//     console.log(i)
// }



// cmpvalues

// a=["anu","radha","shivam"]
// for (cmpValue of a){
//     console.log(cmpValue)
// }


// a=["anu","radha","shivam"]
// for (cmpKey of a){
//     console.log(cmpKey)
// }

let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];

// cmpKey are the property keys
for (let cmpKey in Navgurukul) {
 console.log(cmpKey);
}
console.log("------------------")
// cmpValue are the property values
for (let cmpValue of Navgurukul) {
 console.log(cmpValue)
}