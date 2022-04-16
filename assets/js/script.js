$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});

$("div.hover-shadow").hover(
    function() {
        $(this).addClass("shadow");
    },
    function() {
        $(this).removeClass("shadow");
    }
);

$(".hover-green").hover(
    function() {
        $(this).addClass("text-success");
    },
    function() {
        $(this).removeClass("text-success");
    }
);