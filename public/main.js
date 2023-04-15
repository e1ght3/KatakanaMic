// Get the "startButton" and "result" elements from the HTML document
const startButton = document.getElementById("startButton");
const result = document.getElementById("result");
//
const ws = new WebSocket(`ws://${location.host}`);
const receivedTextElement = document.getElementById("received-text");
const textInput = document.getElementById("text-input");
const sendTextButton = document.getElementById("send-text");


//*********************************************
//WebSocket
//*********************************************

ws.onopen = () => {
  console.log("WebSocket connection opened");
};

ws.onmessage = (event) => {
  console.log("Received data:", event.data);
  receivedTextElement.innerText = event.data;
};

ws.onclose = () => {
  console.log("WebSocket connection closed");
};


//*********************************************
//マイク入力からカタカナ変換
//*********************************************
let tokenizer;

// Initialize kuromoji tokenizer
kuromoji.builder({ dicPath: 'dict' }).build(function (err, _tokenizer) {
  if (err) {
    throw err;
  }
  tokenizer = _tokenizer; // Store the tokenizer object in the "tokenizer" variable for later use
});

// Add an event listener to the "startButton" element that listens for a click and starts a SpeechRecognition instance
startButton.addEventListener("click", () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // Declare the SpeechRecognition constructor with fallbacks for different web browsers
  const recognition = new SpeechRecognition(); // Create a new SpeechRecognition instance
  recognition.lang = "ja-JP"; // Set the language to Japanese
  recognition.continuous = true; // Set the recognition to continuous mode

  // When recognition gets a result, convert it to Katakana script and display it on the screen
  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.trim(); // Get the transcript of the last result and remove any extra spaces before and after it
    const katakana = toKatakana(transcript); // Convert the transcript to Katakana using another function called "toKatakana"
    result.textContent = katakana; // Display the converted text on the screen by setting its text content to the "result" element

    ws.send(JSON.stringify({ type: "text-update", katakana }));//Send katakanaText to server
    console.log("katakana:", katakana);
  };

  recognition.start(); // Start the SpeechRecognition instance
});

// Function to convert text to Katakana script using the previously initialized tokenizer
function toKatakana(text) {

  const inputText = text; // Store the input text in a variable called "inputText"
  const tokens = tokenizer.tokenize(inputText); // Tokenize the input text using the previously initialized tokenizer and store the resulting array of objects in a variable called "tokens"
  const katakanaArray = tokens.map(token => { // Create a new array by mapping over the "tokens" array and applying a function to each token
    if (token.reading) { // If the current token has a "reading" property, which means it's already in Katakana, return its value
      return token.reading;
    } else { // Otherwise, convert the token to Katakana using its "surface_form" property and return it
      return token.surface_form.replace(/[ぁ-ん]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 0x60);
      });
    }
  });
  const katakana = katakanaArray.join(''); // Join the elements of the "katakanaArray" into a single string using an empty separator
  return katakana; // Return the final Katakana string
}