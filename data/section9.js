window.onload = function () {

    var section9JSON = {"Header":{"HeaderText":"Features to start, sell & grow,","TextColor":"#fff"},"Lists":{"ListImg":"./assets/images/circle-check.svg","ListLeft":{"SheetList":["Simple drag & drop editor","Step-by-step guidance","Pre-designed layout options","Domain names & professional email","Video backgrounds","Site stats","Create a blog"],"ListHeader":"Website"},"ListCenter":{"ListImg":"./assets/images/circle-check.svg","SheetList":["Unlimited products","Optimized one-page checkout","Automatic tax calculator","Real time shipping rates","Abandoned cart recovery","Coupon codes","Digital gift cards"],"ListHeader":"eCommerce"},"ListRight":{"ListImg":"./assets/images/circle-check.svg","SheetList":["Fully integrated with site & store","Suggested emails created automatically","Email to sales insights","Branded billing emails","Powerful app integrations","SEO Guide & scorecard","Automation for marketing autopilot"],"ListHeader":"Marketing"}},"Button":{"Text":"See all Features\n\n","Class":"weebly-btn weebly-border-blue white-text"}};
    var footerJSON = {"Footer":{"HeaderText":"Features to start, sell & grow,"},"Lists":{"PRODUCT":{"SheetList":["Product","Features","Themes","Pricing","App Center","Mobile Apps"]},"RESOURCE":{"SheetList":["resource","Weebly Blog","Inspiration Center","Success Stories","Developer Docs"]},"SUPPORT":{"SheetList":["Support","Support Center","Community"]},"PARTNERS":{"SheetList":["partners","Ambassadors","Resellers","Affiliates","Designers","Developer","Education"]},"COMPANY":{"SheetList":["company","About","Careers","Press","Contact"]},"LANGUAGE":{"SheetList":["Dansk","Deutsch","Español","Français","Italiano","日本語","한국어","Nederlands","Norsk","Polski","Português","Pусский","Svenska","Türkçe","中文 (繁體)","中文 (简体)"]}},"Links":{"Links":["© Weebly, Inc.","Terms","Privacy Policy"]}};

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

    var langugageList = footerJSON.Lists.LANGUAGE.SheetList;
    var actualLanguage = footerJSON.Lists.LANGUAGE.SheetList[0];
    var footerLinks = footerJSON.Links.Links;

    var elementIdHead = "section9-list-head";


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

    addLiToUl(elementList = leftList, elementId = "LeftList", elementHead = leftListHead, elementHeadId = elementIdHead);
    addLiToUl(centerList,"CenterList", elementHead = centerListHead, elementHeadId = elementIdHead);
    addLiToUl(rightList,"RightList", elementHead = rightListHead, elementHeadId = elementIdHead);

    addLiToUl(elementList = productList, elementId = "Product");
    addLiToUl(elementList = resourcesList, elementId = "Resources");
    addLiToUl(elementList = supportList, elementId = "Support");
    addLiToUl(elementList = partnersList, elementId = "Partners");
    addLiToUl(elementList = companyList, elementId = "Company");

    addLiToUl(elementList = langugageList, 'LanguageList')

    addButton(elementId = "secetion9Btn", elementClass = section9JSON.Button.Class, elementText = section9JSON.Button.Text);

    addLink(elementList = footerLinks, elementId = "Footer_Links");

    document.getElementsByClassName("section9-h2")[0].innerHTML = section9JSON.Header.HeaderText;
    document.getElementById('ActualLanguage').innerHTML = actualLanguage;





};