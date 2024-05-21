const notes = document.querySelectorAll(".note");

const volume = document.querySelector(".volume input");

// Array to store all the notes
let allAudios = [],
  audio = new Audio("./audios/a.way");

// Function to play the piano
const pianoPlay = (note) => {
  audio.src = `./audios/${note}.wav`;
  audio.play();

  // Add active class to the key
  const clickKey = document.querySelector(`[data-key="${notes}"]`);

  clickKey.classList.add("active");
  setTimeout(() => {
    clickKey.classList.remove("active");
  }, 150);
};
// Loop through all the notes
notes.forEach((note) => {
  allAudios.push(note.dataset.key);

  // Add click event to the notes
  note.addEventListener("click", () => pianoPlay(note.dataset.key));
});

const pressKey = (e) => {
  pianoPlay(e.key);
};

document.addEventListener("keydown", pressKey);

// Function to slide the volume
function slideVolume(e) {
  audio.volume = e.target.value;
}

volume.addEventListener("input", slideVolume);
