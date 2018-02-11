$( document ).ready(function() {
	function dInMonth(month,year){return new Date(year, month, 0).getDate(); console.log(year + month)};//узнаем сколько дней в месяце
	function dow(Month,Day) {return new Date(Year,Month,Day).getDay();}//узнаем день недели
    function countMoney(dayWork){ return Math.floor(7000/dayWork)}    
    function calculateMoney(){
        var workingDayR1 = $('#calendarMainWrap .row1 .black').length;// Кол-во выходов по графику
        var workingDayR2 = $('#calendarMainWrap .row2 .black').length;// Кол-во выходов по графику
        var workingDayR3 = $('#calendarMainWrap .row3 .black').length;// Кол-во выходов по графику
        var workingDayR4 = $('#calendarMainWrap .row4 .black').length;// Кол-во выходов по графику

        var workingDayR1Fact = workingDayR1; //Кол-во выходов по факту

        $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
        $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
        $('.visits').text('Выходов по факту: ' + workingDayR1Fact);
        $('.payment').text('Оплата: ' + count + 'грн');

        //Щелчек по клеточке (выбор рабочий или выходной)
        $('#calendarMainWrap .row1 .dayGrid').click(function(){
            if ($(this).hasClass('black') || $(this).hasClass('addBlack') === true) { //проверям на рабочий день

                    $(this).removeClass('black addBlack'); //eсли рабочий то снять класс (черный)
                    count-= countMoney(workingDayR1); //отнять с оплаты цену за выход на работу
                    workingDayR1Fact--;//Снять один выход по факту

                    $('.workingDay').text('Количество смен по графику: ' + workingDayR1);  
                    $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
                    $('.visits').html('Выходов по факту: ' + '<span>' + workingDayR1Fact + '</span>');
                    $('.payment').html('Оплата: ' + '<span>' + count + 'грн' + '</span>');

            }else{ //если класс не стоит (выходной) тогда добавить класс (вырабрать рабочую смену)

                $(this).addClass('addBlack');

                count+= countMoney(workingDayR1); // добавить к оплате цену за выход на работу
                workingDayR1Fact++;//Добавить один выход по факту

                $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
                $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
                $('.visits').html('Выходов по факту: ' + '<span>' + workingDayR1Fact + '</span>');
                $('.payment').html('Оплата: ' + '<span>' + count + 'грн' + ' ' + '</span>');
            }

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
        for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
            $('#calendarMainWrap .wrapDay').append(
            '<div class="collum"><div class="dayOfWeak">' + nameDayW[dow(Month-1,i)] + '</div><div class="numberOfWeak">' + i + '</div><div class="row1"><div class="dayGrid"></div></div><div class="row2"><div class="dayGrid"></div></div><div class="row3"><div class="dayGrid"></div></div><div class="row4"><div class="dayGrid"></div></div></div>');
            };

            $($("#calendarMainWrap .row1 .dayGrid").get().reverse()).each(function() {
                scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($("#calendarMainWrap .row2 .dayGrid").get().reverse()).each(function() {
                scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($("#calendarMainWrap .row3 .dayGrid").get().reverse()).each(function() {
                scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($("#calendarMainWrap .row4 .dayGrid").get().reverse()).each(function() {
                scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                
                }});//end reverse.each
    }

    function cycleWorkDay() {

        $.each($('#table-schedule-reporter .row-1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).attr('bgcolor','#000');
                }
        });//end R1

        $.each($('#table-schedule-reporter .row-2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).attr('bgcolor','#000');
                }
        }); //end R2

        $.each($('#table-schedule-reporter .row-3 .dayGrid'), function() { 
            scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).attr('bgcolor','#000');
                }
        }); //end R3

        $.each($('#table-schedule-reporter .row-4 .dayGrid'), function() { 
            scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).attr('bgcolor','#000');
                }
        });//end R4 
        ///////////////////////////-end new table-//////////////////////////////////

        $.each($('#calendarMainWrap .row1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==5){scoreR1=1}
                if(scoreR1==3 || scoreR1==4){
                    $(this).addClass('black');
                }
        });//end R1

        $.each($('#calendarMainWrap .row2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==5){scoreR2=1}
                if(scoreR2==3 || scoreR2==4){
                    $(this).addClass('black');
                }
        }); //end R2

        $.each($('#calendarMainWrap .row3 .dayGrid'), function() { 
            scoreR3++;
                if(scoreR3==5){scoreR3=1}
                if(scoreR3==3 || scoreR3==4){
                    $(this).addClass('black');
                }
        }); //end R3

        $.each($('#calendarMainWrap .row4 .dayGrid'), function() { 
            scoreR4++;
                if(scoreR4==5){scoreR4=1}
                if(scoreR4==3 || scoreR4==4){
                    $(this).addClass('black');
                }
        });//end R4 
    }//end cycleWorkDay
	
	/*------------------------------------установки календаря------------------------------------------------------*/
	var
		nameMonth	=	['Январь','Февраль','Март','Апрель','Ласковый Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		nameDayW	=	['вс','пн','вт','ср','чт','пт','сб'],
		tempDay		=	new	Date(2018,0,1), //получаем  дату с которой ведем отсчет календаря
		Month 		=	tempDay.getMonth()+1,//получаем месяц (от 0 до 11)
		Year 		= 	tempDay.getFullYear(),// получаем год
		Day 		=	tempDay.getDate(), //получаем число
		daysInMonth	=	dInMonth(Month-1,Year),//Количество дней в месяц
		scoreR1		=	1,
		scoreR2		=	4,	
		scoreR3		=	3,	
		scoreR4		=	2,
        count       =   7000;

	$('#calendarMainWrap .month p,.month p').append(nameMonth[Month-1]);//имя месяца
    $('#calendarMainWrap .month p,.month p').append('<br><sub>' + Year +'</sub>');//год

    //печатаем ячейки \день недели\число месяца\смены
	for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
		$('#calendarMainWrap .wrapDay').append(
			'<div class="collum"><div class="dayOfWeak">' + nameDayW[dow(Month-1,i)] + '</div><div class="numberOfWeak">' + i + '</div><div id="one" class="row1"><div class="dayGrid"></div></div><div class="row2"><div class="dayGrid"></div></div><div class="row3"><div class="dayGrid"></div></div><div class="row4"><div class="dayGrid"></div></div></div>');
	};
	
    //в этом цикле заполняется сетка графика (дни, числа, сетка)
    for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
        //тут печатаются дни недели
        $('.table-schedule-reporter #day-of-the-week').append(
                '<td class="table-schedule_border1 table-schedule__day-of-the-week">'+nameDayW[dow(Month-1,i)]+'</td>');

        //тут печатаются числа месяца
        $('.table-schedule-reporter #number-day').append(
                     '<td class="table-schedule_border1">'+i+'</td>'
            );

        //тут создаются ячейки для графика
        $('.table-schedule-reporter .row-1').append(
            '<td class="table-schedule_border1 dayGrid"></td>'
            );
        $('.table-schedule-reporter .row-2').append(
            '<td class="table-schedule_border1 dayGrid"></td>'
            );
        $('.table-schedule-reporter .row-3').append(
            '<td class="table-schedule_border1 dayGrid"></td>'
            );
        $('.table-schedule-reporter .row-4').append(
            '<td class="table-schedule_border1 dayGrid"></td>'
            );
        
    }
	cycleWorkDay();//вызываем циклы расчета рабочих дней
    calculateMoney();//вызываем расчет зароботной платы


	/*-------------------------------------------выбор следующего месяца----------------------------------------------------*/

    $("#calendarMainWrap #nextMonth").click(function(e){
        
        if (Month==12) {
            Year++
            Month = 0;
        }//eсли наступил довый год то добавить год и перейти на январь

        var preLastArr              =   $('body #calendarMainWrap .row1 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement          =   preLastArr[preLastArr.length-2];//выберем предпоследний HTML элемент

        var preLastArr2             =   $('body #calendarMainWrap .row2 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement2         =   preLastArr2[preLastArr2.length-2];//выберем предпоследний HTML элемент

        var preLastArr3             =   $('body #calendarMainWrap .row3 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement3         =   preLastArr3[preLastArr3.length-2];//выберем предпоследний HTML элемент

        var preLastArr4             =   $('body #calendarMainWrap .row4 .dayGrid'); //узнаем сколько элементов есть
        var preLastElement4         =   preLastArr4[preLastArr4.length-2];//выберем предпоследний HTML элемент

        /*------------------------------------условия для работы графика --------------------------------------------------------*/

        if ($('body #calendarMainWrap .collum:last-child .row1 .dayGrid').hasClass('black')=== false    &&  
            $(preLastElement).hasClass('black')=== false) {
            scoreR1 = 2;
        }
        if ($('body #calendarMainWrap .collum:last-child .row1 .dayGrid').hasClass('black')=== true &&  
            $(preLastElement).hasClass('balck')=== false) {
            scoreR1 = 3;
        }
        if ($('body #calendarMainWrap .collum:last-child .row1 .dayGrid').hasClass('black')=== true &&  
            $(preLastElement).hasClass('black')=== true) {
            scoreR1 = 0;
        }
        if ($('body #calendarMainWrap .collum:last-child .row1 .dayGrid').hasClass('black')=== false    &&  
            $(preLastElement).hasClass('black')=== true) {
            scoreR1 = 1;
        }

        /*------------------------------------end row1--------------------------------------------*/


        if ($('body #calendarMainWrap  .collum:last-child .row2 .dayGrid').hasClass('black')=== false   &&  
            $(preLastElement2).hasClass('black')=== false) {
            scoreR2 = 2;
        }
        if ($('body #calendarMainWrap  .collum:last-child .row2 .dayGrid').hasClass('black')=== true    &&  
            $(preLastElement2).hasClass('balck')=== false) {
            scoreR2 = 3;
        }
        if ($('body #calendarMainWrap  .collum:last-child .row2 .dayGrid').hasClass('black')=== true    &&  
            $(preLastElement2).hasClass('black')=== true) {
            scoreR2 = 0;
        }
        if ($('body #calendarMainWrap .collum:last-child .row2 .dayGrid').hasClass('black')=== false    &&  
            $(preLastElement2).hasClass('black')=== true) {
            scoreR2 = 1;
        }

        /*------------------------------------end row2--------------------------------------------*/

        if ($('body #calendarMainWrap .collum:last-child .row3 .dayGrid').hasClass('black')=== false    &&  
            $(preLastElement3).hasClass('black')=== false) {
            scoreR3 = 2;
        }
        if ($('body #calendarMainWrap .collum:last-child .row3 .dayGrid').hasClass('black')=== true &&  
            $(preLastElement3).hasClass('balck')=== false) {
            scoreR3 = 3;
        }
        if ($('body #calendarMainWrap .collum:last-child .row3 .dayGrid').hasClass('black')=== true &&  
            $(preLastElement3).hasClass('black')=== true) {
            scoreR3 = 0;
        }
        if ($('body #calendarMainWrap .collum:last-child .row3 .dayGrid').hasClass('black')=== false    &&  
            $(preLastElement3).hasClass('black')=== true) {
            scoreR3 = 1;
        }

        /*------------------------------------end row3--------------------------------------------*/


        if ($('body #calendarMainWrap .collum:last-child .row4 .dayGrid').hasClass('black')=== false    &&  
            $(preLastElement4).hasClass('black')=== false) {
            scoreR4 = 2;
        }
        if ($('body #calendarMainWrap .collum:last-child .row4 .dayGrid').hasClass('black')=== true &&  
            $(preLastElement4).hasClass('balck')=== false) {
            scoreR4 = 3;
        }
        if ($('body #calendarMainWrap .collum:last-child .row4 .dayGrid').hasClass('black')=== true &&  
            $(preLastElement4).hasClass('black')=== true) {
            scoreR4 = 0;
        }
        if ($('body #calendarMainWrap .collum:last-child .row4 .dayGrid').hasClass('black')=== false    &&  
            $(preLastElement4).hasClass('black')=== true) {
            scoreR4 = 1;
        }

        /*------------------------------------end row4--------------------------------------------*/


        e.preventDefault();//отмеа перехода
        Month++; // переход на следующий месяц

        $('#calendarMainWrap .month p').text(nameMonth[Month-1]);//Печать названия нового месяца
        $('#calendarMainWrap .month p').append('<br><sub>' + Year +'</sub>');
        $('#calendarMainWrap .wrapDay .collum').remove();//удалить старый месяц

        for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
            $('#calendarMainWrap .wrapDay').append(
            '<div class="collum"><div class="dayOfWeak">' + nameDayW[dow(Month-1,i)] + '</div><div class="numberOfWeak">' + i + '</div><div class="row1"><div class="dayGrid"></div></div><div class="row2"><div class="dayGrid"></div></div><div class="row3"><div class="dayGrid"></div></div><div class="row4"><div class="dayGrid"></div></div></div>');
        };//печатаем новый месяц
        //end for

        cycleWorkDay();//циклы для расписания наступившего нового месяца
        calculateMoney();//Рабоота калькулятора оплаты труда
    });//end click  
	
    	
    $(" #calendarMainWrap #backMonth").click(function(e){
        if (Month==1) {
            Year--;
            Month = 13;
        }
        

        if ($('body #calendarMainWrap .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === false &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === false) {

            scoreR1 = 2;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === true  &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === false) {

            scoreR1 = 3;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === true  &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === true) {

            scoreR1 = 0;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === false &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === true) {

            scoreR1 = 1 ;
        }


        /*------------------------------------end row1--------------------------------------------*/


        if ($('body #calendarMainWrap .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false) {

            scoreR2 = 2;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true  &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false) {

            scoreR2 = 3;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true  &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true) {

            scoreR2 = 0;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true) {

            scoreR2 = 1 ;
        }

        /*------------------------------------end row2--------------------------------------------*/        


        if ($('body  #calendarMainWrap .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === false    &&  
            $('body  #calendarMainWrap .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === false) {

            scoreR3 = 2;
        }

        if ($('body  #calendarMainWrap .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === true &&  
            $('body  #calendarMainWrap .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === false) {

            scoreR3 = 3;
        }

        if ($('body  #calendarMainWrap .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === true &&  
            $('body  #calendarMainWrap .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === true) {

            scoreR3 = 0;
        }

        if ($('body  #calendarMainWrap .collum:nth-child(1) .row3 .dayGrid').hasClass('black') === false    &&  
            $('body  #calendarMainWrap .collum:nth-child(2) .row3 .dayGrid').hasClass('black') === true) {

            scoreR3 = 1 ;
        }

        /*------------------------------------end row3--------------------------------------------*/


        if ($('body #calendarMainWrap .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === false &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === false) {

            scoreR4 = 2;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === true  &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === false) {

            scoreR4 = 3;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === true  &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === true) {

            scoreR4 = 0;
        }

        if ($('body #calendarMainWrap .collum:nth-child(1) .row4 .dayGrid').hasClass('black') === false &&  
            $('body #calendarMainWrap .collum:nth-child(2) .row4 .dayGrid').hasClass('black') === true) {

            scoreR4 = 1 ;
        }
        /*------------------------------------end row4--------------------------------------------*/
        e.preventDefault();//отмена перехода
        Month--;

        $('#calendarMainWrap .month p').text(nameMonth[Month-1]);//Печать названия нового месяца
        $('#calendarMainWrap .month p').append('<br><sub>' + Year +'</sub>');
        $('#calendarMainWrap .wrapDay .collum').remove();



        reverseEachWorkDay();//печатаем раочие дни
        calculateMoney();//расчет оплаты заработной платы
    });//end click  

	var	nowDate		=	new Date(),
        newYear     =   nowDate.getFullYear(),
        Year        =   newYear,
		nowMonth	=	nowDate.getMonth();
	for (var i = 0; i < nowMonth; ++i) {$('#nextMonth').trigger('click'); console.log(Year + ' ' + newYear)}
		
});