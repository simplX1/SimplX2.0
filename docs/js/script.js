
$('nav').coreNavigation({
    layout: "sidebar",
    responsideSlide: true
     
});

const menu_btn = document.querySelector('.hamburger');
window.onload = function () {
    menu_btn.addEventListener('toggle-bar', function () {
        $(".toggle-bar core-nav-toggle").css("background", "red !important");
    
    });
}
