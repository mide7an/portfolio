const text = "과학적 소양과 탐구를 바탕으로 책임감 있는 미래 시민 양성"; // 타이핑할 문구
let index = 0;
let speed = 100; // 글자 타이핑 속도 (밀리초 단위)

function typeWriter() {
  if (index < text.length) {
    document.getElementById("text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();