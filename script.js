const testButton = document.getElementById("test-button");
const result = document.getElementById("result");
const themeButton = document.getElementById("theme-button");
let clickCount = 0;

themeButton.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeButton.textContent = isDark ? "밝은 화면" : "어두운 화면";
  themeButton.setAttribute("aria-pressed", String(isDark));
});

testButton.addEventListener("click", () => {
  clickCount += 1;
  result.textContent = `테스트 성공! 버튼을 ${clickCount}번 눌렀어요.`;
  result.classList.add("success");
  testButton.innerHTML = '다시 테스트하기 <span aria-hidden="true">↻</span>';
});

const greetingForm = document.getElementById("greeting-form");
const nameInput = document.getElementById("name-input");
const greetingResult = document.getElementById("greeting-result");
const confetti = document.getElementById("confetti");
let confettiTimer;

function celebrate() {
  clearTimeout(confettiTimer);
  confetti.replaceChildren();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#ff6888", "#ffc857", "#7ce5bb", "#8aa5ff", "#cd8bff"];
  const pieces = document.createDocumentFragment();
  for (let i = 0; i < 55; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[i % colors.length];
    piece.style.setProperty("--drift", `${Math.random() * 240 - 120}px`);
    piece.style.setProperty("--spin", `${Math.random() * 1080 - 540}deg`);
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    piece.style.animationDuration = `${1.6 + Math.random() * 0.8}s`;
    pieces.appendChild(piece);
  }
  confetti.appendChild(pieces);
  confettiTimer = setTimeout(() => confetti.replaceChildren(), 3000);
}

greetingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  greetingResult.classList.remove("welcome-pop");
  if (!name) {
    clearTimeout(confettiTimer);
    confetti.replaceChildren();
    greetingResult.textContent = "이름을 입력해주세요.";
    greetingResult.classList.remove("success");
    nameInput.setAttribute("aria-invalid", "true");
    nameInput.focus();
    return;
  }
  nameInput.removeAttribute("aria-invalid");
  greetingResult.textContent = `${name}님, 어서오세요!`;
  greetingResult.classList.add("success");
  void greetingResult.offsetWidth;
  greetingResult.classList.add("welcome-pop");
  celebrate();
});
