var story = 0; // keep story from being undefined
var form = document.getElementById('theAdventure');// get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

var story_telling = {
  "start": { //beginning of the story
    "question": "Gramps is strolling through the Grocery store and finds himself lost. <br> He looks to his right and sees the milk aisle. He looks to the left and sees cleaning products section. <br> Does he go left or right?",
    "answers": {
      "a": "Left",
      "b": "Right",
    }
  },
  // Left
  "1_a": {
    "question": "You walk down the cleaning aisle and see the sunshine through the window right above the exit sign for the store. <br> The sun shines down making the metal surfaces glisten and the floors glisten. <br> Does he Keep Walking or Stop?",
    "answers": {
      "a": "Keep Walking",
      "b": "Stop",
    }
  },

  "2_a": {
    "question": "The floor wasn't glistening because of the sun, but because of spilled cleaning product. <br> When Gramps awakens, he finds himself in the same spot except the exit isn't in front of him anymore. He scours the whole store and there is no exit at all. <br> <br> So Close Yet So Far Ending",
  },
  "2_b": {
    "question": "Gramps stops because he realizes that the floor was glistening because of the cleaning product. He carefully steps around it and walks out the door. <br>As soon as he steps out of the building, he wakes up. <br> <br> Escaped the Dream Ending ",
  },

  // Right

  "1_b": {
    "question": "Gramps decides to investigate the milk aisle to figure out how to get out of the Grocery store. He reasons that since milk aisles are usually in the back of stores, if he walks in the opposition direction he should be out in no time. <br> <br> However, before then he decides to grab a gallon of milk. The freshest are always in the back he points out in his head as he reaches in. He suddenly feels a tug on his arm and is jolted through the fridge. <br> <br> He discovers he was pulled by a milk carton who points out The freshest humans are always in the back. The absurdity of this instantly gives him the realization that he is dreaming. But, he is not able to wake up. <br> <br> <br> The Milk Ending...",
  },
};

// Continue link
window.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
  answer = document.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if(answer) {
    story++;//increment or add 1 to
    populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
    console.log("Story time!"); // Console log to make sure things are working
  }
});

// Reset button
function resetForm(){
    document.getElementById("theAdventure").reset();
}

// Generate answers from story
function populateForm(story) {
  var current_story = story_telling[story];//take values from story_telling story
  var text = '';

  for(var prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
    }
  }

  form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
  form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset
}

populateForm('start');//set the form at the beginning
