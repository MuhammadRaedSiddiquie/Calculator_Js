let a = document.getElementById("key1")
let b = document.getElementById("key2")
let c = document.getElementById("key3")
let d = document.getElementById("key4")
let e = document.getElementById("key5")
let f = document.getElementById("key6")
let g = document.getElementById("key7")
let h = document.getElementById("key8")
let i = document.getElementById("key9")
let j = document.getElementById("key0")
let k = document.getElementById("key+")
let l = document.getElementById("key-")
let m = document.getElementById("key=")
let n = document.getElementById("key/")
let o = document.getElementById("key.")
let p = document.getElementById("key*")
let q = document.getElementById("key%")
let r = document.getElementById("keyac")
let s = document.getElementById("keyc")
let t = document.getElementById("keyM")
let z = document.getElementById("clear")
let x = document.getElementById("cal")
let y=document.getElementById("screen")
let display= document.getElementById("display")
function calculation(){
   try{
     display.value=eval(display.value);
   }
  catch(error){
    display.value= "Error"
  }
}
function appendToDisplay(input){
  display.value += input
}
function clearDisplay(){
  display.value= "";
}
