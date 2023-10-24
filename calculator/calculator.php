<?php
$pageStyles = './../calculator/calculator.css';
require './../Header/Head.php';
?>

<body>
  <?php require './../Header/Header.php'; ?>
  <main>
    <div>
      <div class="container_home">
        <div class="home">
          <!-- {/* ЧАСТИ ДОМА */} -->
          <div class="roof">
            <img src="./pictures/roof.png" alt="roof" />
          </div>
          <div class="floor1">
            <img src="./pictures/floor1.png" alt="floor1" />
          </div>
          <div class="foundation">
            <img src="./pictures/foundation.png" alt="foundation" />
          </div>
          <!-- {/* ЛИНИИ ВЫБОРА */} -->
          <div class="container_choice" id="attic">
            <button class="circle_empty"></button>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
          <div class="container_choice" id="window">
            <div class="circle_empty"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
          <div class="container_choice" id="wall">
            <div class="circle_empty"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
          <div class="container_choice" id="support">
            <div class="circle_empty"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
          <div class="container_choice" id="foundation">
            <div class="circle_empty"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
          <div class="container_choice" id="chimney">
            <div class="circle_empty"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
          <div class="container_choice" id="floor">
            <div class="circle_empty"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
          <div class="container_choice" id="outerwall">
            <div class="circle_empty"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
        </div>
        <div class="container">
          <p class="totalPrice">Стоимость составляющих</p>
          <p class="total-price">
        <span class="number">0</span> 
        <span class="currency">руб</span>
    </p>

          <button class="button">Итоговая цена</button>
        </div>
      </div>

      <div class='modal'>
        <div class="modal_main">
          <h1>Утипление фасада дома</h1>
          <button class='modal_btn' id="mineral">Минеральная вата</button>
          <button class='modal_btn' id="penopolist">Экструзионный пенополист</button>

          <!-- Вторая модалка mineral -->
          <div class="win2">
            <div class='mineral'>
              <p class='modalDescr'>Минеральная (базальовая или кварцевая) <br />
                вата - материал сделанный из натурального...</p>
              <div class="plusi">
                <img src="img/list.png" />
                <h3>компоненты</h3>
              </div>
              <div class="plusi">
                <img src="img/fire.png" />
                <h3>Негорючесть</h3>
              </div>
              <div class="plusi">
                <img src="img/clock.png" />
                <h3 class='clock_text'>Недолговечность</h3>
              </div>

              <div class="price">
                <h3>200 000руб.</h3>
                <button class="modal_btn">Добавить</button>
              </div>
            </div>
          </div>

          <!-- Вторая модалка пенополист -->
          <div class="win2">
            <div class='penopolist'>
              <p class='modalDescr'>Пенополист...<br />
                пепнополист - материал сделанный из натурального...</p>
              <div class="plusi">
                <img src="img/list.png" />
                <h3>компоненты</h3>
              </div>
              <div class="plusi">
                <img src="img/fire.png" />
                <h3>Негорючесть</h3>
              </div>
              <div class="plusi">
                <img src="img/clock.png" />
                <h3 class='clock_text'>Недолговечность</h3>
              </div>

              <div class="price">
                <h3>200 000руб.</h3>
                <button class="modal_btn">Добавить</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
  <script src="./../calculator/modal.js"></script>
</body>