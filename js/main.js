// main.js
// The init script for this HTML5 Video Application
// This app is used as a demo for creating a video application utilizing the video API
// built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
// I added the ability to associate custom callbacks with moments in time of the video.
//
// @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
// @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS
// with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)

import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", (e) => {
    var myCues = [
        { seconds: 3, callback: func1 }, // Apollo mission
        { seconds: 5, callback: func2 }, // Space Shuttle
        { seconds: 6, callback: func3 }, // Int Space Station
        { seconds: 8, callback: func4 }, // Hubble
        { seconds: 9, callback: clearBotFrame },
        { seconds: 11, callback: clearTopFrame },
        { seconds: 13, callback: func5 }, // Webb logo on rocket
        { seconds: 15, callback: func6 }, // Webb blueprints
        { seconds: 23, callback: clearAll },
        { seconds: 27, callback: func7 }, // Webb Wikipedia page
        { seconds: 47, callback: clearTopFrame },
        { seconds: 51, callback: func9 }, // Telescope size comparision image
        { seconds: 65, callback: func10 }, // Big Bang article web page
        { seconds: 80, callback: clearAll },
        { seconds: 84, callback: func23 }, // Mirror size comparison
        { seconds: 100, callback: func16 }, // Rocket on launch pad
        { seconds: 106, callback: func17 }, // Rocket liftoff
        { seconds: 114, callback: func15 }, // Webb folded with fairing
        { seconds: 120, callback: clearAll },
        { seconds: 125, callback: func19 }, // Deployment video
        { seconds: 178, callback: func18 }, // Space Telescope Science Institute webpage
        { seconds: 263, callback: func20 }, // Orbit distance image
        { seconds: 273, callback: func27 }, // Orbit illustration image
        { seconds: 277, callback: func24 }, // Orbit video
        { seconds: 290, callback: func21 }, // Solar Wind explanation
        { seconds: 296, callback: clearTopFrame },
        { seconds: 297, callback: func12 }, // Webb fun fact primary mirror
        { seconds: 306, callback: func31 }, // ESA website on sunshield
        { seconds: 330, callback: clearBotFrame },
        { seconds: 331, callback: func26 }, // Time lapse video
        { seconds: 390, callback: func25 }, // Informational image
        { seconds: 400, callback: func28 }, // Informational image
        { seconds: 410, callback: func32 }, // Informational image
        { seconds: 420, callback: clearAll },
        { seconds: 421, callback: func30 }, // Webb instrumentation website and image
        { seconds: 460, callback: func33 }, // Webb logo
    ];

    // This activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    cueTimer.setup("vid", myCues);

    // Shortcut variables
    const vid = document.querySelector("#vid");
    const selectList = document.querySelector("#video_select");

    // Make the select list control what video format to play
    selectList.addEventListener("change", (e) => {
        selectVideo(e, vid);
    });
});

// The custom callback functions to trigger when a cuepoint is hit.
// You can code up whatever behavior you need in your own callbacks
// feel free to rename the functions to be more descriptive of what they do.

// Function to set one iframe in col2
function setOneFrame() {
    document.querySelector(".col2").innerHTML =
        '<iframe id="topFrame" src="./blank.html" allow="autoplay"></iframe>';
    document.querySelector("#topFrame").style.height = "88vh";
}

// Function to set two iframes in col2
function setTwoFrame() {
    setOneFrame();
    document.querySelector(".col2").innerHTML +=
        '<iframe id="botFrame" src="./blank.html" allow="autoplay"></iframe>';
    document.querySelector("#topFrame").style.height = "44vh";
    document.querySelector("#botFrame").style.height = "44vh";
}

function clearTopFrame() {
    document.querySelector("#topFrame").src = "./blank.html";
}

function clearBotFrame() {
    document.querySelector("#botFrame").src = "./blank.html";
}

function clearAll() {
    document.querySelector("#topFrame").src = "./blank.html";
    document.querySelector("#botFrame").src = "./blank.html";
}

function func1() {
    setTwoFrame();
    document.querySelector("#botFrame").src = "images/apollo.jpg";
}

function func2() {
    document.querySelector("#topFrame").src = "images/shuttle.jpg";
}

function func3() {
    document.querySelector("#botFrame").src = "images/iss.png";
}

function func4() {
    document.querySelector("#topFrame").src = "images/hubble.jpg";
}

function func5() {
    document.querySelector("#topFrame").src = "images/image01.jpg";
}

function func6() {
    document.querySelector("#botFrame").src = "images/blueprints.jpg";
}

function func7() {
    setOneFrame();
    document.querySelector("#topFrame").src =
        "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope";
}

function func9() {
    setOneFrame();
    document.querySelector("#topFrame").src = "images/jwst_comparison.png";
}

function func10() {
    document.querySelector("#topFrame").src =
        "https://bigthink.com/starts-with-a-bang/big-bang-beginning-universe/";
}

function func12() {
    setOneFrame();
    document.querySelector("#topFrame").src = "images/ff03.jpg";
}

function func15() {
    document.querySelector("#topFrame").src = "images/image06.png";
}

function func16() {
    setTwoFrame();
    document.querySelector("#botFrame").src = "images/image03.png";
}

function func17() {
    document.querySelector("#topFrame").src = "images/image05.jpg";
}

function func18() {
    document.querySelector("#botFrame").src = "https://www.stsci.edu/";
}

function func19() {
    document.querySelector("#topFrame").src =
        "https://www.dennismays.com/artdm174/media/jwst_deployment.mp4?autoplay=1";
    document.querySelector("#topFrame").type = "video/mp4";
}

function func20() {
    document.querySelector("#botFrame").src = "images/orbit.png";
}

function func21() {
    document.querySelector("#botFrame").src = "images/solarwind.png";
}

function func23() {
    setOneFrame();
    document.querySelector("#topFrame").src = "images/size.jpg";
}

function func24() {
    document.querySelector("#topFrame").src = "media/orbit.mp4?autoplay=1";
    document.querySelector("#topFrame").type = "video/mp4";
}

function func25() {
    // setTwoFrame();
    document.querySelector("#topFrame").src = "images/jwst04.png";
}

function func26() {
    setTwoFrame();
    document.querySelector("#topFrame").src =
        "https://www.dennismays.com/artdm174/media/jwst_sunshield720.mp4?autoplay=1";
    document.querySelector("#topFrame").type = "video/mp4";
}

function func27() {
    document.querySelector("#botFrame").src = "images/image07.png";
}

function func28() {
    document.querySelector("#botFrame").src = "images/jwst03.jpg";
}

function func30() {
    document.querySelector("#topFrame").src =
        "https://www.stsci.edu/jwst/instrumentation";
    document.querySelector("#botFrame").src = "images/jwst.jpg";
}

function func31() {
    document.querySelector("#topFrame").src =
        "https://www.esa.int/Newsroom/Webb_sunshield_fully_deployed";
}

function func32() {
    document.querySelector("#topFrame").src = "images/jwst05.png";
}

function func33() {
    setOneFrame();
    document.querySelector("#topFrame").src = "images/webblogo.png";
}
