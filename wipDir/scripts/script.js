var main = document.getElementsByClassName("main-content")[0];
var header = document.getElementsByClassName("page-header")[0];
main.setAttribute("style", "padding-top: " + (header.clientHeight + 25) + "px");

shrinkers = document.getElementsByClassName("shrinker");





document.onscroll = function () {
    if (document.scrollingElement.scrollTop > 100) {
        for (var i=0; i<shrinkers.length; i++){
            shrinkers[i].classList.add("shrink");
        }
    } else {
        for (var i=0; i<shrinkers.length; i++){
            shrinkers[i].classList.remove("shrink");
        }
    }
}