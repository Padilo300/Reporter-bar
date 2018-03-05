<?php 
  require_once 'head.php';
  require_once 'php/script/viewUsers.php';
  require_once 'php/script/connect_db.php';

  if (isset($_SESSION['count'])) {
    $_SESSION['count'] = $_SESSION['count'] +1;
  }else{
    $_SESSION['count'] = 1;
  }
  $viewUsers = new viewUsers;  
 ?>
<body>
  <div class="container-fluid">
    <?php require_once 'php/part-page/nav-menu-main.php'  ; ?>
    <div class="row" id="ajax-conteiner">
      <?php
      $viewUsers->viewUsers();
      ?>

      </div><!--row-->
    </div><!--conteiner fluid-->
<?php require_once 'footer.php'; ?>
      <script>
  function SelectedRestoran(a,id) {
    var label = a.value;
    console.log("bar_of_work_reporter_"+id+"");
    if (label=='репортер') {
      document.getElementById("bar_of_work_reporter_"+id+"").style.display   ='table-row';  
      document.getElementById("artist_schedule_"+id+"").style.display        ='none';
      document.getElementById("coast_schedule_"+id+"").style.display         ='none'; 
      $('#artist_schedule_'+id+' select,#coast_schedule'+id+' select').val('null');
    } else if (label=='артист') {
      document.getElementById("bar_of_work_reporter_"+id+"").style.display   ='none';  
      document.getElementById("artist_schedule_"+id+"").style.display        ='table-row';
      document.getElementById("cafe_schedule_"+id+"").style.display          ='none';  
      document.getElementById("pab_schedule_"+id+"").style.display           ='none';
      document.getElementById("rest_schedule_"+id+"").style.display          ='none';
      document.getElementById("coast_schedule_"+id+"").style.display         ='none'; 
      $('#coast_schedule_'+id+' select,#bar_of_work_reporter_'+id+' select,#pab_schedule_'+id+' select,#cafe_schedule_'+id+' select,#rest_schedule_'+id+' select').val('null');

    } else if (label=='coast') {
      document.getElementById("bar_of_work_reporter_"+id+"").style.display   ='none';  
      document.getElementById("artist_schedule_"+id+"").style.display        ='none';
      document.getElementById("cafe_schedule_"+id+"").style.display          ='none';
      document.getElementById("pab_schedule_"+id+"").style.display           ='none';  
      document.getElementById("rest_schedule_"+id+"").style.display          ='none';
      document.getElementById("coast_schedule_"+id+"").style.display         ='table-row';  
      document.getElementById("bar_of_work_reporter_"+id+"").value           = 'null';
      document.getElementById("bar_of_work_reporter_"+id+"").value           = 'null';
      $('#artist_schedule_'+id+' select,#bar_of_work_reporter_'+id+' select,#pab_schedule'+id+' select,#cafe_schedule_'+id+' select,#rest_schedule'+id+' select').val('null');
    }else if (label=='null') {
      document.getElementById("bar_of_work_reporter_"+id+"").style.display   ='none';  
      document.getElementById("artist_schedule_"+id+"").style.display        ='none';
      document.getElementById("cafe_schedule_"+id+"").style.display          ='none';
      document.getElementById("pab_schedule_"+id+"").style.display           ='none';  
      document.getElementById("rest_schedule_"+id+"").style.display          ='none';
      document.getElementById("coast_schedule_"+id+"").style.display         ='table-row';  
      document.getElementById("bar_of_work_reporter_"+id+"").value           = 'null';
      document.getElementById("bar_of_work_reporter_"+id+"").value           = 'null';
      $('#artist_schedule_'+id+' select,#bar_of_work_reporter_'+id+' select,#pab_schedule'+id+' select,#cafe_schedule_'+id+' select,#rest_schedule'+id+' select, #coast_schedule_'+id+' select').val('');
    }

  }

 function SelectedBar(a,id) {
    var label = a.value;
    if (label=='кофейня') {
      document.getElementById("cafe_schedule_"+id+"").style.display  ='table-row';  
      document.getElementById("rest_schedule_"+id+"").style.display  ='none';
      document.getElementById("pab_schedule_"+id+"").style.display   ='none';
    } else if (label=='паб') {
      document.getElementById("cafe_schedule_"+id+"").style.display  ='none';  
      document.getElementById("rest_schedule_"+id+"").style.display  ='none';
      document.getElementById("pab_schedule_"+id+"").style.display   ='table-row';
      
    } else if (label=='ресторан') {
      document.getElementById("cafe_schedule_"+id+"").style.display  ='none';  
      document.getElementById("rest_schedule_"+id+"").style.display  ='table-row';
      document.getElementById("pab_schedule_"+id+"").style.display   ='none';
    }
  }
</script>