jQuery(function ($) {
  $('.myform').on('submit', function (event) {
      console.log('отменяем событие по умолчанию');
      event.preventDefault(); // отменяем событие по умолчанию
      if (validateForm()) { // если есть ошибки возвращает true
          console.log('если есть ошибки возвращает true, прерываем выполнение скрипта');
          return false; // прерываем выполнение скрипта
      }

      // тут ajax запрос
      console.log('тут ajax запрос - сначала в форму');
      //$('.send-btn').click
      
      function sendMessage () {

          // выводим сообщение пользователю

          var backsay = document.getElementById('backsay');
          console.log('выводим сообщение пользователю');
          console.log(backsay);
          backsay.innerText = 'Сообщение отправлено!';
          console.log('Сообщение отправлено!');

          // тут ajax запрос - продолжаем
          console.log('тут ajax запрос - отправляем форму')
          $.post("submit.php", {
                  name: $('[name="name"]').val(),
                  email: $('[name="email"]').val()
              },
              function (data) {
                  $(".result").html(data);
              });
      };
      sendMessage();
      ///ajax vyshe///
  });

  // тут функция валидации без изменений
  console.log('тут функция валидации без изменений');

  function validateForm() {
      //$(".section-header-wrapper__backsay").remove();
      
      var backsay1 = document.getElementById('backsay1');
      var backsay2 = document.getElementById('backsay2');
      backsay1.innerText = '';
      backsay2.innerText = '';
      console.log('очистили поле ввода');

      // Проверка e-mail
      console.log('Проверка e-mail');
      var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
      var el_e = $('[name="email"]');
      var v_email = el_e.val() ? false : true;

      if (v_email) {
          //выводим результат
          console.log('выводим результат');
          var backsay2 = document.getElementById('backsay2');
         backsay2.innerText = 'Поле e-mail обязательно к заполнению';

          /*el_e.after('<span class="text-error for-email">Поле e-mail обязательно к заполнению</span>');
              $(".for-email").css({
                  top: el_e.position().top + el_e.outerHeight() + 2 
          }); */

      } else if (!reg.test(el_e.val())) {
          v_email = true;
          
          console.log('Вы указали недопустимый e-mail');
          var backsay2 = document.getElementById('backsay2');
          backsay2.innerText = 'Вы указали недопустимый e-mail';

          /*el_e.after('<span class="text-error for-email">Вы указали недопустимый e-mail</span>');
          $(".for-email").css({
              top: el_e.position().top + el_e.outerHeight() + 2
          });*/
      }
      $('[name="email"]').toggleClass('error', v_email);

      // Проверка логина    
      var el_l = $('[name="name"]');
      if (el_l.val().length < 4) {
          var v_login = true;
          var backsay1 = document.getElementById('backsay1');
          backsay1.innerText = 'Логин должен быть больше 3 символов';
      }
      $('[name="name"]').toggleClass('error', v_login);

      /*// Проверка паролей

      var el_p1 = $("#pass1");
      var el_p2 = $("#pass2");

      var v_pass1 = el_p1.val() ? false : true;
      var v_pass2 = el_p1.val() ? false : true;

      if (el_p1.val() != el_p2.val()) {
          var v_pass1 = true;
          var v_pass2 = true;
          el_p1.after('<span class="text-error for-pass1">Пароли не совпадают!</span>');
          $(".for-pass1").css({
              top: el_p1.position().top + el_p1.outerHeight() + 2
          });
      } else if (el_p1.val().length < 6) {
          var v_pass1 = true;
          var v_pass2 = true;
          el_p1.after('<span class="text-error for-pass1">Пароль должен быть не менее 6 символов</span>');
          $(".for-pass1").css({
              top: el_p1.position().top + el_p1.outerHeight() + 2
          });
      }

      $("#pass1").toggleClass('error', v_pass1);
      $("#pass2").toggleClass('error', v_pass2);*/

      return (v_email || v_login);
  }
});

//--- SLIDER ---//

var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
         slideIndex = 1
   }
      if (n < 1) {
         slideIndex = slides.length
  }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  

  var slideIndex = 0;
  showSlides();
    
  function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
     for (i = 0; i < slides.length; i++){
         slides[i].style.display = "none";
     }
  slideIndex++;
     if (slideIndex > slides.length) { 
        slideIndex = 1;
 }
     slides[slideIndex-1].style.display = "block";
     setTimeout(showSlides, 3000);
  }