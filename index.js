// const firstProb = document.getElementById('firstProblem');
//
// firstProb.addEventListener('click'), function(event){
//   alert('first world problems!');
// });

var name = prompt("Tell me your name, stranger.");

function capitalizeFirstLetter(string){
  name = string.charAt(0).toUpperCase() + string.slice(1);
};

capitalizeFirstLetter(name);

var problem = prompt("Okay " + name + ". What problem do you have?");

var whyOne = prompt("Cool. Your problem is " + problem + ". Why?");

var whyTwo = prompt("Because " + whyOne + ". Why?");
var whyThree = prompt("Because " + whyTwo + ". Why?");
var whyFour = prompt("Because " + whyThree + ". Why?");
var whyFive = prompt("Because " + whyFour + ". Why?");


console.log(problem);
console.log(whyOne);
console.log(whyTwo);
console.log(whyThree);
console.log(whyFour);
console.log(whyFive);
