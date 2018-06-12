function floorNnav() {
  var winW = $(window).width(),
    mainOfL = $(".sp-main").offset().left;
  var navW = $('.floor-nav').width();
  if (winW >= 1444) {
    var oFright = mainOfL - navW - 15;

    $('.floor-nav').css("left", oFright)
  } else {
    $('.floor-nav').css({
      "left": '10px',
      right: ''
    });
  }
}

function goTofloorC(num) {

  var _afloTop = $("#floor-" + num).offset().top;
  $('body,html').animate({
    scrollTop: _afloTop - 14
  }, 300);
}

function LayoutClick(eln){
  var html = $(".layer-html-" + eln).html();

  var arr = [['1020px', '350px'],['1020px', '490px']]

  PL.open({
    type: 1,
    title: false,
    closeBtn: false,
    area: arr[eln-1],
    shadeClose: true,
    skin: 'layui-Pan-nobg', //没有背景色 
    content: html
  });
}