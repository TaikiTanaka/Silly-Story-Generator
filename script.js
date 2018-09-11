console.log("JS linked");

//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//2. RAW TEXT STRINGS
var storyText = 'It was :temperature: outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. :name: saw the whole thing, but was not surprised — insertx weighs :weight:, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION*/
randomize.addEventListener('click', result);
function result() {

  if(customName.value !== '') {
    var name = customName.value;
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300).toString() + ' stone';
    var temperature =  Math.round(94).toString() + ' centigrade';
  }
  else{
    var weight = '300' + ' pounds';
    var temperature =  '94' + ' farenheit';
  }

  x = insertX[randomValueFromArray];
  var buildString = storyText
    .replace(':name:', name)
    .replace(':temperature:', temperature)
    .replace(':weight:', weight)
    .replace(/insertx/g, randomValueFromArray(insertX))
    .replace('inserty', randomValueFromArray(insertY))
    .replace('insertz', randomValueFromArray(insertZ));
  story.textContent = buildString;
  story.style.visibility = 'visible';
}