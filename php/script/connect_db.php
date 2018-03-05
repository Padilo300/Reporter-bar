<?php 
/**
* 
*/
class conectdb{
	public $dbserver 	=	''	;
	public $dbUserName	=	''	;
	public $dbPassword	=	''	;
	public $database	=	''	;
	public $db 			=	''	;
	public $addUser		=	''	;

	public function __construct()
	{
		// $this->dbserver 	=	'mysql.zzz.com.ua'		;
		// $this->dbUserName	=	'padilo'			;
		// $this->dbPassword 	=	'Thepdajghobesh8'	;
		// $this->database 	=	'padilo300'				;

		$this->dbserver 	=	'localhost'	;
		$this->dbUserName	=	'padilo'	;
		$this->dbPassword 	=	'padilo300'	;
		$this->database 	=	'reporter'	;
		try {
			$this->db 	=	new PDO("mysql:host=$this->dbserver;dbname=$this->database", $this->dbUserName, $this->dbPassword);
			$this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch (PDOException $e) {
			   echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
                        <br> - сделайте скриншот ошибки
                        <br> - или скопируйте текст ошибки</div>';
		}
	}
}
?>