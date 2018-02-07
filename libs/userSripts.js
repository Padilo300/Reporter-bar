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
		tabArtist();
		tabReporter();

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
		

});