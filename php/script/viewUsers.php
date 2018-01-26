<?php 
require_once 'connect_db.php';
/**
* 
*/
class viewUsers extends conectdb{
	
	public $querySTR 	=	'';
	public $query 		=	'';
	public $params 		=	array();


	public function __construct(){
	parent::__construct();
	}

	public function viewUsers(){
		try {
			//строка запроса SQL
			$this->querySTR 	=	'SELECT * FROM users';
			//подготовить запрос SQL 
			$this->query = $this->db->prepare($this->querySTR);
			//отправить запрос
			$this->query->execute($this->params);
			for ($i=0; $row = $this->query->fetch(); $i++) { 
				$users[] = $row;
			}
			for ($i=0,$num_dishes=count($users);/*кол-во элементов в массиве*/
			 	 $i < $num_dishes;
			 	 $i++) 
			{ 
				// echo $users[$i];
 			}
 			require_once 'cart_user.php';
		} catch (PDOException $e) {
			  echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
                        <br> - сделайте скриншот ошибки
                        <br> - или скопируйте текст ошибки</div>';
		}
	}
	public function imgSRC($adress){
		$SRC = 'http://'.$_SERVER['SERVER_NAME'].'/img/foto-users/'.$adress;
		echo $SRC;
	}

	
}
 ?>