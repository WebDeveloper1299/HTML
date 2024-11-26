// let x;
// x=10
// console.log(10)
// //hositing is javascript default behaveior to jove the decalring to the tp  

// var xy = 7
// console.log(xy)
// carname = "helloworld";
// //


// let array1= [1,2,3]
// let array2 = array1.slice()
// array2.push(4)
// console.log(array1)
// console.log(array2)
// //same memory location 
// // let classes={
// //   name:"hellword",
// //   age:20
// // }
// // let {object1 , object2}= classes
// // console.log(object1, object2)

// for(let i =0;i<=10;i++){
//   if (i===5){
//     continue;
//   }
//   if (i==7){
//     break;
//   }
//   console.log(i)
// }
// // let {objec}={
// // name :"hss",
// // age:20
// // }
// // console.log(objec)
// //destructing making easy to create bariable 
// let [firstnumber ,seondnumber]= [1,2,3,4]
// console.log(firstnumber, seondnumber)
//   //destricuting\
//   let doublenumber=[]
// function arraydouble(num){
//  for(let i =0;i<num.length;i++){
//     doublenumber.push(num[i]*2)
//     // if (i===2){
//     //  // return doublenumber;
//     //  break;
//     // }
//     //end the loops
//  }
//  //end
//  console.log(doublenumber)
// }
// arraydouble([1,2,3,4])

// console.log(2=="2")
// //true
// console.log(2==="2")
// //false

// for(let i =1;i<=20;i++){
//   if(i%3===0){
//     console.log('Fizz')
//   }
//   if(i%5===0){
//     console.log('Buzz')
//   }
//   if (i%3===0 && i%5===0){
//     console.log("FizzBuzz")
//   }
// }
// const function1 = function(){
//   console.log("helloworld")
// }
// console.log(typeof function1)
// function1()
// console.log(function1)
// const array5 = [1,2,3,4]
// console.log(Array.isArray(array5))
// console.log(typeof array5)

// function run (param){
// param();
// }

// function aa(){
//   console.log("hellworld1233")
// }

// function addnumber(){
//   console.log("this is "+ 2+2)
// }
// setTimeout(addnumber, 1000)
// //future timeout

// // setTimeout(function (){
// //   console.log("hellworld1233")
// // }, 1000)
// run(function(){ console.log("hellworld")})

// window.console.log([1,2,3,4].length)
// console.log(typeof [1,2,3,4])
// console.log("helllworld".substring(1,2))
// console.log("2"+"2")
// console.log(2+2/2)
// let array100 =[]
// array100.push(1)
// console.log(array100)
// array100.pop()
// //return last elemenet
// function name1(obb){
//   obb.objects()
// }
// const obb={
//   objects:function(){
//     console.log("hellworld000")
//   }
// }
// name1(obb)
// const sjs = {
//   name:"hsss"
// }
// const sjs1 = {
//   name:"hsss"
// }
// //object reference
// console.log(sjs.name===sjs1.name)
// //callbacks are function passed another function as arugemnt 
// const values= setInterval(() => {
//    console.log("hellworld 2 33")
//  }, 2000);

const array11 = [1,2,3,4]
const array123= array11.slice()
array11.push(200)
//making copy it wil be false 
console.log("helloworld".toUpperCase().substring(1,2))
const name1=()=>{
console.log("array1")
}
name1()
console.log(array11===array123)
let number1=0;
let timerid;
function start(){
  timerid=setInterval(function(){
   number1+=1
   const value =document.querySelector(".timer")
   value.innerHTML=number1
},1000)
}
const array101 = [1,2,3,4]
array101.forEach((x, y)=>{
  console.log("index:",y ,x**2)
})
function stop(){
  clearInterval(timerid)
}

for(let i =0;i<=10;i++){
  console.log(i**2)
}

 const value =document.querySelector(".timer")
 value.innerHTML=number1

// // setInterval(function(){
// //   let maths = Math.random()
// //   console.log(maths)
// // },2000)
// clearInterval(values)
// console.log("Synchorous code ")
// console.log("heere")
// console.log(Array.isArray([1,2,3,4]))
// console.log("helloworld".toUpperCase())
// console.log("hellworld ddssdsd".split(" "))
// console.log("hellworld".indexOf('1',2))
// console.log('helloworld'.charAt(2))
// //ASCII code 