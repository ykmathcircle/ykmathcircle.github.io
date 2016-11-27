var header = document.getElementsByClassName("page-header").item(0);
var projectName = document.getElementsByClassName("project-name")[0];
var tagline = document.getElementsByClassName("project-tagline")[0];
var main = document.getElementsByClassName("main-content")[0];
var logo = document.getElementsByClassName("logo")[0];

var shrinkies = [];

shrinkies.push(document.getElementsByClassName("page-header").item(0));
shrinkies.push(document.getElementsByClassName("project-name")[0]);
shrinkies.push(document.getElementsByClassName("project-tagline")[0]);
shrinkies.push(document.getElementsByClassName("main-content")[0]);
shrinkies.push(document.getElementsByClassName("logo")[0]);




// main.setAttribute("padding-top", header.getAttribute("height"));
main.setAttribute("style", "padding-top: " + (header.clientHeight + 25) + "px");


// document.addEventListener("scroll", function(){
//     if (document.scro)
// });

document.onscroll = function () {
    if (document.scrollingElement.scrollTop > 100) {
        // console.log("shrink");
        // header.classList.add("shrink");
        // projectName.classList.add("shrink");
        // tagline.classList.add("shrink");
        shrinkies.forEach(function (el) {
            if (el) {
                el.classList.add("shrink");
            }
        });
    } else {
        // header.classList.remove("shrink");
        // projectName.classList.remove("shrink");
        // tagline.classList.remove("shrink");
        shrinkies.forEach(function (el) {
            if (el) {
                el.classList.remove("shrink");
            }
        });
    }
}