document.addEventListener('DOMContentLoaded', () => {
    const marqueeContent = document.getElementById('marqueeText');
    const originalTextSpan = marqueeContent.querySelector('.original-text');

    // 텍스트 복제 및 추가
    const textHtml = originalTextSpan.innerHTML;
    // 텍스트를 5번 복사하여 marquee-content 안에 추가합니다.
    for (let i = 0; i < 4; i++) {
        const span = document.createElement('span');
        
        // ✨ 핵심 수정: 원본 텍스트와 동일한 클래스를 복사된 요소에도 추가합니다.
        // 이렇게 해야 CSS에서 지정한 '1.2em' 스타일이 모두에게 적용됩니다.
        span.classList.add('original-text'); 
        
        span.innerHTML = textHtml;
        marqueeContent.appendChild(span);
    }
    
    // --- 애니메이션 로직 (변경 없음) ---
    let scrollPosition = 0;
    const scrollSpeed = .8; // 스크롤 속도 (픽셀/프레임)

    function animateScroll() {
        scrollPosition -= scrollSpeed;

        // 모든 텍스트가 1.2em이므로 너비 계산은 그대로 유지됩니다.
        const totalContentWidth = marqueeContent.clientWidth / 5; 
        
        if (scrollPosition <= -totalContentWidth) {
            scrollPosition = 0;
        }

        marqueeContent.style.transform = `translateX(${scrollPosition}px)`;

        requestAnimationFrame(animateScroll);
    }

    // 애니메이션 시작
    animateScroll();
});