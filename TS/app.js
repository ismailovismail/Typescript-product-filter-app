var infoArr = [3, 4, 5, 6];
// console.log(infoArr)
var dataArr = function (newData) {
    return newData;
};
var info = function (dataOne, dataTwo) {
    var comingData = dataOne;
    dataArr(comingData);
    console.log(dataArr);
};
info([1, 2, 3, 4]);
// var dataArray:string[]=['home','about','services','blog']
// dataArray.map((fd:string)=>{
//       let li=document.createElement('li')
//       li.innerHTML+=fd
//       let ul:any=document.querySelector<HTMLHtmlElement>('ul')
//       ul.innerHTML+=fd
// })
var inform;
var row = document.querySelector('.cards .container-fluid .row');
var btns = document.querySelectorAll('header .container button');
fetch('https://fakestoreapi.com/products')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    function displayCards(item) {
        var cards = item.map(function (fd) {
            return "<div class=\"card col-12 col-sm-12 col-md-3 \">\n  <img src=".concat(fd.image, "  class=\"card-img-top\"  alt=\"\">\n  <div class=\"card-body\">\n      <h1 class=\"card-title\">").concat(fd.title, "</h1>\n      <p class=\"card-text\">Category : ").concat(fd.category, "</p>\n      <h2 class=\"card-title\">$ ").concat(fd.price, "</h2>\n      <div class=\"rating d-flex justify-content-between \">\n          <div class=\"rate\">Rating : ").concat(fd.rating.rate, "</div>\n          <div class=\"count\">Count : ").concat(fd.rating.count, "</div>\n      </div>\n  </div>\n  </div>");
        });
        cards = cards.join("");
        row.innerHTML = cards;
    }
    displayCards(data);
    btns.forEach(function (btn) {
        btn.onclick = function (e) {
            var activebtn = document.querySelector('header .container button.active');
            activebtn.classList.remove('active');
            btn.classList.add('active');
            var category = e.currentTarget.dataset.id;
            var cardCategory = data.filter(function (fd) {
                if (fd.category === category) {
                    return fd;
                }
            });
            if (category === 'all') {
                displayCards(data);
            }
            else {
                displayCards(cardCategory);
            }
        };
    });
});
