const startButton = document.getElementById("startButton");
const result = document.getElementById("result");

let tokenizer;

// Initialize kuromoji tokenizer
kuromoji.builder({ dicPath: 'https://cdn.rawgit.com/takuyaa/kuromoji.js/master/dict' }).build(function (err, _tokenizer) {
  if (err) {
    throw err;
  }
  tokenizer = _tokenizer;
});

startButton.addEventListener("click", () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.continuous = true;

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.trim();
    const katakana = toKatakana(transcript);
    result.textContent = katakana;
  };

  recognition.start();
});

function toKatakana(text) {

  const inputText = text;
  const tokens = tokenizer.tokenize(inputText);
  const katakanaArray = tokens.map(token => {
    if (token.reading) {
      return token.reading;
    } else {
      return token.surface_form.replace(/[ぁ-ん]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 0x60);
      });
    }
  });
  const katakana = katakanaArray.join('');

  return katakana;
}