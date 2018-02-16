<?php 
	require_once 'connect_db.php';
	$db = new conectdb;

	class chengeSchedule extends conectdb{
		function __construct(){
					parent::__construct();
				}
		public function chengeDay($value)
		{
				$e = $value;
				echo $e;
			
		}

	}

 ?>