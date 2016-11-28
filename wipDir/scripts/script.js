var main = document.getElementsByClassName("main-content")[0];
main.setAttribute("style", "padding-top: " + (header.clientHeight + 25) + "px");

shrinkers = document.getElementsByClassName("shrinker");

document.onscroll = function () {
    if (document.scrollingElement.scrollTop > 100) {
        shrinkers.forEach(function(el){
            el.classList.add("shrink");
        });
    } else {
        shrinkers.forEach(function(el){
            el.classList.remove("shrink");
        });
    }
}