;
(function() {

  $(function() {

    $(".floor-nav").on("click", "li", function() {
      var _t = $(this),
        _tf = _t.attr("floor");
      goTofloorC(_tf);
    });



    $(".back-top").on("click", function() {
      $('body,html').animate({ scrollTop: 0 }, 300);
    });

    floorNnav();
    // listData()

  });


  $(".jingxi-1").on("click", function() {
    var _t = $(this),
      _src = _t.attr("data-src");
    var html = $(".layer-html-" + _src).html();
    PL.open({
      type: 1,
      title: false,
      closeBtn: false,
      area: ['1020px', '330px'],
      shadeClose: true,
      skin: 'layui-Pan-nobg', //没有背景色 
      content: html
    });
  });

  $(".jingxi-2").on("click", function() {
    var _t = $(this),
      _src = _t.attr("data-src");

    var html = $(".layer-html-" + _src).html();
    PL.open({
      type: 1,
      title: false,
      closeBtn: false,
      area: ['1020px', '320px'],
      shadeClose: true,
      skin: 'layui-Pan-nobg', //没有背景色
      content: html
    });
  });

  $("body").on("click", ".close-layer", function() {
    PL.closeAll();
  })


  $(window).resize(function() {
    floorNnav();
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

})();