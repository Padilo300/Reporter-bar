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
						$query		=	$this->db->prepare("SELECT * FROM users WHERE email = ?");
						try 
						{
							$query->execute(array($get_email));
							$row 		= $query->fetch();
							$password 	= $row['password'];
							$first_name	= $row['first_name'];

							if (!empty($get_password) && !empty($first_name)) {
								# code...
							}
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
