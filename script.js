const testButton = document.getElementById("test-button");
const result = document.getElementById("result");
let clickCount = 0;

testButton.addEventListener("click", () => {
  clickCount += 1;
  result.textContent = `테스트 성공! 버튼을 ${clickCount}번 눌렀어요.`;
  result.classList.add("success");
  testButton.innerHTML = '다시 테스트하기 <span aria-hidden="true">↻</span>';
});
