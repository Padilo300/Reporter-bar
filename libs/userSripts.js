$(document).ready(function(){

var	urlServer 	=	'http://reporter.com/Reporter_Debian';

	$('.trigger').click(function(){
		$(this).next('.clickButton').trigger('click');
	});

	


	$('a[href="#artist"],a[href="#reporter"],a[href="#coast"]').click(function(){
		var url 		= document.location.href;
		console.log('работает');
		if ((url	==	'' + urlServer + '/app/page-tab.php')	===	false ) {
	 		location = '' + urlServer + '/app/page-tab.php';
		 	}	
		});
});