var swiper = new Swiper(".mySwiper", {
        loop: true,

        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

$(document).ready(function() {
    $(".mobile_menu_button").click(function() {
        alert("Click happend!");
    });

    $(".tab").click(function() {
      $(".tab").css({'color': '#ababab'});
      $(this).css({'color': '#4b94c6'});
      
    });
});
