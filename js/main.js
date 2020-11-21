(function (w, d) {
    w.onload = function () {
        var wp = d.querySelector('.header'),
            colors = ['img/slide1.jpg', 'img/slide3.jpg','img/slide4.jpg'],
            ln = colors.length;

        var changeColor = function (i) {
            if (i < ln) {
                setTimeout(function () {
                    wp.style.cssText = "background-image: url(" + colors[i] + "); background-repeat: no-repeat;  background-size: cover;";
                    i++;
                    changeColor(i);
                }, 6000);
            } else {
                changeColor(0);
            }
        };

        changeColor(0);
    };
}(window, document));


$(document).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $('.header-top').css({ "background": "#d58300", 'transition': '1s' })
    }
    else {
        $('.header-top').css({ "background": "rgba(255,255,255,0.1)", })
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > 220) {
        $('.slider-main-text').css({ "visibility": "hidden", });
    }
    else {
        $('.slider-main-text').css({ "visibility": "visible" });
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > 250) {
        $('.slider-comain-text').css({ "visibility": "hidden" });
    }
    else {
        $('.slider-comain-text').css({ "visibility": "visible" });
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > 260) {
        $('.slider-cocomain-text').css({ "visibility": "hidden" });
    }
    else {
        $('.slider-cocomain-text').css({ "visibility": "visible" });
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > 320) {
        $('.slider-btn').css({ "visibility": "hidden" });
    }
    else {
        $('.slider-btn').css({ "visibility": "visible" });
    }
});

$('.slider-btn').on('click', function () {
    window.scrollBy(0, 2375)
})




//Вывод товаров

var cart = {};
var articuls = {};
//корзина
$('document').ready(function () {
    loadGoods();
    checkCart();
    showMiniCart();
});
    var priceSet;

    priceSet = function(data){
        /*
         * В переменной price приводим получаемую переменную в нужный вид:
         * 1. принудительно приводим тип в число с плавающей точкой,
         *    учли результат 'NAN' то по умолчанию 0
         * 2. фиксируем, что после точки только в сотых долях
         */
        var price       = Number.prototype.toFixed.call(parseFloat(data) || 0, 2),
            //заменяем точку на запятую
            price_sep   = price.replace(/(\D)/g, ","),
            //добавляем пробел как разделитель в целых
            price_sep   = price_sep.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

        return price_sep;
    };

