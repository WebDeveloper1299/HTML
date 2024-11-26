
function SubscribeChange(){
  const text= document.querySelector(".sub").innerHTML;
  if (text=="Subscribe"){
  document.querySelector(".sub").innerHTML="Unsubscribe";
  document.querySelector('.sub').classList.add('is-unsub')
 }else{
   document.querySelector(".sub").innerHTML="Subscribe";
   document.querySelector('.sub').classList.remove('is-unsub')

 }
 

 }
 function CalculateCost(events){
   if (events.key == "Enter"){
     
      const values = Number(document.querySelector("input").value)
   let result = 0
   if(values<40){
     result = Number(values) + 10
   }else{
     result = values
   }
   if (isNaN(values)){
     result= "Not a number "
   }
   const elements = document.querySelector(".cost").innerHTML = result

   }
  
 }
 
 //Window objet 
 // window.console.log("hellworld")
 // window.alert("hellworld")
 // window.document.body.innerHTML="eewwewe"
 const ScoreObject ={
   win:0,
   lose:0,
   tie:0
 }
 function UpdateScore(){
   return ScoreObject

 }
 localStorage.setItem("Score", JSON.stringify(ScoreObject))
 function pickComputerMove(){
   const random = Math.random()
   let computerMove= ""
   if (random>=0 && random<=1/3){
     computerMove = 'rock';
   }else if (random>=1/3 && random<2/3){
     computerMove='Paper'
   }else{
     computerMove = "Scissors"
   }
   return computerMove
 }

 // // const objects1 ={
 // //   name:"hellworld"
 // // }
 
 // // document.querySelector(".display").innerHTML="changing ur head "
 // // localStorage.setItem("item",JSON.stringify(objects1))
 // // console.log(localStorage.getItem("item"))
 // // function changing(){
 // //  const element =  document.querySelector(".c")
 // //  console.log(element)
 // //  if (element.innerHTML=="helloworld"){
 // //  element.innerHTML="helloworld100000"
 // //  }else{
 // //   element.innerHTML="helloworld"
 // //  }
 // // }
 // // // document.title="hello !"
 // // console.log(document.title)
 // // console.log(document.querySelector("button"))
 // // //document of the title name 
 // // console.log(document.body)
 // // console.log(document.body.innerHTML)
 // // //the document body text is the display in the body events in html 
 // // document.querySelector('button').innerHTML='changed'
 // // document.querySelector('.button1').innerHTML="helloworld111"
 // // document.body.innerHTML="<h1>hellworld</h1><h2>helloworld</h2><h1>helloworld</h1>";
 // // document.body.innerText="hellword"
 // // console.log(document.location)
 // // console.log(document.applets)
 // const ProductCart = {
 //   itemname :"soccer",
 //   price :function price(price , quantity){
 //     return price * quantity
 //   },
 //   quantity : 1,
 //   description : "This is a soccer ball where everyone play is a famous sport for most of the people around in the world"
 // }
 // console.log(ProductCart.price(10.4,22))
