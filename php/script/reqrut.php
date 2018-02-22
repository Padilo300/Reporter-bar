/*
	Если Вам понадобится увеличить кол-во полей  в SQL 
	то Вам поможет этот скрипт.
*/
<?php 
require_once 'connect_db.php';
	$db =	new conectdb;
	class reqrut extends conectdb
	{		
		function __construct(){
			parent::__construct();
		}

		public function reqrut($bar,$max_users)
		{
			for ($i = 2018; $i < 2031 ; $i++) { 
				$year = $i;

				$querySTR = "INSERT INTO `january` (`id`, `bar`, `userNumber`, `year`, `day1`, `day2`, `day3`, `day4`, `day5`, `day6`, `day7`, `day8`, `day9`, `day10`, `day11`, `day12`, `day13`, `day14`, `day15`, `day16`, `day17`, `day18`, `day19`, `day20`, `day21`, `day22`, `day23`, `day24`, `day25`, `day26`, `day27`, `day28`, `day29`, `day30`, `day31`) VALUES (NULL, '$bar', ?, '$year', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false');";

					for ($a = 1; $a <= $max_users ; $a++) { 
						$user = $a;
						$query = $this->db->prepare($querySTR);
						$query->execute(array($user));
						echo "добавляем сотрудика №$user в $bar. Год $year <br>";
					}
				}
		}
	}
	$reqrut = new reqrut;
	$bar = null;
	$max_users = null;
	// $reqrut->reqrut();
 ?>