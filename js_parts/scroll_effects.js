$(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 1500) {
        $('.page-section-3 .page-width').addClass('checklist-transition');
        $('.page-section-3 .image-items').addClass('image-transition');
        $('.page-section-3 .item-orders').addClass('image-transition1');
        $('.page-section-3 .item-iphone').addClass('image-transition2');
        $('.page-section-3 .item-sales').addClass('image-transition3');
    }

    if (height > 2300) {
        $('.page-section-4 .page-width').addClass('checklist-transition');
        $('.page-section-4 .item-shades').addClass('image-transition');
        $('.page-section-4 .item-email-roi').addClass('image-transition1');
        $('.page-section-4 .item-email-performance').addClass('image-transition2');
        $('.page-section-4 .item-email').addClass('image-transition3');

    }
    /* SECTION 5 ANIMATE */
    if (height > 3800) {
        $('.section5 .section5-text.opacity').addClass('is-active');
        $('.section5 .section5-title.opacity').addClass('tabs-transition');
        $('.section5 .state-btn.opacity').addClass('btn-active');
        $('.section5 .app-icon.opacity').addClass('app-active');
    }
    /* END OF SECTION 5 ANIMATE */

    /* SECTION 6 ANIMATE */
    if (height > 4660) {
        $('.page-section-6').addClass('tabs-transition');
    }
    /* END OF SECTION 6 ANIMATE */

    /* SECTION 7 ANIMATE */
    if (height > 5300) {
        $('.section7 .black.opacity').addClass('tabs-transition');
        $('.section7 .gray.opacity').addClass('is-active');
    }
    /* END OF SECTION 7 ANIMATE */



});