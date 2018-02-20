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

  /*---Эта функция проверяет кто авторизовался
       и создает класс для строки пользователя  
       который позволяет JS пересчитать зарплату
       по факту выходов на работу.---*/
  //кол-во выходов по факту для JS
  function cafe_print_class_for_count_fact($position)
  { 
    $pw = $_SESSION['cafe_schedule'];
    if ($pw == $position ) {
      echo " fact-row-count ";
    }
  }

  /*---Эта функция проверяет кто авторизовался
       и создает класс для строки пользователя  
       который позволяет JS пересчитать зарплату
       по плану графика.---*/
  //кол-во выходов по плану для JS
  function cafe_print_class_for_count_plan($position)
  { 
    $pw = $_SESSION['cafe_schedule'];
    if ($pw == $position ) {
      echo " plan-row-count ";
    }
  }
?>


<div class="tab-pane active" id="reporter">        
    <div class="panel-group" id="accordion">
      <div class="panel panel-default ">
        <div class="panel-heading">
          <h4 class="panel-title">
            <span class="toggle trigger">
              <input type="checkbox" class="trigger">
              <label data-off="&#10006;" data-on="&#10004;"></label>
            </span>
            <a data-toggle="collapse"  href="#collapseOne" class="clickButton v-alignTop">
              
            </a>
            Кофейня
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse in">
          <div class="panel-body">

            <table class="table-schedule-reporter"  id="table-schedule-reporter" >
              <div class="month">
                <a href="#" id="Table-Rep-backMonth" class="no-print control-month" >
                  <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                </a> 
                <p class="table-rep__numberYear"></p>
                <br>
                <p class="table-rep__nameMonth"></p>
                <a href="#" id="Table-Rep-next_Month" class="no-print control-month" >
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </a>
              </div>
              <tr class="table-schedule__row" id="day-of-the-week">
                <td class="table-schedule__th" bgcolor="#999">Кафе Репортер</td>
              </tr>
              <tr class="table-schedule__row" id="number-day">
                <td class="table-schedule_border1 table-schedule__th"></td>
       
       
              </tr>
              <tr class="table-schedule__row row-1 <?php cafe_print_class_for_count_plan(бармен1); ?> ">
               <td class="table-schedule_border1 table-schedule__th" >
                  <?php $viewUsers->userNameCafe($cafe, $Barmen1);?>
               </td>

              </tr>
              <tr class="table-schedule__row row-2 <?php cafe_print_class_for_count_plan(кондитер1); ?>">
                <td class="table-schedule_border1 table-schedule__th">
                  <?php $viewUsers->userNameCafe($cafe,$cafeCAKE1);?>
                </t>
               
              </tr>
              <tr class="table-schedule__row row-3 <?php cafe_print_class_for_count_plan(бармен2); ?>">
                <td class="table-schedule_border1 table-schedule__th">
                  <?php $viewUsers->userNameCafe($cafe,$Barmen2);?>
                  </td>
              </tr>
              <tr class="table-schedule__row row-4 <?php cafe_print_class_for_count_plan(кондитер2); ?>">
                <td class="table-schedule_border1 table-schedule__th">
                  <?php $viewUsers->userNameCafe($cafe,$cafeCAKE2);?>
                </td>
              </tr>
              <tr class="table-schedule__row fact-row-1 fact 
                  <?php 
                    if($_SESSION['bar_of_work_in_reporter'] == 'кофейня' || $_SESSION['admin'] == 'true'){
                      echo 'true-user';
                    }else{
                      echo 'false-user';} 
                    cafe_print_class_for_count_fact(бармен1);
                  ?>
                      " >
               <td class="table-schedule_border1 table-schedule__th" >
                 <?php $viewUsers->userNameCafe($cafe, $Barmen1);?>
               </td>
              </tr>
              <tr class="table-schedule__row fact-row-2 fact 
              <?php 
                if($_SESSION['bar_of_work_in_reporter'] == 'кофейня' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} 
                cafe_print_class_for_count_fact(кондитер1);
              ?>">
                <td class="table-schedule_border1 table-schedule__th">
                  <?php $viewUsers->userNameCafe($cafe,$cafeCAKE1);?>
                </t>
              </tr>
              <tr class="table-schedule__row fact-row-3 fact 
              <?php 
                if($_SESSION['bar_of_work_in_reporter'] == 'кофейня' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} 
                  cafe_print_class_for_count_fact(бармен2);
                ?>">
                <td class="table-schedule_border1 table-schedule__th">
                  <?php $viewUsers->userNameCafe($cafe,$Barmen2);?>
                </td>
              </tr>
              <tr class="table-schedule__row fact-row-4 fact 
              <?php 
                if($_SESSION['bar_of_work_in_reporter'] == 'кофейня' || $_SESSION['admin'] == 'true'){echo ' true-user ';}else{echo ' false-user ';} 
                  cafe_print_class_for_count_fact(кондитер2);
                ?>">
                <td class="table-schedule_border1 table-schedule__th">
                  <?php $viewUsers->userNameCafe($cafe,$cafeCAKE2);?>
                </td>
              </tr>
            </table>
            <br>
            <table>
              <tr>
                <td>
                  <input 
                    type="button" 
                    onclick="tableToExcel('table-schedule-reporter', 'W3C Example Table')" 
                    value="Скачать в XLS">
                </td>
                <td>&#160;</td>
                <td>
                  <a href="page-quickly-print-cafe.php"><button>Быстрая печать</button></a>
                </td>
              </tr>
            </table>
            

          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <span class="toggle trigger">
              <input type="checkbox" class="trigger">
              <label data-off="&#10006;" data-on="&#10004;"></label>
            </span>
            <a data-toggle="collapse"  href="#collapseTwo" class="clickButton v-alignTop">
            </a>
            Паб
          </h4>
        </div>
