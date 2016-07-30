$(document).ready(function (){
    $("#jetra").click(function (){
        $('html, body').animate({
            scrollTop: $("#jetra-acc").offset().top
        }, 2000);
    });

    $("#pankreas").click(function (){
        $('html, body').animate({
            scrollTop: $("#pankreas-acc").offset().top
        }, 2000);
    });

    $("#hemoroidi").click(function (){
        $('html, body').animate({
            scrollTop: $("#hemoroidi-acc").offset().top
        }, 2000);
    });

    $("#terminalna").click(function (){
        $('html, body').animate({
            scrollTop: $("#terminalna-acc").offset().top
        }, 2000);
    });
});