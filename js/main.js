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
        { seconds: 4, callback: func1 },
        { seconds: 9, callback: func2 },
        { seconds: 31, callback: func3 },
        { seconds: 42, callback: func4 },
        { seconds: 50, callback: func5 },
        { seconds: 60, callback: clearWindow },
        { seconds: 80, callback: func7 },
        { seconds: 86, callback: func8 },
        { seconds: 99, callback: func9 },
        { seconds: 107, callback: clearWindow },
        { seconds: 119, callback: func10 },
        { seconds: 137, callback: clearWindow },
        { seconds: 170, callback: func11 },
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

function func1() {
    document.querySelector("#vid").style = "outline : 3px solid #6441a5";
}

function func2() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/San_Francisco_Bay";
}

function func3() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/San_Pablo_Bay";
}

function func4() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Carquinez_Strait";
}

function func5() {
    document.querySelector("#web").src = "images/river_delta.jpg";
}

function clearWindow() {
    document.querySelector("#web").src = "./blank.html";
}

function func7() {
    document.querySelector("#web").src = "images/farallon_islands.jpg";
}

function func8() {
    document.querySelector("#web").src = "images/14000coastline.jpg";
}

function func9() {
    document.querySelector("#web").src = "images/wooly.jpg";
}

function func10() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Gulf_of_the_Farallones";
}

function func11() {
    document.querySelector("#web").src = "images/sfbay.jpg";
}
