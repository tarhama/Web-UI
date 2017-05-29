//Section namespace
var renderSection = {};

//generate checklist function
renderSection.generateCheckList = function (checkListItems, checklistParentId) {
    var items = "";
    for (i = 0; i < checkListItems.length; i++) {
        text = checkListItems[i];
        items += '<div class="flex"><div class="li_image"></div><li class="mb-4 align-item_center"><span>' + text + '</span></li></div>';
    }
    document.getElementById(checklistParentId).innerHTML = items;
};

//generate buttons function
renderSection.generateButton = function (sectionId, button_text, type) {
    if (type == 'btn') {
        btn = document.getElementById(sectionId).getElementsByClassName('btn')[0];
    }
    else if (type == 'btn-link') {
        btn = document.getElementById(sectionId).getElementsByClassName('link-btn')[0];
    }

    btn.innerHTML = button_text;
};

renderSection.generateVideo = function (sectionId, videoLink) {
    videoDiv = document.getElementById(sectionId).getElementsByClassName('video');
    videoDiv[0].src = videoLink
};

renderSection.generateTextEl = function (sectionId, titleText, className) {
    document.getElementById(sectionId).getElementsByClassName(className)[0].innerHTML = titleText;
};

//generate images
renderSection.generateImages = function (sectionId, className, jsonData) {
    for (i = 0; i < jsonData.length; i++) {
        var image_items = document.createElement('div');
        var img = document.createElement('img');

        image_items.className = className;

        image_wrapper = document.getElementById(sectionId).getElementsByClassName('image-wrapper')[0];
        image_wrapper.appendChild(image_items);

        var image_items_div = document.getElementById(sectionId).getElementsByClassName(className);
        image_items_div[i].className += jsonData[i].className;
        image_items_div[i].appendChild(img);

        var image_el = document.getElementById(sectionId).getElementsByTagName('IMG');
        image_el[i].src = jsonData[i].src;
        image_el[i].alt = jsonData[i].name;
    }
};

$(function () {

    renderSection.generateCheckList(section3_data.checklistTexts, 'checklist-section3');
    renderSection.generateCheckList(section4_data.checklistTexts, 'checklist-section4');
    renderSection.generateButton('section3', section3_data.buttons[0].btn_text, 'btn');
    renderSection.generateButton('section3', section3_data.buttons[0].btn_link_text, 'btn-link');
    renderSection.generateTextEl('section3', section3_data.title, 'page-title');
    renderSection.generateImages('section3', 'image-items', section3_data.images);
    renderSection.generateButton('section4', section4_data.buttons[0].btn_text, 'btn');
    renderSection.generateButton('section4', section4_data.buttons[0].btn_link_text, 'btn-link');
    renderSection.generateImages('section4', 'image-items', section4_data.images);
    renderSection.generateTextEl('section4', section4_data.title, 'page-title');
    renderSection.generateTextEl('section6', '<p class="white m-0">' + section6_data.title + '</p>', 'page-title');
    renderSection.generateTextEl('section6', section6_data.subText, 'subText');
    renderSection.generateVideo('section6', section6_data.videoLink);
    renderSection.generateButton('section6', section6_data.buttons[0].btn_text, 'btn');
    renderSection.generateButton('section6', section6_data.buttons[0].btn_link_text, 'btn-link');
});
