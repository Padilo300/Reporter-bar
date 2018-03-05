<?php 
  require_once 'php/script/viewUsers.php'; 
  $viewUsers = new viewUsers;
  $coast 	 = 'coast_schedule';

  $Barmen1      = 'бармен1' ;
  $Barmen2      = 'бармен2' ;
  $Barmen3      = 'бармен3' ;
  $Barmen4      = 'бармен4' ;
  $Barmen5      = 'бармен5' ;
  $Barmen6      = 'бармен6' ;

  /*---Эта функция проверяет кто авторизовался
 и создает класс для строки пользователя  
 который позволяет JS пересчитать зарплату
       по факту выходов на работу.---*/
  //кол-во выходов по факту для JS
  //для проверки ей нужно передавать значения строк SQL
  function coast_print_class_for_count_fact($position)
  { 
    $pw = $_SESSION['coast_schedule'];
    if ($pw == $position ) {
      echo " fact-row-count ";
    }
  }

/*---Эта функция проверяет кто авторизовался
     и создает класс для строки пользователя  
     который позволяет JS пересчитать зарплату
     по плану графика.---*/
  //кол-во выходов по плану для JS
  //для проверки ей нужно передавать значения строк SQL
  function coast_print_class_for_count_plan($position)
  { 
    $pw = $_SESSION['coast_schedule'];
    if ($pw == $position ) {
      echo " plan-row-count ";
    }
  }
?>
  <table class="table-schedule-coast"  id="Wrap_Calendar_coast" >
    <div class="month">
      <a href="#" id="Table-coast-backMonth" class="no-print control-month" >
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </a> 
      <p class="table-coast__numberYear"></p>
      <br>
      <p class="table-coast__nameMonth"></p>
      <a href="#" id="Table-coast-next_Month" class="no-print control-month" >
        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </a>
    </div>
    <tr class="table-schedule__row" id="day-of-the-week">
      <td class="table-schedule__th" bgcolor="#999">Coas</td>
    </tr>
    <tr class="table-schedule__row" id="number-day">
      <td class="table-schedule_border1 table-schedule__th"></td>
    </tr>
    <tr class="table-schedule__row row-1 <?php coast_print_class_for_count_plan(бармен1); ?>">
     <td class="table-schedule_border1 table-schedule__th" >
        <?php $viewUsers->userNameCafe($coast,$Barmen1);?>
     </td>

    </tr>
    <tr class="table-schedule__row row-2 <?php coast_print_class_for_count_plan(бармен2); ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen2);?>
      </t>
     
    </tr>
    <tr class="table-schedule__row row-3 <?php coast_print_class_for_count_plan(бармен3); ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen3);?>
        </td>
    </tr>
    <tr class="table-schedule__row row-4 <?php coast_print_class_for_count_plan(бармен4); ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen4);?>
      </td>
    </tr>
    <tr class="table-schedule__row row-5 <?php coast_print_class_for_count_plan(бармен5); ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen5);?>
      </td>
    </tr>
    <tr class="table-schedule__row row-6 <?php coast_print_class_for_count_plan(бармен6); ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen6);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-1 fact 
    <?php 
      if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true')
        {echo 'true-user';}else{echo 'false-user';} 
        coast_print_class_for_count_fact(бармен1);
      ?>" >
     <td class="table-schedule_border1 table-schedule__th" >
       <?php $viewUsers->userNameCafe($coast,$Barmen1);?>
     </td>
    </tr>
    <tr class="table-schedule__row fact-row-2 fact 
    <?php 
      if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true')
        {echo 'true-user';}else{echo 'false-user';} 
        coast_print_class_for_count_fact(бармен2);
      ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen2);?>
      </t>
    </tr>
    <tr class="table-schedule__row fact-row-3 fact
     <?php 
      if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true')
        {echo 'true-user';}else{echo 'false-user';} 
        coast_print_class_for_count_fact(бармен3);
      ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen3);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-4 fact 
    <?php 
      if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true')
        {echo 'true-user';}else{echo 'false-user';} 
        coast_print_class_for_count_fact(бармен4);
      ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen4);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-5 fact 
    <?php 
      if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true')
        {echo 'true-user';}else{echo 'false-user';} 
        coast_print_class_for_count_fact(бармен5);
      ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen5);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-6 fact 
    <?php 
      if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true')
        {echo 'true-user';}else{echo 'false-user';} 
        coast_print_class_for_count_fact(бармен6);
      ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen6);?>
      </td>
    </tr>
    </table>
    <br>
  <table>
    <tr>
      <td>
      <button type="button" onclick="tableToExcel('Wrap_Calendar_coast', 'W3C Example Table')" value="  Скачать в XLS" class="btn btn-primary btn-sm"> 
        скачать <i class="fa fa-file-excel-o" aria-hidden="true"></i>
      </button>
      </td>
      <td>&#160;</td>
      <td>
        <a href="page-quickly-print-coast.php">
          <button  type="button" class="btn btn-primary btn-sm">
            Быстрая печать <i class="fa fa-print" aria-hidden="true"></i>
          </button>
        </a>
      </td>
    </tr>
  </table>  