$(".about-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$(".portfolio-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 1000);
});

$(".skills-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".skills").offset().top
    }, 1000);
});

$(".contact-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

$(".portfolio-traks").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-MJ-Photography").removeClass("selected");
    
    $(".traks-laptop").removeClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
});

$(".portfolio-open-hand").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-MJ-Photography").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").removeClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
});

$(".portfolio-bloc-jams").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-MJ-Photography").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
});

$(".portfolio-collabormate").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-MJ-Photography").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").removeClass("hidden");
});

$(".portfolio-MJ-Photography").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").removeClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
});

$(document).ready(function() {
    $(".portfolio-traks").addClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-MJ-Photography").removeClass("selected");
    
    $(".traks-laptop").removeClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
});