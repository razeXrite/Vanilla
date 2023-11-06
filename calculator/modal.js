const circles = document.querySelectorAll('.circle');
let lastModalContent = 0;
let lastButton = 0;

circles.forEach(circle => {
    circle.addEventListener('click', openModal);
});

function openModal(e) {
    //id elementa сверху
    const parentId = e.target.parentNode.id;

    if (parentId === 'foundation') {
        const foundationModal = document.querySelector('.modalFoundation');
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

        foundationModal.addEventListener('click', closeModal);

        foundationModal.style.display = 'block';

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
            if (e.target === foundationModal) {
                foundationModal.style.display = 'none';
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

    if (parentId === 'wall') {
        const wallModal = document.querySelector('.modalWall');

        const bigWall = document.querySelector('.bigWall');
        const smallWall = document.querySelector('.smallWall');

        const smallWallBtn = document.getElementById('smallWall');
        const bigWallBtn = document.getElementById('bigWall');

        smallWallBtn.addEventListener('click', () => {
            openModalContent('smallWall', smallWallBtn);
        });

        bigWallBtn.addEventListener('click', () => {
            openModalContent('bigWall', bigWallBtn);
        });

        wallModal.addEventListener('click', closeModal);

        wallModal.style.display = 'block';

        // Открытие модалки с контентом (справа которая)
        function openModalContent(content, btn) {
            if (lastModalContent) {
                lastModalContent.style.display = 'none';
            }
            if (lastButton) {
                lastButton.classList.remove('active');
            }

            if (content === 'smallWall') {
                bigWall.style.display = 'none';
                smallWall.style.display = 'block';
                lastModalContent = smallWall;
            } else if (content === 'bigWall') {
                smallWall.style.display = 'none';
                bigWall.style.display = 'block';
                lastModalContent = bigWall;
            }

            btn.classList.add('active');
            lastButton = btn;
        }

        // Закрытие обоих модалок
        function closeModal(e) {
            if (e.target === wallModal) {
                wallModal.style.display = 'none';
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
    // МОДАЛКА КРЫШИ
    if (parentId === 'floor') {
        const floorModal = document.querySelector('.modalFloor');
        const flor = document.querySelector('.flor');
        const florBtn = document.getElementById('flor');
      
        florBtn.addEventListener('click', () => {
          openModalContent('flor', florBtn);
        });
      
        floorModal.addEventListener('click', closeModal);
      
        floorModal.style.display = 'block';
      
        function openModalContent(content, btn) {
          if (lastModalContent) {
            lastModalContent.style.display = 'none';
          }
          if (lastButton) {
            lastButton.classList.remove('active');
          }
      
          if (content === 'flor') {
            flor.style.display = 'block';
            lastModalContent = flor;
          }
      
          btn.classList.add('active');
          lastButton = btn;
        }
      
        function closeModal(event) {
          const clickedElement = event.target;
          if (clickedElement.classList.contains('modalFloor')) {
            floorModal.style.display = 'none';
            flor.style.display = 'none';
          }
        }
      }

}

