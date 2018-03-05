<?php 
 require_once 'php/script/viewUsers.php'; 
  require_once 'php/script/change-schedule.php';
  $viewUsers        =   new viewUsers;
  $changeSchedule   =   new chengeSchedule;

  $cafe         = 'cafe_schedule' ;
  $pab          = 'pab_schedule'  ;
  $rest         = 'rest_schedule' ;

  $Barmen1      = 'бармен1'       ;
  $Barmen2      = 'бармен2'       ;
  $Barmen3      = 'бармен3'       ;
  $Barmen4      = 'бармен4'       ;
  $Barmen5      = 'бармен5'       ;
  $Barmen6      = 'бармен6'       ;

  $cafeCAKE1    = 'кондитер1'     ;
  $cafeCAKE2    = 'кондитер2'     ;
 ?>
<table class="table-schedule-reporter_pab"  id="WrapR_pab" >
      <div class="month">
        <a href="#" id="Table-Rep-pab-backMonth" class="no-print control-month">
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </a> 
        <p class="table-rep-pab__numberYear no-print"></p>
        <br>
        <p class="table-rep-pab__nameMonth"></p>
        <a href="#" id="Table-Rep-pab-next_Month" class="no-print control-month" >
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </a>
      </div><!--end month-->
      <tr class="table-schedule__row" id="day-of-the-week-pab">
        <td class="table-schedule__th" bgcolor="#999" id="bg-gray" >Паб Репортер</td>
      </tr>
      <tr class="table-schedule__row" id="number-day-pab">
        <td class="table-schedule_border1 table-schedule__th"></td>
      </tr>
      <tr class="table-schedule__row row-1">
       <td class="table-schedule_border1 table-schedule__th" >
          <?php $viewUsers->userNameCafe($pab, $Barmen1);?>    
       </td>
      </tr>
      <tr class="table-schedule__row row-2">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen2);?>    
        </td>
      </tr>
      <tr class="table-schedule__row row-3">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen3);?>    
          </td>
      </tr>
      <tr class="table-schedule__row row-4">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen4);?>
        </td>
      </tr>
      <tr class="table-schedule__row row-5">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen5);?>
        </td>
      </tr>
      <tr class="table-schedule__row fact-row-1 fact" >
       <td class="table-schedule_border1 table-schedule__th" >
         <?php $viewUsers->userNameCafe($pab, $Barmen1);?>    
       </td>
      </tr>
      <tr class="table-schedule__row fact-row-2 fact">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen2);?>    
        </t>
      </tr>
      <tr class="table-schedule__row fact-row-3 fact">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen3);?>    
        </td>
      </tr>
      <tr class="table-schedule__row fact-row-4 fact">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen4);?>
        </td>
      </tr>
      <tr class="table-schedule__row fact-row-5 fact">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen5);?>
        </td>
      </tr>
    </table>
    <br>
    <table><!--/////////////////  end WrapR_pab //////////////////--> 