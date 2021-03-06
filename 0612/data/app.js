function FloorList(data) {
  var mlc = 28,
    fl1 = [],
    fl2 = [],
    fl3 = [],
    fl4 = [],
    fl5 = [],
    fl6 = [],
    fl0 = [];

  for (var i = 0; i < mlc ; i++) {
    fl0.push(data[i]);
  }
  for (var i = mlc ; i < mlc * 2 ; i++) {
    fl1.push(data[i]);
  }
  for (var i = mlc * 2 ; i < mlc * 3 ; i++) {
    fl2.push(data[i]);
  }
  for (var i = mlc * 3 ; i < mlc * 4 ; i++) {
    fl3.push(data[i]);
  }
  for (var i = mlc * 4 ; i < mlc * 5 ; i++) {
    fl4.push(data[i]);
  }
  // for (var i = mlc * 5 ; i < mlc * 6 ; i++) {
  //   fl5.push(data[i]);
  // }
  // for (var i = mlc * 6; i < mlc * 7; i++) {
  //     fl6.push(data[i]);
  // }

  FloorAll(fl0, "img", 1, mlc);
  FloorAll(fl1, "img", 2, mlc);
  FloorAll(fl2, "img", 3, mlc);
  FloorAll(fl3, "img", 4, mlc);
  FloorAll(fl4, "img", 5, mlc);
  // FloorAll(fl1, "ts", 2);
  // FloorAll(fl2, "rw", 3);
  // FloorAll(fl3, "sh", 4);
  // FloorAll(fl4, "sh", 5);
  // FloorAll(fl5, 'sh', 6);
  // FloorAll(fl6, 'sh', 7);
}

function FloorAll(data, imgHead, id, mlc) {
  var str = "";
  var imgx = (id-1) * mlc
  for (var i = 0; i < data.length; i++) {
    var name = data[i].店铺名称,
      price = data[i].价格,
      imgUrl = "./build/css/img/products/" + imgHead + (i+1 + imgx) + '.jpg',
      Url = "http://www.panli.com/Crawler.aspx?purl=" + data[i].商品导购,
      shopUrl = data[i].店铺链接;

    str += `<li>
                        <div class="thumb">
                            <a href="${Url}" target="_blank" class="" title="${name}">
                            <img src="${imgUrl}" alt="">
                            </a>
                        </div>
                        <div class="shop-content">
                          <a href="${shopUrl}" target="_blank" class="" title="${name}">
                            <p class="shop-name">
                                ${name}
                            </p>
                            <p class="p2">
                            满399减100
                            </p>
                            </a>
                        </div>
                        <div class="shop-foo">
                        <a href="${shopUrl}" target="_blank" class="" title="${name}">
                        <span>进店疯抢</span>
                        </a>
                        </div>
                </li>`;
  }
  $("#ul" + id)
    .html(str);
}
