var Section1Processor = function () {

    var data;
    var counter = 0;
    var animatedText;
    var splitedText;
    var videoElem;
    var publicMethods = {};
    var videoSrc;
    var videoType;

    publicMethods.init = function (configForSection1) {
        animatedText = document.getElementById("text-animation");
        videoElem = document.getElementById("section1_video");
        console.log("init");
        data = configForSection1;
        videoSrc = configForSection1.videoAttributes.videoSrc;
        videoType = configForSection1.videoAttributes.videoType;
        splitedText= configForSection1.title.split("");
    };

    publicMethods.addVideoSrc = function () {
        var source = document.createElement('source');
        source.src = videoSrc;
        source.type = videoType;
        videoElem.appendChild(source);
    };

     publicMethods.animateText = function () {
         setInterval(publicMethods.appendToTheRight, 200);
     };

    publicMethods.appendToTheRight = function () {
        animatedText.innerHTML += splitedText[counter];
        counter++;
        if (counter > splitedText.length) {
            counter = 0;
            animatedText.innerHTML = "";
        }
    };
    return publicMethods;
}();






