<?php
$pageStyles = './../calculator/calculator.css';
require './../Header/Head.php';
?>

<body>
  <?php require './../Header/Header.php'; ?>
  <main>
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
            <div class="circle"></div>
            <div class="line"></div>
            <div class="circle_empty"></div>
          </div>
          <div class="container_choice" id="window">
          <div class="circle"></div>
            <div class="line"></div>
            <div class="circle_empty"></div>
          </div>
          <div class="container_choice" id="wall">
          <div class="circle"></div>
            <div class="line"></div>
            <div class="circle_empty"></div>
          </div>
          <div class="container_choice" id="support">
          <div class="circle"></div>
            <div class="line"></div>
            <div class="circle_empty"></div>
          </div>
          <div class="container_choice" id="foundation">
          <div class="circle"></div>
            <div class="line"></div>
            <div class="circle_empty"></div>
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
      </div>
          <div class="itog-flex">
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
          <h1>Фундамент</h1>
          <button class='modal_btn' id="mineral">Винтовые сваи</button>
          <button class='modal_btn' id="penopolist">Железобетонные сваи</button>

          <!-- Вторая модалка mineral -->
          <div class="win2">
            <div class='mineral'>
              <h1 class="modalZag">Винтовые сваи</h1>
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
            
              <div class="material">
                <div class="contName">
                <h2>Материалы:</h2>
                <ul>
                  <li>Фундамент теплового контура</li>
                  <li>Фундамент крыльца</li>
                  <li>Фундамент террасы</li>
                </ul>
              </div>

              <div class="contConst">
                <li id="fundCost"></li>
                <li>12 938</li>
                <li>7 763</li> 
              </div>  
              
              <div class="Const">
                <li>руб.</li>
                <li>руб.</li>
                <li>руб.</li> 
              </div>
        </div>

              <div class="price">
                <h3 >200 000руб.</h3>
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
  </main>
  <script src="./../calculator/modal.js"></script>
  <script src='math.js'></script>
  <script src='./../main/slider.js'></script>
</body>