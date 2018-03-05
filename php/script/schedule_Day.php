<?php 
	require_once 'change-schedule.php';
	$changeSchedule 	= 	new chengeSchedule;
 	echo $changeSchedule->scheduleDay($_GET['month'],$_GET['year'],$_GET['bar'],$_GET['userNumber']);

 ?>

