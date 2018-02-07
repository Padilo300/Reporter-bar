
<?php 
	require_once 'head.php'; 
	require_once 'php/script/login.php';
  require_once 'php/script/viewUsers.php';
	$login 	       = new login;
  $viewUsers     = new viewUsers;
  $login->newAvatar();
	$passwordsAreNotEqual = $login->changePassword($_POST['newPass1'],$_POST['newPass2']);

  ///////////////////////////////////
  //  что-бы браузер не спришвал отправить форму еще раз, после перезагрузки страницы
  // /**/ if (!empty($_POST)) {
  // /**/     header("location:$_SERVER[PHP_SELF]");
  // /**/  }
  ///////////////////////////////
 
	?>
<body>
  <div class="container-fluid">
    <?php require_once 'php/part-page/nav-menu-main.php'  ; ?>
    <div class="row" id="ajax-conteiner">
    	<div class="col-lg-12">
        <ul class="nav nav-tabs">
        <li><a href="#home" data-toggle="tab">Моя анкета</a></li>
        <li><a href="#profile" data-toggle="tab">Профиль</a></li>
        <li class="active"><a href="#avatar" data-toggle="tab">Изменить аватар</a></li>
        <li><a href="#settingsPassword" data-toggle="tab">Изменить пароль</a></li>
      </ul>
        <br>
      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane " id="home">
            <?php $viewUsers->viewThisUsers(); ?>
        </div>
        <div class="tab-pane" id="profile">...</div>
        <div class="tab-pane active fade in" id="avatar">
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
      </div>
      </div>
<?php require_once 'footer.php'; ?>