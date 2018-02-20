$( document ).ready(function() {
    /*------------------------------------установки календаря------------------------------------------------------*/
    var
        nameMonth   =   ['Январь','Февраль','Март','Апрель','Ласковый Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        nameDayW    =   ['вс','пн','вт','ср','чт','пт','сб'],
        tempDay     =   new Date(2018,0,1), //получаем  дату с которой ведем отсчет календаря
        Month       =   tempDay.getMonth()+1,//получаем месяц (от 0 до 11)
        Year        =   tempDay.getFullYear(),// получаем год
        Day         =   tempDay.getDate(), //получаем число
        daysInMonth =   dInMonth(Month-1,Year),//Количество дней в месяц
        scoreR1     =   1,
        scoreR2     =   4,  
        scoreR3     =   3,  
        scoreR4     =   2,
        count       =   7000,
        m           =   ['january','february','march','april','may','june','july','august','september','october','november','december'];

    $('.table-rep__nameMonth').text(nameMonth[Month-1]);//имя месяца
    $('.table-rep__numberYear').text(Year);//имя месяца

    /*------------------------------------ Закончились установки календаря------------------------------------------------------*/

    //эта функция печатает график фактических выходов
    function getSchedule_user_1() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'rep-cafe', 
        userNumber: 1
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#table-schedule-reporter .fact-row-1').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="1" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#table-schedule-reporter .fact-row-1').append(
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
        //эта функция печатает график фактических выходов
    function getSchedule_user_2() {
        //посылает запрос с текущим месяцем
        $.get("/php/script/schedule_Day.php",{ 
        month: m[Month-1], 
        year: Year, 
        bar: 'rep-cafe', 
        userNumber: 2
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#table-schedule-reporter .fact-row-2').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="2" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#table-schedule-reporter .fact-row-2').append(
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
        bar: 'rep-cafe', 
        userNumber: 3
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#table-schedule-reporter .fact-row-3').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="3" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#table-schedule-reporter .fact-row-3').append(
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
        bar: 'rep-cafe', 
        userNumber: 4
        }, 
        function(data) {
            //получает ответ JSON массив true для рабочих ней и false для выходных
            data = $.parseJSON(data);
            for (var i = 0, d = 1, a = 1; i < dInMonth(Month,Year); i++) {
                if (data[i] === 'true') {   
                    $('#table-schedule-reporter .fact-row-4').append(
                    '<td class="table-schedule_border1 dayGrid  black" data-day="'+d+'" data-user="4" bgcolor="#000"></td>'
                    );        
                }else if(data[i] === 'false'){
                    $('#table-schedule-reporter .fact-row-4').append(
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
    
	function dInMonth(month,year){return new Date(year, month, 0).getDate();};//узнаем сколько дней в месяце
	function dow(Month,Day) {return new Date(Year,Month,Day).getDay();}//узнаем день недели
    function countMoney(dayWork){ return Math.floor(7000/dayWork)}    
    function prinGrid() {
        //в этом цикле заполняется сетка графика (дни, числа, сетка)
        for (var i = 1, d = 1, a = 1; i < dInMonth(Month,Year)+1; i++) {
        //тут печатаются дни недели
        $('.table-schedule-reporter #day-of-the-week').append(
                '<td class="table-schedule_border1 table-schedule__day-of-the-week">'+nameDayW[dow(Month-1,i)]+'</td>');

        //тут печатаются числа месяца
        $('.table-schedule-reporter #number-day').append(
                     '<td class="table-schedule_border1 numder-day">'+i+'</td>'
            );

        //тут создаются ячейки для графика
        $('.table-schedule-reporter .row-1').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-reporter .row-2').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-reporter .row-3').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        $('.table-schedule-reporter .row-4').append(
            '<td class="table-schedule_border1 dayGrid collum'+i+'"></td>'
            );
        }
    }
    function calculateMoney(){
        var workingDayR1 = $('#table-schedule-reporter .row-1 .black').length;// Кол-во выходов по графику
        var workingDayR2 = $('#table-schedule-reporter .row-2 .black').length;// Кол-во выходов по графику
        var workingDayR3 = $('#table-schedule-reporter .row-3 .black').length;// Кол-во выходов по графику
        var workingDayR4 = $('#table-schedule-reporter .row-4 .black').length;// Кол-во выходов по графику

        var workingDayR1Fact = $('#table-schedule-reporter .fact-row-1 .black').length;// Кол-во выходов по факту
        // var workingDayR2 = $('#table-schedule-reporter .fact-row-2 .black').length;// Кол-во выходов по факту
        // var workingDayR3 = $('#table-schedule-reporter .fact-row-3 .black').length;// Кол-во выходов по факту
        // var workingDayR4 = $('#table-schedule-reporter .fact-row-4 .black').length;// Кол-во выходов по факту

        $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
        $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
        $('.visits').text('Выходов по факту: ' + workingDayR1Fact);
        $('.payment').text('Оплата: ' + count + 'грн');

        //Щелчек по клеточке (выбор рабочий или выходной)
        $('#table-schedule-reporter .fact-row-1 .dayGrid').click(function(){
            // if ($(this).hasClass('black') || $(this).hasClass('addBlack') === true) { //проверям на рабочий день

            //         $(this).removeClass('black addBlack'); //eсли рабочий то снять класс (черный)
            //         $(this).attr('bgcolor','#fff');
            //         count-= countMoney(workingDayR1); //отнять с оплаты цену за выход на работу
            //         workingDayR1Fact--;//Снять один выход по факту

            //         $('.workingDay').text('Количество смен по графику: ' + workingDayR1);  
            //         $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
            //         $('.visits').html('Выходов по факту: ' + '<span>' + workingDayR1Fact + '</span>');
            //         $('.payment').html('Оплата: ' + '<span>' + count + 'грн' + '</span>');

            // }else{ //если класс не стоит (выходной) тогда добавить класс (вырабрать рабочую смену)

            //     $(this).addClass('addBlack');
            //     $(this).attr('bgcolor','#000');

            //     count+= countMoney(workingDayR1); // добавить к оплате цену за выход на работу
            //     workingDayR1Fact++;//Добавить один выход по факту

            //     $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
            //     $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
            //     $('.visits').html('Выходов по факту: ' + '<span>' + workingDayR1Fact + '</span>');
            //     $('.payment').html('Оплата: ' + '<span>' + count + 'грн' + ' ' + '</span>');
            // }

            if (count<7000) {

                $('.payment span').append('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
                $('.payment span').addClass('lostMoney');
            }

            if (count>7000) {
                $('.payment span').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
                $('.payment span').addClass('addMoney');

            }

            if (workingDayR1Fact > workingDayR1) {
                $('.visits span').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
                $('.visits span').addClass('addMoney');
            }
            if (workingDayR1Fact < workingDayR1) {
                $('.visits span').append('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
                $('.visits span').addClass('lostMoney');

            }
        });// end click
    }//end function calculateMoney
    function reverseEachWorkDay(){
            $($("#table-schedule-reporter .row-1 .dayGrid").get().reverse()).each(function() {
                scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#table-schedule-reporter .row-2 .dayGrid").get().reverse()).each(function() {
                scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#table-schedule-reporter .row-3 .dayGrid").get().reverse()).each(function() {
                scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

            $($("#table-schedule-reporter .row-4 .dayGrid").get().reverse()).each(function() {
                scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                    $(this).attr('bgcolor','#000');
                
                }});//end reverse.each

    }

    function cycleWorkDay() {

        $.each($('#table-schedule-reporter .row-1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        });//end R1

        $.each($('#table-schedule-reporter .row-2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        }); //end R2

        $.each($('#table-schedule-reporter .row-3 .dayGrid'), function() { 
            scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        }); //end R3

        $.each($('#table-schedule-reporter .row-4 .dayGrid'), function() { 
            scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).attr('bgcolor','#000');
                    $(this).addClass('black');
                }
        });//end R4 
        ///////////////////////////-end new table-//////////////////////////////////
    }//end cycleWorkDay

    /*--------------------GET запросы-----------------*/
      /*----тут клик по клеточке изменяет рабочий/выходной ----*/ 
    $('#table-schedule-reporter .fact').on('click','.dayGrid',function(){

        var dayNumber   =   $(this).attr('data-day'),
            year        =   $('.table-rep__numberYear'),
            user        =   $(this).attr('data-user');

        /* переключить рабочий/выходной день */
        if ($(this).hasClass('black')) {
            $.get("/php/script/changeDay.php", {day: dayNumber, value:'false', month: m[Month-1], year: Year, user: user}, function(data) {});
            $(this).removeClass('black')
            $(this).attr('bgcolor','#fff');
        }else{
            $.get("/php/script/changeDay.php", {day: dayNumber, value:'true' , month: m[Month-1], year: Year, user: user}, function(data) {});
            $(this).addClass('black')
            $(this).attr('bgcolor','#000');
        }

        
    });
    /*--------------Закончились GET запросы-----------*/
	
	
    
    prinGrid()           ; //вызываем печать сетки
	cycleWorkDay()       ; //вызываем циклы расчета рабочих дней
    calculateMoney()     ; //вызываем расчет зароботной платы
    
	/*-------------------------------------------выбор следующего месяца----------------------------------------------------*/

    $('#Table-Rep-next_Month').click(function(e){
        if (Month==12) {
            Year++
            Month = 0;
        }//eсли наступил довый год то добавить год и перейти на январь


        var preLastArr              =   $('body #table-schedule-reporter .row-1 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement          =   preLastArr[preLastArr.length-2]//выберем предпоследний HTML элемент

        var preLastArr2             =   $('body #table-schedule-reporter .row-2 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement2         =   preLastArr2[preLastArr2.length-2];//выберем предпоследний HTML элемент

        var preLastArr3             =   $('body #table-schedule-reporter .row-3 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement3         =   preLastArr3[preLastArr3.length-2];//выберем предпоследний HTML элемент

        var preLastArr4             =   $('body #table-schedule-reporter .row-4 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement4         =   preLastArr4[preLastArr4.length-2];//выберем предпоследний HTML элемент

        /*------------------------------------условия для работы графика --------------------------------------------------------*/

        if ($('body #table-schedule-reporter .row-1 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElement).hasClass('black')=== false) {
            scoreR1 = 2;
        }
        if ($('body #table-schedule-reporter .row-1 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElement).hasClass('balck')=== false) {
            scoreR1 = 3;
        }
        if ($('body #table-schedule-reporter .row-1 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElement).hasClass('black')=== true) {
            scoreR1 = 0;
        }
        if ($('body #table-schedule-reporter .row-1 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElement).hasClass('black')=== true) {
            scoreR1 = 1;
        }

        /*------------------------------------end row1--------------------------------------------*/


        if ($('body #table-schedule-reporter   .row-2 .dayGrid:last-child').hasClass('black')=== false   &&  
            $(preLastElement2).hasClass('black')=== false) {
            scoreR2 = 2;
        }
        if ($('body #table-schedule-reporter   .row-2 .dayGrid:last-child').hasClass('black')=== true    &&  
            $(preLastElement2).hasClass('balck')=== false) {
            scoreR2 = 3;
        }
        if ($('body #table-schedule-reporter   .row-2 .dayGrid:last-child').hasClass('black')=== true    &&  
            $(preLastElement2).hasClass('black')=== true) {
            scoreR2 = 0;
        }
        if ($('body #table-schedule-reporter  .row-2 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElement2).hasClass('black')=== true) {
            scoreR2 = 1;
        }

        /*------------------------------------end row2--------------------------------------------*/

        if ($('body #table-schedule-reporter .row-3 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElement3).hasClass('black')=== false) {
            scoreR3 = 2;
        }
        if ($('body #table-schedule-reporter .row-3 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElement3).hasClass('balck')=== false) {
            scoreR3 = 3;
        }
        if ($('body #table-schedule-reporter .row-3 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElement3).hasClass('black')=== true) {
            scoreR3 = 0;
        }
        if ($('body #table-schedule-reporter .row-3 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElement3).hasClass('black')=== true) {
            scoreR3 = 1;
        }

        /*------------------------------------end row3--------------------------------------------*/


        if ($('body #table-schedule-reporter  .row-4 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElement4).hasClass('black')=== false) {
            scoreR4 = 2;
        }
        if ($('body #table-schedule-reporter  .row-4 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElement4).hasClass('balck')=== false) {
            scoreR4 = 3;
        }
        if ($('body #table-schedule-reporter  .row-4 .dayGrid:last-child').hasClass('black')=== true &&  
            $(preLastElement4).hasClass('black')=== true) {
            scoreR4 = 0;
        }
        if ($('body #table-schedule-reporter  .row-4 .dayGrid:last-child').hasClass('black')=== false    &&  
            $(preLastElement4).hasClass('black')=== true) {
            scoreR4 = 1;
        }

        /*------------------------------------end row4--------------------------------------------*/


        e.preventDefault();//отмеа перехода
        Month++; // переход на следующий месяц

        $('.table-rep__nameMonth').text(nameMonth[Month-1]);//имя месяца
        $('.table-rep__numberYear').text(Year);//имя месяца
        $('#table-schedule-reporter .dayGrid').remove();//удалить старую сетку рабочих дней
        $('#table-schedule-reporter .numder-day').remove()//удалить числа месяца
        $('#table-schedule-reporter .table-schedule__day-of-the-week').remove()//удалить дни недели
        

        prinGrid()            ; // Печатаем всю сетку
        cycleWorkDay()        ; // циклы для расписания наступившего нового месяца
        calculateMoney()      ; // Рабоота калькулятора оплаты труда 
        getSchedule_user_1()  ; // тут из sql вытягиваем график по факту 
        getSchedule_user_2()  ; // тут из sql вытягиваем график по факту 
        getSchedule_user_3()  ; // тут из sql вытягиваем график по факту 
        getSchedule_user_4()  ; // тут из sql вытягиваем график по факту 
    });//end click  
	
    	
    $("#Table-Rep-backMonth").click(function(e){
        if (Month==1) {
            Year--;
            Month = 13;
        }
        

        if ($('body #table-schedule-reporter  .row-1 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #table-schedule-reporter  .row-1 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR1 = 2;
        }

        if ($('body #table-schedule-reporter  .row-1 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #table-schedule-reporter  .row-1 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR1 = 3;
        }

        if ($('body #table-schedule-reporter  .row-1 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #table-schedule-reporter  .row-1 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR1 = 0;
        }

        if ($('body #table-schedule-reporter  .row-1 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #table-schedule-reporter  .row-1 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR1 = 1 ;
        }


        /*------------------------------------end row1--------------------------------------------*/


        if ($('body #table-schedule-reporter .row-2 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #table-schedule-reporter .row-2 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR2 = 2;
        }

        if ($('body #table-schedule-reporter .row-2 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #table-schedule-reporter .row-2 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR2 = 3;
        }

        if ($('body #table-schedule-reporter .row-2 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #table-schedule-reporter .row-2 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR2 = 0;
        }

        if ($('body #table-schedule-reporter .row-2 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #table-schedule-reporter .row-2 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR2 = 1 ;
        }

        /*------------------------------------end row2--------------------------------------------*/        


        if ($('body  #table-schedule-reporter .row-3 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body  #table-schedule-reporter .row-3 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR3 = 2;
        }

        if ($('body  #table-schedule-reporter .row-3 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body  #table-schedule-reporter .row-3 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR3 = 3;
        }

        if ($('body  #table-schedule-reporter .row-3 .dayGrid:eq(0)').hasClass('black') === true &&  
            $('body  #table-schedule-reporter .row-3 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR3 = 0;
        }

        if ($('body  #table-schedule-reporter .row-3 .dayGrid:eq(0)').hasClass('black') === false    &&  
            $('body  #table-schedule-reporter .row-3 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR3 = 1 ;
        }

        /*------------------------------------end row3--------------------------------------------*/


        if ($('body #table-schedule-reporter .row-4 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #table-schedule-reporter .row-4 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR4 = 2;
        }

        if ($('body #table-schedule-reporter .row-4 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #table-schedule-reporter .row-4 .dayGrid:eq(1)').hasClass('black') === false) {

            scoreR4 = 3;
        }

        if ($('body #table-schedule-reporter .row-4 .dayGrid:eq(0)').hasClass('black') === true  &&  
            $('body #table-schedule-reporter .row-4 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR4 = 0;
        }

        if ($('body #table-schedule-reporter .row-4 .dayGrid:eq(0)').hasClass('black') === false &&  
            $('body #table-schedule-reporter .row-4 .dayGrid:eq(1)').hasClass('black') === true) {

            scoreR4 = 1 ;
        }
        /*------------------------------------end row4--------------------------------------------*/
        e.preventDefault();//отмена перехода
        Month--;

        $('.table-rep__nameMonth').text(nameMonth[Month-1]) ;//имя месяца
        $('.table-rep__numberYear').text(Year)              ;//имя месяца
        $('#table-schedule-reporter  .dayGrid').remove()    ; //удалить старую сетку рабочих дней
        $('#table-schedule-reporter  .numder-day').remove() ; //удалить числа месяца
        $('#table-schedule-reporter  .table-schedule__day-of-the-week').remove(); //удалить дни недели
        
        prinGrid()            ; // печатаем всю сетку для нового месяца
        reverseEachWorkDay()  ; // печатаем рабочие смены по графику
        calculateMoney()      ; // Рабоота калькулятора оплаты труда
        getSchedule_user_1()  ; // тут из sql вытягиваем график по факту 
        getSchedule_user_2()  ; // тут из sql вытягиваем график по факту 
        getSchedule_user_3()  ; // тут из sql вытягиваем график по факту  
        getSchedule_user_4()  ; // тут из sql вытягиваем график по факту 
    });//end click  

	var	nowDate		=	new Date(),
        newYear     =   nowDate.getFullYear(),
        Year        =   newYear,
		nowMonth	=	nowDate.getMonth();
	for (var i = 0; i < nowMonth; ++i) {$('#Table-Rep-next_Month').trigger('click');}    

    /*--Эти функции должны вызываться после того как перевели календарь на текущий месяц--*/ 
    /*-- Они будут нужны только в январе когда триггер не будет срабатывать
      -- и функции не вызовуся по событию click на стрелку следующий месяц  --*/
    if ( (Month-1) == 0 ) {
        getSchedule_user_1()  ; // тут из sql вытягиваем график по факту 
        getSchedule_user_2()  ; // тут из sql вытягиваем график по факту 
        getSchedule_user_3()  ; // тут из sql вытягиваем график по факту 
        getSchedule_user_4()  ; // тут из sql вытягиваем график по факту 
    }
});