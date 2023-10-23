const circles = document.querySelectorAll('.circle');

circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        openModal();
    })
})


function openModal(e) {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';

    const leftModal = document.querySelector('.modal_main')
    const rightModal = document.querySelector('.win2')

    const penopolist = document.querySelector('.penopolist')
    const penopolistBtn = document.getElementById('penopolist');

    const mineral = document.querySelector('.mineral')
    const mineralBtn = document.getElementById('mineral');

    // Открытие двух разных модалок
    penopolistBtn.addEventListener('click', () => {
        openPenopolistModal();
        penopolistBtn.classList.add('active');
        mineralBtn.classList.remove('active');
    });

    mineralBtn.addEventListener('click', () => {
        openMineralModal()
        mineralBtn.classList.add('active');
        penopolistBtn.classList.remove('active');
    });

    function openPenopolistModal() {
        mineral.style.display = 'none';
        penopolist.style.display = 'block';
    }

    function openMineralModal() {
        penopolist.style.display = 'none';
        mineral.style.display = 'block';
    }


    // Закрытие модалки 
    modal.addEventListener('click', (e) => {
        closeModal(e);
    })

    function closeModal(e) {
        if (e.target !== rightModal && e.target !== leftModal && !leftModal.contains(e.target)) {
            modal.style.display = 'none';
            mineral.style.display = 'none';
            penopolist.style.display = 'none';
            mineralBtn.classList.remove('active')
            penopolistBtn.classList.remove('active')
        }
    }
}

