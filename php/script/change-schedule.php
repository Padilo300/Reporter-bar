<?php 
	require_once 'connect_db.php';
	$db = new conectdb;

	class chengeSchedule extends conectdb{
		function __construct(){
					parent::__construct();
				}
		public function chengeDay($numberDay,$month,$year)
		{	
			$day = 'day'; 
			$day.= $numberDay;
			try {
				$this->query = $this->db->prepare("SELECT $day FROM ? WHERE year = ?");
		    	$this->query->execute(array($month,$year));//отпрaвили запрос

		    	//ответ sql ложим в массив 
		    	for ($i=0; $row = $this->query->fetch(); $i++) { 
					$days[] = $row;
				}
				
				//выводим значение 
				echo $days[0][0];
				
			} catch (PDOException $e) {
				echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
	                        <br> - сделайте скриншот ошибки
	                        <br> - или скопируйте текст ошибки</div>';
			}
			
		}

	}

 ?>