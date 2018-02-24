<?php 
if (!$_SESSION['admin']) {
    header("Location: http://".$_SERVER['HTTP_HOST']."/index.php");
  }
  require_once 'head.php'                 ;  
  require_once 'php/script/addUser.php'   ;
  require_once 'php/script/login.php'     ;
  require_once 'php/script/viewUsers.php' ;

  $addUser       = new addUser      ;
  $login         = new login        ;
  $viewUsers     = new viewUsers    ;

  //метод загрузики нового аватара. Старое фото не удаляеся, просто лежит на сервере.
  $login->newAvatar();
  //обновляем номер телефона, если все ок то сообщение об успш-й смене номера ложим в переменную
  //переменную потом выводим на страницу
  $successfullyFirstMobileNumber = $login->chengeMobileNumber ($_POST['first_number'],$_SESSION['id']);
  $successfullyLastMobileNumber  = $login->chengeMobileNumber2($_POST['last_number'] ,$_SESSION['id']);
  //замена пароля(принимает и сравнивает новый пароль)
  $passwordsAreNotEqual = $login->changePassword($_POST['newPass1'],$_POST['newPass2']);

  $id            = $_SESSION['id']  ;
  $facebook      = trim(htmlspecialchars($_POST['facebook' ]));
  $pinterest     = trim(htmlspecialchars($_POST['pinterest']));
  $vkontakte     = trim(htmlspecialchars($_POST['vk'       ]));
  $skype         = trim(htmlspecialchars($_POST['skype'    ]));
  $twitter       = trim(htmlspecialchars($_POST['twitter'  ]));

  //обновляет ссылку на соц.сеть; Возвращает сообщение, о успешной смене адреса.
  $returnFacebook  = $login->addFacebook($facebook,  $id);
  $returnPinterest = $login->addPinterest($pinterest,$id);
  $returnVk        = $login->addVkontakte($vkontakte,$id);
  $returnSkype     = $login->addSkype($skype,        $id);
  $returnTwitter   = $login->addTwitter($twitter,    $id);

  ///////////////////////////////////////
  //что бы браузер не спришвал отправить форму еще раз, после перезагрузки страницы
  // /**/ if (!empty($_POST)) {
  // /**/     header("location:$_SERVER[PHP_SELF]");
  // /**/  }
  /////////////////////////////////

 ?>
