<?php  require_once 'head.php'					; ?>
<h2 class=" text-center hidden-print">Пожалуста, просто выберите "печать" в меню браузера.</h2>
<script class="hidden-print">
	function deleteClass(){
		$('.fact .dayGrid').removeClass('black')	;
		$('.fact .dayGrid').attr('bgcolor','#fff')	;
	}
</script>
<button type="button" class="btn hidden-print center-block" onclick="deleteClass()" title="Очистит только для печати. Сам график НЕ пострадает!">Очистить график</button>

<?php  require_once 'reporter-coast-table.php'	; ?>
<?php  require_once 'footer.php'				; ?>