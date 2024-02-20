$(document).ready(function() {
    $(".row").on("swipeleft", function() {
      $(this).animate({scrollLeft: "+=200px"}, "slow");
    });
  
    $(".row").on("swiperight", function() {
      $(this).animate({scrollLeft: "-=200px"}, "slow");
    });
  });
  