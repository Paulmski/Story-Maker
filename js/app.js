// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// Arrays used to create the sentence.
var speakButton = document.getElementById('speakButton');
var words = [['My mom', 'My dad', 'The mailman', 'My cousin', 'My teacher', 'The Lion', 'The dog'], ['sat on', 'ate', 'laughed at', 'hugged', 'climbed on', 'saw', 'yelled at'],['a slimy', 'a red', 'a freaky', 'a big', 'a small', 'an ugly', 'a cute'],['goat', 'camel', 'monkey', 'giraffe', 'ape', 'kitten', 'sheep'], ['on the moon', 'on a mountain', 'in a house', 'in a car', 'on a train', 'on the field', 'in the box']];

var sentence = [0, 0, 0, 0, 0];

/* Functions
-------------------------------------------------- */
// Retrieves indexes from sentence array and returns the string to be spoken
function formSentence() {
	return words[0][sentence[0]] + ' ' + words[1][sentence[1]] + ' ' + words[2][sentence[2]] + ' ' + words[3][sentence[3]] + ' ' + words[4][sentence[4]];
}
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function changeSentencePart(int) {
	sentence[int] = sentence[int] + 1;
	if (sentence[int] > words[int].length) {
		sentence[int] = 0;
	}
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(formSentence());
}
