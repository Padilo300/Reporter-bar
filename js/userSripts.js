$(document).ready(function(){

	var	URL_SERVER 	=	'http://reporter.com';

	//--------------перейти на страницу index.php и выбрать соотвецвующий таб
		function tabArtist() {
			var url 		= document.location.href;
			$('a[href="#artist"]').click(function(){
				if ((url	==	'' + URL_SERVER + '/index.php')	===	false ) {
			 		location = '' + URL_SERVER + '/index.php#artist';
				 	}	
			});
			if (url == '' + URL_SERVER + '/index.php#artist') {
				$('a[href="#artist"]').tab('show')
			}
		}
//--------------перейти на страницу index.php и выбрать соотвецвующий таб
		function tabCoast() {
			var url 		= document.location.href;
			$('a[href="#coast"]').click(function(){
				if ((url	==	'' + URL_SERVER + '/index.php')	===	false ) {
			 		location = '' + URL_SERVER + '/index.php#coast';
				 	}	
			});
			if (url == '' + URL_SERVER + '/index.php#coast') {
				$('a[href="#coast"]').tab('show')
			}
		}
	//---------------перейти на страницу index.php и выбрать соотвецвующий таб
		function tabReporter() {
			var url 		= document.location.href;
			$('a[href="#reporter"]').click(function(){
				if ((url	==	'' + URL_SERVER + '/index.php')	===	false ) {
			 		location = '' + URL_SERVER + '/index.php';
				 	}	
			});
		}

	//----------------это скрипт открывает график по нажатию на тумблер
		$('.trigger').click(function(){
			$(this).next('.clickButton').trigger('click');
		});

	//----------------вызов функции табов при переходе на страницу index.php
		tabArtist()   ;
		tabReporter() ;
		tabCoast()	  ;

	//----------------Валидация форм плагином validate
		//-----проверка смены пароля пользователя.
		$('#changePassword').validate({
			rules: {
				newPass1:{
					required	: true,
					rangelength	: [6,16]
				},

				newPass2:{
					required	: true,
					rangelength	: [6,16],
					equalTo		: '#newPass1'
				}
			},//end rules
			messages:{
				newPass1: {
					required	: "Пожалуста введите пароль!",
					rangelength	: "Ваш пароль допжен содержать от 6 до 16 сиивопов.",
				},
				newPass2: {
					required	: "Пожалуста повторите пароль!",
					rangelength	: "Ваш пароль допжен содержать от 6 до 16 сиивопов.",
					equalTo		: "Введенные паропи не совпают."
				}
			}
		});
		
	/*--------------- тут создаем кнопку вверх --------------------*/
	$('body').append('<a href="#" id="go-top" title="Вверх"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a>');
	$(function() {
		$.fn.scrollToTop = function() {
			$(this).hide().removeAttr("href");
				if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
				var scrollDiv = $(this);
			$(window).scroll(function() {
				if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
				else $(scrollDiv).fadeIn("slow")
		  	});
		    $(this).click(function() {
		    	$("html, body").animate({scrollTop: 0}, "slow")
		    })
		}
	});
	$(function() {
		$("#go-top").scrollToTop();
	});
	/*--------------- закончили с кнопкой вверх --------------------*/

	/*---------Приветствующее сообщение добрый вечер/день/ночь/утро----------*/
	var	nowDate		=	new Date()			; //получили дату
    var    time		=   nowDate.getHours()	; //получили текущий час
    if ( time >= 6 && time < 13) {
    	$('#hellow-user').prepend('Доброе утро, ').append('!');
    } else if(time >= 12 && time < 18){
    	$('#hellow-user').prepend('<i class="fa fa-sun-o" aria-hidden="true"></i> Добрый день, ').append('!');
    } else if(time >= 18 && time < 22){
    	$('#hellow-user').prepend('Добрый вечер, ').append('!');
    } else {
    	$('#hellow-user').prepend('<i class="fa fa-moon-o" aria-hidden="true"></i> Доброй ночи, ').append('!');
    }
	/*-------------------*/
});