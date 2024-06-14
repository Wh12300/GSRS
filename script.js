let recognition = new webkitSpeechRecognition();
let transcript = '';

recognition.continuous = true;
recognition.lang = 'ka'; // Georgian language support

function startRecording() {
  recognition.start();
  document.getElementById('stop-button').disabled = false;
  document.getElementById('start-button').disabled = true;
}

function stopRecording() {
  recognition.stop();
  document.getElementById('stop-button').disabled = true;
  document.getElementById('start-button').disabled = false;
  saveTextAsFile(transcript);
}

recognition.onresult = function(event) {
  const current = event.resultIndex;
  const text = event.results[current][0].transcript;
  document.getElementById('transcript').textContent = text;
  updateTranscript(text);
};

function updateTranscript(text) {
  transcript += text;
}

document.getElementById('start-button').addEventListener('click', startRecording);
document.getElementById('stop-button').addEventListener('click', stopRecording);



const button = document.querySelector('button');
const light = document.createElement('div');
light.classList.add('light');
button.appendChild(light);

button.addEventListener('mousemove', (e) => {
  const buttonRect = button.getBoundingClientRect();
  const x = e.clientX - buttonRect.left;
  const y = e.clientY - buttonRect.top;

  light.style.left = `${x}px`;
  light.style.top = `${y}px`;
});

button.addEventListener('mouseout', () => {
  light.style.left = '-100px';
  light.style.top = '-100px';
});