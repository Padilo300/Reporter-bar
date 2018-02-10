<?php require_once 'head.php'; ?>
<?php 
  if (isset($_SESSION['count'])) {
    $_SESSION['count'] = $_SESSION['count'] +1;
  }else{
    $_SESSION['count'] = 1;
  }
 ?>
<body>
<script type="text/javascript">
	var tableToExcel = (function() {
	  var uri = 'data:application/vnd.ms-excel;base64,'
	    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
	    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
	    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
	  return function(table, name) {
	    if (!table.nodeType) table = document.getElementById(table)
	    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
	    window.location.href = uri + base64(format(template, ctx))
	  }
	})()
</script>
  <div class="container-fluid">
    <?php require_once 'php/part-page/nav-menu-main.php'  ; ?>
    <div class="row" id="ajax-conteiner">
    	<div class="col-lg-9">
	    	<div class="tab-content">

				<div class="tab-pane fade in active" id="reporter">
			  		<?php require_once 'page-Reporter-test.php'; ?>
			  	</div>

				<!-- //////////////////////////////////////////// -->

			  	<div class="tab-pane fade" id="artist">
			  		<?php require_once 'page-Artist.php'; ?>
				</div>

			</div>
		</div><!--end col-lg-9 -->
		<div class="col-lg-3">
			<?php require_once 'php/part-page/calculator.php'; ?>
		</div>
	</div><!--end row-->
	<?php require_once 'footer.php'; ?>