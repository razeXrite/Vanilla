const circles = document.querySelectorAll('.circle');
let lastModalContent = 0;
let lastButton = 0;

circles.forEach(circle => {
    circle.addEventListener('click', openModal);
});

function openModal() {
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