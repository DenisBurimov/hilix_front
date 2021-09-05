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
        alert("You have successfuly submited!");
    });

    // $(".tab").click(function() {
    //   $(".tab").css({'color': '#ababab'});
    //   $(this).css({'color': '#4b94c6'});

    //   let heading = $(this).text();
    //   $("#tab_heading").html(heading);
    // });

    // It's not elegant and not DRY, I know, but I was short of time to think hiw to parse id properly, sorry)
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
});
