<?php 
	require_once 'change-schedule.php';
	$changeSchedule 	= 	new chengeSchedule;
	echo  $changeSchedule->chengeDay($_GET['day']);
 ?>