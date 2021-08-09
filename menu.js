$(document).ready(function() {
    $('.header-body__burger-menu').click(function() {
        $('.header-body__burger-menu').toggleClass('open-menu');
        $('.header-body__menu').toggleClass('open-menu');
    });
});
// Блокировка тела при открытом меню
$(document).ready(function() {
    $('.header-body__burger-menu').click(function(event){
        $('.header-body__burger-menu, .header__menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});