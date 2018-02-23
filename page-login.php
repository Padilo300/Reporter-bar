<?php require_once 'head.php'; ?>
<?php require_once 'php/script/login.php'; 
    $login = new login;
?>
</style>
<body class="login-page" style="height: 100vh; min-height: 100vh;">
  <div class="container-fluid">
    <div class="row" id="ajax-conteiner">
    	<div class="col-lg-12">
            <div class="wrapp-absolute col-lg-7 col-xs-12" >
            <ul class="nav nav-tabs">
              <li class="active"><a href="#input"     data-toggle="tab">Вход</a></li>
              <li><a href="#info"  data-toggle="tab">О проекте       </a></li>
              <li><a href="#registr" data-toggle="tab">Регистрация     </a></li>
            </ul>

            <div class="col-lg-12">
                                <!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active fade in col-lg-5 col-xs-12" id="input">
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" id="form1" method="POST" class="form hidden-sm hidden-md hidden-xs" autocomplete="off">
        <br>
          <?php
        //Если validForm вернет false, formError выведет ошибку.
         $login->formError($login->validForm($_POST['email'],$_POST['password'])); ?>
        <input type="text" name="email" placeholder="введите email" value="" class="form__input center-block"
        style="
              -webkit-text-fill-color: #ссс;
              -webkit-box-shadow: 0 0 0px 1000px transparent inset;
              transition: width 0.3s, background-color 5000s ease-in-out 1s;
              background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(0,174,255,0.04) 50%,rgba(255,255,255,0) 51%,rgba(0,174,255,0.03) 100%);  ">

        <input  type="password" name="password"  placeholder="введите пароль" value="" class="form__input center-block" style="
                      -webkit-text-fill-color: #ссс;
                      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
                      transition: width 0.3s, background-color 5000s ease-in-out 0s;
                      background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(0,174,255,0.04) 50%,rgba(255,255,255,0) 51%,rgba(0,174,255,0.03) 100%);  ">
        <a href="#" type="sumbit" title="Нажмите что-бы войти!" 
            onclick="document.getElementById('form1').submit();" return false; 
            class="center-block  animated-button sandy-three">Войти</a>
        
    </form>
     <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" id="form2" method="POST" class="form hidden-lg" autocomplete="off">
        <br>
          <?php
        //Если validForm вернет false, formError выведет ошибку.
         $login->formError($login->validForm($_POST['email'],$_POST['password'])); ?>
        <input type="text" name="email" placeholder="введите email" value="" class="form__input center-block">

        <input  type="password" name="password" placeholder="введите пароль" value="" class="form__input center-block">
        <a href="#" type="sumbit" 
            onclick="document.getElementById('form2').submit();" return false; 
            class="center-block  animated-button sandy-three">Войти</a>
        
    </form>
  </div>
  <div class="tab-pane col-lg-6 fade col-xs-12" id="info">
    <p class="text-justify">
      &#160;Этот проект создан специально для сотрудников бара, семьи заведений "Репортер", "Coast", и "Artist", для удобства, и упрощения обмена информацией.<br>&#160;Теперь Вы можете оперативно и легко найти замену на рабочую смену когда, Вам это нужно, просто онлайн посмотрев графики других баров. Вы можете узнать номер телефона сотрудника всего за минуту, воспользовавшись поиском в базе сотрудников. Для бар-менеджера автоматизирована ручная работа создания графика, и сбор информации о выходе на работу, также любой сотрудник может скачать любой график, на любой месяц в формате "XLS", или распечатать всего в один клик.</p>
      
  </div>
  <div class="tab-pane fade" id="registr">
    <p>
      Если Вы желаете стать частью нашего проекта - сообщите о этом своему бар-менеджеру.
    </p>
  </div>
</div>            
</div>
</div>
<div class="segmenter" style="background-image: url(img/coast.jpg)"></div>
</div>
<a href="#" class="btn btn--trigger btn--hidden hidden-sm hidden-md hidden-xs shake-slow"><img width="100px" src="img/whiskey.png" alt="Джэк Дениэлс" title="Выпей меня!"></a>
<?php require_once 'footer.php'; ?>

<script>
(function() {
    var headline = document.querySelector('.trigger-headline'),
        trigger = document.querySelector('.btn--trigger'),
        segmenter = new Segmenter(document.querySelector('.segmenter'), {
            pieces: 8,
            positions: [
                {top: 0, left: 0, width: 100, height: 100},
                {top: 0, left: 0, width: 100, height: 100},
                {top: 0, left: 0, width: 100, height: 100},
                {top: 0, left: 0, width: 100, height: 100},
                {top: 0, left: 0, width: 100, height: 100},
                {top: 0, left: 0, width: 100, height: 100},
                {top: 0, left: 0, width: 100, height: 100},
                {top: 0, left: 0, width: 100, height: 100}
            ],
            shadows: false,
            parallax: true,
            parallaxMovement: {min: 10, max: 30},
            animation: {
                duration: 2500,
                easing: 'easeOutExpo',
                delay: 0,
                opacity: .1,
                translateZ: {min: 10, max: 25}
            },
            onReady: function() {
                trigger.classList.remove('btn--hidden');
                trigger.addEventListener('click', function() {
                    segmenter.animate();
                    headline.classList.remove('trigger-headline--hidden');
                    this.classList.add('btn--hidden');
                });
            }
        });
})();
</script>
