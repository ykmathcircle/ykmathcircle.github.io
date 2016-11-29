var fixedHead = document.getElementById("fixedHeader");
var topHead = document.getElementById("topHeader");

document.onscroll = function () {
    var newTop = ( document.scrollingElement.scrollTop / 2.5 );
    newTop = newTop + "px";
    console.log(newTop);
    topHead.style.top = newTop;

    if (document.scrollingElement.scrollTop > 600) {
        fixedHead.classList.add("page-header-fixed-visible");
    }
    else {
        fixedHead.classList.remove("page-header-fixed-visible");
    }
}