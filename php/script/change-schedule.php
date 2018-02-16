<?php 
	require_once 'connect_db.php';
	$db = new conectdb;

	class chengeSchedule extends conectdb{
		function __construct(){
					parent::__construct();
				}
		public function scheduleDay($numberDay,$month,$year)
		{	
			$day = 'day'; 
			$day.= $numberDay;
			try {
				$this->query = $this->db->prepare("SELECT $day FROM $month WHERE year = ?");
		    	$this->query->execute(array($year));//отпрaвили запрос

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
		public function chengeDay($numberDay,$value,$month,$year)
		{	
			$day = 'day'; 
			$day.= $numberDay;

			try {
				$query	=	$this->db->prepare("UPDATE $month SET $day=? WHERE year=?"); 	
				$query->execute(array($value, $year));
				return 'изменено!';
			 } catch (Exception $e) {
			 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
                        <br> - сделайте скриншот ошибки
                        <br> - или скопируйте текст ошибки</div>';
			 } 
		}

	}

 ?>