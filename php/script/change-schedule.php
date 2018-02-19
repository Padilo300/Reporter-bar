<?php 
	require_once 'connect_db.php';
	$db = new conectdb;

	class chengeSchedule extends conectdb{
		function __construct(){
					parent::__construct();
				}
		public function scheduleDay($month,$year,$bar,$userNumber)
		{	
			$day = 'day'; 
			$day.= $numberDay;
			try {
				$this->query = $this->db->prepare("SELECT * FROM $month WHERE year = ? AND bar = ? AND userNumber = ?");
		    	$this->query->execute(array($year,$bar,$userNumber));//отпрa+вили запрос

		    	//ответ sql ложим в массив 
		    	for ($i=0; $row = $this->query->fetch(); $i++) { 
					$days[] = $row;
				}

				//из многомерного массива делаем простой массив
				for ($i=4; $i < 35 ; $i++) { 
					$arr[] = $days[0][$i];
				}

				//преобразуем в json и дальше отдадим на клиент
				return json_encode($arr);
				
			} catch (PDOException $e) {
				echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
	                        <br> - сделайте скриншот ошибки
	                        <br> - или скопируйте текст ошибки</div>';
			}
			
		}
		public function chengeDay($numberDay,$value,$month,$year,$user)
		{	
			$day = 'day'; 
			$day.= $numberDay;

			try {
				$query	=	$this->db->prepare("UPDATE $month SET $day=? WHERE year=? AND userNumber=?"); 	
				$query->execute(array($value, $year,$user));
				return 'изменено!';
			 } catch (Exception $e) {
			 	 echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
                        <br> - сделайте скриншот ошибки
                        <br> - или скопируйте текст ошибки</div>';
			 } 
		}
		public function prinGridFactWork()
		{	
			$month 			= 	'january'	;
			$year 			=	2018		;
			$bar 			=	'rep-cafe'	;
			$a 				=	1;
			try {
				$this->query = $this->db->prepare("SELECT * FROM $month WHERE year = ? AND bar = ? AND userNumber = '1'");
		    	$this->query->execute(array($year,$bar));//отпрa+вили запрос

		    	//ответ sql ложим в массив 
		    	for ($i=0; $row = $this->query->fetch(); $i++) { 
					$days[] = $row;
				}
				
				//печатаем секу графика
				//$i это элементы массива; $a это число календаря
				for ($i=4, $a=1; $i < 35; $i++,$a++) { 

					if ('false' === $days[0][$i]) {
						print "<td class='table-schedule_border1 dayGrid' data-day='".$a."'></td>";
					}elseif ('true' === $days[0][$i]) {
						print "<td class='table-schedule_border1 dayGrid black' bgcolor='#000' data-day='".$a."'></td>";
					}
					
				}

				
			} catch (PDOException $e) {
				echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
	                        <br> - сделайте скриншот ошибки
	                        <br> - или скопируйте текст ошибки</div>';
			}
		}

	}

 ?>