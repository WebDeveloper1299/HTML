console.log("helloworld".toUpperCase())
console.log("helloworld".substring(1,2))
console.log("helloworld".concat("helloworld"))
//auto boxing wrapper class 
num1 = 2
num2 = 3
console.log(num1>num2 || true)
console.log(num1> num2&& true)
let array = [1,2,3,4,5]
array.forEach((x)=>{
console.log(x)
})
const objects1 = {
  message : "helloworld"
}
const objects2 = {
  message : "helloworld"
}
objects1.message = "hellowordl111"
console.log(objects1.message === objects2.message)
//it do ot cange the varuable changed the mesage property
console.log(objects1)
console.log(objects1===objects2)
//false because of the memory location is not the message propert
const object20 ={
  message :"hellworld1922"
}
