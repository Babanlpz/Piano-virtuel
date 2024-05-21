const notes = document.querySelectorAll(".note");

const volume = document.querySelector(".volume input");

let allAudios = [],
  audio = new Audio("./audios/a.way");

const pianoPlay = (note) => {
  audio.src = `./audios/${note}.wav`;
  audio.play();

  const clickKey = document.querySelector(`[data-key="${notes}"]`);

  clickKey.classList.add("active");
  setTimeout(() => {
    clickKey.classList.remove("active");
  }, 150);
};

notes.forEach((note) => {
  allAudios.push(note.dataset.key);

  note.addEventListener("click", () => pianoPlay(note.dataset.key));
});

const pressKey = (e) => {
  pianoPlay(e.key);
};

document.addEventListener("keydown", pressKey);

function slideVolume(e) {
  audio.volume = e.target.value;
}

volume.addEventListener("input", slideVolume);
