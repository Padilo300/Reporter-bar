<?php 
  require_once 'php/script/viewUsers.php'       ; 
  require_once 'php/script/change-schedule.php' ;

  $viewUsers        =   new viewUsers      ;
  $changeSchedule   =   new chengeSchedule ;
  $rest             =   'rest_schedule'    ;
  $Barmen1          =   'бармен1'          ;
  $Barmen2          =   'бармен2'          ;
 ?>
 <table class="table-schedule-reporter_rest"  id="WrapR_rest" >
  <div class="month">
    <a href="#" id="Table-Rep-rest-backMonth" class="no-print control-month">
      <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
    </a> 
    <p class="table-rep-rest__numberYear"></p>
    <br>
    <p class="table-rep-rest__nameMonth"></p>
    <a href="#" id="Table-Rep-rest-next_Month" class="no-print control-month" >
      <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
    </a>
  </div><!--end month-->
  <tr class="table-schedule__row" id="day-of-the-week-rest">
    <td class="table-schedule__th" bgcolor="#999">Ресторан Репортер</td>
  </tr>
  <tr class="table-schedule__row" id="number-day-rest">
    <td class="table-schedule_border1 table-schedule__th"></td>
  </tr>
  <tr class="table-schedule__row row-1 ">
   <td class="table-schedule_border1 table-schedule__th" >
      <?php $viewUsers->userNameCafe($rest, $Barmen1);?> 
   </td>
  </tr>
  <tr class="table-schedule__row row-2 ">
    <td class="table-schedule_border1 table-schedule__th">
      <?php $viewUsers->userNameCafe($rest, $Barmen2);?>    
    </td>
  </tr>
  <tr class="table-schedule__row fact-row-1 fact 
  <?php 
    if($_SESSION['bar_of_work_in_reporter'] == 'ресторан' || $_SESSION['admin'] == 'true')
      {echo 'true-user';}else{echo 'false-user';}?>" >
   <td class="table-schedule_border1 table-schedule__th" >
     <?php $viewUsers->userNameCafe($rest, $Barmen1);?>
   </td>
  </tr>
  <tr class="table-schedule__row fact-row-2 fact 
  <?php 
    if($_SESSION['bar_of_work_in_reporter'] == 'ресторан' || $_SESSION['admin'] == 'true')
      {echo 'true-user';}else{echo 'false-user';}?>">
    <td class="table-schedule_border1 table-schedule__th">
      <?php $viewUsers->userNameCafe($rest, $Barmen2);?>    
    </td>
  </tr>     
</table>