
let display=<HTMLInputElement> document.getElementById("display")

const calculation=function(){
   try{
     display.value=eval(display.value);
   }
  catch(error){
    display.value= "Error"
  }
}
const appendToDisplay=function(input){
  display.value += input
}
const allClear=function(){
  display.value= "";
}
const recentClear=function(){
    display.value=display.value.slice(0, -1);
}
const percentage=function(){
   let val= display.value
   display.value=eval(val+'/'+'100')

   
   
   
}