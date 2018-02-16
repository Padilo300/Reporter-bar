<?php 

  require_once 'head.php'                 ;  
  require_once 'php/script/addUser.php'   ;
  require_once 'php/script/login.php'     ;
  require_once 'php/script/viewUsers.php' ;

  $addUser       = new addUser      ;
  $login         = new login        ;
  $viewUsers     = new viewUsers    ;

  //метод загрузики нового аватара. Старое фото не удаляеся, просто лежит на сервере.
  $login->newAvatar();
  

  //замена пароля(принимает и сравнивает новый пароль)
  $passwordsAreNotEqual = $login->changePassword($_POST['newPass1'],$_POST['newPass2']);

  $id            = $_SESSION['id']  ;
  $facebook      = htmlspecialchars($_POST['facebook' ]);
  $pinterest     = htmlspecialchars($_POST['pinterest']);
  $vkontakte     = htmlspecialchars($_POST['vk'       ]);
  $skype         = htmlspecialchars($_POST['skype'    ]);
  $twitter       = htmlspecialchars($_POST['twitter'  ]);

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
        <ul class="nav nav-tabs flex-center">

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
        <br>
      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane fade active in" id="home">
          <?php $addUser->addUser(); ?>
        </div>
        <div class="tab-pane" id="profile">
          <?php $viewUsers->viewThisUsers(); ?>
        </div>
        <div class="tab-pane fade" id="settingsPassword">
            <div class="row">
              <div class="col-lg-12">
                <form 
                    action=" <?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>"
                    id='changePassword'
                    method='POST'
                        >
                  <input type="password" name="newPass1" placeholder="Введите новый пароль" class="required" required title="" id="newPass1">
                  <br>
                  <input type="password" name="newPass2" placeholder="Повторите пароль" title="">
                            <?php echo $passwordsAreNotEqual; ?>
                  <br>
                  <input type="submit">
                </form>
              </div>
            </div>
        </div>
        <div class="tab-pane fade" id="avatar">
          <form 
                action  ="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                enctype ="multipart/form-data" 
                method  ="POST"
                >

            <input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
            <input type="file" name="userIMG">
            <br>
            <input type="submit" >
          </form>
        </div>

        <div class="tab-pane fade" id="social">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs flex-center">

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
                  <br>
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
                    <br>
                    <button type="submit" > Добавить</button>
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
                    <br>
                    <button type="submit" > Добавить</button>
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
                  <br>
                  <button type="submit" > Добавить</button>
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
                  <br>
                  <button type="submit" > Добавить</button>
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
                  <br>
                  <button type="submit" > Добавить</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
<?php require_once 'footer.php'                 ; ?>
    	