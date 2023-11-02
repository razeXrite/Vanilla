const circles = document.querySelectorAll('.circle');
let lastModalContent = 0;
let lastButton = 0;


var savedInput1Value = localStorage.getItem('length');
var savedInput2Value = localStorage.getItem('width');

circles.forEach(circle => {
    circle.addEventListener('click', openModal);
});

function openModal() {

    // Используйте сохраненные данные по своему усмотрению
    console.log(savedInput1Value);
    console.log(savedInput2Value);     

    const modal = document.querySelector('.modal');
    const penopolist = document.querySelector('.penopolist');
    const penopolistBtn = document.getElementById('penopolist');
    const mineral = document.querySelector('.mineral');
    const mineralBtn = document.getElementById('mineral');

    penopolistBtn.addEventListener('click', () => {
        openModalContent('penopolist', penopolistBtn);
    });

    mineralBtn.addEventListener('click', () => {
        openModalContent('mineral', mineralBtn);
    });

    modal.addEventListener('click', closeModal);

    modal.style.display = 'block';

    // Открытие модалки с контентом (справа которая)
    function openModalContent(content, btn) {
        if (lastModalContent) {
            lastModalContent.style.display = 'none';
        }
        if (lastButton) {
            lastButton.classList.remove('active');
        }

        if (content === 'penopolist') {
            mineral.style.display = 'none';
            penopolist.style.display = 'block';
            lastModalContent = penopolist;
        } else if (content === 'mineral') {
            penopolist.style.display = 'none';
            mineral.style.display = 'block';
            lastModalContent = mineral;
        }

        btn.classList.add('active');
        lastButton = btn;
    }

    // Закрытие обоих модалок
    function closeModal(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            if (lastModalContent) {
                lastModalContent.style.display = 'none';
                lastModalContent = 0;
            }
            if (lastButton) {
                lastButton.classList.remove('active');
                lastButton = 0;
            }
        }
    }
}