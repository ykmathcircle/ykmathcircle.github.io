var fixedHead = document.getElementById("fixedHeader");

document.onscroll = function () {
    if (document.scrollingElement.scrollTop > 600) {
        fixedHead.classList.add("page-header-fixed-visible");
    }
    else {
        fixedHead.classList.remove("page-header-fixed-visible");
    }
}