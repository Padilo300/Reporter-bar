<?php 
  require_once 'head.php';
  require_once 'php/script/viewUsers.php';
  require_once 'php/script/connect_db.php';

  if (isset($_SESSION['count'])) {
    $_SESSION['count'] = $_SESSION['count'] +1;
  }else{
    $_SESSION['count'] = 1;
  }
  $viewUsers = new viewUsers;  
 ?>
<body>
  <div class="container-fluid">
    <?php require_once 'php/part-page/nav-menu-main.php'  ; ?>
    <div class="row" id="ajax-conteiner">
      <?php
      $viewUsers->viewUsers();
      ?>

      </div><!--row-->
    </div><!--conteiner fluid-->
<?php require_once 'footer.php'; ?>