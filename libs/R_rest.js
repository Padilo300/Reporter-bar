$( document ).ready(function() {

	function dInMonth(month,year){return new Date(year, month, 0).getDate(); console.log(year + month)};//узнаем сколько дней в месяце
	function dow(Month,Day) {return new Date(Year,Month,Day).getDay();}//узнаем день недели
    function countMoney(dayWork){ return Math.floor(7000/dayWork)}
    function prinMonthDayGrid(){
    		for (var i = 1; i < dInMonth(Month,Year)+1; i++) {
				$('#WrapR_rest .wrapDay').append(
					'<div class="collum"><div class="dayOfWeak">' + nameDayW[dow(Month-1,i)] + '</div><div class="numberOfWeak">' + i + '</div><div id="one" class="row1"><div class="dayGrid"></div></div><div class="row2"><div class="dayGrid"></div></div></div>');
			};//печатаем ячейки \день недели\число месяца\смены
    }
    function calculateMoney(){
        var workingDayR1 = $('#WrapR_rest .row1 .black').length;// Кол-во выходов по графику
        var workingDayR2 = $('#WrapR_rest .row2 .black').length;// Кол-во выходов по графику
        var workingDayR3 = $('#WrapR_rest .row3 .black').length;// Кол-во выходов по графику
        var workingDayR4 = $('#WrapR_rest .row4 .black').length;// Кол-во выходов по графику

        var workingDayR1Fact = workingDayR1; //Кол-во выходов по факту

        $('.workingDay').text('Количество смен по графику: ' + workingDayR1);
        $('.price').text('Оплата за выход: ' + countMoney(workingDayR1) + 'грн');
        $('.visits').text('Выходов по факту: ' + workingDayR1Fact);
        $('.payment').text('Оплата: ' + count + 'грн');

        $('#WrapR_rest .row1 .dayGrid').click(function(){
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
    	prinMonthDayGrid();//Печатаем общую сетку графика

            $($("#WrapR_rest .row1 .dayGrid").get().reverse()).each(function() {
                scoreR1++;
                if(scoreR1==7){scoreR1=1}
                if(scoreR1==4 || scoreR1==5 || scoreR1==6){
                    $(this).addClass('black');
                
                }});//end reverse.each

            $($("#WrapR_rest .row2 .dayGrid").get().reverse()).each(function() {
                scoreR2++;
                if(scoreR2==7){scoreR2=1}
                if(scoreR2==4 || scoreR2==5 || scoreR2==6){
                    $(this).addClass('black');
                
                }});//end reverse.each
            
    }

    function cycleWorkDay() {

        $.each($('#WrapR_rest .row1 .dayGrid'), function() { 
            scoreR1++;
                if(scoreR1==7){scoreR1=1}
                if(scoreR1==4 || scoreR1==5 || scoreR1==6){
                    $(this).addClass('black');
                }
        });//end R1

        $.each($('#WrapR_rest .row2 .dayGrid'), function() { 
            scoreR2++;
                if(scoreR2==7){scoreR2=1}
                if(scoreR2==4 || scoreR2==5 || scoreR2==6){
                    $(this).addClass('black');
                }
        }); //end R2
    }//end cycleWorkDay
	
	/*------------------------------------установки календаря------------------------------------------------------*/
	var
		nameMonth	=	['Январь','Февраль','Март','Апрель','Ласковый Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		nameDayW	=	['вс','пн','вт','ср','чт','пт','сб'],
		tempDay		=	new	Date(2018,0,1), //получаем  дату с которой ведем отсчет
		Month 		=	tempDay.getMonth()+1,//получаем месяц (от 0 до 11)
		Year 		= 	tempDay.getFullYear(),// получаем год
		Day 		=	tempDay.getDate(), //получаем число
		daysInMonth	=	dInMonth(Month-1,Year),//Количество дней в месяц
		scoreR1		=	5,
		scoreR2		=	2,	
        count       =   7000;

	$('#WrapR_rest .month p').append(nameMonth[Month-1]);//имя месяца
	
	prinMonthDayGrid();//Печатаем общую сетку графика
	cycleWorkDay();//вызываем циклы расчета рабочих дней
    calculateMoney();//вызываем расчет зароботной платы

	/*-------------------------------------------выбор следующего месяца----------------------------------------------------*/
    $("#WrapR_rest #nextMonth").click(function(e){
    	
    	if (Month==12) {
    		Year++
    		Month = 0;
    	}//eсли наступил довый год то добавить год и перейти на январь

        var preLastArr                  =   $('body #WrapR_rest .row1 .dayGrid'); //узнаем сколько элементов есть
        var preLastElementL2            =   preLastArr[preLastArr.length-2];//выберем предпоследний HTML элемент
        var preLastElementL3            =   preLastArr[preLastArr.length-3];//выберем третий с конца HTML элемент
        var preLastElementL4            =   preLastArr[preLastArr.length-4];//выберем четвертый с конца HTML элемент

        var preLastArrRow2                  =   $('body #WrapR_rest .row2 .dayGrid'); //узнаем сколько элементов есть
        var preLastElementLRow2_2            =   preLastArrRow2[preLastArrRow2.length-2];//выберем предпоследний HTML элемент
        var preLastElementLRow2_3            =   preLastArrRow2[preLastArrRow2.length-3];//выберем третий с конца HTML элемент
        var preLastElementLRow2_4            =   preLastArrRow2[preLastArrRow2.length-4];//выберем четвертый с конца HTML элемент

		/*------------------------------------условия для работы графика --------------------------------------------------------*/
        if ($('body #WrapR_rest .collum:last-child .row1 .dayGrid').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== false &&
            $(preLastElementL4).hasClass('black')=== false)
             {
            scoreR1 = 4;
        }

        if ($('body #WrapR_rest .collum:last-child .row1 .dayGrid').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL4).hasClass('black')=== true)
             {
            scoreR1 = 3;
        }

        if ($('body #WrapR_rest .collum:last-child .row1 .dayGrid').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL3).hasClass('black')=== true)
             {
            scoreR1 = 2;
        }

        if ($('body #WrapR_rest .collum:last-child .row1 .dayGrid').hasClass('black')=== false   &&  
            $(preLastElementL2).hasClass('black')=== true &&
            $(preLastElementL3).hasClass('black')=== true)
             {
            scoreR1 = 1;
        }
        
        if ($('body #WrapR_rest .collum:last-child .row1 .dayGrid').hasClass('black')=== true   &&  
            $(preLastElementL2).hasClass('black')=== false &&
            $(preLastElementL4).hasClass('black')=== false)
             {
            scoreR1 = 4;
        }

    	/*------------------------------------end row1--------------------------------------------*/

        if ($('body #WrapR_rest .collum:last-child .row2 .dayGrid').hasClass('black')=== false   &&  
            $(preLastElementLRow2_2).hasClass('black')=== false &&
            $(preLastElementLRow2_3).hasClass('black')=== false)
             {
            scoreR2 = 3;
        }

        // if ($('body #WrapR_rest .collum:last-child .row2 .dayGrid').hasClass('black')=== false   &&  
        //     $(preLastElementLRow2_2).hasClass('black')=== false &&
        //     $(preLastElementLRow2_3).hasClass('black')=== false)
        //      {
        //     scoreR2 = 0;
        // }

        if ($('body #WrapR_rest .collum:last-child .row2 .dayGrid').hasClass('black')=== false   &&  
            $(preLastElementLRow2_2).hasClass('black')=== false &&
            $(preLastElementLRow2_3).hasClass('black')=== true)
             {
            scoreR2 = 2;
        }

        if ($('body #WrapR_rest .collum:last-child .row2 .dayGrid').hasClass('black')=== false   &&  
            $(preLastElementLRow2_2).hasClass('black')=== true &&
            $(preLastElementLRow2_3).hasClass('black')=== true)
             {
            scoreR2 = 1;
        }

    	/*------------------------------------end row2--------------------------------------------*/

	   	


    	e.preventDefault();//отмеа перехода
    	Month++; // переход на следующий месяц
    	$('#WrapR_rest .month p').text(nameMonth[Month-1]);//Печать названия нового месяца
       	$('#WrapR_rest .wrapDay .collum').remove();//удалить старый месяц

       	prinMonthDayGrid();//Печатаем общую сетку графика
		//end for

		cycleWorkDay();//циклы для расписания наступившего нового месяца
        calculateMoney();//Работа калькулятора оплаты труда
    });//end click	
	
    	
    $(" #WrapR_rest #backMonth").click(function(e){
    	if (Month==1) {
    		Year--;
    		Month = 13;
    	}
    	if ($('body #WrapR_rest .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === false	&&	
    		$('body #WrapR_rest .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === false   &&
            $('body #WrapR_rest .collum:nth-child(3) .row1 .dayGrid').hasClass('black') === false) {

    		scoreR1 = 3;
   		}

        if ($('body #WrapR_rest .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === false   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === false   &&
            $('body #WrapR_rest .collum:nth-child(3) .row1 .dayGrid').hasClass('black') === true) {

            scoreR1 = 2;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === false   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === true    &&
            $('body #WrapR_rest .collum:nth-child(3) .row1 .dayGrid').hasClass('black') === true) {

            scoreR1 = 1;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === true   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === true   &&
            $('body #WrapR_rest .collum:nth-child(3) .row1 .dayGrid').hasClass('black') === true) {

            scoreR1 = 0;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === true   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === true   &&
            $('body #WrapR_rest .collum:nth-child(3) .row1 .dayGrid').hasClass('black') === false) {

            scoreR1 = 5;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row1 .dayGrid').hasClass('black') === true   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row1 .dayGrid').hasClass('black') === false  &&
            $('body #WrapR_rest .collum:nth-child(3) .row1 .dayGrid').hasClass('black') === false) {

            scoreR1 = 4;
        }




        
    	/*------------------------------------end row1--------------------------------------------*/


        if ($('body #WrapR_rest .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false   &&
            $('body #WrapR_rest .collum:nth-child(3) .row2 .dayGrid').hasClass('black') === false) {

            scoreR2 = 3;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false   &&
            $('body #WrapR_rest .collum:nth-child(3) .row2 .dayGrid').hasClass('black') === true) {

            scoreR2 = 2;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === false   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true    &&
            $('body #WrapR_rest .collum:nth-child(3) .row2 .dayGrid').hasClass('black') === true) {

            scoreR2 = 1;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true   &&
            $('body #WrapR_rest .collum:nth-child(3) .row2 .dayGrid').hasClass('black') === true) {

            scoreR2 = 0;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === true   &&
            $('body #WrapR_rest .collum:nth-child(3) .row2 .dayGrid').hasClass('black') === false) {

            scoreR2 = 5;
        }

        if ($('body #WrapR_rest .collum:nth-child(1) .row2 .dayGrid').hasClass('black') === true   &&  
            $('body #WrapR_rest .collum:nth-child(2) .row2 .dayGrid').hasClass('black') === false  &&
            $('body #WrapR_rest .collum:nth-child(3) .row2 .dayGrid').hasClass('black') === false) {

            scoreR2 = 4;
        }
		/*------------------------------------end row2--------------------------------------------*/    	

    	e.preventDefault();//отмена перехода
    	Month--;

    	$('#WrapR_rest .month p').text(nameMonth[Month-1]);//Печать названия нового месяца
       	$('#WrapR_rest .wrapDay .collum').remove();

        reverseEachWorkDay();//печатаем раочие дни
        calculateMoney();//расчет оплаты заработной платы
    });//end click	

	var	nowDate		=	new Date(),
        newYear     =   nowDate.getFullYear(),
        Year        =   newYear,
		nowMonth	=	nowDate.getMonth();
	for (var i = 0; i < nowMonth; i++) {$('#nextMonth').trigger('click'); console.log(Year + ' ' + newYear)}
	
	// widthWD		=	(Math.floor((widthWD / daysInMonth)))-1;/*ширину сетики делим на кол-во дней месяца	что-бы заполнить*/
	// $('.collum').height(heightGD).width(widthWD);
});