<?php
$pageStyles = './../styles/main.css';
require './../Header/Head.php';
?>

<body>
    <?php
    require './../Header/Header.php';
    ?>

    <main>
        <div>
            <div class='picture'>
                <div class="heading">О нашем проекте</div>
                <div class="line_cont">
                    <div class="linechild"></div>
                </div>
                <div class="text">Калькулятор представляет из себя интерфейс для расчёта<br />затрат стоимости дома, исходя из ваших пожеланий </div>
            </div>
            <div>
                <h1 class="title">Калькулятор строительства</h1>
                <div class="maincalc">
                    <div class='home_container'>
                        <img src='../assets/homemini.png' alt='Homemini' class='home'></img>
                    </div>
                    <div class='choice'>
                        <form class='formcalc'>
                            <h2 class='S'>Площадь дома,<span id="demo"></span>м &#178;</h2>
                            <div class="slidecontainer">
                                <input type="range" min="1" max="1000" value="50" class="slider" id="myRange">
                            </div>
                            <select class='select'>
                                <option class='option' disabled>Количество этажей</option>
                                <option class='option'>1</option>
                                <option class='option'>2</option>
                            </select>
                            <button class='continue'>Далее</button>
                        </form>
                    </div>
                </div>
            </div>
            <?php require './../aboutUs/aboutUs.php' ?>
        </div>
    </main>

    <script src="slider.js"></script>
    <script src="./../aboutUs/aboutUs.js"></script>
</body>

</html>