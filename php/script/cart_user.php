<?php $this->delete(); ?>
<div class="col-lg-8 col-lg-offset-4 col-md-12 col-sm-12">
    <?php foreach ($users as $user): ?>
        <div class="cart-user">
          <div class="cart-user__header__fullName-users">
              <p>
                <a href="<?php echo $_SERVER['PHP_SELF'] ?>?user=<?php echo $user['id']?>" title="Перейти в анкету."><?php echo $user['first_name'] .' '. $user['last_name'] ; ?></a>
                <i><?php echo 'Возраст '.$this->calculate_age("$user[year]-$user[mouth]-$user[day]");?></i>
                <a href='?delete=<?php echo $user['id']?>' class="float-right delete" title="Удалить сотрудника!">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </a>
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
              <tr>
                <th><i class="fa fa-phone" aria-hidden="true"></i> Номер телефона:</th>
                <th>
                  <a href="tel"><?php echo $user['mobileNumber']; ?></a>
                    <br>
                  <a href="tel"><?php echo $user['mobileNumber2']; ?></a>
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
              <tr>
                <th><i class="fa fa-id-card-o" aria-hidden="true"></i> Адресс прописки:</th>
                <th><?php echo $user['address_passport']; ?></th>
              </tr>
              <tr>
                <th><i class="fa fa-map-marker" aria-hidden="true"></i> Фактический адресс проживания:</th>
                <th><?php echo $user['actual_address']; ?></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
          </header>
        </div>
        </div>
<?php endforeach; ?>
      </div>