$(document).ready(function(){

	var	URL_SERVER 	=	'http://reporter.com';

	//перейти на страницу index.php и выбрать соотвецвующий таб
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

	//перейти на страницу index.php и выбрать соотвецвующий таб
		function tabReporter() {
			var url 		= document.location.href;
			$('a[href="#reporter"]').click(function(){
				if ((url	==	'' + URL_SERVER + '/index.php')	===	false ) {
			 		location = '' + URL_SERVER + '/index.php';
				 	}	
			});
		}


	//это скрипт открывает график по нажатию на тумблер
		$('.trigger').click(function(){
			$(this).next('.clickButton').trigger('click');
		});

	//вызов функции табов при переходе на страницу index.php
		tabArtist();
		tabReporter();


});