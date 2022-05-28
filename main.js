//querySelectors go here
var messageButton = document.querySelector('.button')
var inputValue = document.querySelectorAll('input[type="radio"]')
var bellIcon = document.querySelector('.meditate')
var addedWords = document.querySelector('.made-nice-words')
var box = document.querySelector('.box')
var form = document.querySelector('#form')
var hiddenWords = document.querySelector('.words-hidden')
var clear = document.querySelector('.clear')
// var mantraRadioBtn = document.querySelector('#mantra').disabled=true;
// var affirmRadioBtn = document.querySelector('#affirmation').disabled=true;



//arrays go here 
var affirmations = [
    "I forgive myself and set myself free",
    "I believe I can be all that I want to be",
    "I am in the process of becoming the best version of myself",
    "I have the freedom & power to create the life I desire",
    "I choose to be kind to myself and love myself unconditionally",
    "My possibilities are endless",
    "I am worthy of my dreams",
    "I am enough",
    "I deserve to be healthy and feel good",
    "I am full of energy and vitality and my mind is calm and peaceful",
    "Every day I am getting healthier and stronger",
    "I honor my body by trusting the signals that it sends me",
    "I manifest perfect health by making smart choices"
];

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to some else who needs it.",
    "Don't let yesterday take up too much of today.",
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it",
    "Don’t let yesterday take up too much of today",
    "Every day is a second chance",
    "Tell the truth and love everyone", 
    "I am free from sadness",
    "I am enough",
    "In the beginning it is you, in the middle it is you and in the end it is you",
    "I love myself",
    "I am present now", 
    "Inhale the future, exhale the past", 
    "This too shall pass",
    "Yesterday is not today", 
    "The only constant is change",
    "Onward and upward",
    "I am the sky, the rest is weather."
];

//Event listeners go here
// form.addEventListener('submit', newWords)
// clear.addEventListener('click', clearOut)
messageButton.addEventListener('click', newWords)
clear.addEventListener('click', clearText)




//functions go here 

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function changeView() {
    box.classList.add('hidden')
    hiddenWords.classList.remove('hidden')
  }

 function newWords(event) {
     event.preventDefault()
     changeView()
   if (inputValue[0].checked) {
      displayText(affirmations[getRandomIndex(affirmations)])
   } else {
      displayText(mantras[getRandomIndex(mantras)])
   }
 }

function displayText(text) {
  addedWords.innerHTML = text
}

function clearText(event) {
  event.preventDefault
  box.classList.remove('hidden');
  hiddenWords.classList.add('hidden')
  addedWords.innerHTML = ''
}

// function noButtons() {
//   if ()
// }

