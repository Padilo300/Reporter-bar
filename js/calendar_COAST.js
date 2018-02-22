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
        scoreR3     =   1,  
        scoreR4     =   3,  
        scoreR5     =   3,  
        scoreR6     =   3,  
        m           =   ['january','february','march','april','may','june','july','august','september','october','november','december'];

    $('.table-coast__nameMonth').text(nameMonth[Month-1]);//имя месяца
    $('.table-coast__numberYear').text(Year);//имя месяца
    /*------------------------------------ закончились установки календаря------------------------------------------------------*/

	function dInMonth(month,year){return new Date(year, month, 0).getDate(); console.log(year + month)};//узнаем сколько дней в месяце
	function dow(Month,Day) {return new Date(Year,Month,Day).getDay();}//узнаем день недели
    function prinGrid() {
        //в этом цикле заполняется сетка графика (дни, числа, сетка)
        for (var i = 1, d = 1, a = 1; i < dInMonth(Month,Year)+1; i++) {
        //тут печатаются дни недели
        $('.table-schedule-coast #day-of-the-week').append(
            '<td class="table-schedule_border1 table-schedule__day-of-the-week">'+nameDayW[dow(Month-1,i)]+'</td>');

        //тут печатаются числа месяца
        $('.table-schedule-coast #number-day').append(
            '<td class="table-schedule_border1 numder-day">'+i+'</td>'
            );

        //тут создаются ячейки для графика
        $('.table-schedule-coast .row-1').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-coast .row-2').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-coast .row-3').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-coast .row-4').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-coast .row-5').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-coast .row-6').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );     
        }    
    }
    function getSchedule_user_1() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'coast', 
        userNumber: 1
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_coast .fact-row-1').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="1" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_coast .fact-row-1').append(
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
        bar: 'coast', 
        userNumber: 2
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_coast .fact-row-2').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="2" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_coast .fact-row-2').append(
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
        bar: 'coast', 
        userNumber: 3
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_coast .fact-row-3').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="3" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_coast .fact-row-3').append(
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
        bar: 'coast', 
        userNumber: 4
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_coast .fact-row-4').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="4" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_coast .fact-row-4').append(
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
        bar: 'coast', 
        userNumber: 5
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_coast .fact-row-5').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="5" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_coast .fact-row-5').append(
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
        bar: 'coast', 
        userNumber: 6
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#Wrap_Calendar_coast .fact-row-6').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="6" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#Wrap_Calendar_coast .fact-row-6').append(
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
            $($("#Wrap_Calendar_coast .row-1 .dayGrid").get().reverse()).each(function() {
                scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#Wrap_Calendar_coast .row-2 .dayGrid").get().reverse()).each(function() {
                scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#Wrap_Calendar_coast .row-3 .dayGrid").get().reverse()).each(function() {
                scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#Wrap_Calendar_coast .row-4 .dayGrid").get().reverse()).each(function() {
                scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#Wrap_Calendar_coast .row-5 .dayGrid").get().reverse()).each(function() {
                scoreR5++;
                if(scoreR5==5){scoreR5=1}
                if(scoreR5==3 || scoreR5==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#Wrap_Calendar_coast .row-6 .dayGrid").get().reverse()).each(function() {
                scoreR6++;
                if(scoreR6==5){scoreR6=1}
                if(scoreR6==3 || scoreR6==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each
            
    }

       function cycleWorkDay() {

        $.each($('#Wrap_Calendar_coast .row-1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        });//end R1

        $.each($('#Wrap_Calendar_coast .row-2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        }); //end R2

        $.each($('#Wrap_Calendar_coast .row-3 .dayGrid'), function() { 
            scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        }); //end R3

        $.each($('#Wrap_Calendar_coast .row-4 .dayGrid'), function() { 
            scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        });//end R4 

        $.each($('#Wrap_Calendar_coast .row-5 .dayGrid'), function() { 
            scoreR5++;
                if(scoreR5==5){scoreR5=1}
                if(scoreR5==3 || scoreR5==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        });//end R5

        $.each($('#Wrap_Calendar_coast .row-6 .dayGrid'), function() { 
            scoreR6++;
                if(scoreR6==5){scoreR6=1}
                if(scoreR6==3 || scoreR6==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        });//end R4

        ///////////////////////////-end new table-//////////////////////////////////
    }//end cycleWorkDay

    prinGrid()              ; //вызываем печать сетки
	cycleWorkDay()          ; //вызываем циклы расчета рабочих дней

    /*--------------------GET запросы-----------------*/
    /*----тут клик по клеточке изменяет рабочий/выходной ----*/ 
    $('#Wrap_Calendar_coast .fact').on('click','.dayGrid',function(){
        if ($('#Wrap_Calendar_coast .fact').hasClass('true-user')) {
            var dayNumber   =   $(this).attr('data-day')
                year        =   $('.table-rep__numberYear'),
                user        =   $(this).attr('data-user'),
                bar         =   'coast';

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
    $("#Table-coast-next_Month").click(function(e){
    	
    	if (Month==12) {
    		Year++
    		Month = 0;
    	}//eсли наступил довый год то добавить год и перейти на январь

        var preLastArr                  =   $('body #Wrap_Calendar_coast .row-1 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementL2            =   preLastArr[preLastArr.length-2] ; //выберем предпоследний HTML элемент

        var preLastArrRow2              =   $('body #Wrap_Calendar_coast .row-2 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow2_2       =   preLastArrRow2[preLastArrRow2.length-2] ; //выберем предпоследний HTML элемент

        var preLastArrRow3              =   $('body #Wrap_Calendar_coast .row-3 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow3_2       =   preLastArrRow3[preLastArrRow3.length-2] ; //выберем предпоследний HTML элемент

        var preLastArrRow4              =   $('body #Wrap_Calendar_coast .row-4 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow4_2       =   preLastArrRow4[preLastArrRow4.length-2] ; //выберем предпоследний HTML элемент

        var preLastArrRow5              =   $('body #Wrap_Calendar_coast .row-5 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow5_2       =   preLastArrRow5[preLastArrRow5.length-2] ; //выберем предпоследний HTML элемент

        var preLastArrRow6              =   $('body #Wrap_Calendar_coast .row-6 .dayGrid') ; //узнаем сколько элементов есть
        var preLastElementLRow6_2       =   preLastArrRow6[preLastArrRow6.length-2] ; //выберем предпоследний HTML элемент

		/*------------------------------------условия для работы графика --------------------------------------------------------*/
        if ($('body #Wrap_Calendar_coast .row-1 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementL2).hasClass('black')=== false) {
            scoreR1 = 2;
        }
        if ($('body #Wrap_Calendar_coast .row-1 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementL2).hasClass('balck')=== false) {
            scoreR1 = 3;
        }
        if ($('body #Wrap_Calendar_coast .row-1 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementL2).hasClass('black')=== true) {
            scoreR1 = 0;
        }
        if ($('body #Wrap_Calendar_coast .row-1 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementL2).hasClass('black')=== true) {
            scoreR1 = 1;
        }

    	/*------------------------------------end row1--------------------------------------------*/

        /*------------------------------------ row2 --------------------------------------------*/
        if ($('body #Wrap_Calendar_coast   .row-2 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementLRow2_2).hasClass('black')=== false) {
            scoreR2 = 2;
        }
        if ($('body #Wrap_Calendar_coast   .row-2 .dayGrid:last-child').hasClass('black')=== true    &&  
            $(preLastElementLRow2_2).hasClass('balck')=== false) {
            scoreR2 = 3;
        }
        if ($('body #Wrap_Calendar_coast   .row-2 .dayGrid:last-child').hasClass('black')=== true    &&  
            $(preLastElementLRow2_2).hasClass('black')=== true) {
            scoreR2 = 0;
        }
        if ($('body #Wrap_Calendar_coast  .row-2 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow2_2).hasClass('black')=== true) {
            scoreR2 = 1;
        }
    	/*------------------------------------end row2--------------------------------------------*/

        /*------------------------------------ row3 --------------------------------------------*/
        if ($('body #Wrap_Calendar_coast .row-3 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow3_2).hasClass('black')=== false) {
            scoreR3 = 2;
        }
        if ($('body #Wrap_Calendar_coast .row-3 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementLRow3_2).hasClass('balck')=== false) {
            scoreR3 = 3;
        }
        if ($('body #Wrap_Calendar_coast .row-3 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementLRow3_2).hasClass('black')=== true) {
            scoreR3 = 0;
        }
        if ($('body #Wrap_Calendar_coast .row-3 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow3_2).hasClass('black')=== true) {
            scoreR3 = 1;
        }
        /*------------------------------------end row3--------------------------------------------*/

        /*------------------------------------ row4 --------------------------------------------*/
        if ($('body #Wrap_Calendar_coast  .row-4 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow4_2).hasClass('black')=== false) {
            scoreR4 = 2;
        }
        if ($('body #Wrap_Calendar_coast  .row-4 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementLRow4_2).hasClass('balck')=== false) {
            scoreR4 = 3;
        }
        if ($('body #Wrap_Calendar_coast  .row-4 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementLRow4_2).hasClass('black')=== true) {
            scoreR4 = 0;
        }
        if ($('body #Wrap_Calendar_coast  .row-4 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow4_2).hasClass('black')=== true) {
            scoreR4 = 1;
        }
        /*------------------------------------end row4--------------------------------------------*/

        /*------------------------------------ row-5 --------------------------------------------*/
        if ($('body #Wrap_Calendar_coast  .row-5 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow5_2).hasClass('black')=== false) {
            scoreR5 = 2;
        }
        if ($('body #Wrap_Calendar_coast  .row-5 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementLRow5_2).hasClass('balck')=== false) {
            scoreR5 = 3;
        }
        if ($('body #Wrap_Calendar_coast  .row-5 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementLRow5_2).hasClass('black')=== true) {
            scoreR5 = 0;
        }
        if ($('body #Wrap_Calendar_coast  .row-5 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow5_2).hasClass('black')=== true) {
            scoreR5 = 1;
        }
        /*------------------------------------ end row-5 ----------------------------------------*/

        /*------------------------------------ row-6 --------------------------------------------*/
        if ($('body #Wrap_Calendar_coast  .row-6 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow6_2).hasClass('black')=== false) {
            scoreR6 = 2;
        }
        if ($('body #Wrap_Calendar_coast  .row-6 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementLRow6_2).hasClass('balck')=== false) {
            scoreR6 = 3;
        }
        if ($('body #Wrap_Calendar_coast  .row-6 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElementLRow6_2).hasClass('black')=== true) {
            scoreR6 = 0;
        }
        if ($('body #Wrap_Calendar_coast  .row-6 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElementLRow6_2).hasClass('black')=== true) {
            scoreR6 = 1;
        }
        /*------------------------------------ end row-6 ----------------------------------------*/
	   	


    	e.preventDefault() ; //отмеа перехода
    	Month++            ; // переход на следующий месяц
    	$('.table-coast__nameMonth').text(nameMonth[Month-1])  ; //имя месяца
        $('.table-coast__numberYear').text(Year)               ; //имя месяца
        $('#Wrap_Calendar_coast .dayGrid').remove()            ; //удалить старую сетку рабочих дней
        $('#Wrap_Calendar_coast .numder-day').remove()         ; //удалить числа месяца
        $('#Wrap_Calendar_coast .table-schedule__day-of-the-week').remove() ; //удалить дни недели
        
        prinGrid()           ; //печатаем всю сетку для нового месяца
		cycleWorkDay()       ; //циклы для расписания наступившего нового месяца

        getSchedule_user_1()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_2()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_3()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_4()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_5()    ; // тут из sql вытягиваем график по факту 
        getSchedule_user_6()    ; // тут из sql вытягиваем график по факту 
    });//end click	
	
    	
    $("#Table-coast-backMonth").click(function(e){
    	if (Month==1) {
    		Year--;
    		Month = 13;
    	}
        if ($('body #Wrap_Calendar_coast  .row-1 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast  .row-1 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR1 = 2;
        }

        if ($('body #Wrap_Calendar_coast  .row-1 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast  .row-1 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR1 = 3;
        }

        if ($('body #Wrap_Calendar_coast  .row-1 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast  .row-1 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR1 = 0;
        }

        if ($('body #Wrap_Calendar_coast  .row-1 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast  .row-1 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR1 = 1 ;
        }

    	/*------------------------------------end row1--------------------------------------------*/

        if ($('body #Wrap_Calendar_coast .row-2 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast .row-2 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR2 = 2;
        }

        if ($('body #Wrap_Calendar_coast .row-2 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast .row-2 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR2 = 3;
        }

        if ($('body #Wrap_Calendar_coast .row-2 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast .row-2 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR2 = 0;
        }

        if ($('body #Wrap_Calendar_coast .row-2 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast .row-2 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR2 = 1 ;
        }
		/*------------------------------------end row2--------------------------------------------*/ 
        /*------------------------------------ row3 --------------------------------------------*/  
        if ($('body  #Wrap_Calendar_coast .row-3 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body  #Wrap_Calendar_coast .row-3 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR3 = 2;
        }

        if ($('body  #Wrap_Calendar_coast .row-3 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body  #Wrap_Calendar_coast .row-3 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR3 = 3;
        }

        if ($('body  #Wrap_Calendar_coast .row-3 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body  #Wrap_Calendar_coast .row-3 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR3 = 0;
        }

        if ($('body  #Wrap_Calendar_coast .row-3 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body  #Wrap_Calendar_coast .row-3 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR3 = 1 ;
        }
        /*------------------------------------end row3 --------------------------------------------*/  

        /*------------------------------------ row4 --------------------------------------------*/  
        if ($('body #Wrap_Calendar_coast .row-4 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast .row-4 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR4 = 2;
        }

        if ($('body #Wrap_Calendar_coast .row-4 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast .row-4 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR4 = 3;
        }

        if ($('body #Wrap_Calendar_coast .row-4 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast .row-4 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR4 = 0;
        }

        if ($('body #Wrap_Calendar_coast .row-4 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast .row-4 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR4 = 1 ;
        }
        /*------------------------------------end row4 --------------------------------------------*/  

        /*------------------------------------ row5 --------------------------------------------*/ 
        if ($('body #Wrap_Calendar_coast .row-5 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast .row-5 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR5 = 2;
        }

        if ($('body #Wrap_Calendar_coast .row-5 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast .row-5 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR5 = 3;
        }

        if ($('body #Wrap_Calendar_coast .row-5 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast .row-5 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR5 = 0;
        }

        if ($('body #Wrap_Calendar_coast .row-5 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast .row-5 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR5 = 1 ;
        }
        /*------------------------------------end row5 --------------------------------------------*/  

        /*------------------------------------ row6 --------------------------------------------*/
        if ($('body #Wrap_Calendar_coast .row-6 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast .row-6 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR6 = 2;
        }

        if ($('body #Wrap_Calendar_coast .row-6 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast .row-6 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR6 = 3;
        }

        if ($('body #Wrap_Calendar_coast .row-6 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #Wrap_Calendar_coast .row-6 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR6 = 0;
        }

        if ($('body #Wrap_Calendar_coast .row-6 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #Wrap_Calendar_coast .row-6 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR6 = 1 ;
        }
        /*------------------------------------end row6 --------------------------------------------*/  


    	e.preventDefault();//отмена перехода
    	Month--;

        $('.table-coast__nameMonth').text(nameMonth[Month-1])  ; //имя месяца
        $('.table-coast__numberYear').text(Year)               ; //имя месяца
        $('#Wrap_Calendar_coast .dayGrid').remove()            ; //удалить старую сетку рабочих дней
        $('#Wrap_Calendar_coast .numder-day').remove()         ; //удалить числа месяца
        $('#Wrap_Calendar_coast .table-schedule__day-of-the-week').remove() ; //удалить дни недели
        
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
	// var	nowDate		=	new Date(),
 //        newYear     =   nowDate.getFullYear(),
 //        Year        =   newYear,
	// 	nowMonth	=	nowDate.getMonth();

	// for (var i = 0; i < nowMonth; i++) {
 //        $('#Table-coast-next_Month').trigger('click');
 //    }

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