// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';

// Arrays used to create the sentence.
var speakButton = document.querySelector('button');
var people = ['My mom', 'My dad', 'The mailman', 'My cousin', 'My teacher', 'The Lion', 'The dog'];
var verbs = ['sat on', 'ate', 'laughed at', 'hugged', 'climbed on', 'saw', 'yelled at'];
var adjectives = ['a slimy', 'a red', 'a freaky', 'a big', 'a small', 'an ugly', 'a cute'];
var things = ['goat', 'camel', 'monkey', 'giraffe', 'ape', 'kitten', 'sheep']
var places = ['on the moon', 'on a mountain', 'in a house', 'in a car', 'on a train', 'on the field', 'in the box'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
