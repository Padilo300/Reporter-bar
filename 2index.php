<?php require_once 'head.php'; ?>
<?php 
  if (isset($_SESSION['count'])) {
    $_SESSION['count'] = $_SESSION['count'] +1;
  }else{
    $_SESSION['count'] = 1;
  }
 ?>
<body>
  <div class="container-fluid">
    <?php require_once 'php/part-page/nav-menu-main.php'  ; ?>
    <div class="row" id="ajax-conteiner">
    	<div class="col-lg-9">
	    	<div class="tab-content">

				<div class="tab-pane fade in active" id="reporter">
			  		<?php require_once 'page-Reporter.php'; ?>
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