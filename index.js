var a = document.getElementById("key1");
var b = document.getElementById("key2");
var c = document.getElementById("key3");
var d = document.getElementById("key4");
var e = document.getElementById("key5");
var f = document.getElementById("key6");
var g = document.getElementById("key7");
var h = document.getElementById("key8");
var i = document.getElementById("key9");
var j = document.getElementById("key0");
var k = document.getElementById("key+");
var l = document.getElementById("key-");
var m = document.getElementById("key=");
var n = document.getElementById("key/");
var o = document.getElementById("key.");
var p = document.getElementById("key*");
var q = document.getElementById("key%");
var r = document.getElementById("keyac");
var s = document.getElementById("keyc");
var t = document.getElementById("keyM");
var z = document.getElementById("clear");
var x = document.getElementById("cal");
var y = document.getElementById("screen");
var display = document.getElementById("display");
function calculation() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}
function appendToDisplay(input) {
    display.value += input;
}
function allClear() {
    display.value = "";
}
function recentClear() {
    display.value = display.value.slice(0, -1);
}
function percentage() {
    var val = display.value;
    display.value = eval(val + '/' + '100');
}
