<?php require './Header.php'; ?>
<body>
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
                        <img src='#' alt='Homemini' class='home'></img>
                    </div>
                    <div class='choice'>
                        <form class='formcalc'>
                            <center>
                                <Slider />
                                <select class='select'>
                                    <option class='option' disabled>Количество этажей</option>
                                    <option class='option'>1</option>
                                    <option class='option'>2</option>
                                </select>
                                <button class='continue'>Далее</button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
            <?php require './aboutUs/aboutUs.php' ?>
        </div>
    </main>

 
    <script src="./aboutUs/aboutUs.js"></script>
</body>

</html>