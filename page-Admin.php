<?php 
  require_once 'head.php';  
  require_once 'php/script/addUser.php';
  require_once 'php/script/login.php';
  require_once 'php/script/viewUsers.php';
  $addUser  = new addUser;
  $login         = new login;
  $viewUsers     = new viewUsers;
  $login->newAvatar();
  $passwordsAreNotEqual = $login->changePassword($_POST['newPass1'],$_POST['newPass2']);

  ///////////////////////////////////////
  //что бы браузер не спришвал отправить форму еще раз, после перезагрузки страницы
  /**/ if (!empty($_POST)) {
  /**/     header("location:$_SERVER[PHP_SELF]");
  /**/  }
  /////////////////////////////////

    if (isset($_SESSION['count'])) {
      $_SESSION['count'] = $_SESSION['count'] +1;
    }else{
      $_SESSION['count'] = 1;
    }

 ?>
<body>
  <div class="container-fluid">
    <?php require_once 'php/part-page/nav-menu-main.php'  ; ?>
    <div class="row" id="ajax-conteiner">
      <div class="col-lg-12">
        <ul class="nav nav-tabs">
        <li class="active"><a href="#home" data-toggle="tab">Добавить сотрудника</a></li>
        <li><a href="#profile" data-toggle="tab">Профиль</a></li>
        <li><a href="#settingsPassword" data-toggle="tab">Изменить пароль</a></li>
        <li><a href="#avatar" data-toggle="tab">Сменить аватар</a></li>
      </ul>
        <br>
      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane active fade in" id="home">
          <?php $addUser->addUser(); ?>
        </div>
        <div class="tab-pane" id="profile">
          <?php $viewUsers->viewThisUsers(); ?>
        </div>
        <div class="tab-pane" id="settingsPassword">
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
        <div class="tab-pane" id="avatar">
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
      </div>
      </div>
<?php require_once 'footer.php'                 ; ?>
    	