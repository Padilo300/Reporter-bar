<?php
    require_once 'connect_db.php';

            $db =   new conectdb;
            /**
            * 
            */
            class addUser extends conectdb
            {
                
                function __construct(){
                    parent::__construct();
                }

                public function addUser()
                {
                    require_once 'ViewAddUser.php';
                    if (
                        $_SERVER['REQUEST_METHOD'] == 'POST' && 
                        !empty($_POST['first_name']) &&
                        !empty($_POST['last_name'])  &&
                        !empty($_POST['email'])
                    ) {
                     try { 
                                $addUser = $this->db->prepare('INSERT INTO users (
                                    first_name,
                                    last_name,
                                    mobileNumber,
                                    email,
                                    place_of_work,
                                    contact_name,
                                    mobileNumber2,
                                    address_passport,
                                    actual_address,
                                    day,
                                    mouth,
                                    year,
                                    bar_of_work_in_reporter,
                                    cafe_schedule,
                                    pab_schedule,
                                    rest_schedule,
                                    artist_schedule,
                                    money,
                                    admin,
                                    coast_schedule) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
                                $addUser->execute(
                                    array(
                                        htmlspecialchars($_POST['first_name'])              ,   
                                        htmlspecialchars($_POST['last_name'])               ,   
                                        htmlspecialchars($_POST['mobileNumber'])            ,   
                                        htmlspecialchars($_POST['email'])                   ,   
                                        htmlspecialchars($_POST['place_of_work'])           ,   
                                        htmlspecialchars($_POST['contact_name'])            ,   
                                        htmlspecialchars($_POST['mobileNumber2'])           ,   
                                        htmlspecialchars($_POST['address_passport'])        ,   
                                        htmlspecialchars($_POST['actual_address'])          ,   
                                        htmlspecialchars($_POST['day'])                     ,   
                                        htmlspecialchars($_POST['mouth'])                   ,   
                                        htmlspecialchars($_POST['year'])                    ,   
                                        htmlspecialchars($_POST['bar_of_work_in_reporter']) ,
                                        htmlspecialchars($_POST['cafe_schedule'])           ,
                                        htmlspecialchars($_POST['pab_schedule'])            ,
                                        htmlspecialchars($_POST['rest_schedule'])           ,
                                        htmlspecialchars($_POST['artist_schedule'])         ,
                                        htmlspecialchars($_POST['money'])                   ,
                                        htmlspecialchars($_POST['admin-rights'])            ,
                                        htmlspecialchars($_POST['coast_schedule'])          ,

                                    )
                                );
                                echo "Форма отправленна, спасибо!";
                                echo $_POST['mobileNumber2'].'<br>'.$_POST['place_of_work'].'<br>'.$_POST['first_name'];
                            } catch (PDOException $e) {
                                echo '<div class=\'error\'>Произошла ошибка при подключении к базе ебаной, PDO говорит что:<p class=\'sqlerror\'>'.$e.'</p><br>Если Вы видите это сообщение, пожалуста немедленно сообщите адинистратору, или вашему программисту. 
                                <br> - сделайте скриншот ошибки
                                <br> - или скопируйте текст ошибки</div>';
                            }         
                    }else{
                        echo "Форма готова к отправке, можите ввести данные сотрудника!";
                    }
                }
            } 
?>