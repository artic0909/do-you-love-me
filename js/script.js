const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const note = document.getElementById("note");
const heartPopup = document.getElementById("heartPopup");
const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const closeModal = document.getElementById("closeModal");
const errorSound = document.getElementById("errorSound");
const yesSound = document.getElementById("yesSound");

noBtn.addEventListener("click", () => {
  errorSound.currentTime = 0;
  errorSound.play();
  modal.style.display = "block";
  backdrop.style.display = "block";
  modal.classList.add("shake");
  setTimeout(() => modal.classList.remove("shake"), 500);
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  backdrop.style.display = "none";

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  yesSound.currentTime = 0;
  yesSound.play();
  note.classList.remove("hidden");
  heartPopup.classList.remove("hidden");
  noBtn.style.display = "none";
  heartPopup.style.animation = "pop 1s ease-out";
  setTimeout(() => heartPopup.classList.add("hidden"), 1500);
});
