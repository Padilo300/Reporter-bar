<?php 
  require_once 'php/script/viewUsers.php'; 
  $viewUsers = new viewUsers;
  $artist       = 'artist_schedule' ;

  $Barmen1      = 'бармен1' ;
  $Barmen2      = 'бармен2' ;
  $Barmen3      = 'бармен3' ;
  $Barmen4      = 'бармен4' ;
  $Barmen5      = 'бармен5' ;
  $Barmen6      = 'бармен6' ;
?>

<div  id="artist">
  <table class="table-schedule-ARTIST"  id="Wrap_Calendar_ARTIST" >
    <div class="month">
      <a href="#" id="Table-ARTIST-backMonth" class="no-print control-month" >
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </a> 
      <p class="table-ARTIST__numberYear"></p>
      <br>
      <p class="table-ARTIST__nameMonth"></p>
      <a href="#" id="Table-ARTIST-next_Month" class="no-print control-month" >
        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </a>
    </div>
    <tr class="table-schedule__row" id="day-of-the-week">
      <td class="table-schedule__th" bgcolor="#999">Артист</td>
    </tr>
    <tr class="table-schedule__row" id="number-day">
      <td class="table-schedule_border1 table-schedule__th"></td>
    </tr>
    <tr class="table-schedule__row row-1">
     <td class="table-schedule_border1 table-schedule__th" >
        <?php $viewUsers->userNameCafe($artist,$Barmen1);?>
     </td>

    </tr>
    <tr class="table-schedule__row row-2">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen2);?>
      </t>
     
    </tr>
    <tr class="table-schedule__row row-3">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen3);?>
        </td>
    </tr>
    <tr class="table-schedule__row row-4">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen4);?>
      </td>
    </tr>
    <tr class="table-schedule__row row-5">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen5);?>
      </td>
    </tr>
    <tr class="table-schedule__row row-6">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen6);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-1 fact" >
     <td class="table-schedule_border1 table-schedule__th" >
       <?php $viewUsers->userNameCafe($artist,$Barmen1);?>
     </td>
    </tr>
    <tr class="table-schedule__row fact-row-2 fact">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen2);?>
      </t>
    </tr>
    <tr class="table-schedule__row fact-row-3 fact">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen3);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-4 fact">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen4);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-5 fact">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen5);?>
      </td>
    </tr>
    <tr class="table-schedule__row fact-row-6 fact">
      <td class="table-schedule_border1 table-schedule__th">
        <?php $viewUsers->userNameCafe($artist,$Barmen6);?>
      </td>
    </tr>
    </table>
    <br>