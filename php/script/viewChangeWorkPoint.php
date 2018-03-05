<tr>
  <td></td>
  <td> 
      <select name="place_of_work" id="place_of_work_<?php echo $user['id'] ?>"  onChange="SelectedRestoran(this, <?php echo $user['id'] ?>)" title="Назначте новое место работы сотрудника, либо выберите 'пусто'. После выбора нажмите на зеленую кнопку 'ок'.">
          <option  selected disabled> Выберите ресторан   </option>
          <option   value="артист"  > Артист    </option>
          <option   value="репортер"> Репортер  </option>
          <option   value="coast"   > Coast     </option>
          <option   value="null"        > пусто     </option>
      </select> 
      <button type='button' class="btn btn-success btn-xs pull-right" data-sumbit="workPoint" title="Нажмите что-бы назначить сотрудика на новое место" data-userID='<?php echo $user['id'] ?>' data-toggle="modal" data-target="#modal_chengeWorkPoint_<?php echo $user['id']?>">ok</button>
  </td>
</tr>
<tr id ="bar_of_work_reporter_<?php echo $user['id'] ?>" class="displayNone">
  <th>Бар:</th>
  <th>
      <select name="bar_of_work_in_reporter" onChange="SelectedBar(this,<?php echo $user['id'] ?>)"  class="select">

        <option selected disabled value="null"> Выберете бар </option>
        <option value="кофейня" > Кофейня   </option>
        <option value="паб"     > Паб       </option>
        <option value="ресторан"> Ресторан  </option>
        <option value=""        > пусто     </option>
      </select>
  </th>
</tr>
<tr id="cafe_schedule_<?php echo $user['id'] ?>" class="displayNone">
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
        <option value="">пусто</option>
      </select>
  </th>
</tr>
<tr id="pab_schedule_<?php echo $user['id'] ?>" class="displayNone">
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
        <option value="">пусто</option>
      </select>
  </th>
</tr>
<tr id="artist_schedule_<?php echo $user['id'] ?>" class="displayNone">
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
        <option value="">пусто</option>
      </select>
  </th>
</tr>
<tr id="coast_schedule_<?php echo $user['id'] ?>" class="displayNone">
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
        <option value="" >пусто</option>
      </select>
  </th>
</tr>
<tr id="rest_schedule_<?php echo $user['id'] ?>" class="displayNone">
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
        <option value="" >пусто</option>
      </select>
  </th>
</tr>