<?php 
	require_once 'connect_db.php';
	$db =	new conectdb;
	/**
	* 
	*/
	class quick_chenge extends conectdb
	{
		
		function __construct(){
			parent::__construct();
		}

		public function chengeMoney($id, $money)
		{
			if ($_SERVER['REQUEST_METHOD'] === "POST" && (strlen(trim($money)) > 0)){
				try {
					$query	=	$this->db->prepare("UPDATE users SET money=? WHERE id=?"); 	
					$query->execute(array($money, $id));
					return 'Ставка сотрудника изменена!';
				} catch (Exception $e) {
					echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
	                        <br> - сделайте скриншот ошибки
	                        <br> - или скопируйте текст ошибки</div>';	
				}
			}
		}
		public function chengeWorkPoint($id, $place_of_work, $rep_bar, $cafe_schedule, $pab_schedule, $rest_schedule, $artist_schedule, $coast_schedule)
		{
			if ($_SERVER['REQUEST_METHOD'] === "POST"){				
				try {
					$query	=	$this->db->prepare("UPDATE users SET 
													place_of_work			= ? ,
													bar_of_work_in_reporter = ?,
													cafe_schedule			= ?,
													pab_schedule			= ?,
													rest_schedule			= ?,
													artist_schedule			= ?,
													coast_schedule			= ?
													WHERE 
													id=?
													"); 	
					$query->execute(array(	$place_of_work	,
											$rep_bar		,
											$cafe_schedule	,
											$pab_schedule	,
											$rest_schedule	,
											$artist_schedule,
											$coast_schedule	,
											$id));
					return 'Ставка сотрудника изменена!';
				} catch (Exception $e) {
					echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
	                        <br> - сделайте скриншот ошибки
	                        <br> - или скопируйте текст ошибки</div>';	
				}					
			}
		}
	}
 ?>