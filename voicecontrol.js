// // Voice Control for ZunChronoAI using Web Speech API

// // Check for browser support
// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.continuous = false;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// // Function to process voice commands
// recognition.onresult = function(event) {
//     const command = event.results[0][0].transcript.toLowerCase();
//     console.log("Recognized command:", command);
//     document.getElementById('recognizedText').innerText = `You said: "${command}"`;
//     handleCommand(command);
// };

// // Function to handle different voice commands
// function handleCommand(command) {
//     if (command.includes("set alarm for")) {
//         speak("Setting alarm.");
//         // Extract time and set alarm logic
//     } else if (command.includes("start countdown")) {
//         speak("Starting countdown.");
//         // Extract time and start countdown logic
//     } else if (command.includes("stop stopwatch")) {
//         speak("Stopping stopwatch.");
//         // Stop stopwatch logic
//     } else if (command.includes("what time is it")) {
//         const currentTime = new Date().toLocaleTimeString();
//         speak(`The time is ${currentTime}`);
//     } else {
//         speak("Sorry, I didn't understand that command.");
//     }
// }

// // Function to provide spoken feedback
// function speak(text) {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
    
//     // Wait for voices to be loaded before speaking
//     if (synth.getVoices().length === 0) {
//         synth.onvoiceschanged = () => synth.speak(utterance);
//     } else {
//         synth.speak(utterance);
//     }
// }


// // Start voice recognition on button click
// function startListening() {
//     document.getElementById('recognizedText').innerText = "Listening...";
//     recognition.start();
// }

// // UI Button to start voice control
// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.createElement('button');
//     button.innerText = "🎤 Start Voice Control";
//     button.onclick = startListening;
//     document.body.appendChild(button);
    
//     // Add a display area for recognized text
//     const displayText = document.createElement('p');
//     displayText.id = 'recognizedText';
//     document.body.appendChild(displayText);
// });
