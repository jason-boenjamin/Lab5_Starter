// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('#explore button');
  const textArea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector("img");;
  let listOfVoices = [];

  function fillVoiceList(){
    listOfVoices = speechSynthesis.getVoices();
    voiceSelect.innerHTML ='';

    listOfVoices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default){
        option.textContent += ' (default)';
        option.selected = true;
      }
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });

    if (!voiceSelect.querySelector('option[selected]') && voiceSelect.options.length > 0) {
      voiceSelect.options[0].selected = true;
    }
  }

  if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = fillVoiceList;
  }

  fillVoiceList();

  speakButton.addEventListener('click', () => {
    const voiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const selectedVoice = listOfVoices.find(voice => voice.name === voiceName);
    

    console.log(textArea.value);
    let textToSpeech = new SpeechSynthesisUtterance(textArea.value);
    textToSpeech.voice = selectedVoice;

    textToSpeech.onstart = () => {

      faceImage.src = 'assets/images/smiling-open.png';
      // console.log(faceImage); for my personal testing
    };

    textToSpeech.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(textToSpeech);

  });
}