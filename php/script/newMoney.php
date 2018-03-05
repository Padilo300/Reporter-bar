<?php 
	require_once 'quick_chenge.php'	 ;
	$quick_chenge =	new quick_chenge ;

	$quick_chenge->chengeMoney($_POST['id'], $_POST['money']);
 ?>