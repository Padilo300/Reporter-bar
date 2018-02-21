<?php 
  require_once 'viewUsers.php';  
  $viewUsers = new viewUsers; 

  $cafe         = 'cafe_schedule'   ;
  $pab          = 'pab_schedule'    ;
  $rest         = 'rest_schedule'   ;
  $artist       = 'artist_schedule' ;
  $coast        = 'coast_schedule'  ;

  $Barmen1      = 'бармен1'       ;
  $Barmen2      = 'бармен2'       ;
  $Barmen3      = 'бармен3'       ;
  $Barmen4      = 'бармен4'       ;
  $Barmen5      = 'бармен5'       ;
  $Barmen6      = 'бармен6'       ;

  $cafeCAKE1    = 'кондитер1'     ;
  $cafeCAKE2    = 'кондитер2'     ;
?>
    <div class="col-lg-8  col-md-12 col-sm-12">
        <form   method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
                class="form-style" id="formAddUser" >
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
                <th>Ресторан:</th>
                <th> 
                    <select name="place_of_work" id="place_of_work"  aria-required="true" onChange="SelectedRestoran(this)" required>
                        <option  selected disabled> Выберите ресторан   </option>
                        <option   value="артист"  > Артист    </option>
                        <option   value="репортер"> Репортер  </option>
                        <option   value="coast"   > Coast     </option>
                    </select> 
                </th>
              </tr>
              <tr id="bar_of_work_reporter" class="displayNone">
                <th>Бар:</th>
                <th>
                    <select name="bar_of_work_in_reporter" aria-required="true" onChange="SelectedBar(this)"  class="select"  required>

                      <option selected disabled value="null"> Выберете бар </option>
                      <option value="кофейня" > Кофейня   </option>
                      <option value="паб"     > Паб       </option>
                      <option value="ресторан"> Ресторан  </option>
                    </select>
                </th>
              </tr>
              <tr id="cafe_schedule" class="displayNone">
                <th>Позиция в графике:</th>
                <th>
                    <select name="cafe_schedule" >
                      <option selected disabled value="null">Сделайте выбор</option>
                      <option value="кондитер1">
                        Кондитер смена(1) <?php $viewUsers->userNameCafe($cafe, $cafeCAKE1);?>
                      </option>
                      <option value="кондитер2">
                        Кондитер смена(2) <?php $viewUsers->userNameCafe($cafe, $cafeCAKE2);?>
                      </option>
                      <option value="бармен1">
                        Бармен смена(1)   <?php $viewUsers->userNameCafe($cafe, $Barmen1);?>
                      </option>
                      <option value="бармен2">
                        Бармен смена(2)   <?php $viewUsers->userNameCafe($cafe,$Barmen2);?>
                      </option>
                    </select>
                </th>
              </tr>
              <tr id="pab_schedule" class="displayNone">
                <th>Позиция в графике:</th>
                <th>
                    <select name="pab_schedule" >
                      <option selected disabled value="null">Сделайте выбор</option>
                      <option value="бармен1">
                        бармен1 <?php $viewUsers->userNameCafe($pab,$Barmen1);?>
                      </option>
                      <option value="бармен2">
                        бармен2 <?php $viewUsers->userNameCafe($pab,$Barmen2);?>
                      </option>
                      <option value="бармен3">
                        бармен3 <?php $viewUsers->userNameCafe($pab,$Barmen3);?>
                      </option>
                      <option value="бармен4">
                        бармен4 <?php $viewUsers->userNameCafe($pab,$Barmen4);?> 
                      </option>
                      <option value="бармен5">
                        бармен5 <?php $viewUsers->userNameCafe($pab,$Barmen5);?>
                      </option>
                    </select>
                </th>
              </tr>
              <tr id="artist_schedule" class="displayNone">
                <th>Позиция в графике:</th>
                <th>
                    <select name="artist_schedule" >
                      <option selected disabled value="null">Сделайте выбор</option>
                      <option value="бармен1">
                        бармен1 <?php $viewUsers->userNameCafe($artist,$Barmen1);?>
                      </option>
                      <option value="бармен2">
                        бармен2 <?php $viewUsers->userNameCafe($artist,$Barmen2);?>
                      </option>
                      <option value="бармен3">
                        бармен3 <?php $viewUsers->userNameCafe($artist,$Barmen3);?>
                      </option>
                      <option value="бармен4">
                        бармен4 <?php $viewUsers->userNameCafe($artist,$Barmen4);?>
                      </option>
                      <option value="бармен5">
                        бармен5 <?php $viewUsers->userNameCafe($artist,$Barmen5);?>
                      </option>
                      <option value="бармен6">
                        бармен6 <?php $viewUsers->userNameCafe($artist,$Barmen6);?>
                      </option>
                    </select>
                </th>
              </tr>
              <tr id="coast_schedule" class="displayNone">
                <th>Позиция в графике:</th>
                <th>
                    <select name="coast_schedule" >
                      <option selected disabled value="null">Сделайте выбор</option>
                      <option value="бармен1">старший бармен смена(1) <?php $viewUsers->userNameCafe($coast,$Barmen1);?></option>
                      <option value="бармен2">старший бармен смена(2) <?php $viewUsers->userNameCafe($coast,$Barmen2);?></option>
                      <option value="бармен3">бармен смена(1) этаж 1  <?php $viewUsers->userNameCafe($coast,$Barmen3);?></option>
                      <option value="бармен4">бармен смена(1) этаж 2  <?php $viewUsers->userNameCafe($coast,$Barmen4);?></option>
                      <option value="бармен5">бармен смена(2) этаж 1  <?php $viewUsers->userNameCafe($coast,$Barmen5);?></option>
                      <option value="бармен6">бармен смена(2) этаж 2  <?php $viewUsers->userNameCafe($coast,$Barmen6);?></option>
                    </select>
                </th>
              </tr>
              <tr id="rest_schedule" class="displayNone">
                <th>Позиция в графике:</th>
                <th>
                    <select name="rest_schedule" >
                      <option selected disabled value="null">Сделайте выбор</option>
                      <option value="бармен1">
                        бармен1 <?php $viewUsers->userNameCafe($rest,$Barmen1);?>
                      </option>
                      <option value="бармен2">
                        бармен2 <?php $viewUsers->userNameCafe($rest,$Barmen2);?>
                      </option>
                    </select>
                </th>
              </tr>
              <tr>
                <th><i class="fa fa-money" aria-hidden="true"></i> Ставка</th>
                <td><input type="number" name="money" placeholder="10000" title="Вводить только цифры."></td>
              </tr>
              <tr>
                <th><i class="fa fa-phone" aria-hidden="true"></i> Номер телефона:</th>
                <th>
                    <input type="text" name="mobileNumber" placeholder="Основной номер" title="Основной мобильный номер, по которому можно связаться с сотрудником.">
                    <br>
                </th>
                <tr>
                    <th>
                       <i class="fa fa-address-book-o" aria-hidden="true"></i> <input type="text" name="contact_name" placeholder="Имя контакта(жена,мать)" title="Имя родственника, или близкого человека, через которого всегда можно связаться с сотрудником."  >
                    </th>
                    <th>
                        <input type="text" name="mobileNumber2" placeholder="Дополнительный номер" title="Номер родственника, или близкого человека, через которого всегда можно связаться с сотрудником.">
                    </th>
                </tr>
              </tr>
              <tr>
                <th><i class="fa fa-at" aria-hidden="true"></i> Почта:</th>
                <th><input type="email" name="email" required placeholder="email@gmail.com" title="Электронная почта сотрудникика."></th>
              </tr>
              <tr>
                <th><i class="fa fa-id-card-o" aria-hidden="true"></i> Дата рождения:</th>
                <th>
                    <input type="number" name="day"   placeholder="день" title="Выберите число месяца когда родился сотрудник.">
                    <select name="mouth" id="" required title="Выберите месяц в который родился сотрудник.">
                        <option disabled>Выберите месяц рождения</option>
                        <option value="1">январь</option>
                        <option value="2">февраль</option>
                        <option value="3">март</option>
                        <option value="4">апрель</option>
                        <option value="5">май</option>
                        <option value="6">июнь</option>
                        <option value="7">июль</option>
                        <option value="8">август</option>
                        <option value="9">сентябрь</option>
                        <option value="10">октябрь</option>
                        <option value="11">ноябрь</option>
                        <option value="12">декабрь</option>
                    </select> 
                    <input type="number" name="year"  placeholder="год" title="Введите год, когда родился сотрудник.">
                </th>
              </tr>
              <tr>
                <th>
                  <i class="fa fa-id-card-o" aria-hidden="true"></i> Адресс прописки:
                </th>
                <th> 
                  <input type="text" name="address_passport" placeholder="пр.Пушкина 13" title="Введите адрес сотрудника, который указан у него в паспорте."> 
                </th>
              </tr>
              <tr>
                <th>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Фактический адресс проживания:
                </th>
                <th>
                    <input type="text" name="actual_address" placeholder="ул.Баррикадная 2" title="Введите фактический адрес проживания сотрудника. ">
                </th>
              </tr>
              <tr>
                <th>Дать привелегии админстратора:</th>
                <th>
                  <label for="adminYES">
                    <input type="radio" name="admin-rights" value="true" id="adminYES">
                    Да
                  </label>
                  <br>
                  <label for="adminNO">
                    <input type="radio" name="admin-rights" value="false" id="adminNO">
                    Нет
                  </label>
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
      <script>
        function SelectedRestoran(a) {
          var label = a.value;
          if (label=='репортер') {
            document.getElementById("bar_of_work_reporter").style.display   ='table-row';  
            document.getElementById("artist_schedule").style.display        ='none';
            document.getElementById("coast_schedule").style.display         ='none'; 
            $('#artist_schedule select,#coast_schedule select').val('null');
          } else if (label=='артист') {
            document.getElementById("bar_of_work_reporter").style.display   ='none';  
            document.getElementById("artist_schedule").style.display        ='table-row';
            document.getElementById("cafe_schedule").style.display          ='none';  
            document.getElementById("pab_schedule").style.display           ='none';
            document.getElementById("rest_schedule").style.display          ='none';
            document.getElementById("coast_schedule").style.display         ='none'; 
            $('#coast_schedule select,#bar_of_work_reporter select,#pab_schedule select,cafe_schedule select,rest_schedule select').val('null');

          } else if (label=='coast') {
            document.getElementById("bar_of_work_reporter").style.display   ='none';  
            document.getElementById("artist_schedule").style.display        ='none';
            document.getElementById("cafe_schedule").style.display          ='none';
            document.getElementById("pab_schedule").style.display           ='none';  
            document.getElementById("rest_schedule").style.display          ='none';
            document.getElementById("coast_schedule").style.display         ='table-row';  
            document.getElementById("bar_of_work_reporter").value           = 'null';
            document.getElementById("bar_of_work_reporter").value           = 'null';
            $('#artist_schedule select,#bar_of_work_reporter select,#pab_schedule select,cafe_schedule select,rest_schedule select').val('null');
          }
        }

       function SelectedBar(a) {
          var label = a.value;
          if (label=='кофейня') {
            document.getElementById("cafe_schedule").style.display  ='table-row';  
            document.getElementById("rest_schedule").style.display  ='none';
            document.getElementById("pab_schedule").style.display   ='none';
          } else if (label=='паб') {
            document.getElementById("cafe_schedule").style.display  ='none';  
            document.getElementById("rest_schedule").style.display  ='none';
            document.getElementById("pab_schedule").style.display   ='table-row';
            
          } else if (label=='ресторан') {
            document.getElementById("cafe_schedule").style.display  ='none';  
            document.getElementById("rest_schedule").style.display  ='table-row';
            document.getElementById("pab_schedule").style.display   ='none';
          }
        }
      </script>

