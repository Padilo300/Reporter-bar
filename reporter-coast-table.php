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
    <tr class="table-schedule__row row-1">
     <td class="table-schedule_border1 table-schedule__th" >
        <?php $viewUsers->userNameCafe($coast,$Barmen1);?>
     </td>

    </tr>
    <tr class="table-schedule__row row-2">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen2);?>
      </t>
     
    </tr>
    <tr class="table-schedule__row row-3">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen3);?>
        </td>
    </tr>
    <tr class="table-schedule__row row-4">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen4);?>
      </td>
    </tr>
    <tr class="table-schedule__row row-5">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen5);?>
      </td>
    </tr>
    <tr class="table-schedule__row row-6">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen6);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-1 fact 
    <?php if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>" >
     <td class="table-schedule_border1 table-schedule__th" >
       <?php $viewUsers->userNameCafe($coast,$Barmen1);?>
     </td>
    </tr>
    <tr class="table-schedule__row fact-row-2 fact 
    <?php if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen2);?>
      </t>
    </tr>
    <tr class="table-schedule__row fact-row-3 fact
     <?php if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen3);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-4 fact 
    <?php if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen4);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-5 fact <?php if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen5);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-6 fact 
    <?php if($_SESSION['place_of_work'] == 'coast' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($coast,$Barmen6);?>
      </td>
    </tr>
    </table>
    <br>