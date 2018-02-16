<?php 
	require_once 'change-schedule.php';
	$changeSchedule 	= 	new chengeSchedule;
 	$changeSchedule->chengeDay($_GET['day'],$_GET['month'],$_GET['year']);
 ?>