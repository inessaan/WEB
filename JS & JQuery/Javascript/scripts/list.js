
$("document").ready(function(){ 
 
   $(".del").click(function() {
    $(".submenu").slideUp("slow")
    $(this).find("~ .submenu").stop().slideToggle(200); 
  })

  $(".del1").click(function() {
    $(this).fadeOut(1500);
    })

  $(".del2").click(function() {
    $(this).fadeOut(1500, function() {
      $(".del3").fadeIn(1500);
    });
    })

});

