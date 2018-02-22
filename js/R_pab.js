$( document ).ready(function() {
    /*------------------------------------установки календаря------------------------------------------------------*/
    var
        nameMonth   =   ['Январь','Февраль','Март','Апрель','Ласковый Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        nameDayW    =   ['вс','пн','вт','ср','чт','пт','сб'],
        tempDay     =   new Date(2018,0,1)      , //получаем  дату с которой ведем отсчет
        Month       =   tempDay.getMonth()+1    ,//получаем месяц (от 0 до 11)
        Year        =   tempDay.getFullYear()   ,// получаем год
        Day         =   tempDay.getDate()       , //получаем число
        daysInMonth =   dInMonth(Month-1,Year)  ,//Количество дней в месяц
        scoreR1     =   1   ,
        scoreR2     =   2   ,  
        scoreR3     =   2   ,  
        scoreR4     =   0   ,
        scoreR5     =   0   ,
        m           =   ['january','february','march','april','may','june','july','august','september','october','november','december'];

	function dInMonth(month,year){return new Date(year, month, 0).getDate();};//узнаем сколько дней в месяце
	function dow(Month,Day) {return new Date(Year,Month,Day).getDay();}//узнаем день недели
    function prinGrid() {
        //в этом цикле заполняется сетка графика (имя месяца, номер года, дни, числа, сетка)
        $(".table-rep-pab__nameMonth").text(nameMonth[Month-1]);// вывести имя месяца
        $('.table-rep-pab__numberYear').text(Year);//вывести год
        for (var i = 1, d = 1, a = 1; i < dInMonth(Month,Year)+1; i++) {

            //-------тут печатаются дни недели---------
            $('#WrapR_pab #day-of-the-week-pab').append(
                    '<td class="table-schedule_border1 table-schedule__day-of-the-week">'+nameDayW[dow(Month-1,i)]+'</td>');

            //-------тут печатаются числа месяца-------
            $('#WrapR_pab #number-day-pab').append(
                         '<td class="table-schedule_border1 numder-day">'+i+'</td>'
                );
            //-------тут создаются ячейки для графика--
            $('#WrapR_pab .row-1').append(
                '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
                );
            $('#WrapR_pab .row-2').append(
                '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
                );
            $('#WrapR_pab .row-3').append(
                '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
                );
            $('#WrapR_pab .row-4').append(
                '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
                );
            $('#WrapR_pab .row-5').append(
                '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
                );
        }
    }
    function getSchedule_user_1() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year : Year      , 
        bar  : 'pab'     , 
        userNumber: 1
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#WrapR_pab .fact-row-1').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="1" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#WrapR_pab .fact-row-1').append(
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
        year : Year      , 
        bar  : 'pab'     , 
        userNumber: 2
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#WrapR_pab .fact-row-2').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="2" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#WrapR_pab .fact-row-2').append(
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
        year : Year      , 
        bar  : 'pab'     , 
        userNumber: 3
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#WrapR_pab .fact-row-3').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="3" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#WrapR_pab .fact-row-3').append(
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
        year : Year      , 
        bar  : 'pab'     , 
        userNumber: 4
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#WrapR_pab .fact-row-4').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="4" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#WrapR_pab .fact-row-4').append(
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
        year : Year      , 
        bar  : 'pab'     , 
        userNumber: 5
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#WrapR_pab .fact-row-5').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="5" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#WrapR_pab .fact-row-5').append(
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
    function reverseEachWorkDay(){

            $($("#WrapR_pab .row-1 .dayGrid").get().reverse()).each(function() {
                scoreR1++;
                if(scoreR1==8){scoreR1=1}
                if(scoreR1==5 || scoreR1==6 || scoreR1==7){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#WrapR_pab .row-2 .dayGrid").get().reverse()).each(function() {
                scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#WrapR_pab .row-3 .dayGrid").get().reverse()).each(function() {
                scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#WrapR_pab .row-4 .dayGrid").get().reverse()).each(function() {
                scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#WrapR_pab .row-5 .dayGrid").get().reverse()).each(function() {
                scoreR5++;
                if(scoreR5==5){scoreR5=1}
                if(scoreR5==3 || scoreR5==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each
            
    }

    function cycleWorkDay() {

        $.each($('#WrapR_pab .row-1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==8){scoreR1=1}
                if(scoreR1==5 || scoreR1==6 || scoreR1==7){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        });//end R1

        $.each($('#WrapR_pab .row-2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        }); //end R2

        $.each($('#WrapR_pab .row-3 .dayGrid'), function() { 
            scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        }); //end R3

        $.each($('#WrapR_pab .row-4 .dayGrid'), function() { 
            scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        });//end R4 

        $.each($('#WrapR_pab .row-5 .dayGrid'), function() { 
            scoreR5++;
                if(scoreR5==5){scoreR5=1}
                if(scoreR5==3 || scoreR5==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                }
        });//end R5
    }//end cycleWorkDay
	
	prinGrid()       ; //вызываем печать сетки дней
	cycleWorkDay()   ; //вызываем циклы расчета рабочих дней

        /*--------------------GET запросы-----------------*/
      /*----тут клик по клеточке изменяет рабочий/выходной ----*/ 
    $('#WrapR_pab .fact').on('click','.dayGrid',function(){
        if ($('#WrapR_pab .fact').hasClass('true-user')) {
            var dayNumber   =   $(this).attr('data-day')
                year        =   $('.table-rep-pab__numberYear'),
                user        =   $(this).attr('data-user'),
                bar         =   'pab';

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
    $("#Table-Rep-pab-next_Month").click(function(e){        
        if (Month==12) {
            Year++
            Month = 0;
        }//eсли наступил довый год то добавить год и перейти на январь

        var preLastArr                  =   $('body #WrapR_pab .row-1 .dayGrid'); //узнаем сколько элементов есть
        var preLastElementL2            =   preLastArr[preLastArr.length-2];//выберем предпоследний HTML элемент
        var preLastElementL3            =   preLastArr[preLastArr.length-3];//выберем третий с конца HTML элемент
        var preLastElementL4            =   preLastArr[preLastArr.length-4];//выберем четвертый с конца HTML элемент

        var preLastArr2                 =   $('body #WrapR_pab .row-2 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement2             =   preLastArr2[preLastArr2.length-2];//выберем предпоследний HTML элемент

        var preLastArr3                 =   $('body #WrapR_pab .row-3 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement3             =   preLastArr3[preLastArr3.length-2];//выберем предпоследний HTML элемент

        var preLastArr4                 =   $('body #WrapR_pab .row-4 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement4             =   preLastArr4[preLastArr4.length-2];//выберем предпоследний HTML элемент

        /*------------------------------------условия для работы графика --------------------------------------------------------*/

        if ($('body #WrapR_pab .row-1 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== false &&
            $(preLastElementL4).hasClass('black')=== false)
             {
            scoreR1 = 4;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== false &&
            $(preLastElementL4).hasClass('black')=== true)
             {
            scoreR1 = 3;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== true &&
            $(preLastElementL4).hasClass('black')=== true)
             {
            scoreR1 = 2;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== true &&
            $(preLastElementL3).hasClass('black')=== true &&
            $(preLastElementL4).hasClass('black')=== true)
             {
            scoreR1 = 1;
        }
        
        /*------------------------------------end row1--------------------------------------------*/


        if ($('body #WrapR_pab   .row-2 .dayGrid:last-child').hasClass('black')=== false  &&  
            $(preLastElement2).hasClass('black')=== false) {
            scoreR2 = 2;
        }
        if ($('body #WrapR_pab   .row-2 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElement2).hasClass('balck')=== false) {
            scoreR2 = 3;
        }
        if ($('body #WrapR_pab   .row-2 .dayGrid:last-child').hasClass('black')=== true   &&  
            $(preLastElement2).hasClass('black')=== true) {
            scoreR2 = 0;
        }
        if ($('body #WrapR_pab  .row-2 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElement2).hasClass('black')=== true) {
            scoreR2 = 1;
        }

        /*------------------------------------end row2--------------------------------------------*/

        if ($('body #WrapR_pab  .row-3 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElement3).hasClass('black')=== false) {
            scoreR3 = 2;
        }
        if ($('body #WrapR_pab  .row-3 .dayGrid:last-child').hasClass('black')=== true    &&  
            $(preLastElement3).hasClass('balck')=== false) {
            scoreR3 = 3;
        }
        if ($('body #WrapR_pab  .row-3 .dayGrid:last-child').hasClass('black')=== true    &&  
            $(preLastElement3).hasClass('black')=== true) {
            scoreR3 = 0;
        }
        if ($('body #WrapR_pab .row-3 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElement3).hasClass('black')=== true) {
            scoreR3 = 1;
        }

        /*------------------------------------end row3--------------------------------------------*/


        if ($('body #WrapR_pab .row-4 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElement4).hasClass('black')=== false) {
            scoreR4 = 2;
        }
        if ($('body #WrapR_pab .row-4 .dayGrid:last-child').hasClass('black')=== true    &&  
            $(preLastElement4).hasClass('balck')=== false) {
            scoreR4 = 3;
        }
        if ($('body #WrapR_pab .row-4 .dayGrid:last-child').hasClass('black')=== true    &&  
            $(preLastElement4).hasClass('black')=== true) {
            scoreR4 = 0;
        }
        if ($('body #WrapR_pab .row-4 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElement4).hasClass('black')=== true) {
            scoreR4 = 1;
        }

        /*------------------------------------end row4--------------------------------------------*/


        e.preventDefault(); //отмена перехода по ссылке
        $('#WrapR_pab .dayGrid').remove()   ; //удалить старую сетку рабочих дней
        $('#WrapR_pab .numder-day').remove(); //удалить числа месяца
        $('#WrapR_pab .table-schedule__day-of-the-week').remove(); //удалить дни недели
        Month++         ; // переход на следующий месяц
        prinGrid()      ; // вызываем печать общей сетки графика
        cycleWorkDay()  ; //циклы для расписания наступившего нового месяца

        getSchedule_user_1() ; // тут из sql вытягиваем график по факту
        getSchedule_user_2() ; // тут из sql вытягиваем график по факту
        getSchedule_user_3() ; // тут из sql вытягиваем график по факту
        getSchedule_user_4() ; // тут из sql вытягиваем график по факту
        getSchedule_user_5() ; // тут из sql вытягиваем график по факту
    });//end click  
	
    	
 $("#Table-Rep-pab-backMonth").click(function(e){
        if (Month==1) {
            Year--;
            Month = 13;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:eq(0)').hasClass('black')=== false &&  
            $('body #WrapR_pab .row-1 .dayGrid:eq(1)').hasClass('black')=== false &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(2)').hasClass('black')=== false &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(3)').hasClass('black')=== false)
             {
            scoreR1 = 4;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:eq(0)').hasClass('black')=== false &&  
            $('body #WrapR_pab .row-1 .dayGrid:eq(1)').hasClass('black')=== false &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(2)').hasClass('black')=== false &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(3)').hasClass('black')=== true)
             {
            scoreR1 = 3;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:eq(0)').hasClass('black')=== false &&  
            $('body #WrapR_pab .row-1 .dayGrid:eq(1)').hasClass('black')=== false &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(2)').hasClass('black')=== true &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(3)').hasClass('black')=== true)
             {
            scoreR1 = 2;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:eq(0)').hasClass('black')=== false &&  
            $('body #WrapR_pab .row-1 .dayGrid:eq(1)').hasClass('black')=== true &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(2)').hasClass('black')=== true &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(3)').hasClass('black')=== true)
             {
            scoreR1 = 1;
        }


        if ($('body #WrapR_pab .row-1 .dayGrid:eq(0)').hasClass('black')=== true  &&  
            $('body #WrapR_pab .row-1 .dayGrid:eq(1)').hasClass('black')=== false &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(2)').hasClass('black')=== false &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(3)').hasClass('black')=== false)
             {
            scoreR1 = 5;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:eq(0)').hasClass('black')=== true  &&  
            $('body #WrapR_pab .row-1 .dayGrid:eq(1)').hasClass('black')=== true  &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(2)').hasClass('black')=== false &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(3)').hasClass('black')=== false )
             {
            scoreR1 = 6;
        }

        if ($('body #WrapR_pab .row-1 .dayGrid:eq(0)').hasClass('black')=== true  &&  
            $('body #WrapR_pab .row-1 .dayGrid:eq(1)').hasClass('black')=== true  &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(2)').hasClass('black')=== true  &&
            $('body #WrapR_pab .row-1 .dayGrid:eq(3)').hasClass('black')=== false )
             {
            scoreR1 = 0;
        }

        /*------------------------------------end row1--------------------------------------------*/


        if ($('body #WrapR_pab .row-2 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body #WrapR_pab .row-2 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR2 = 2;
        }

        if ($('body #WrapR_pab .row-2 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body #WrapR_pab .row-2 .dayGrid:eq(1)').hasClass('black') === false) {
            scoreR2 = 3;
        }

        if ($('body #WrapR_pab .row-2 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body #WrapR_pab .row-2 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR2 = 0;
        }

        if ($('body #WrapR_pab .row-2 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body #WrapR_pab .row-2 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR2 = 1 ;
        }

        /*------------------------------------end row2--------------------------------------------*/        


        if ($('body  #WrapR_pab .row-3 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body  #WrapR_pab .row-3 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR3 = 2;
        }

        if ($('body  #WrapR_pab .row-3 .dayGrid:eq(0)').hasClass('black') === true    &&  
            $('body  #WrapR_pab .row-3 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR3 = 3;
        }

        if ($('body  #WrapR_pab .row-3 .dayGrid:eq(0)').hasClass('black') === true    &&  
            $('body  #WrapR_pab .row-3 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR3 = 0;
        }

        if ($('body  #WrapR_pab .row-3 .dayGrid:eq(0)').hasClass('black') === false   &&  
            $('body  #WrapR_pab .row-3 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR3 = 1 ;
        }

        /*------------------------------------end row3--------------------------------------------*/


        if ($('body #WrapR_pab .row-4 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body #WrapR_pab .row-4 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR4 = 2;
        }

        if ($('body #WrapR_pab .row-4 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body #WrapR_pab .row-4 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR4 = 3;
        }

        if ($('body #WrapR_pab .row-4 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body #WrapR_pab .row-4 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR4 = 0;
        }

        if ($('body #WrapR_pab .row-4 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body #WrapR_pab .row-4 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR4 = 1 ;
        }
        /*------------------------------------end row4--------------------------------------------*/
        if ($('body #WrapR_pab .row-5 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body #WrapR_pab .row-5 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR5 = 2;
        }

        if ($('body #WrapR_pab .row-5 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body #WrapR_pab .row-5 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR5 = 3;
        }

        if ($('body #WrapR_pab .row-5 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body #WrapR_pab .row-5 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR5 = 0;
        }

        if ($('body #WrapR_pab .row-5 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body #WrapR_pab .row-5 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR5 = 1 ;
        }
        /*------------------------------------end row5--------------------------------------------*/
        e.preventDefault();//отмена перехода
        Month--;

        $('#WrapR_pab .month p').text(nameMonth[Month-1]) ;//Печать названия нового месяца
        $('#WrapR_pab .month p').text(Year)  ; //печатаем номер года
        $('#WrapR_pab .dayGrid').remove()    ; //удалить старую сетку рабочих дней
        $('#WrapR_pab .numder-day').remove() ; //удалить числа месяца
        $('#WrapR_pab .table-schedule__day-of-the-week').remove() ; //удалить дни недели
        prinGrid()           ; //вызываем печать сетки дней 
        reverseEachWorkDay() ; //печатаем раочие дни
        getSchedule_user_1() ;// тут из sql вытягиваем график по факту
        getSchedule_user_2() ;// тут из sql вытягиваем график по факту
        getSchedule_user_3() ;// тут из sql вытягиваем график по факту
        getSchedule_user_4() ;// тут из sql вытягиваем график по факту
        getSchedule_user_5() ;// тут из sql вытягиваем график по факту
    });//end click  
    
    /*-----переводим календарь на текущий месяц-----*/
	var	nowDate		=	new Date(),
        newYear     =   nowDate.getFullYear(),
        Year        =   newYear,
		nowMonth	=	nowDate.getMonth();

	for (var i = 0; i < nowMonth; i++) {$('#Table-Rep-pab-next_Month').trigger('click');}

    /*--Эти функции должны вызываться после того как перевели календарь на текущий месяц--*/ 
    /*-- Они будут нужны только в январе когда триггер не будет срабатывать
      -- и функции не вызовуся по событию click на стрелку следующий месяц  --*/
    if ( (Month-1) == 0 ) {
        getSchedule_user_1() ;// тут из sql вытягиваем график по факту
        getSchedule_user_2() ;// тут из sql вытягиваем график по факту
        getSchedule_user_3() ;// тут из sql вытягиваем график по факту
        getSchedule_user_4() ;// тут из sql вытягиваем график по факту
        getSchedule_user_5() ;// тут из sql вытягиваем график по факту
    }
});