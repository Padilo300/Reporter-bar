<?php 
	require_once 'quick_chenge.php'	 ;
	$quick_chenge =	new quick_chenge ;

	$quick_chenge->chengeWorkPoint(
									$_POST['id']						,
									$_POST['place_of_work']				,
									$_POST['bar_of_work_in_reporter']	,
									$_POST['cafe_schedule']				,
									$_POST['pab_schedule']				,
									$_POST['rest_schedule']				,
									$_POST['artist_schedule']			,
									$_POST['coast_schedule'])			;
 ?>