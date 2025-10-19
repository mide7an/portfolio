/**
 * 🎨 이미지 세로 스트립 낙하 애니메이션 함수
 * @param {HTMLElement} containerElement - 애니메이션을 적용할 부모 요소 (.fall 클래스를 가진 요소)
 * @param {number} [slices=10] - 나눌 조각의 수
 * @param {number} [duration=1500] - 전체 애니메이션 시간 (밀리초)
 * @param {number} [dropDelay=100] - 각 조각의 낙하 시작 시차 (밀리초)
 */
function sequentialImageSlices(containerElement, slices = 10, duration = 1500, dropDelay = 100) {
    const container = containerElement;
    
    // 이미 애니메이션이 적용되었거나 처리 중인 요소는 무시
    if (container.dataset.animated === 'true' || container.dataset.animated === 'processing') return;
    
    const imgElement = container.querySelector('img');
    if (!imgElement || !imgElement.src) return;

    // 플래그 설정: 처리 중임을 표시
    container.dataset.animated = 'processing';

    const image = new Image();
    image.crossOrigin = 'Anonymous'; 
    image.src = imgElement.src;

    image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const ctx = canvas.getContext('2d');
        
        // 🌟 반응형 문제 해결: <canvas>에 width: 100%, height: auto 스타일 적용
        canvas.style.width = '100%';
        canvas.style.height = 'auto';
        
        container.replaceChild(canvas, imgElement); 
        
        // 2. 수직 낙하 애니메이션 로직
        const sliceWidth = canvas.width / slices;
        const animationDuration = 500; // 각 조각이 낙하하는 시간 (0.5초)
        const startYOffset = canvas.height * -0.5; // 시작 위치 (캔버스 높이의 50% 위)

        // 10개 조각 각각에 대해 애니메이션 시작
        for (let i = 0; i < slices; i++) {
            const finalX = i * sliceWidth; // X축 최종 위치 (고정)
            
            setTimeout(() => {
                let startTime = null;

                function animate(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / animationDuration, 1);
                    const currentY = startYOffset + (0 - startYOffset) * progress;
                    
                    // 잔상 방지를 위해 현재 조각의 최종 영역을 지움
                    ctx.clearRect(finalX, 0, sliceWidth, canvas.height);
                    
                    ctx.drawImage(
                        image, 
                        finalX, 0, sliceWidth, canvas.height, // 원본에서 조각을 가져옴
                        finalX, currentY, sliceWidth, canvas.height // X는 고정, Y는 이동
                    );
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        // 애니메이션 완료 후 최종 위치(Y=0)에 고정
                        ctx.drawImage(
                            image, 
                            finalX, 0, sliceWidth, canvas.height, 
                            finalX, 0, sliceWidth, canvas.height 
                        );
                        // 마지막 조각의 애니메이션이 완료될 때 플래그를 'true'로 최종 설정
                        if (i === slices - 1) {
                             container.dataset.animated = 'true';
                        }
                    }
                }
                requestAnimationFrame(animate);

            }, dropDelay * i); 
        }
    };
    
    if (image.complete) {
        image.onload();
    }
}
// ------------------------------------------------------------------
// 🎯 Intersection Observer를 사용하여 뷰포트 진입 감지 및 함수 실행
document.addEventListener('DOMContentLoaded', () => {
    // 🌟 타겟 쿼리: '.fall' 클래스를 가진 모든 요소를 감시합니다.
    const targetQuery = '.fall'; 
    const targetElements = document.querySelectorAll(targetQuery);
    if (targetElements.length === 0) return;

    const observerOptions = {
        root: null, 
        threshold: 0.1 // 요소의 10%가 보일 때 실행
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.animated !== 'true') {
                
                // 뷰포트 진입 시 해당 요소를 함수에 전달하여 독립적으로 처리
                sequentialImageSlices(entry.target, 10, 1500, 100); 

                // 애니메이션 시작과 동시에 관찰 중지
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 찾은 모든 .fall 요소에 대해 관찰 시작
    targetElements.forEach(element => {
        observer.observe(element);
    });
});