function loadGoods() {
    var out = '';
    for (var key in data) {
        out += "<div class='goods-items-block wow flipInX'><div class='goods-item '>"
        out += "<div class='front'><div class='foto' style='background-image:url(" + data[key]['image'] + ")'></div>";
        out += "<div class='low-front'><div class='price-front'>"+priceSet(data[key]['cost'])+"₽</div><div class='front-name'>" + data[key]['name'] + '</div>';
        out += "<br><div class='front-weight'>"+data[key]['weight']+"</div></div></div>"
        
        // out += "<div class='back'><p>" + data[key]['name'] + '</p>';
        // out += "<p><span style='font-weight:700; font-size:1.2em;'>Цена: </span>" + data[key]['cost'] + ' рублей</p>';
        // out += "<p><span style='font-weight:700; font-size:1.2em;'>Описание: </span>" + data[key]['description'] + '</p></div>';
        // out += "</div><div class='front-bottom ' data-art='" + key + "' data-art1='" + data[key]['name'] + "'>Добавить в корзину</div></div>"
        out+="<div class='back'>" + data[key]['name'] +'<div class="back-desc">'
        out+="<p>Описание: </p>" + data[key]['description'] + " </div>"
        out+="<div class='back-info'><p>Общая информация: </p>"
        out+="<div class='back-block country'><span>Срок храниения: </span>"+data[key]['time']+"</div>"
        out+="<div class='back-block'><span>Условия хранения: </span>"+data[key]['conditions']+"</div>"
        out+="<div class='back-block country'><span>Страна: </span>"+data[key]['country']+"</div></div>"
        out+="<div class='foods-power'><p>Пищевая ценность на 100 г: </p>"
        out+="<div class='back-block'><span>Белки:</span>"+data[key]['proteins']+"</div>"
        out+="<div class='back-block'><span>Жиры:</span>"+data[key]['fats']+"</div>"
        out+="<div class='back-block'><span>Углеводы:</span>"+data[key]['carbohydrates']+"</div>"
        out+='<div class="back-block"><span>Калорийность:</span>'+ data[key]['calorie'] +'</div></div>'
        out += "</div></div><div class='front-bottom ' data-art='" + key + "' data-art1='" + data[key]['name'] + "'>Добавить в корзину</div></div>"



    }
    // data = {
    //     "11111": {
    //         "name": "Яблоко",
    //         "cost": 12,
    //         "description": "Яблоки свежие",
    //         "image": "img/apple.jpg"
    //     },
    //     "11112": {
    //         "name": "Банан",
    //         "cost": 20,
    //         "description": "Бананы жёлтые",
    //         "image": "img/bananas.jpg"
    //     },
    //     "11113": {
    //         "name": "Груша",
    //         "cost": 14,
    //         "description": "Груша сладкая",
    //         "image": "img/pear.jpg"
    //     },
    //     "11114": {
    //         "name": "Томат",
    //         "cost": 18,
    //         "description": "Томат момат",
    //         "image": "img/tomato.jpg"
    //     },
    //     "11115": {
    //         "name": "Апельсин",
    //         "cost": 25,
    //         "description": "Покупай",
    //         "image": "img/orange.jpg"
    //     },
    //     "11116": {
    //         "name": "Хлеб",
    //         "cost": 23,
    //         "description": "Из пекарни везёный",
    //         "image": "img/bread.jpg"
    //     },
    //     "11117": {
    //         "name": "Картофель",
    //         "cost": 15,
    //         "description": "Из Беларуси",
    //         "image": "img/potato.jpg"
    //     },
    //     "11118": {
    //         "name": "Молоко",
    //         "cost": 45,
    //         "description": "Из деревни",
    //         "image": "img/milk.jpg"
    //     },
    //     "11119": {
    //         "name": "Святая вода",
    //         "cost": 100,
    //         "description": "Из храма Божьего",
    //         "image": "img/water.jpg"
    //     },
    //     "11120": {
    //         "name": "Пиво",
    //         "cost": 49,
    //         "description": "Как балтика 9, только лучше",
    //         "image": "https://cdn4.iconfinder.com/data/icons/BRILLIANT/food/png/128/beer.png"
    //     }
    data={
        '1111':{
            'name':'Яблоки Голден Азербайджан',
            'cost': 149.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/apple.jpg',
            'weight':'1 кг',
            'proteins' : '0,5 г',
            'fats' : '0,2 г',
            'carbohydrates' : '10,7 г',
            'calorie' : '53 ккал',
            'time':'30 суток',
            'conditions':'При температуре +3°C',
            'country':'Азербайджан'
        },
        '1112':{
            'name':'Груши Конференс',
            'cost': 239.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/pear.jpg',
            'weight':'1 кг',
            'proteins' : '0,5 г',
            'fats' : '0,5 г',
            'carbohydrates' : '12,5 г',
            'calorie' : '48,43 ккал',
            'time':'14 суток',
            'conditions':'При температуре от -1°С до +3°С',
            'country':'-'
        },
        '1113':{
            'name':'Яблоки Симиренко Сербия',
            'cost': 149.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/apple.jpg',
            'weight':'1 кг',
            'proteins' : '0,4 г',
            'fats' : '0,4 г',
            'carbohydrates' : '9 г',
            'calorie' : '37 ккал',
            'time':'30 суток',
            'conditions':'При температуре от +2°С до +8°С',
            'country':'Сербия'
        },
        '1114':{
            'name':'Яблоки Симиренко Азербайджан',
            'cost': 119.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/apple.jpg',
            'weight':'1 кг',
            'proteins' : '0,3 г',
            'fats' : '0,2 г',
            'carbohydrates' : '14 г',
            'calorie' : '52 ккал',
            'time':'30 суток',
            'conditions':'При температуре от +2°С до +10°С',
            'country':'Азербайджан'
        },
        '1115':{
            'name':'Киви',
            'cost': 179.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/apple.jpg',
            'weight':'1 кг',
            'proteins' : '1 г',
            'fats' : '0,6 г',
            'carbohydrates' : '10,3 г',
            'calorie' : '48 ккал',
            'time':'до 6 недель',
            'conditions':'При температуре от +8°С до +16°С в холодильнике',
            'country':'Турция'
        },
        '1116':{
            'name':'Груши Лукас',
            'cost': 224.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/pear.jpg',
            'weight':'1 кг',
            'proteins' : '0,3 г',
            'fats' : '0,4 г',
            'carbohydrates' : '10,7 г',
            'calorie' : '43,6 ккал',
            'time':'15 суток',
            'conditions':'При температуре от -1°С до +3°С',
            'country':'Испания'
        },
        '1117':{
            'name':'Мандарины ЮАР',
            'cost': 269.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/pear.jpg',
            'weight':'1 кг',
            'proteins' : '0,8 г',
            'fats' : '0,2 г',
            'carbohydrates' : '7,5 г',
            'calorie' : '33 ккал',
            'time':'14 суток',
            'conditions':'При температуре от +2°С до +5°С',
            'country':'ЮАР'
        },
        '1116':{
            'name':'Лимоны',
            'cost': 169.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/pear.jpg',
            'weight':'1 кг',
            'proteins' : '0,9 г',
            'fats' : '0,1 г',
            'carbohydrates' : '3 г',
            'calorie' : '16 ккал',
            'time':'2 месяца',
            'conditions':'При температуре меньше +14°С',
            'country':'Турция'
        },
        '1118':{
            'name':'Апельсины ЮАР',
            'cost': 169.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/pear.jpg',
            'weight':'1 кг',
            'proteins' : '0,9 г',
            'fats' : '0,2 г',
            'carbohydrates' : '8,2 г',
            'calorie' : '36 ккал',
            'time':'2 месяца',
            'conditions':'от +2 до +6 °С',
            'country':'ЮАР'
        },
        '1119':{
            'name':'Апельсины Турция',
            'cost': 169.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/pear.jpg',
            'weight':'1 кг',
            'proteins' : '0,9 г',
            'fats' : '0,2 г',
            'carbohydrates' : '8,1 г',
            'calorie' : '38 ккал',
            'time':'2 месяца',
            'conditions':'от +3 до +8 °С',
            'country':'Турция'
        },
        '1120':{
            'name':'Апельсины Испания',
            'cost': 169.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image':'img/pear.jpg',
            'weight':'1 кг',
            'proteins' : '0,9 г',
            'fats' : '0,2 г',
            'carbohydrates' : '8,1 г',
            'calorie' : '43 ккал',
            'time':'2 месяца',
            'conditions':'от +2 до +10 °С',
            'country':'Испания'
        },
    }
    
    $('.goods-items').html(out);
    $('.front-bottom').on('click', AddToCart);
}
function AddToCart() {
    //добавление товара в корзину
    // $('.all-hd').css('max-width', (screen.width - 400));

    var articul = $(this).attr('data-art1');
    if (cart[articul] > 0) {
        cart[articul]++
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart))

    var articul = $(this).attr('data-art');
    if (articuls[articul] > 0) {
        articuls[articul]++
    }
    else {
        articuls[articul] = 1;
    }
    localStorage.setItem('articuls', JSON.stringify(articuls))
    showMiniCart()
    Open()
}
function checkCart() {
    //проверка на наличие данных в localStorage
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
    if (localStorage.getItem('articuls') != null) {
        articuls = JSON.parse(localStorage.getItem('articuls'))
    }
}
function showMiniCart() {
    // показ содержимого корзины
    var cost = 0
    var out = '';
    if (localStorage.getItem('articuls') != null && localStorage.getItem('articuls') != '{}') {
        cart = JSON.parse(localStorage.getItem('cart'))
        out += '<button class="close-button"><img class="basket-no-img"src="img/basket-no.png" alt="">Закрыть корзину</button><br>'
        for (var key in articuls) {
            out += '<div class="goods-info"><img src="' + data[key].image + '" width="48" >';
            out += data[key].name
            out += '<br><div class="p-m-t"><div class="pl-min"><div class="plus" data-art="' + key + '" data-art1="' + data[key].name + '"></div>' + articuls[key];
            out += '<div class="minus" data-art="' + key + '"data-art1="' + data[key].name + '"></div></div>';
            out += '<div class="delete" data-art="' + key + '" data-art1="' + data[key].name + '"><img src="img/trash.png" alt="">Удалить товар</div></div>';
            out += "<div class='price-for-one-goods'>" +  priceSet(Math.round((articuls[key] * data[key].cost)*100)/100) + "₽</div>";
            cost += (Math.round((articuls[key] * data[key].cost)*100)/100);
            out += "</div>"
        }
        out += "<div class='summa'>Всего: " + priceSet(cost) + " рублей</div>";
        out += '<button class="delete-everthing">Удалить всё</button>';
        out += '<a href="delivery.html"><div class="show-bask">Заказать</div></a>';
        $('.basket-hidden').css('display', 'none');

    }
    else {
        out += '<button class="close-button"><img class="basket-no-img"src="img/basket-no.png" alt="">Закрыть корзину</button><br>Коризина пуста';
        $('.basket-hidden').css('display', 'none');
        $('.all-hd').css('opacity', '1');

    }
    $('.front-bottom').on('click', function(){
        console.log('allwork')
        Open()
        Open()
    })
    $('.basket').html(out)
    $('.plus').on('click', Plus);
    $('.minus').on('click', Minus);
    $('.delete').on('click', DeleteElem);
    $('button.delete-everthing').on('click', DeleteEverthing);

    $('.close-button').on('click', Close);
    $('.bask-on').on('click', Open);




}
function checkOpacity() {
    if (basketHid == 'block') {
        $('.all-hd').css('opacity', '1');
    }
}

