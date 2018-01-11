;
(function() {

  $(function() {
    $("body").on("click", ".close-layer", function() {
      PL.closeAll();
    })


    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var scrollTop2 = scrollTop;
      var footerTop = $(".footer").offset().top - 700;
      if (scrollTop > 400 && scrollTop2 < footerTop) {
        $('.floor-nav').show()
      } else {
        $('.floor-nav').hide()
      }
    });


  });

})();