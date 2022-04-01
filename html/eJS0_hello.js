document.write("Ohayoo,world!");

function sayHello(){
  var response = prompt("what's your name?")
  alert("hello " + response + ", have a nice day!")
};
// sayHello();

function myAdd(a,b){
  return a + b;
};
console.log(myAdd(1,2));
console.log(myAdd(2,3));

function showTopic() {
  var x = document.getElementById('demo');
  x.style.fontSize = "50px";
  x.style.color = "red";
};
