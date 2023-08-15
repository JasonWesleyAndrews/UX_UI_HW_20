
$("#mobileNav").on("click", function() {
    if ( $(".subNav").first().is( ":hidden" ) ) {
      $(".subNav").slideDown("slow");
      $(".grayBG").fadeIn("slow");
      document.getElementById("mobileNav").innerHTML = "X";
      
    } else {
      $(".subNav").slideUp("slow");
      $(".grayBG").fadeOut("slow");
      document.getElementById("mobileNav").innerHTML = "Menu";
    }
  });

  function myFunction(x) {
    if (x.matches) {
      $(".subNav").slideUp("fast");
      $(".grayBG").fadeOut("fast");
      document.getElementById("mobileNav").innerHTML = "Menu";
    } 
  }
  
  var x = window.matchMedia("(min-width: 600px)")
  myFunction(x)
  x.addListener(myFunction)
