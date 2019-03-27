'use strict';

var yesArray = ['yes', 'yeah', 'yup', 'yea', 'yep', 'y'];
var noArray = ['no','nope','nuh-uh','n'];
var score = 0;

alert('Before we get into the serious stuff, let\'s play with some random trivia about me.');

var userName = prompt('But first, what\'s your name?');

//Used the book to remember the exact switch syntax
switch (userName.toLocaleLowerCase()) {

case 'paula':
  alert('That\'s my name too!');
  break;

case 'sam':
case 'nicholas':
case 'brian':
case 'brook':
  alert('Hello, teacher!');
  break;

// I didn't want to repeat code, but luckily I found this: https://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript
case 'lena':
case 'david':
case 'ashabrai':
case 'evan':
case 'dana':
  alert('Hello helpful TA person!');
  break;

default:
  alert('Welcome, ' + userName +'!');
  break;
}


var answer1 = prompt('Question #1: \n Do I play video games?');

if(checkAnswer(answer1)){
  alert('Congrats! You got the first question correct!');
  score++;
} else {
  alert('Sorry, that is not accurate. I play TONS of video games!');
}
console.log('User answered question #1 with: ' + answer1);
console.log('Current score is: ' + score);

var answer2 = prompt('Next question: Do I play Fortnite?');

if(checkAnswer(answer2)){
  alert('Ouch! That\'s another one wrong. \nDon\'t worry, maybe you\'ll get the next one...');
} else if (score === 0 ){
  alert('That\'s correct! I respect Battle Royales, but I just don\'t like to play them...');
  score++;
} else {
  alert('Nope! I don\'t like Battle Royales. \nThat\'s alright, let\'s move on to the next one...');
}
console.log('User answered question #2 with: ' + answer2);
console.log('Current score is: ' + score);

var answer3 = prompt('Here\'s an easy one: \nDo I like to code?');

if(checkAnswer(answer3)){
  alert('That\'s correct! \n You must be psychic...');
  score++;
} else if (score === 0 ){
  alert('Ouch! Another one wrong. \nDon\'t worry, maybe you\'ll get the next one...');
} else {
  alert('Incorrect, sir! \nI\'ve been playing with code since I was a kid. I think it\'s safe to say that I like it...');
}
console.log('User answered question #3 with: ' + answer3);
console.log('Current score is: ' + score);

var answer4 = prompt('Do I have a cat?');

if(checkAnswer(answer4)){
  alert('That\'s correct! \n He loves me, but he can sometimes be a jerk about it.');
  score++;
} else if (score === 0 ){
  alert('Wow! You\'re really bad at this. *ahem* I mean, hang in there champ... \nOne more question to go!');
} else {
  alert('That is inaccurate. I have a cat who is a total Momma\'s boy.');
}
console.log('User answered question #4 with: ' + answer4);
console.log('Current score is: ' + score);

var answer5 = prompt('Do I play CandyCrush?');

if(checkAnswer(answer5)){
  alert('It\'s weird how well you know me... Are you sure you\'re not my husband, Jeff?');
  score++;
} else if (score === 0 ){
  alert('I\'m not even going to tell you if you got that right. I think we both  know the outcome... \nIf I had a cookie, I would give it to you as a    consolation prize.');
} else {
  alert('Sorry, wrong answer. I\'ve played all of the Candy Crush games. I even have three of them on my phone right now.');
}
console.log('User answered question #5 with: ' + answer5);
console.log('Current score is: ' + score);

if(score > 1 ){
  alert('Congratulations! You got ' + score + 'questions correct!');
} else if (score === 1){
  alert('Hey, you\'re on the board! You got 1 question correct!');
}


// Didn't end up going this route, but used the example to remember how to write a function in js: https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_elements

function checkAnswer(answer) {

  // Tried to use .contains (Java habits), but after getting an error I used this to fix it: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  if(yesArray.includes(answer.toLowerCase())){
    console.log('Input equates to: ' + true);
    return true;
  } else if (noArray.includes(answer.toLowerCase())){
    console.log('Input equates to: ' + false);
    return false;
  } else {
    console.log('Unrecognized Input');
    return false;
  }
}


