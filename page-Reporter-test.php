<?php 
  require_once 'php/script/viewUsers.php'; 
  $viewUsers = new viewUsers;

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
<div class="tab-pane active" id="reporter">
            <img src="img/shaker.png" width="100px"  alt="shaker" class="shake-slow fixed">
            <div class="panel-group" id="accordion">
      <div class="panel panel-default ">
        <div class="panel-heading">
          <h4 class="panel-title">
            <span class="toggle trigger">
              <input type="checkbox" class="trigger">
              <label data-off="UP" data-on="DWN"></label>
            </span>
            <a data-toggle="collapse"  href="#collapseOne" class="clickButton v-alignTop">
              
            </a>
            Кофейня
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse in">
          <div class="panel-body">
            <table>
              <tr border="1">
                <td>имя бармена</td>
              </tr>
              <tr border="1">
                <td>имя бармена</td>
              </tr>
              <tr border="1">
                <td>имя бармена</td>
              </tr>
              <tr border="1">
                <td>имя бармена</td>
              </tr>
              <tr border="1">
                <td>имя бармена</td>
              </tr>
              <tr border="1">
                <td>имя бармена</td>
              </tr>
            </table>
              <div id="calendarMainWrap">
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
                                    <div class="name">
                                      <p>
                                       <?php $viewUsers->userNameCafe($cafe, $Barmen1);?>    
                                      </p>
                                    </div>
                                    <div class="name">
                                      <p>
                                         <?php $viewUsers->userNameCafe($cafe,$cafeCAKE1);?>    
                                      </p>
                                    </div>
                                    <div class="name"><p><?php $viewUsers->userNameCafe($cafe,$Barmen2);?></p></div>
                                    <div class="name"><p><?php $viewUsers->userNameCafe($cafe,$cafeCAKE2);?>    </p></div>
                                    
                                  </div>
                                  <div class="grid_days">
                                    <table class="wrapDay">
                                    
                                    </table>
                                  </div>
                                </div>    
                              </div>
                            </div>
            }
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <span class="toggle trigger">
              <input type="checkbox" class="trigger">
              <label data-off="UP" data-on="DWN"></label>
            </span>
            <a data-toggle="collapse"  href="#collapseTwo" class="clickButton v-alignTop">
            </a>
            Паб
          </h4>
        </div>
        <div id="collapseTwo" class="panel-collapse collapse">
          <div class="panel-body">
            <div id="WrapR_pab">
                            <div class="month">
                              <a href="#" id="backMonth" class="no-print control-month" ><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></a> 
                              <p> </p>
                              <a href="#" id="nextMonth" class="no-print control-month" ><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            </div>
                            
                            <div class="table_wrap">
                              <div class="table">
                                <div class="bartender" id="bar">
                                  <div class="name space">Паб Репортер</div>
                                  <div class="name space"></div>
                                  <div class="name">
                                    <p>
                                      <?php $viewUsers->userNameCafe($pab, $Barmen1);?>    
                                    </p>
                                  </div>
                                  <div class="name">
                                    <p>
                                      <?php $viewUsers->userNameCafe($pab, $Barmen2);?>    
                                    </p>
                                  </div>
                                  <div class="name">
                                    <p>
                                      <?php $viewUsers->userNameCafe($pab, $Barmen3);?>    
                                    </p>
                                  </div>
                                  <div class="name">
                                    <p>
                                      <?php $viewUsers->userNameCafe($pab, $Barmen4);?>
                                    </p>
                                  </div>
                                  <div class="name">
                                    <p>
                                      <?php $viewUsers->userNameCafe($pab, $Barmen5);?>
                                    </p>
                                  </div>
                                  
                                </div>
                                <div class="grid_days">
                                  <div class="wrapDay">
                                  
                                  </div>
                                </div>
                              </div>    
                            </div>
                          </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <span class="toggle trigger">
              <input type="checkbox" class="trigger">
              <label data-off="UP" data-on="DWN"></label>
            </span>
            <a data-toggle="collapse"  href="#collapseThree" class="clickButton v-alignTop">
            </a>
            Ресторан
          </h4>
        </div>
        <div id="collapseThree" class="panel-collapse collapse">
          <div class="panel-body">
             <div id="WrapR_rest">
                            <div class="month">
                              <a href="#" id="backMonth" class="no-print control-month" ><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></a> 
                              <p> </p>
                              <a href="#" id="nextMonth" class="no-print control-month" ><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            </div>
                            
                            <div class="table_wrap">
                              <div class="table">
                                <div class="bartender" id="bar">
                                  <div class="name space">Ресторан Репортер</div>
                                  <div class="name space"></div>
                                  <div class="name">
                                    <p>
                                      <?php $viewUsers->userNameCafe($rest, $Barmen1);?>
                                    </p>
                                  </div>
                                  <div class="name">
                                    <p>
                                      <?php $viewUsers->userNameCafe($rest, $Barmen2);?>
                                    </p>
                                  </div>                              
                                </div>
                                <div class="grid_days">
                                  <div class="wrapDay">
                                  
                                  </div>
                                </div>
                              </div>    
                            </div>
                          </div>
          </div>
        </div>
      </div>
      </div>
</div>