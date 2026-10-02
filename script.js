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
