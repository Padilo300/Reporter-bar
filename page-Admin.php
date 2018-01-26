<?php 
  require_once 'head.php';  
  require_once 'php/script/addUser.php';
  $addUser  = new addUser;

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
        <li><a href="#messages" data-toggle="tab">Сообщения</a></li>
        <li><a href="#settings" data-toggle="tab">Настройки</a></li>
      </ul>
        <br>
      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane active fade in" id="home">
          <?php $addUser->addUser(); ?>
        </div>
        <div class="tab-pane" id="profile">...</div>
        <div class="tab-pane" id="messages">...</div>
        <div class="tab-pane" id="settings">...</div>
      </div>
      </div>
<?php require_once 'footer.php'                 ; ?>
    	