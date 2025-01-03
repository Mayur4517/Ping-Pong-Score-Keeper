const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const reset = document.querySelector("#Reset");
const winningscoreSelect = document.querySelector("#playedto");

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

winningscoreSelect.addEventListener("change", () => {
  winningScore = parseInt(winningscoreSelect.value);
  resetf();
});
p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
function resetf() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  isGameOver = false;
}
reset.addEventListener("click", resetf);
