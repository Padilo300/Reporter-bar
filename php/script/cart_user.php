
<?php 
  //удалить пользователя
  $this->delete(); 

  function positioning_of_the_bar()
  {
    //если открыта страница кабинеа, выровнять под правую сторону
    if ($_SERVER['PHP_SELF'] !== '/page-editUser.php') { echo "col-lg-offset-4";}
  }
  
?>
<div class="col-lg-8 <?php positioning_of_the_bar(); ?>  col-md-12 col-sm-12">
    <?php foreach ($users as $user): ?>
      <!--................ Модальное окно ..........-->
      <div class="modal fade bs-example-modal-lg" id="<?php echo $user['id']?>" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <br>
            <h2 class=" no-margin text-center text-danger">Вы точно намерены удалить сотрудника?</h4>
              <br>
            <p class="text-center">
              Это действие нельзя будет отменить!
              <br>
              Вы удаляете сотрудника <i class="text-warning"><?php echo $user['first_name'] .' '. $user['last_name'] ; ?></i>.

            </p>
            <table  align="center" cellpadding="10">
              <tr>
                <td>
                  <button  data-dismiss="modal" type="button" class="btn btn-success">Не удалять</button>
                </td>
                <td> &nbsp;</td>
                <td>
                  <a href='?delete=<?php echo $user['id']?>' class="btn btn-danger">Удалить!</a>
                </td>
              </tr>
            </table>
            <br>
          </div>
        </div>
      </div>
      <!--.................... Конец Модальное окно ..............-->
        <div class="cart-user">
          <div class="cart-user__header__fullName-users">
              <p>
                <a href="<?php echo $_SERVER['PHP_SELF'] ?>?user=<?php echo $user['id']?>" title="Перейти в анкету."><?php echo $user['first_name'] .' '. $user['last_name'] ; ?></a>
                <i><?php echo 'Возраст '.$this->calculate_age("$user[year]-$user[mouth]-$user[day]");?></i>
              </p>
            </div>
          <div class="cart-user__flex-conteiner">
          <div class="cart-user__foto-users">
              <img src="<?php $this->imgSRC($user['img_src']); ?>" alt="Фото сотрудника">
          </div>
          <header class="cart-user__header">
            <table class="table cart-user__header__tableInfo">
            <tbody>
              <tr>
                <th>Работает в:</th>
                <th><a href="#"><?php echo $user['place_of_work']; ?></a> <br> Кафе</th>
              </tr>
              <?php 
                if ($_SESSION['admin'] == 'true' || ($_SESSION['id'] == $user['id'])) {
                echo "<tr>
                      <th>Ставка:</th>
                      <td>$user[money] грн</td>
                      </tr>"  ;
               }
              ?>
              <tr>
                <th>
                  <i class="fa fa-phone" aria-hidden="true"></i> Номер телефона:
                  <br>
                   <i class="fa fa-phone" aria-hidden="true"></i>  <?php echo $user['contact_name']; ?>
                </th>
                <th>
                  <a href="tel:<?php echo $user['mobileNumber']; ?>">
                    <?php echo $user['mobileNumber']; ?></a>
                    <br>
                  <a href="tel:<?php echo $user['mobileNumber2']; ?>">
                    <?php echo $user['mobileNumber2']; ?></a>
                </th>
              </tr>
              <tr>
                <th><i class="fa fa-at" aria-hidden="true"></i> Почта:</th>
                <th><a href="mailto:padilo300@gmail.com"><?php echo $user['email']; ?></a></th>
              </tr>
              <tr>
                <th><i class="fa fa-id-card-o" aria-hidden="true"></i> Дата рождения:</th>
                <th><?php echo $user['day'].'.'.$user['mouth'].'.'.$user['year']; ?></th>
              </tr>
              <?php 
                if ($_SESSION['admin'] == 'true') {
                  echo "<tr>
                  <th><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i> Адресс прописки:</th>
                  <th>$user[address_passport]</th>
                </tr>
                <tr>
                  <th><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Фактический адресс проживания:</th>
                  <th>$user[actual_address]</th>
                </tr>";
               }
              ?>
              
            </tbody>
          </table>
          <table class="social_b" >
            <tbody>
              <tr>
                <td>
                  <?php if ($user['vkontakte'] !== 'false') {
                    echo "<a href='$user[vkontakte]'>
                    <img src='/img/social_b/vk.png' class='max-w50px' alt='vk'>         
                  </a>";
                  } ?>
                </td>

                <td>
                  <?php if ($user['fecebook'] !== 'false') {
                    echo "<a href='$user[fecebook]'>
                    <img src='/img/social_b/facebook.png' class='max-w50px' alt='facebook'>   
                  </a>";
                  } ?>
                </td>

                <td>
                  <?php if ($user['skype'] !== 'false') {
                    echo "<a href='$user[skype]'>
                    <img src='/img/social_b/skype.png'    class='max-w50px' alt='skype'>      
                  </a>";
                  } ?>
                  
                </td>

                <td>
                  <?php if ($user['twitter'] !== 'false') {
                    echo "<a href='$user[twitter]'>
                    <img src='/img/social_b/twitter.png'  class='max-w50px' alt='twitter'>    
                  </a>";
                  } ?>
                </td>

                <td>
                  <?php if ($user['pinterest'] !== 'false') {
                    echo "<a href='$user[pinterest]'>
                    <img src='/img/social_b/pinterest.png' class='max-w50px' alt='pinterest'>  
                  </a>";
                  } ?>
                </td>

              </tr>
            </tbody>
          </table>
          <br>
          <?php 
            if ($_SESSION['admin'] == 'true' && $_SESSION['id'] !== $user['id']) {
              echo "<button class='btn btn-danger' data-toggle='modal' data-target='#$user[id]' title='Навсегда удалить сотрудника из базы. '><i class='fa fa-user-times' aria-hidden='true'></i> Удалить сотрудника</button>" ;
           }
          ?>
          </header>
        </div>
        </div>
<?php endforeach; ?>
      </div>