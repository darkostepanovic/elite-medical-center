$(document).ready(function (){
    $("#home").click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    $("#jetra").click(function (){
        $('html, body').animate({
            scrollTop: $("#jetra-acc").offset().top-100
        }, 2000);
    });

    $("#pankreas").click(function (){
        $('html, body').animate({
            scrollTop: $("#pankreas-acc").offset().top-100
        }, 2000);
    });

    $("#hemoroidi").click(function (){
        $('html, body').animate({
            scrollTop: $("#hemoroidi-acc").offset().top-100
        }, 2000);
    });

    $("#terminalna").click(function (){
        $('html, body').animate({
            scrollTop: $("#terminalna-acc").offset().top-100
        }, 2000);
    });

    $("#about").click(function (){
        $('html, body').animate({
            scrollTop: $("#about-header").offset().top-100
        }, 2000);
    });

    $("#team-scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#team").offset().top-100
        }, 2000);
    });

    $("#service").click(function (){
        $('html, body').animate({
            scrollTop: $("#services-scroll").offset().top-100
        }, 2000);
    });

    $("#cenovnik-scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#cenovnik").offset().top-100
        }, 2000);
    });

    $("#contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#map").offset().top-100
        }, 2000);
    });
});