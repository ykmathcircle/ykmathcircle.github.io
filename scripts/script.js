var fixedHead = document.getElementById("fixedHeader");
var topHead = document.getElementById("topHeader");

document.onscroll = function () {
    topHead.style.top = (- document.scrollingElement.scrollTop / 2 ) + "";

    if (document.scrollingElement.scrollTop > 600) {
        fixedHead.classList.add("page-header-fixed-visible");
    }
    else {
        fixedHead.classList.remove("page-header-fixed-visible");
    }
}