<body>
  <div class="container-fluid">
    <?php require_once 'php/part-page/nav-menu-main.php'  ; ?>
    <div class="row" id="ajax-conteiner">
      <div class="col-lg-12">
        <ul class="nav nav-tabs flex-center mobile-flex-collumn">

        <li class="active">
          <a href="#home" data-toggle="tab">
            <i class="fa fa-user-plus" aria-hidden="true"></i> Добавить сотрудника
          </a>
        </li>

        <li>
          <a href="#profile" data-toggle="tab">
            <i class="fa fa-address-card" aria-hidden="true"></i> Профиль
          </a>
        </li>
        <li>
          <a href="#settingsNumberPhone" data-toggle="tab">
             <i class="fa fa-phone" aria-hidden="true"></i>
            Изменить номер телефона
          </a>
        </li>

        <li>
          <a href="#settingsPassword" data-toggle="tab">
            <i class="fa fa-lock" aria-hidden="true"></i> Изменить пароль
          </a>
        </li>

        <li>
          <a href="#avatar" data-toggle="tab">
            <i class="fa fa-instagram" aria-hidden="true"></i> Изменить аватар
          </a>
        </li>

        <li>
          <a href="#social" data-toggle="tab">
            <i class="fa fa-link" aria-hidden="true"></i> Привязать социальные сети
          </a>
        </li>
      </ul>
        <p></p>
      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane fade active in" id="home">
          <?php $addUser->addUser(); ?>
        </div>
        <div class="tab-pane" id="profile">
          <?php $viewUsers->viewThisUsers(); ?>
        </div>
        <div class="tab-pane fade" id="settingsNumberPhone">
          <div class="col-lg-12">
            <h2 class="text-center">Просто введите новый номер вместо старого и нажмите ok</h2>
            <form class="form-style form-center-collum" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
              <p class="flex-content-space-between">
                <label for="first_number">Ваш личный номер</label>
                <input type="number" class="float-right" id="first_number" name="first_number" value="<?php $login->echoFirstNumber($_SESSION['id']); ?>">
                <button class=" float-right btn btn-success btn-xs no-margin">ok</button>
              </p>
                <p class="text-center">
                  <?php echo $successfullyFirstMobileNumber; ?>
                </p>
              <br>
            </form>
            <form class="form-style form-center-collum" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
              <p class="flex-content-space-between">
                <label for="first_number">Дополнительный номер</label>
                <input type="number" id="last_number" name="last_number" value="<?php $login->echoLastNumber($_SESSION['id']); ?>">
                <button class="float-right no-margin btn btn-success btn-xs">ok</button>
                <p class="text-center">
                  <?php echo $successfullyLastMobileNumber; ?>
                </p>
              </p>
              <br>
            </form>
          </div>
        </div>
        <div class="tab-pane fade" id="settingsPassword">
            <div class="row">
              <div class="col-lg-12">
                <form class="form-style" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" id='changePassword' method='POST' >
                  <input type="password" name="newPass1" placeholder="Введите новый пароль" class="required" required title="" id="newPass1">
                  <p></p>
                  <input type="password" name="newPass2" placeholder="Повторите пароль" title="">
                            <?php echo $passwordsAreNotEqual; ?>
                  <p></p>
                  <button type="submit" class="btn btn-success">Обновить пароль!</button>
                </form>
              </div>
            </div>
        </div>
        <div class="tab-pane fade" id="avatar">
          <form 
                action  ="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                enctype ="multipart/form-data" 
                method  ="POST"
                class   ='form-center-collum'
                >

            <input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
            <input type="file" name="userIMG">
            <p></p>
            <button type="submit" class="btn btn-success">Обновить аватар!</button>
          </form>
        </div>

        <div class="tab-pane fade" id="social">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs flex-center mobile-flex-collumn">

            <li class="active">
              <a href="#facebook" data-toggle="tab">
                <i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook
              </a>
            </li>

            <li>
              <a href="#vkontakte"  data-toggle="tab">
                <i class="fa fa-vk" aria-hidden="true"></i> Vkontakte 
              </a>
            </li>

            <li>
              <a href="#pinterest"  data-toggle="tab">
                <i class="fa fa-pinterest" aria-hidden="true"></i> Pinterest 
              </a>
            </li>

            <li>
              <a href="#skype"      data-toggle="tab">
                <i class="fa fa-skype" aria-hidden="true"></i> Skype
              </a>
            </li>

            <li>
              <a href="#twitter"    data-toggle="tab">
                <i class="fa fa-twitter" aria-hidden="true"></i> Twitter
              </a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="row">
            <div class="tab-content col-lg-10 col-lg-offset-1">
              <div class="tab-pane fade in active" id="facebook">
                <div class="center">
                  <h2 class="text-center"><?php echo $returnFacebook ;?></h2>
                  <p class="text-center">
                    Пожалуста помогите своим сотрудникам добавить Вас в друзья, на Facebook, так вы всегда будите в курсе их новостей, и всегда будете на связи!
                  </p>
                  <p class="text-center" >
                    <b>Просто скопируйте ссылку на главной странице своего аккаунта facebook, и вставте тут!</b>
                  </p>
                </div>
                <div class="row">
                  <p></p>
                  <form 
                    class   = "col-lg-5 col-lg-offset-4 form-style flex-center-column" 
                    action  = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                    method  = "POST">
                    <input 
                      type        = "text" 
                      name        = "facebook" 
                      id          = "facebookInput" 
                      placeholder = "https:// ссылка на вашу страницу" 
                      class       = "width-100">
                    <p></p>
                    <button type="submit" class="btn btn-success" > Добавить</button>
                  </form>
                </div>
              </div>
              <div class="tab-pane fade" id="vkontakte">
                <h2 class="text-center"><?php echo $returnVk;?></h2>
                    <form 
                      class   = "col-lg-5 col-lg-offset-4 form-style flex-center-column" 
                      action  = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                      method  = "POST">
                    <input 
                      type        = "text" 
                      name        = "vk" 
                      id          = "vk" 
                      placeholder = "https:// ссылка на вашу страницу" 
                      class       = "width-100">
                    <p></p>
                    <button type="submit"  class="btn btn-success"> Добавить</button>
                  </form>

              </div>
              <div class="tab-pane fade" id="pinterest">
                <h2 class="text-center"><?php echo $returnPinterest;?></h2>
                <form 
                  action  = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                  method  = "POST"
                  class   = "col-lg-5 col-lg-offset-4 form-style flex-center-column"
                  >
                  <input 
                    type="text" 
                    id="pinterest" 
                    name="pinterest" 
                    placeholder="https:// ссылка на вашу страницу">
                  <p></p>
                  <button type="submit" class="btn btn-success"> Добавить</button>
                </form>
              </div>
              <div class="tab-pane fade" id="skype">
                <h2 class="text-center"><?php echo $returnSkype ?></h2>
                <form 
                  action  = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                  method  = "POST"
                  class   = "col-lg-5 col-lg-offset-4 form-style flex-center-column"
                  >
                  <input 
                    type  = "text" 
                    name  = "skype" 
                    id    = "skype" 
                    placeholder = "Ваш логин">
                  <p></p>
                  <button type="submit" class="btn btn-success"> Добавить</button>
                </form>
              </div>
              <div class="tab-pane fade" id="twitter">
                <h2 class="text-center"><?php echo $returnTwitter ;?></h2>
                <form 
                  action  = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                  method  = "POST"
                  class   = "col-lg-5 col-lg-offset-4 form-style flex-center-column"
                  >
                  <input 
                    type  = "text" 
                    name  = "twitter"  
                    id    = "twitter" 
                    placeholder="https:// ссылка на вашу страницу">
                  <p></p>
                  <button type="submit" class="btn btn-success"> Добавить</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
<?php require_once 'footer.php'                 ; ?>
    	