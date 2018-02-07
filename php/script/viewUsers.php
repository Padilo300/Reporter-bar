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
			
 			require_once 'cart_user.php';
		} catch (PDOException $e) {
			  echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
                        <br> - сделайте скриншот ошибки
                        <br> - или скопируйте текст ошибки</div>';
		}
	}

	public function viewThisUsers(){
		try {
			//строка запроса SQL
			$this->querySTR 	=	'SELECT * FROM users WHERE id = ?';
			//подготовить запрос SQL 
			$this->query = $this->db->prepare($this->querySTR);
			//отправить запрос
			$this->query->execute(array($_SESSION['id']));
			for ($i=0; $row = $this->query->fetch(); $i++) { 
				$users[] = $row;
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

	public function calculate_age($birthday) {
      $birthday_timestamp = strtotime($birthday);
      $age = date('Y') - date('Y', $birthday_timestamp);
      if (date('md', $birthday_timestamp) > date('md')) {
        $age--;
      }
      return $age;
    }

	public function delete(){
	  $id = null;
	  if (!empty($_GET['delete'])) {
	    $id = $_GET['delete'];
	  }
	    if (!empty($id)) {
	    	$this->params[] = $id;
	    	$this->query = $this->db->prepare('DELETE FROM users WHERE id = ?');
	    	$this->query->execute($this->params);
	    }
	}

	public function userNameCafe($point,$workPoint)
	{
		try {
			$this->query = $this->db->prepare("SELECT * FROM users WHERE $point = ?");
	    	$this->query->execute(array($workPoint));//отпрвили запрос
			$workPoint = null;
		} catch (PDOException $e) {
			echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
                        <br> - сделайте скриншот ошибки
                        <br> - или скопируйте текст ошибки</div>';
		}
    	for ($i=0; $row = $this->query->fetch(); $i++) { 
				$users[] = $row;
			}	
     	echo $users[0]['last_name'].' '.$users[0]['first_name'];
	}
}
 ?>