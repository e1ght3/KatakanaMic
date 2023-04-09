const startButton = document.getElementById("startButton");
const result = document.getElementById("result");

let tokenizer;

const tokenizerPromise = new Promise((resolve, reject) => {
  kuromoji.builder({ dicPath: 'dict' }).build((err, _tokenizer) => {
    if (err) {
      reject(err);
    } else {
      resolve(_tokenizer);
    }
  });
});

tokenizerPromise.then(_tokenizer => {
  tokenizer = _tokenizer;
}).catch(err => {
  console.error(err);
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
