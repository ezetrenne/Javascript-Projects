/**************************************************************************/
/* This program will let the user  be able to input a question, then  program will output a random fortune. */
/* Coded by: Evense Zetrenne*/
/* Feb 12, 2018 */
/**************************************************************************/

let userName = prompt('What is your name?');
userName ? console.log('Hello ' + userName ) : console.log('Hello!');

let userQuestion = prompt('What is your question?');
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber){
  case 0:
    eightBall = 'It is certain'
    break;
    
  case 1:
    eightBall = 'It is decidedly so'
    break;
    
  case 2:
    eightball = 'Hmm reply hazy try again'
    break;
    
  case 3:
    eightBall = 'Cannot predict now'
    break;
    
  case 4:
    eightBall = "Don't count on it"
    break;
    
  case 5: 
    eightBall = 'My sources say no'
    break;
    
  case 6:
    eightBall = 'Outlook not so good'
    break;
    
  case 7:
    eightBall = 'Universe points to yes'
    break;
}

console.log('You asked: ' +userQuestion);
console.log('The eight ball answered: ' + eightBall );
