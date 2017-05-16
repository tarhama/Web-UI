function loadJSON(callback, JSONpath) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', JSONpath, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") callback(xobj.responseText);
    };
    xobj.send(null);
}

loadJSON(function(response) {
    section9JSON = JSON.parse(response);
},JSONpath =  "https://github.com/tarhama/Web-UI/blob/master/data/section9.json" );

loadJSON(function(response) {
    footerJSON = JSON.parse(response);
},JSONpath =  'https://github.com/tarhama/Web-UI/blob/master/data/footer.json' );

window.onload = function () {

    var leftList = section9JSON.Lists.ListLeft.SheetList;
    var centerList = section9JSON.Lists.ListCenter.SheetList;
    var rightList = section9JSON.Lists.ListRight.SheetList;

    var leftListHead = section9JSON.Lists.ListLeft.ListHeader;
    var centerListHead = section9JSON.Lists.ListCenter.ListHeader;
    var rightListHead = section9JSON.Lists.ListRight.ListHeader;

    var productList = footerJSON.Lists.PRODUCT.SheetList;
    var resourcesList = footerJSON.Lists.RESOURCE.SheetList;
    var supportList = footerJSON.Lists.SUPPORT.SheetList;
    var partnersList = footerJSON.Lists.PARTNERS.SheetList;
    var companyList = footerJSON.Lists.COMPANY.SheetList;

    var footerArrayList  = [productList, resourcesList, supportList, partnersList, companyList];
    var footerArrayStringList = ["Product", "Resources", "Support", "Partners", "Company"];

    var langugageList = footerJSON.Lists.LANGUAGE.SheetList;
    var actualLanguage = footerJSON.Lists.LANGUAGE.SheetList[0];
    var footerLinks = footerJSON.Links.Links;

    var footerSocialLinks = footerJSON.Links.SocialLink;

    var elementIdHead = "section9-list-head";
    var footerSocialLinkstag = "FooterSocialLinks";

    var circleBorderClass = "blue-circle-border";

    function addLiToUl(elementList, elementId, elementHead, elementHeadId) {

        function printListHead(elementText) {
            var h3 = document.createElement('h3');
            var listHeadId = document.getElementById(elementHeadId);
            var imgIndex = document.getElementsByTagName('h3').length;
            var h3Tag = document.getElementsByTagName('h3');

            listHeadId.appendChild(h3);
            listHeadId.appendChild(h3).innerHTML = '<span>' + elementText + '</span>';
            h3Tag[imgIndex].className += 'large-35px flex align-ithem_center';

        }

        function printLiList(elementText) {
            var li = document.createElement('li');
            var listId = document.getElementById(elementId);

            listId.appendChild(li);
            listId.appendChild(li).innerHTML = elementText;
        }

        elementList.forEach(printLiList);

        if (elementHead != null){
            printListHead(elementHead)
        }
    }

    function addButton(elmentId, elementClass, elementText) {
        var a = document.createElement('a');
        var button = document.getElementById(elmentId);

        button.appendChild(a);
        button.appendChild(a).innerHTML = elementText;
        button.appendChild(a).className += elementClass;
        button.appendChild(a).href = "#";
    }

    function addLink(elementList, elementId, elementLink ) {

        function addLinks(elementText){
            if(elementLink == null){
                elementLink = "#";
            }
            var LinksTag = document.getElementById(elementId);
            var a = document.createElement('a');

            LinksTag.appendChild(a);
            LinksTag.appendChild(a).innerHTML = elementText;
            LinksTag.appendChild(a).href = elementLink;
        }

        elementList.forEach(addLinks);
    }

    function addCircleSocialLinks(elementSocialNetwork, elementTagID){

        function addSocialLink(element) {
            var span = document.createElement('span');
            var i = document.createElement('i');
            var spanTag = document.getElementById(elementTagID);
            var childrenI = span.children;
            elementSocialNetwork = element;

            spanTag.appendChild(span).appendChild(i);
            spanTag.lastChild.className += circleBorderClass;
            childrenI[0].className += 'fa fa-' + elementSocialNetwork;
            //document.querySelector('#' + footerSocialLinkstag + " span i").className += 'fa fa-' + elementSocialNetwork;
        }

        elementSocialNetwork.forEach(addSocialLink);
    }

    addLiToUl(elementList = leftList, elementId = "LeftList", elementHead = leftListHead, elementHeadId = elementIdHead);
    addLiToUl(elementList = centerList, elementId = "CenterList", elementHead = centerListHead, elementHeadId = elementIdHead);
    addLiToUl(elementList = rightList, elementId = "RightList", elementHead = rightListHead, elementHeadId = elementIdHead);

    for (i=0; i< footerArrayList.length; i++){
        addLiToUl(elementList = footerArrayList[i] , elementId = footerArrayStringList[i]);
    }

    addLiToUl(elementList = langugageList, 'LanguageList');

    addButton(elementId = "secetion9Btn", elementClass = section9JSON.Button.Class, elementText = section9JSON.Button.Text);

    addLink(elementList = footerLinks, elementId = "Footer_Links");

    document.getElementsByClassName("section9-h2")[0].innerHTML = section9JSON.Header.HeaderText;
    document.getElementById('ActualLanguage').innerHTML = actualLanguage;

    addCircleSocialLinks(elementSocialNetwork = footerSocialLinks, elementTagID = footerSocialLinkstag);
};