$(window).scroll(function () {
    var height = $(window).scrollTop();

    /* SECTION 2 ANIMATE */
    if (height > 500) {
        $('.home-themes .home-themes_tabs-container').addClass('tabs-transition');
        $('.home-themes_tabs-content').addClass('is-active');
    }
    /* END OF SECTION 2 ANIMATE */

    if (height > 1800) {
        $('.page-width').addClass('checklist-transition');
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
        $('.page-section-6 .page-text.opacity').addClass('is-active');
        $('.page-section-6 .page-title.opacity').addClass('tabs-transition');
        $('.page-section-6 .page-btns.opacity').addClass('btn-active');
    }
    /* END OF SECTION 6 ANIMATE */

    /* SECTION 7 ANIMATE */
    if (height > 5300) {
        $('.section7 .black.opacity').addClass('tabs-transition');
        $('.section7 .gray.opacity').addClass('is-active');
    }
    /* END OF SECTION 7 ANIMATE */

});