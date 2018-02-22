$( document ).ready(function() {
    /*------------------------------------установки календаря------------------------------------------------------*/
    var
        nameMonth   =   ['Январь','Февраль','Март','Апрель','Ласковый Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        nameDayW    =   ['вс','пн','вт','ср','чт','пт','сб'],
        tempDay     =   new Date(2018,0,1), //получаем  дату с которой ведем отсчет
        Month       =   tempDay.getMonth()+1,//получаем месяц (от 0 до 11)
        Year        =   tempDay.getFullYear(),// получаем год
        Day         =   tempDay.getDate(), //получаем число
        daysInMonth =   dInMonth(Month-1,Year),//Количество дней в месяц
        scoreR1     =   1,
        scoreR2     =   1,  
        scoreR3     =   4,  
        scoreR4     =   4,  
        scoreR5     =   2,  
        scoreR6     =   5,  
        m           =   ['january','february','march','april','may','june','july','august','september','october','november','december'];

    $('.table-ARTIST__nameMonth').text(nameMonth[Month-1]);//имя месяца
    $('.table-ARTIST__numberYear').text(Year);//имя месяца
    /*------------------------------------ закончились установки календаря------------------------------------------------------*/

	function dInMonth(month,year){return new Date(year, month, 0).getDate(); console.log(year + month)};//узнаем сколько дней в месяце
	function dow(Month,Day) {return new Date(Year,Month,Day).getDay();}//узнаем день недели
    function prinGrid() {
        //в этом цикле заполняется сетка графика (дни, числа, сетка)
        for (var i = 1, d = 1, a = 1; i < dInMonth(Month,Year)+1; i++) {
        //тут печатаются дни недели
        $('.table-schedule-ARTIST #day-of-the-week').append(
            '<td class="table-schedule_border1 table-schedule__day-of-the-week">'+nameDayW[dow(Month-1,i)]+'</td>');

        //тут печатаются числа месяца
        $('.table-schedule-ARTIST #number-day').append(
            '<td class="table-schedule_border1 numder-day">'+i+'</td>'
            );

        //тут создаются ячейки для графика
        $('.table-schedule-ARTIST .row-1').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-ARTIST .row-2').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-ARTIST .row-3').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-ARTIST .row-4').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-ARTIST .row-5').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-ARTIST .row-6').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );     
        }    
    }
    function getSchedule_user_1() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'artist', 
        userNumber: 1
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_ARTIST .fact-row-1').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="1" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_ARTIST .fact-row-1').append(
                    '<td class="table-schedule_border1 dayGrid" data-day="'+d+'" data-user="1"></td>'
                    );        
                }
                //сброс счетчика
                d++; a++;
                if (i >= dInMonth(Month,Year)+1 ) { 
                    d = 1;
                    a = 1;
                }
            }
            
        })
    }/*---------end getShedule_user_1---------*/

    function getSchedule_user_2() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'artist', 
        userNumber: 2
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_ARTIST .fact-row-2').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="2" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_ARTIST .fact-row-2').append(
                    '<td class="table-schedule_border1 dayGrid" data-day="'+d+'" data-user="2"></td>'
                    );        
                }
                //сброс счетчика
                d++; a++;
                if (i >= dInMonth(Month,Year)+1 ) { 
                    d = 1;
                    a = 1;
                }
            }
            
        })
    }/*---------end getShedule_user_2---------*/
    function getSchedule_user_3() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'artist', 
        userNumber: 3
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_ARTIST .fact-row-3').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="3" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_ARTIST .fact-row-3').append(
                    '<td class="table-schedule_border1 dayGrid" data-day="'+d+'" data-user="3"></td>'
                    );        
                }
                //сброс счетчика
                d++; a++;
                if (i >= dInMonth(Month,Year)+1 ) { 
                    d = 1;
                    a = 1;
                }
            }
            
        })
    }/*---------end getShedule_user_3---------*/

    function getSchedule_user_4() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'artist', 
        userNumber: 4
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_ARTIST .fact-row-4').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="4" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_ARTIST .fact-row-4').append(
                    '<td class="table-schedule_border1 dayGrid" data-day="'+d+'" data-user="4"></td>'
                    );        
                }
                //сброс счетчика
                d++; a++;
                if (i >= dInMonth(Month,Year)+1 ) { 
                    d = 1;
                    a = 1;
                }
            }
            
        })
    }/*---------end getShedule_user_4---------*/

    function getSchedule_user_5() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'artist', 
        userNumber: 5
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_ARTIST .fact-row-5').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="5" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_ARTIST .fact-row-5').append(
                    '<td class="table-schedule_border1 dayGrid" data-day="'+d+'" data-user="5"></td>'
                    );        
                }
                //сброс счетчика
                d++; a++;
                if (i >= dInMonth(Month,Year)+1 ) { 
                    d = 1;
                    a = 1;
                }
            }
            
        })
    }/*---------end getShedule_user_5---------*/

    function getSchedule_user_6() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'artist', 
        userNumber: 6
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_ARTIST .fact-row-6').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="6" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_ARTIST .fact-row-6').append(
                    '<td class="table-schedule_border1 dayGrid" data-day="'+d+'" data-user="6"></td>'
                    );        
                }
                //сброс счетчика
                d++; a++;
                if (i >= dInMonth(Month,Year)+1 ) { 
                    d = 1;
                    a = 1;
                }
            }
            
        })
    }/*---------end getShedule_user_6---------*/
    function reverseEachWorkDay(){
            $($("body #Wrap_Calendar_ARTIST .row-1 .dayGrid").get().reverse()).each(function() {
                scoreR1++;
                if(scoreR1==7){scoreR1=1}
                if(scoreR1==4 || scoreR1==5 || scoreR1==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("body #Wrap_Calendar_ARTIST .row-2 .dayGrid").get().reverse()).each(function() {
                scoreR2++;
                if(scoreR2==7){scoreR2=1}
                if(scoreR2==4 || scoreR2==5 || scoreR2==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("body #Wrap_Calendar_ARTIST .row-3 .dayGrid").get().reverse()).each(function() {
                scoreR3++;
                if(scoreR3==7){scoreR3=1}
                if(scoreR3==4 || scoreR3==5 || scoreR3==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("body #Wrap_Calendar_ARTIST .row-4 .dayGrid").get().reverse()).each(function() {
                scoreR4++;
                if(scoreR4==7){scoreR4=1}
                if(scoreR4==4 || scoreR4==5 || scoreR4==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("body #Wrap_Calendar_ARTIST .row-5 .dayGrid").get().reverse()).each(function() {
                scoreR5++;
                if(scoreR5==7){scoreR5=1}
                if(scoreR5==4 || scoreR5==5 || scoreR5==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("body #Wrap_Calendar_ARTIST .row-6 .dayGrid").get().reverse()).each(function() {
                scoreR6++;
                if(scoreR6==7){scoreR6=1}
                if(scoreR6==4 || scoreR6==5 || scoreR6==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each
            
    }

    function cycleWorkDay() {

        $.each($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==7){scoreR1=1}
                if(scoreR1==4 || scoreR1==5 || scoreR1==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        });//end R1

        $.each($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==7){scoreR2=1}
                if(scoreR2==4 || scoreR2==5 || scoreR2==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        }); //end R2

        $.each($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid'), function() { 
            scoreR3++;
                if(scoreR3==7){scoreR3=1}
                if(scoreR3==4 || scoreR3==5 || scoreR3==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        }); //end R2

        $.each($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid'), function() { 
            scoreR4++;
                if(scoreR4==7){scoreR4=1}
                if(scoreR4==4 || scoreR4==5 || scoreR4==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        }); //end R2

        $.each($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid'), function() { 
            scoreR5++;
                if(scoreR5==7){scoreR5=1}
                if(scoreR5==4 || scoreR5==5 || scoreR5==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        }); //end R2

        $.each($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid'), function() { 
            scoreR6++;
                if(scoreR6==7){scoreR6=1}
                if(scoreR6==4 || scoreR6==5 || scoreR6==6){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        }); //end R2                        


    }//end cycleWorkDay

    prinGrid()              ; //вызываем печать сетки
	cycleWorkDay()          ; //вызываем циклы расчета рабочих дней

    /*--------------------GET запросы-----------------*/
    /*----тут клик по клеточке изменяет рабочий/выходной ----*/ 
    $('#Wrap_Calendar_ARTIST .fact').on('click','.dayGrid',function(){
        if ($('#Wrap_Calendar_ARTIST .fact').hasClass('true-user')) {
            var dayNumber   =   $(this).attr('data-day')
                year        =   $('.table-rep__numberYear'),
                user        =   $(this).attr('data-user'),
                bar         =   'artist';

            /* переключить рабочий/выходной день */
            if ($(this).hasClass('black')) {
                $.get("/php/script/changeDay.php", {day: dayNumber, value:'false', month: m[Month-1], year: Year, user: user, bar: bar}, function(data) {});
                $(this).removeClass('black')
                $(this).attr('bgcolor','#fff');
            }else{
                $.get("/php/script/changeDay.php", {day: dayNumber, value:'true' , month: m[Month-1], year: Year, user: user, bar: bar}, function(data) {});
                $(this).addClass('black')
                $(this).attr('bgcolor','#000');
            }
        }
    });
    /*--------------Закончились GET запросы-----------*/

	/*-------------------------------------------выбор следующего месяца----------------------------------------------------*/
    $("#Table-ARTIST-next_Month").click(function(e){
    	
    	if (Month==12) {
    		Year++
    		Month = 0;
    	}//eсли наступил довый год то добавить год и перейти на январь

        var preLastArr                  =   $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementL2            =   preLastArr[preLastArr.length-2] ; //выберем предпоследний HTML элемент
        var preLastElementL3            =   preLastArr[preLastArr.length-3] ; //выберем третий с конца HTML элемент
        var preLastElementL4            =   preLastArr[preLastArr.length-4] ; //выберем четвертый с конца HTML элемент

        var preLastArrRow2              =   $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow2_2       =   preLastArrRow2[preLastArrRow2.length-2] ; //выберем предпоследний HTML элемент
        var preLastElementLRow2_3       =   preLastArrRow2[preLastArrRow2.length-3] ; //выберем третий с конца HTML элемент
        var preLastElementLRow2_4       =   preLastArrRow2[preLastArrRow2.length-4] ; //выберем четвертый с конца HTML элемент

        var preLastArrRow3              =   $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow3_2       =   preLastArrRow3[preLastArrRow3.length-2] ; //выберем предпоследний HTML элемент
        var preLastElementLRow3_3       =   preLastArrRow3[preLastArrRow3.length-3] ; //выберем третий с конца HTML элемент
        var preLastElementLRow3_4       =   preLastArrRow3[preLastArrRow3.length-4] ; //выберем четвертый с конца HTML элемент

        var preLastArrRow4              =   $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow4_2       =   preLastArrRow4[preLastArrRow4.length-2] ; //выберем предпоследний HTML элемент
        var preLastElementLRow4_3       =   preLastArrRow4[preLastArrRow4.length-3] ; //выберем третий с конца HTML элемент
        var preLastElementLRow4_4       =   preLastArrRow4[preLastArrRow4.length-4] ; //выберем четвертый с конца HTML элемент

        var preLastArrRow5              =   $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow5_2       =   preLastArrRow5[preLastArrRow5.length-2] ; //выберем предпоследний HTML элемент
        var preLastElementLRow5_3       =   preLastArrRow5[preLastArrRow5.length-3] ; //выберем третий с конца HTML элемент
        var preLastElementLRow5_4       =   preLastArrRow5[preLastArrRow5.length-4] ; //выберем четвертый с конца HTML элемент

        var preLastArrRow6              =   $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow6_2       =   preLastArrRow6[preLastArrRow6.length-2] ; //выберем предпоследний HTML элемент
        var preLastElementLRow6_3       =   preLastArrRow6[preLastArrRow6.length-3] ; //выберем третий с конца HTML элемент
        var preLastElementLRow6_4       =   preLastArrRow6[preLastArrRow6.length-4] ; //выберем четвертый с конца HTML элемент

		/*------------------------------------условия для работы графика --------------------------------------------------------*/
        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== false)
             {
            scoreR1 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== true)
             {
            scoreR1 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== true)
             {
            scoreR1 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== true &&
            $(preLastElementL3).hasClass('black')=== true)
             {
            scoreR1 = 1;
        }
        
        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== false)
             {
            scoreR1 = 4;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementL2).hasClass('black')=== true &&
            $(preLastElementL3).hasClass('black')=== true)
             {
            scoreR1 = 0;
        }

    	/*------------------------------------end row1--------------------------------------------*/

        /*------------------------------------ row2 --------------------------------------------*/
        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow2_2).hasClass('black')=== false &&
            $(preLastElementLRow2_3).hasClass('black')=== false)
             {
            scoreR2 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow2_2).hasClass('black')=== false &&
            $(preLastElementLRow2_3).hasClass('black')=== true)
             {
            scoreR2 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow2_2).hasClass('black')=== false &&
            $(preLastElementLRow2_3).hasClass('black')=== true)
             {
            scoreR2 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow2_2).hasClass('black')=== true &&
            $(preLastElementLRow2_3).hasClass('black')=== true)
             {
            scoreR2 = 1;
        }
        
        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow2_2).hasClass('black')=== false &&
            $(preLastElementLRow2_3).hasClass('black')=== false)
             {
            scoreR2 = 4;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow2_2).hasClass('black')=== true &&
            $(preLastElementLRow2_3).hasClass('black')=== true)
             {
            scoreR2 = 0;
        }
    	/*------------------------------------end row2--------------------------------------------*/

        /*------------------------------------ row3 --------------------------------------------*/
        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow3_2).hasClass('black')=== false &&
            $(preLastElementLRow3_3).hasClass('black')=== false)
             {
            scoreR3 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow3_2).hasClass('black')=== false &&
            $(preLastElementLRow3_3).hasClass('black')=== true)
             {
            scoreR3 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow3_2).hasClass('black')=== false &&
            $(preLastElementLRow3_3).hasClass('black')=== true)
             {
            scoreR3 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow3_2).hasClass('black')=== true &&
            $(preLastElementLRow3_3).hasClass('black')=== true)
             {
            scoreR3 = 1;
        }
        
        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow3_2).hasClass('black')=== false &&
            $(preLastElementLRow3_3).hasClass('black')=== false)
             {
            scoreR3 = 4;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow3_2).hasClass('black')=== true &&
            $(preLastElementLRow3_3).hasClass('black')=== true)
             {
            scoreR3 = 0;
        }
        /*------------------------------------end row3--------------------------------------------*/

        /*------------------------------------ row4 --------------------------------------------*/
        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow4_2).hasClass('black')=== false &&
            $(preLastElementLRow4_3).hasClass('black')=== false)
             {
            scoreR4 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow4_2).hasClass('black')=== false &&
            $(preLastElementLRow4_3).hasClass('black')=== true)
             {
            scoreR4 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow4_2).hasClass('black')=== false &&
            $(preLastElementLRow4_3).hasClass('black')=== true)
             {
            scoreR4 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow4_2).hasClass('black')=== true &&
            $(preLastElementLRow4_3).hasClass('black')=== true)
             {
            scoreR4 = 1;
        }
        
        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow4_2).hasClass('black')=== false &&
            $(preLastElementLRow4_3).hasClass('black')=== false)
             {
            scoreR4 = 4;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow4_2).hasClass('black')=== true &&
            $(preLastElementLRow4_3).hasClass('black')=== true)
             {
            scoreR4 = 0;
        }
        /*------------------------------------end row4--------------------------------------------*/

        /*------------------------------------ row-5 --------------------------------------------*/
                if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow5_2).hasClass('black')=== false &&
            $(preLastElementLRow5_3).hasClass('black')=== false)
             {
            scoreR5 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow5_2).hasClass('black')=== false &&
            $(preLastElementLRow5_3).hasClass('black')=== true)
             {
            scoreR5 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow5_2).hasClass('black')=== false &&
            $(preLastElementLRow5_3).hasClass('black')=== true)
             {
            scoreR5 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow5_2).hasClass('black')=== true &&
            $(preLastElementLRow5_3).hasClass('black')=== true)
             {
            scoreR5 = 1;
        }
        
        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow5_2).hasClass('black')=== false &&
            $(preLastElementLRow5_3).hasClass('black')=== false)
             {
            scoreR5 = 4;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow5_2).hasClass('black')=== true &&
            $(preLastElementLRow5_3).hasClass('black')=== true)
             {
            scoreR5 = 0;
        }
        /*------------------------------------ end row-5 ----------------------------------------*/

        /*------------------------------------ row-6 --------------------------------------------*/
                if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow6_2).hasClass('black')=== false &&
            $(preLastElementLRow6_3).hasClass('black')=== false)
             {
            scoreR6 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow6_2).hasClass('black')=== false &&
            $(preLastElementLRow6_3).hasClass('black')=== true)
             {
            scoreR6 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow6_2).hasClass('black')=== false &&
            $(preLastElementLRow6_3).hasClass('black')=== true)
             {
            scoreR6 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow6_2).hasClass('black')=== true &&
            $(preLastElementLRow6_3).hasClass('black')=== true)
             {
            scoreR6 = 1;
        }
        
        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow6_2).hasClass('black')=== false &&
            $(preLastElementLRow6_3).hasClass('black')=== false)
             {
            scoreR6 = 4;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElementLRow6_2).hasClass('black')=== true &&
            $(preLastElementLRow6_3).hasClass('black')=== true)
             {
            scoreR6 = 0;
        }
        /*------------------------------------ end row-6 ----------------------------------------*/
	   	


    	e.preventDefault() ; //отмеа перехода
    	Month++            ; // переход на следующий месяц
    	$('.table-ARTIST__nameMonth').text(nameMonth[Month-1])  ; //имя месяца
        $('.table-ARTIST__numberYear').text(Year)               ; //имя месяца
        $('#Wrap_Calendar_ARTIST .dayGrid').remove()            ; //удалить старую сетку рабочих дней
        $('#Wrap_Calendar_ARTIST .numder-day').remove()         ; //удалить числа месяца
        $('#Wrap_Calendar_ARTIST .table-schedule__day-of-the-week').remove() ; //удалить дни недели
        
        prinGrid()           ; //печатаем всю сетку для нового месяца
		cycleWorkDay()       ; //циклы для расписания наступившего нового месяца

        getSchedule_user_1()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_2()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_3()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_4()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_5()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_6()    ; // тут из sql вытягиваем график по факту 
    });//end click	
	
    	
    $("#Table-ARTIST-backMonth").click(function(e){
    	if (Month==1) {
    		Year--;
    		Month = 13;
    	}
    	if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(0)').hasClass('black') === false	&&	
    		$('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(2)').hasClass('black') === false) {

    		scoreR1 = 3;
   		}

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR1 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(1)').hasClass('black') === true    &&
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR1 = 1;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR1 = 0;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR1 = 5;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(1)').hasClass('black') === false  &&
            $('body #Wrap_Calendar_ARTIST .row-1 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR1 = 4;
        }

    	/*------------------------------------end row1--------------------------------------------*/

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR2 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR2 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(1)').hasClass('black') === true    &&
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR2 = 1;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR2 = 0;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR2 = 5;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(1)').hasClass('black') === false  &&
            $('body #Wrap_Calendar_ARTIST .row-2 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR2 = 4;
        }
		/*------------------------------------end row2--------------------------------------------*/ 
        /*------------------------------------ row3 --------------------------------------------*/  
        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR3 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR3 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(1)').hasClass('black') === true    &&
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR3 = 1;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR3 = 0;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR3 = 5;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(1)').hasClass('black') === false  &&
            $('body #Wrap_Calendar_ARTIST .row-3 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR3 = 4;
        }  	
        /*------------------------------------end row3 --------------------------------------------*/  

        /*------------------------------------ row4 --------------------------------------------*/  
        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR4 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR4 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(1)').hasClass('black') === true    &&
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR4 = 1;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR4 = 0;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR4 = 5;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(1)').hasClass('black') === false  &&
            $('body #Wrap_Calendar_ARTIST .row-4 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR4 = 4;
        }
        /*------------------------------------end row4 --------------------------------------------*/  

        /*------------------------------------ row5 --------------------------------------------*/ 
        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR5 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR5 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(1)').hasClass('black') === true    &&
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR5 = 1;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR5 = 0;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR5 = 5;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(1)').hasClass('black') === false  &&
            $('body #Wrap_Calendar_ARTIST .row-5 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR5 = 4;
        }
        /*------------------------------------end row5 --------------------------------------------*/  

        /*------------------------------------ row6 --------------------------------------------*/
        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR6 = 3;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(1)').hasClass('black') === false   &&
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR6 = 2;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(1)').hasClass('black') === true    &&
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR6 = 1;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(2)').hasClass('black') === true) {

            scoreR6 = 0;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(1)').hasClass('black') === true   &&
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR6 = 5;
        }

        if ($('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(0)').hasClass('black') === true   &&  
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(1)').hasClass('black') === false  &&
            $('body #Wrap_Calendar_ARTIST .row-6 .dayGrid:eq(2)').hasClass('black') === false) {

            scoreR6 = 4;
        }  
        /*------------------------------------end row6 --------------------------------------------*/  


    	e.preventDefault();//отмена перехода
    	Month--;

        $('.table-ARTIST__nameMonth').text(nameMonth[Month-1])  ; //имя месяца
        $('.table-ARTIST__numberYear').text(Year)               ; //имя месяца
        $('#Wrap_Calendar_ARTIST .dayGrid').remove()            ; //удалить старую сетку рабочих дней
        $('#Wrap_Calendar_ARTIST .numder-day').remove()         ; //удалить числа месяца
        $('#Wrap_Calendar_ARTIST .table-schedule__day-of-the-week').remove() ; //удалить дни недели
        
        prinGrid()           ; //печатаем всю сетку для нового месяца
        reverseEachWorkDay() ; //печатаем раочие дни

        getSchedule_user_1()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_2()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_3()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_4()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_5()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_6()    ; // тут из sql вытягиваем график по факту 
    });//end click	
    
    /*-----переводим календарь на текущий месяц-----*/
	var	nowDate		=	new Date(),
        newYear     =   nowDate.getFullYear(),
        Year        =   newYear,
		nowMonth	=	nowDate.getMonth();

	for (var i = 0; i < nowMonth; i++) {
        $('#Table-ARTIST-next_Month').trigger('click');
    }

    /*--Эти функции должны вызываться после того как перевели календарь на текущий месяц--*/ 
    /*-- Они будут нужны только в январе когда триггер не будет срабатывать
      -- и функции не вызовуся по событию click на стрелку следующий месяц  --*/
    if ( (Month-1) == 0 ) {
        getSchedule_user_1()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_2()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_3()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_4()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_5()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_6()    ; // тут из sql вытягиваем график по факту 
    }
});