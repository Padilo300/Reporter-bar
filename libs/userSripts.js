$(document).ready(function(){
	$('.trigger').click(function(){
		$(this).next('.clickButton').trigger('click');
	});

	


	$('a[href="#artist"],a[href="#reporter"],a[href="#coast"]').click(function(){
		var url 		= document.location.href;
		console.log('работает');
		if ((url	==	'http://reporter.com/prduct_rep/app/page-tab.php')	===	false ) {
	 		location = 'http://reporter.com/prduct_rep/app/page-tab.php';
		 	}	
		});
});