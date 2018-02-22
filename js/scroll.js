(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navscroll").hide();

    // fade in .navbar
    $(function () {
      $(window).scroll(function(){

        // set distance user needs to scroll before we start fedin
        if ($(this).scrollTop() > 50){
          $('.navscroll').fadeIn();
        }else {
          $('.navscroll').fadeOut();
        }
      });
    });
});
  }(jQuery));
