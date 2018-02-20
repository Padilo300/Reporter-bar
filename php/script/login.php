<?php 
require_once 'connect_db.php';
			$db =	new conectdb;
			/**
			* 
			*/
			class login extends conectdb
			{
				
				function __construct(){
					parent::__construct();
				}
				//авторизация на сайте
				//тут в session попадает информация о пользователе
				public function validForm($get_email, $get_password)
				{
					if (!empty($get_email) && !empty($get_password) ) 
					{
						$query		=	$this->db->prepare("SELECT * FROM users WHERE email = ?");
						try 
						{
							$query->execute(array($get_email));
							$row 		= $query->fetch();
							$password 	= $row['password'];
							$first_name	= $row['first_name'];

							if (password_verify($get_password, $password)) {
								$_SESSION['nameUser'] 	= 	$first_name			;
								$_SESSION['first_name']	=	$row['first_name'] 	;
								$_SESSION['last_name']	=	$row['last_name']	;
								$_SESSION['admin']		=	$row['admin']		;
								$_SESSION['id']			=	$row['id']			;
						 	    header("Location: index.php");
							} else {
							    return false;
							}
						} catch (PDOException $e) {
							 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
                        <br> - сделайте скриншот ошибки
                        <br> - или скопируйте текст ошибки</div>';
									}	
					}else{
						// echo "<p class='text-center'>Пожалуста авторизуйтесь!</p>";
						return true;
					}

				}
				public function formError($false)
				{
					if (!$false) {
						echo "<p class='text-center'>Email или пароль не верный!</p>";
					}
					
				}

				public function changePassword($newPass1,$newPass2)
				{
					if (!empty($_POST['newPass1']) && !empty($_POST['newPass2']) ) {
							//проверяем одинаковы-ли пароли
						if (strcmp($_POST['newPass1'], $_POST['newPass2']) == 0) {
							//создаем хеш пароля
							$newPasswod = password_hash($_POST['newPass1'],PASSWORD_DEFAULT);
							$id 		= $_SESSION['id'];
							try {
								$query	=	$this->db->prepare("UPDATE users SET password = ?  WHERE id = ?"); 	
								
								$query->execute(array($newPasswod, $id));
								echo "Пароль успешно изменен! Вот его хеш: $newPasswod";
							 } catch (Exception $e) {
							 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
				                        <br> - сделайте скриншот ошибки
				                        <br> - или скопируйте текст ошибки</div>';
							 } 
							$query->execute(array($get_email));
						}else{
							$passwordsAreNotEqual = 'Введенные пароли не совпадают!';
							return $passwordsAreNotEqual;
						}
					}
					
				}

				public function newAvatar()
				{
					$path 		= 'img/foto-users/';
				    $types 		= array('image/gif', 'image/png', 'image/jpeg', 'image/jpg', 'image/JPG');
  				    $size 		= 1024000;
  				    $ext 		= array_pop(explode('.',$_FILES['userIMG']['name'])); // расширение
					$fileName 	= time().'.'.$ext; // новое имя с расширением
  				    $userID 	= $_SESSION['id'];
  				    $querySTR	= "UPDATE users SET img_src=$fileName WHERE id=$userID";

				    if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_FILES)){
				    // Проверяем тип файла

				    if (!in_array($_FILES['userIMG']['type'], $types)){
				      die('Запрещённый тип файла. <a href="http://reporter.com/page-editUser.php">Попробовать другой файл?</a>');
				    }

				    // Проверяем размер файла
				    if ($_FILES['userIMG']['size'] > $size){
				      die('Слишком большой размер файла. <a href="http://reporter.com/page-editUser.php">Попробовать другой файл?</a>');
				    }

				    //копируем файл в нужную папку
				     if (!@copy($_FILES['userIMG']['tmp_name'], $path . $fileName)){
				      echo 'Что-то пошло не так';
				     }else{
				     	try {
								$query	=	$this->db->prepare("UPDATE users SET img_src=? WHERE id=?"); 	
								$query->execute(array($fileName, $userID));
							 } catch (Exception $e) {
							 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
				                        <br> - сделайте скриншот ошибки
				                        <br> - или скопируйте текст ошибки</div>';
							 } 
				      echo 'Загрузка удачна';
				      }
				  }
				}

				public function addFacebook($facebook,$id)
				{
					if (
						$_SERVER['REQUEST_METHOD'] === "POST" && (strlen($facebook) > 0)) {
						try {
								$query	=	$this->db->prepare("UPDATE users SET fecebook=? WHERE id=?"); 	
								$query->execute(array($facebook, $id));
								return "Адресс fecebook успешно изменен!";
							 } catch (Exception $e) {
							 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
				                        <br> - сделайте скриншот ошибки
				                        <br> - или скопируйте текст ошибки</div>';
							 } 
					}
				}	
				public function addVkontakte($vkontakte,$id)
				{
					if ($_SERVER['REQUEST_METHOD'] === "POST" && (strlen($vkontakte) > 0)) {
						try {
								$query	=	$this->db->prepare("UPDATE users SET vkontakte=? WHERE id=?"); 	
								$query->execute(array($vkontakte, $id));
								return "Адресс vkontakte успешно изменен!";
							 } catch (Exception $e) {
							 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
				                        <br> - сделайте скриншот ошибки
				                        <br> - или скопируйте текст ошибки</div>';
							 } 
					}
				}			
				public function addPinterest($pinterest,$id)
				{
					if ($_SERVER['REQUEST_METHOD'] === "POST" && (strlen($pinterest) > 0)) {
						try {
								$query	=	$this->db->prepare("UPDATE users SET pinterest=? WHERE id=?"); 	
								$query->execute(array($pinterest, $id));
								return "Адресс Pinterest успешно изменен!";
							 } catch (Exception $e) {
							 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
				                        <br> - сделайте скриншот ошибки
				                        <br> - или скопируйте текст ошибки</div>';
							 } 
					}
				}
				public function addSkype($skype,$id)
				{
					if ($_SERVER['REQUEST_METHOD'] === "POST" && (strlen($skype) > 0)) {
						try {
								$query	=	$this->db->prepare("UPDATE users SET skype=? WHERE id=?"); 	
								$query->execute(array($skype, $id));
								return "Логин Skype успешно изменен!";
							 } catch (Exception $e) {
							 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
				                        <br> - сделайте скриншот ошибки
				                        <br> - или скопируйте текст ошибки</div>';
							 } 
					}
				}

				public function addTwitter($twitter,$id)
				{
					if ($_SERVER['REQUEST_METHOD'] === "POST" && (strlen($twitter) > 0)) {
						try {
								$query	=	$this->db->prepare("UPDATE users SET twitter=? WHERE id=?"); 	
								$query->execute(array($twitter, $id));
								return "Адресс twitter успешно изменен!";
							 } catch (Exception $e) {
							 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
				                        <br> - сделайте скриншот ошибки
				                        <br> - или скопируйте текст ошибки</div>';
							 } 
					}
				}

			}
			?>			
