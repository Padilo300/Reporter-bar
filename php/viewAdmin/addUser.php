    <div class="col-lg-7  col-md-12 col-sm-12">
        <form   method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                class="form-style">
        <div class="cart-user">
          <div class="cart-user__header__fullName-users">
            <p>
                <input type="text" name="first_name" required placeholder="Имя сотрудника">
                <input type="text" name="last_name"  required placeholder="Фамилия сотрудника"  >
            </p>
          </div>
          <div class="cart-user__flex-conteiner">
          <div class="cart-user__foto-users">
              <img src="img/foto-users/user-defoult.jpg" alt="Фото сотрудника">
          </div>
          <header class="cart-user__header">
            <table class="table cart-user__header__tableInfo">
            <tbody>
              <tr>
                <th>Место работы:</th>
                <th> 
                    <select name="place_of_work" id="place_of_work" required>
                        <option disabled>Выберите ресторан</option>
                        <option value="Артист">Артист</option>
                        <option selected value="Репортер">Репортер</option>
                        <option value="Coast">Coast</option>
                    </select> 
                </th>
              </tr>
              <tr>
                <th><i class="fa fa-phone" aria-hidden="true"></i> Номер телефона:</th>
                <th>
                    <input type="text" name="mobileNumber" required placeholder="Основной номер">
                    <br>
                </th>
                <tr>
                    <th>
                        <input type="text" name="contact_name" placeholder="Имя контакта(жена,мать)">
                    </th>
                    <th>
                      <input type="text" name='numberRezerv' placeholder="Резервный номер">
                    </th>
                </tr>
              </tr>
              <tr>
                <th><i class="fa fa-at" aria-hidden="true"></i> Почта:</th>
                <th><input type="email" name="email" required placeholder="email@gmail.com"></th>
              </tr>
              <tr>
                <th><i class="fa fa-id-card-o" aria-hidden="true"></i> Дата рождения:</th>
                <th><input type="date"></th>
              </tr>
              <tr>
                <th><i class="fa fa-id-card-o" aria-hidden="true"></i> Адресс прописки:</th>
                <th> <input type="text"  name="address_passport" placeholder="пр.Пушкина 13" required> </th>
              </tr>
              <tr>
                <th>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Фактический адресс проживания:
                </th>
                <th>
                    <input type="text"  name="actual_address" placeholder="ул.Баррикадная 2" required>
                </th>
              </tr>
              <tr>
                  <th><button type="submit" class="btn btn-success text-black" ><i class="fa fa-user-plus" aria-hidden="true"></i>Добавить сотрудника</button></th>
              </tr>
            </tbody>
          </table>
          </header>
        </div><!--end cart-user conteiner-->
        </div>
    </form>
      </div>