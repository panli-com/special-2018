function LayoutClick(eln){
  var html = $(".layer-html-" + eln).html();

  var arr = [['1020px', '360px'],['1020px', '360px'],['1020px', '500px']]

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
