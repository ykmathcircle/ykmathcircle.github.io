var header = document.getElementsByClassName("page-header");
var projectName = document.getElementsByClassName("project-name");
var tagline = document.getElementsByClassName("project-tagline");

// document.addEventListener("scroll", function(){
//     if (document.scro)
// });

document.onscroll = function () {
    if (document.scrollingElement.scrollTop > 100){
        console.log("shrink");
    }
}