function alertUser(msg) {
    alert(msg);
}

window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});
    
const button = document.querySelector(".button1");
const icon = document.querySelector(".button1 > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});

var bleep = new Audio();
bleep.src = "/AUDIO/The-Mercury-Orchestra-Star-Wars-Main-Theme.mp3";
