var main = document.getElementsByClassName("main-content")[0];
var header = document.getElementsByClassName("page-header")[0];
main.setAttribute("style", "padding-top: " + (header.clientHeight + 25) + "px");

shrinkers = document.getElementsByClassName("shrinker");


shrinkers.forEach = function(f){
    for (var i = 0; i<shrinkers.length; i++){
        f(shrinkers[i]);
    }
}


document.onscroll = function () {
    if (document.scrollingElement.scrollTop > 100) {
        shrinkers.forEach(function(el){
            el.classList.add("shrink");
        })
    } else {
        shrinkers.forEach(function(el){
            el.classList.remove("shrink");
        })
    }
}