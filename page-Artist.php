<?php 
  require_once 'php/script/viewUsers.php'; 
  $viewUsers = new viewUsers;

  $cafe         = 'cafe_schedule'   ;
  $pab          = 'pab_schedule'    ;
  $rest         = 'rest_schedule'   ;
  $artist       = 'artist_schedule' ;

  $Barmen1      = 'бармен1' ;
  $Barmen2      = 'бармен2' ;
  $Barmen3      = 'бармен3' ;
  $Barmen4      = 'бармен4' ;
  $Barmen5      = 'бармен5' ;
  $Barmen6      = 'бармен6' ;
?>
<div  id="artist">
  <div id="Wrap_Calendar_ARTIST">
      <div class="month">
        <a href="#" id="backMonth" class="no-print control-month" ><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></a> 
        <p> </p>
        <a href="#" id="nextMonth" class="no-print control-month" ><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
      </div>
      
      <div class="table_wrap">
        <div class="table">
          <div class="bartender" id="bar">
            <div class="name space">Кафе Репортер</div>
            <div class="name space"></div>
            <div class="name"><p><?php $viewUsers->userNameCafe($artist,$Barmen1);?></p></div>
            <div class="name"><p><?php $viewUsers->userNameCafe($artist,$Barmen2);?></p></div>
            <div class="name"><p><?php $viewUsers->userNameCafe($artist,$Barmen3);?></p></div>
            <div class="name"><p><?php $viewUsers->userNameCafe($artist,$Barmen4);?></p></div>
            <div class="name"><p><?php $viewUsers->userNameCafe($artist,$Barmen5);?></p></div>
            <div class="name"><p><?php $viewUsers->userNameCafe($artist,$Barmen6);?></p></div>
            
          </div>
          <div class="grid_days">
            <div class="wrapDay">
            
            </div>
          </div>
        </div>    
      </div>
    </div>
  </div>
                          <?php require_once 'footer.php'; ?>