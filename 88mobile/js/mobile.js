jQuery(document).ready(function($) {
 $("#dot1").click(function(event) {
      $(".dot").animate({opacity: 0}, 100)
      $(this).animate({opacity: 1}, 300)
      $(".gift img").attr("src","img/gift_ip6.png");
      $(".gift-name").text("IPhone6");
      });
      $("#dot2").click(function(event) {
      $(".dot").animate({opacity: 0}, 100)
      $(this).animate({opacity: 1}, 300)
      $(".gift img").attr("src","img/gift_ipair.png");
      $(".gift-name").text("IPadAir");
      });
      $("#dot3").click(function(event) {
      $(".dot").animate({opacity: 0}, 100)
      $(this).animate({opacity: 1}, 300)
      $(".gift img").attr("src","img/gift_m8.png");
      $(".gift-name").text("HTC M8");
      });


$("#next-step").click(function(event) {
  $(".table1,.question-box").fadeOut(300);
  $(".table2").fadeIn(300);
});




});
