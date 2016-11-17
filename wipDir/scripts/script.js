var header = document.getElementsByClassName("page-header")[0];
var projectName = document.getElementsByClassName("project-name")[0];
var tagline = document.getElementsByClassName("project-tagline")[0];
var main = document.getElementsByClassName("main-content")[0];

main.setAttribute("padding-top", header.getAttribute("height"));

// document.addEventListener("scroll", function(){
//     if (document.scro)
// });

document.onscroll = function () {
    if (document.scrollingElement.scrollTop > 100){
        console.log("shrink");
    }
}