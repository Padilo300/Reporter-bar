<?php 
	require_once 'change-schedule.php';
	$changeSchedule 	= 	new chengeSchedule;
 	$changeSchedule->scheduleDay($_GET['day'],$_GET['month'],$_GET['year']);

 ?>