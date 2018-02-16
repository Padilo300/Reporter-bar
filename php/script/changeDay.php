<?php 
	require_once 'schedule_Day.php';
	$changeSchedule 	= 	new chengeSchedule;
	echo $changeSchedule->chengeDay($_GET['day'],$_GET['value'],$_GET['month'],$_GET['year']);

 ?>