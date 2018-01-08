<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#0284A8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="img/reporter.png" type="image/x-icon">
    <title>Календарь</title>
    <link rel="stylesheet" href="css/libs.min.css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <div class="wrap">
      <div class="container-fluid">
        <div class="row">
          <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav myNav animated slideInLeft nav-tabs">
                  <li class="active"><a data-toggle="tab" href="#reporter">Репортер</a></li>
                  <li><a data-toggle="tab" href="#">Coast</a></li>
                  <li><a data-toggle="tab" href="artist.html">Artist</a></li>
                  <li class="subbuttons"><a data-toggle="tab" href="#">Информация</a></li>
                  <li class="subbuttons"><a data-toggle="tab"  href="db_people.html">База сотрудников</a></li>
                  <li class="subbuttons"><a data-toggle="tab"  href="#">Для новичков</a></li>
                  <li class="subbuttons"><a data-toggle="tab"  href="#">Новости<sup style='color: green; font-weight: bold;'>+3</sup></a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Мой аккаунт <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="userPage.html">Моя анкета</a></li>
                      <li><a href="#">Сообщения</a></li>
                      <li><a href="#">Настройки</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Выйти</a></li>
                    </ul>
                  </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->  
        </nav>  
          <div class="col-lg-9 col-wrap-calendar tab-content">
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
                                    <div class="name"><p>Падило Константин</p></div>
                                    <div class="name"><p>Попов Роман</p></div>
                                    <div class="name"><p>Даценко Александр</p></div>
                                    <div class="name"><p>Коваленко Александр</p></div>
                                    
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
                                  <div class="name"><p>Ковальчук Алена</p></div>
                                  <div class="name"><p>Червонящий Дмитрий</p></div>
                                  <div class="name"><p>Билецкий Роман</p></div>
                                  <div class="name"><p>Швец Денис</p></div>
                                  <div class="name"><p>Дыхтенко Анатолий</p></div>
                                  
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
                                  <div class="name"><p>Левкович Сергей</p></div>
                                  <div class="name"><p>Дьяченко Стас</p></div>                              
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
                </div>  <!--tab active ID reporter-->   
                <div class="tab-pane" id="artist">
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
                                    <div class="name"><p>Гаркуша Евгений      </p></div>
                                    <div class="name"><p>Глухова Карина       </p></div>
                                    <div class="name"><p>Жигаревич Виктор     </p></div>
                                    <div class="name"><p>Ладо Ольга           </p></div>
                                    <div class="name"><p>Пипериди Никита      </p></div>
                                    <div class="name"><p>Рыбалка Андрей       </p></div>
                                    
                                  </div>
                                  <div class="grid_days">
                                    <div class="wrapDay">
                                    
                                    </div>
                                  </div>
                                </div>    
                              </div>
                            </div>
                </div><!--tab active ID artist-->
              </div><!--end col-lg-9-->
              <div class="col-lg-3 no-print">
                <div class="panel panel-primary ">
                  <i class="fa fa-cog fa-spin cog-first" aria-hidden="true"></i>
                  <div class="panel-body text-center">
                    Падило Константин
                  </div>
                  <div class="panel-footer">
                    <ul class="list-group">
                      <li class="list-group-item workingDay"></li>
                      <li class="list-group-item price"><sub>грн</sub></li>
                      <li class="list-group-item visits"></li>
                      <li class="list-group-item payment"></li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    </div>
  </div>
    <script src="js/jquery-1.11.0.min.js" ></script>
    <script src="js/bootstrap.min.js" ></script>
    <!-- <script src='js/libs.min.js' ></script>         -->
    <script src="libs/calendar.js" ></script>
    <script src='libs/userSripts.js' ></script>
    <script src="libs/R_rest.js" ></script>
    <script src='libs/R_pab.js'></script>
    <script src='libs/ajax.js'></script>
    <script src="libs/calendar_ARTIST.js"></script>
  </body>
</html>