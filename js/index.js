$("#mobileNav").on("click", function() {
    if ( $(".subNav").first().is( ":hidden" ) ) {
      $(".subNav").slideDown("slow");
      $(".grayBG").fadeIn("slow");
  
    
      
    } else {
      $(".subNav").slideUp("slow");
      $(".grayBG").fadeOut("slow");
      
    }
  });

 



  /*
$("#mobileNav").on("click", function(){
    $(".subNav").slideDown("slow");
});
*/
/*
$("#mobileNav").on("click", function() {
    if ( $(".subNav").first().is( ":hidden" ) ) {
      $(".subNav").slideDown("slow");
      document.getElementById("grayBG").style.display="block";
      
    } else {
      $(".subNav").slideUp("slow");
      document.getElementById("grayBG").style.display="none";

    }
  }); */