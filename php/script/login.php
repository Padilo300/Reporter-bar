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

				public function validForm($get_email, $get_password)
				{
					if (!empty($get_email) && !empty($get_password) ) 
					{
						$query		=	$this->db->prepare("SELECT first_name,password FROM users WHERE email = ?");
						try 
						{
							$query->execute(array($get_email));
							$row 		= $query->fetch();
							$password 	= $row['password'];
							$userName	= $row['first_name'];

							if (!empty($get_password) && !empty($userName)) {
								# code...
							}
							if (password_verify($get_password, $password)) {
								$_SESSION['nameUser']= $userName;
						 	    header("Location: index.php");
							} else {
							    return false;
							}
						} catch (PDOException $e) {
							echo $e;
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
			}
			?>			
