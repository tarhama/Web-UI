var Strings = {
    "pageTitle1": "Sell more with powerful eCommerce",
    "pageTitle2": "Grow faster with built-in marketing",
    "pageTitle3": "We've got your back",
    "subText": "Talk to our award-winning Success Team available to help you create a website and achieve your goals. Join the Weebly Community, a vibrant network of people doing what they love.",
    "checklistTexts": [
        {
            "text":"<strong>Beautiful design</strong> to customize your storefront and showcase your products",
            "text1":"<strong>Simplified email marketing</strong> that syncs with your site and store"
        },
        {
            "text":"<strong>Complete platform</strong> to manage inventory, track orders and handle taxes",
            "text1":"<strong>Engage your customers</strong> & promote your brand with emails you design and send in minutes"

        },
        {
            "text":"<strong>Advanced tools</strong>: real time shipping, abandoned cart, coupons and currencies",
            "text1":"<strong>Get found on Google:</strong> SEO tools to find customers, climb the ranks & stay on top"

        }
        ]
};

var Buttons = {
    "buttons": [
        {"text1": "GET STARTED", "text2": "LEARN MORE"},
        {"text1": "GET STARTED", "text2": "LEARN MORE"},
        {"text1": "GET STARTED", "text2": "LEARN MORE"}
    ]
};

var Videos = {
    "VideoLink" : "./assets/videos/cs.mp4"
};

var Images = {
    "section3_images" : [
        {
            "src": "./assets/images/box.jpg",
            "name": "section3_box",
            "className": " item-box"
        },
        {
            "src": "./assets/images/orders.png",
            "name": "section3_orders",
            "className": " item-orders"
        },
        {
            "src": "./assets/images/iphone.png",
            "name": "section3_iphone",
            "className": " item-iphone"
        },
        {
            "src": "./assets/images/monthly-sales.png",
            "name": "section3_monthly_sales",
            "className": " item-sales"
        }
    ],

    "section4_images" : [
        {
            "src": "./assets/images/shades.jpg",
            "name": "shades",
            "className": " item-shades"
        },
        {
            "src": "./assets/images/email-roi.png",
            "name": "email-roi",
            "className": " item-email-roi"
        },
        {
            "src": "./assets/images/email-performance.png",
            "name": "performance",
            "className": " item-email-performance"
        },
        {
            "src": "./assets/images/email.png",
            "name": "email",
            "className": " item-email"
        }
    ]
};

$(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 1800) {
        $('.page-section-3 .page-content').addClass('checklist-transition');
        $('.page-section-3 .image-items').addClass('image-transition');
        $('.page-section-3 .item-orders').addClass('image-transition1');
        $('.page-section-3 .item-iphone').addClass('image-transition2');
        $('.page-section-3 .item-sales').addClass('image-transition3');
    }

    if (height > 2800) {
        $('.page-section-4 .page-content').addClass('checklist-transition');
        $('.page-section-4 .item-shades').addClass('image-transition');
        $('.page-section-4 .item-email-roi').addClass('image-transition1');
        $('.page-section-4 .item-email-performance').addClass('image-transition2');
        $('.page-section-4 .item-email').addClass('image-transition3');

    }

    /* SECTION 6 ANIMATE */
    if (height > 4660) {
        $('.page-section-6 .page-text.opacity').addClass('is-active');
        $('.page-section-6 .page-title.opacity').addClass('tabs-transition');
        $('.page-section-6 .page-btns.opacity').addClass('btn-active');
    }
    /* END OF SECTION 6 ANIMATE */

});


$(document).ready(function () {

    //variable definition
    var title = "page-title";
    var subText = "subText";
    var checklist = document.getElementsByClassName('checklist');
    var section_btns = document.getElementsByClassName('btn');
    var section_link_btns = document.getElementsByClassName('link-btn');
    var image_wrapper = document.getElementsByClassName('image-wrapper');


    //added title content
    function addContent(elName, index, stringJson) {
        document.getElementsByClassName(elName)[index].innerHTML = stringJson;
    }


    //section 3 and 4 checklist added content
    function generateCheckList(checkListId){
        var items = "";
        for (i=0; i < Strings.checklistTexts.length; i++ ){
            text = Strings.checklistTexts[i].text1;
            items +=  '<li class="checklist__item">' + text +'</li>';
        }
        checklist[checkListId].innerHTML = items;
    }

    //Generate Buttons
    function generateButtons(buttonEl, text) {
        for (i=0; i < Buttons.buttons.length; i++ ){
            if (text == "text1"){
                text_el = Buttons.buttons[i].text1;
            }
            else if (text == "text2"){
                text_el = Buttons.buttons[i].text1;
            }
            buttonEl[i].innerHTML = text_el;
        }
    }

    //Video Source
    function videoSource(videoClassName, videoLink, index){
        var videoDiv = document.getElementsByClassName(videoClassName);
        videoDiv[index].src = videoLink
    }

    //Generate section 3 and 4 Images
    function generateImages(className, sectionName, wrapperId, img_JSON) {
        for (i=0; i < img_JSON.length; i++ ){
            var image_items = document.createElement('div');
            var img = document.createElement('img');

            image_items.className = className;
            image_wrapper[wrapperId].appendChild(image_items);

            var image_items_div = document.getElementById(sectionName).getElementsByClassName(className);
            image_items_div[i].className += img_JSON[i].className;
            image_items_div[i].appendChild(img);

            var image_el = document.getElementById(sectionName).getElementsByTagName('IMG');
            image_el[i].src = img_JSON[i].src;
            image_el[i].alt = img_JSON[i].name;
        }
    }

    addContent(title, 0, Strings.pageTitle1);
    addContent(title, 1, Strings.pageTitle2);
    addContent(title, 2, '<h2 class="white m-0">' + Strings.pageTitle3 + '</h2>');
    addContent(subText, 0, Strings.subText);
    generateButtons(section_btns, "text1");
    generateButtons(section_link_btns, "text2");
    generateCheckList(0);
    generateCheckList(1);
    videoSource("video", Videos.VideoLink, 0);
    generateImages("image-items", "section3", 0, Images.section3_images);
    generateImages("image-items2", "section4", 1, Images.section4_images);

});
