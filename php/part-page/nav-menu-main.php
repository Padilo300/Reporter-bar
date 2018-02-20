<?php 
  if (!array_key_exists('nameUser', $_SESSION ) ) {
    header("Location: http://".$_SERVER['HTTP_HOST']."/page-login.php");
  }
 ?>
<nav class="navbar navbar-default" role="navigation">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
              <!-- <a class="navbar-brand" href="#">Brand</a> -->
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav nav-tabs myNav">
                <li><a href="#reporter" data-toggle="tab">Репортер</a></li>
                <li><a href="#artist" id="hrefArtist" data-toggle="tab" >Артист</a></li>
                <!-- <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Репортер</a></li>
                    <li><a href="#">Артист</a></li>
                    <li><a href="#">Что-то еще</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Отдельная ссылка</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Еще одна отдельная ссылка</a></li>
                  </ul>
                </li> -->
                <li><a href="#coast">Coast</a></li>
                <li class="subbuttons">
                  <a  href="http://<?php echo $_SERVER['HTTP_HOST']; ?>/page-info.php">Информация</a></li>
                  <li class="subbuttons"><a   href="page-db_people.php">База сотрудников</a></li>
                  <!-- <li class="subbuttons"><a   href="#">Для новичков</a></li> -->
                  <!-- <li class="subbuttons"><a   href="#">Новости<sup style='color: green; font-weight: bold;'>+3</sup></a></li> -->
              </ul>
              <!-- <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Отправить</button>
              </form> -->
              <ul class="nav navbar-nav navbar-right">
                <!-- <li><a href="#">Ссылка</a></li> -->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-cog fa-spin" aria-hidden="true"></i> Eще <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                    <?php 
                      if ($_SESSION['admin'] == 'true') {
                       echo "<li><a href='page-Admin.php'><i class='fa fa-home' aria-hidden='true'></i> Кабинет Администратора</a></li>";  
                      }else{
                        echo "<li><a href='http://$_SERVER[HTTP_HOST]/page-editUser.php'>Моя анкета</a></li>";
                      }
                     ?>
                    <li class="divider"></li>
                    <li>
                      <a href="page-exit.php">
                        <i class="fa fa-power-off" aria-hidden="true"></i> 
                        Выход
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
          <?php echo "Добрый вечер " . $_SESSION['first_name'] ?>
        </nav>
