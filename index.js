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
    $("#submit").click(function() {
        alert("You have successfuly submited!");
    });

    // It's not elegant and not DRY, I know, but I was short of time to think how to parse id properly, sorry)
    $("#tab-1").click(function() {
      $(".tab").css({'color': '#ababab'});
      $(this).css({'color': '#4b94c6'});
      
      let heading = $(this).text();
      $("#tab_heading").html(heading);
      $("#diagram").attr("src", "pics/Oval1.png");
    });

    $("#tab-2").click(function() {
      $(".tab").css({'color': '#ababab'});
      $(this).css({'color': '#4b94c6'});


      let heading = $(this).text();
      $("#tab_heading").html(heading);
      $("#diagram").attr("src", "pics/Oval2.png");
    });

    $("#tab-3").click(function() {
      $(".tab").css({'color': '#ababab'});
      $(this).css({'color': '#4b94c6'});

      let heading = $(this).text();
      $("#tab_heading").html(heading);
      $("#diagram").attr("src", "pics/Oval3.png");
    });

    $(".mobile_menu_button").click(function() {
        $(".all").css("display", "none");
        $(".mobile_pop_up").css("display", "block");
        $(".mobile_menu_button").css("display", "none");
        $(".cross").css("display", "block");
    });

    $(".cross").click(function() {
        $(".all").css("display", "block");
        $(".mobile_pop_up").css("display", "none");
        $(".mobile_menu_button").css("display", "block");
        $(".cross").css("display", "none");
    });

    $(".mobile_menu_block").click(function() {
        alert("mobile_menu_block");
    });

    $(".close").click(function() {
      $(".about").css("display", "none");
    });
});