function Close() {
    $('.basket').css('display', 'none');
    $('.basket-hidden').css('display', 'none');
    $('.all-hd').css('max-width', '100%');
    $('.all-hd').css('opacity', '1');
    $('.header-top').css('right', '0');
    $('.bask-on').css('display', 'flex');
    $('.header-top').css('width', '100%');


}
function Open() {
    $(document).ready(function () {
        // Координаты курсора относительно всего документа
        $(document).click(function (event) {
            var x = event.pageX;
            var y = event.pageY;
            if (x < screen.width - 400 && $('.basket-hidden').css('display') == 'block') {
                $('.all-hd').css('opacity', '1')
            }
        });
    });
    $('.basket').css('display', 'block');
    $('.basket-hidden').css('display', 'block');
    $('.basket-hidden').css('overflow', 'scroll');
    $('.header-top').css('right', '400px');
    $('.header-top').css('width', (screen.width - 400));
    $('.bask-on').css('display', 'none');
    $('.all-hd').css('max-width', (screen.width - 400));
    $('.all-hd').css('opacity', '0.65');
    // $('.close-button').css('height', $('.header-menu').css('height'))

}

function Plus() {
    articul = $(this).attr('data-art1')
    cart[articul]++

    articul = $(this).attr('data-art')
    articuls[articul]++
    saveCartToLS()
    Open()

}
function Minus() {
    articul = $(this).attr('data-art1')
    if (cart[articul] > 1) {
        cart[articul]--
    }
    else {
        delete cart[articul]
    }

    articul = $(this).attr('data-art')
    if (articuls[articul] > 1) {
        articuls[articul]--
    }
    else {
        delete articuls[articul]
    }
    saveCartToLS()
    Open()
}
function DeleteElem() {
    articul = $(this).attr('data-art1')
    delete cart[articul]
    articul = $(this).attr('data-art')
    delete articuls[articul]
    saveCartToLS()
    Open()
}
function DeleteEverthing() {
    if (localStorage.getItem('articuls') != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
        for (var key in articuls) {
            delete cart[data[key]['name']]
            delete articuls[key]
        }
    }
    saveCartToLS()
    $('.basket-hidden').css('display', 'none');
    Close()
    showMiniCart()

}
function saveCartToLS() {
    //сохранение корзины в localstorage

    localStorage.setItem('articuls', JSON.stringify(articuls))
    localStorage.setItem('cart', JSON.stringify(cart))
    showMiniCart()
}

