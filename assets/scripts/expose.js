// expose.js

let confetti;

window.addEventListener('DOMContentLoaded', init);

/*
Initializes all the elements from the html file to JS
Calls the functions to make the page cohesive
*/
function init() {
  // TODO
  const imageElement = document.querySelector('section#expose img');
  const soundElement = document.querySelector('audio');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioButton = document.querySelector('section#expose button');
  const hornSelect = document.querySelector('#horn-select');
  confetti = new JSConfetti();
  
  setupHornChanges(hornSelect, imageElement, soundElement);
  setupVolumeControl(volumeSlider, volumeIcon, soundElement);
  setupAudioButton(audioButton, soundElement);
}

/*
sets the horn based on the drop down menu
*/
function setupHornChanges(selectElement, imgElement, soundElement){
  selectElement.addEventListener('change', () =>{
    const hornType = selectElement.value;

    switch (hornType){
      case 'air-horn':
        imgElement.src = 'assets/images/air-horn.svg';
        soundElement.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        imgElement.src = 'assets/images/car-horn.svg';
        soundElement.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        imgElement.src = 'assets/images/party-horn.svg';
        soundElement.src = 'assets/audio/party-horn.mp3';
        break;
    }
  });
}


/*
 Chooses the icon for the volume control based on the slider
*/
function setupVolumeControl(sliderElement, iconElement, soundElement){
  sliderElement.addEventListener('input', () =>{
    const volume = parseInt(sliderElement.value, 10);
    soundElement.volume = volume / 100;

    if (volume === 0) {
      iconElement.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      iconElement.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      iconElement.src = 'assets/icons/volume-level-2.svg';
    } else {
      iconElement.src = 'assets/icons/volume-level-3.svg';
    }
  });
}

/*
Sets up the audio button and will play based on the parameters
if its a party horn then add confetti
*/
function setupAudioButton(buttonElement, soundElement){
  buttonElement.addEventListener('click', () =>{
    
    const hornSelect = document.querySelector('#horn-select');
    if(hornSelect.value === 'party-horn'){
      confetti.addConfetti();
    }
    soundElement.play();
  });
}