<div id="collapseTwo" class="panel-collapse collapse in">
  <div class="panel-body">
    <table class="table-schedule-reporter_pab"  id="WrapR_pab" >
      <div class="month">
        <a href="#" id="Table-Rep-pab-backMonth" class="no-print control-month">
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </a> 
        <p class="table-rep-pab__numberYear"></p>
        <br>
        <p class="table-rep-pab__nameMonth"></p>
        <a href="#" id="Table-Rep-pab-next_Month" class="no-print control-month" >  
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </a>
      </div><!--end month-->
      <tr class="table-schedule__row" id="day-of-the-week-pab">
        <td class="table-schedule__th" bgcolor="#999">Паб Репортер</td>
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
      <tr class="table-schedule__row fact-row-1 fact
      <?php if($_SESSION['bar_of_work_in_reporter'] == 'паб' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>" >
       <td class="table-schedule_border1 table-schedule__th" >
         <?php $viewUsers->userNameCafe($pab, $Barmen1);?>    
       </td>
      </tr>
      <tr class="table-schedule__row fact-row-2 fact
      <?php if($_SESSION['bar_of_work_in_reporter'] == 'паб' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen2);?>    
        </td>
      </tr>
      <tr class="table-schedule__row fact-row-3 fact
      <?php if($_SESSION['bar_of_work_in_reporter'] == 'паб' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen3);?>    
        </td>
      </tr>
      <tr class="table-schedule__row fact-row-4 fact
      <?php if($_SESSION['bar_of_work_in_reporter'] == 'паб' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen4);?>
        </td>
      </tr>
      <tr class="table-schedule__row fact-row-5 fact
      <?php if($_SESSION['bar_of_work_in_reporter'] == 'паб' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';} ?>">
        <td class="table-schedule_border1 table-schedule__th">
          <?php $viewUsers->userNameCafe($pab, $Barmen5);?>
        </td>
      </tr>
    </table>
    <br>
    <table><!--/////////////////  end WrapR_pab //////////////////--> 
      <tr>
        <td>
          <input 
            type="button" 
            onclick="tableToExcel('WrapR_pab', 'W3C Example Table')" 
            value="Скачать в XLS">
        </td>
        <td>&#160;</td>
        <td>
          <a href="page-quickly-print-pab.php"><button>Быстрая печать</button></a>
        </td>
      </tr>
    </table>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <span class="toggle trigger">
              <input type="checkbox" class="trigger">
              <label data-off="&#10006;" data-on="&#10004;"></label>
            </span>
            <a data-toggle="collapse"  href="#collapseThree" class="clickButton v-alignTop">
            </a>
            Ресторан
          </h4>
        </div>
        <div id="collapseThree" class="panel-collapse collapse in">
          <div class="panel-body">
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
              <tr class="table-schedule__row row-1">
               <td class="table-schedule_border1 table-schedule__th" >
                  <?php $viewUsers->userNameCafe($rest, $Barmen1);?> 
               </td>
              </tr>
              <tr class="table-schedule__row row-2">
                <td class="table-schedule_border1 table-schedule__th">
                  <?php $viewUsers->userNameCafe($rest, $Barmen2);?>    
                </td>
              </tr>
              <tr class="table-schedule__row fact-row-1 fact 
              <?php if($_SESSION['bar_of_work_in_reporter'] == 'ресторан' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';}?>" >
               <td class="table-schedule_border1 table-schedule__th" >
                 <?php $viewUsers->userNameCafe($rest, $Barmen1);?>
               </td>
              </tr>
              <tr class="table-schedule__row fact-row-2 fact 
              <?php if($_SESSION['bar_of_work_in_reporter'] == 'ресторан' || $_SESSION['admin'] == 'true'){echo 'true-user';}else{echo 'false-user';}?>">
                <td class="table-schedule_border1 table-schedule__th">
                  <?php $viewUsers->userNameCafe($rest, $Barmen2);?>    
                </td>
              </tr>     
            </table>
            <br>
            <table><!--/////////////////  end WrapR_rest //////////////////--> 
              <tr>
                <td>
                  <input 
                    type="button" 
                    onclick="tableToExcel('WrapR_rest', 'W3C Example Table')" 
                    value="Скачать в XLS">
                </td>
                <td>&#160;</td>
                <td>
                  <a href="page-quickly-print-rest.php"><button>Быстрая печать</button></a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      </div>
</div>
