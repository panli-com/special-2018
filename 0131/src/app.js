function FloorList(data) {
  var mlc = 32,
    fl1 = [],
    fl2 = [],
    fl3 = [],
    fl4 = [],
    fl5 = [],
    fl6 = [],
    fl7 = [],
    fl0 = [];

  for (var i = 0; i < mlc; i++) {
    fl0.push(data[i]);
  }
  // for (var i = mlc; i < mlc * 2; i++) {
  //   fl1.push(data[i]);
  // }
  // for (var i = mlc * 2; i < mlc * 3; i++) {
  //   fl2.push(data[i]);
  // }
  // for (var i = mlc * 3; i < mlc * 4; i++) {
  //   fl3.push(data[i]);
  // }
  // for (var i = mlc * 4; i < mlc * 5; i++) {

  //   fl4.push(data[i]);
  // }

  // for (var i = mlc * 5; i < mlc * 6; i++) {

  //   fl5.push(data[i]);
  // }

  // for (var i = mlc * 6; i < mlc * 7; i++) {

  //     fl6.push(data[i]);
  // }


  FloorShopAll(fl0, 'Sportswear', 1);
  // FloorShopAll(fl1, 'Shoes', 2);
  // FloorShopAll(fl2, 'Bag', 3);
  // FloorShopAll(fl3, 'Accessories', 4);
  // FloorShopAll(fl4, 'Equipments', 5);
  // FloorShopAll(fl5, 'Equipments', 6);
  // FloorShopAll(fl6, 'Equipments', 7);

}

function FloorShopAll(data, imgHead, id) {

  var str = '';
  for (var i = 0; i < data.length; i++) {
    var imgName = i+1 + '.png';
    var name = data[i]['商品名称'];
    var desc = data[i]['导购文案'];

    // str += `<a href="${url}" class="shop-a" target="_blank" title="${name}"></a>`

    str += `
      <li class="product-li">
            <div class="r-box">
              <div class="thumb">
                <img src="./build/css/imgs/products/${imgName}" alt="">
              </div>
 
            </div>
            <div class="scan-box">
              <div class="scan-img-box">
                <img src="./build/css/imgs/scan/${imgName}" alt="">
              </div>
              <div class="scan-txt">
                打开 <span class="strong">番淘App</span>
              </div>
              <div class="scan-txt">
                点击购物车左上角“扫一扫”下单
              </div>
            </div>
          </li>
    `


  };




  var floor = $("#floor_" + id);

  floor.find('ul').html(str);

}