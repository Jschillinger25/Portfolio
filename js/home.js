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
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".traks-laptop").removeClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".bloc-jams-laptop").addClass("hidden");
});

$(".portfolio-open-hand").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").removeClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".bloc-jams-laptop").addClass("hidden");
});

$(".portfolio-bloc-jams").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".bloc-jams-laptop").removeClass("hidden");
});

$(".portfolio-collabormate").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").removeClass("hidden");
    $(".bloc-jams-laptop").addClass("hidden");
});

$(".portfolio-mj-photography").on("click", function() {
    $(this).addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").removeClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".bloc-jams-laptop").addClass("hidden");
});

$(".mj-photography-right-arrow").on("click", function(){
    $(".portfolio-bloc-jams").addClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".bloc-jams-laptop").removeClass("hidden");
});

$(".bloc-jams-right-arrow").on("click", function(){
    $(".portfolio-traks").addClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".bloc-jams-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".traks-laptop").removeClass("hidden");
});

$(".bloc-jams-left-arrow").on("click", function(){
    $(".portfolio-mj-photography").addClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-traks").removeClass("selected");
    
    $(".bloc-jams-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".traks-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".mj-photography-laptop").removeClass("hidden");
});

$(".traks-right-arrow").on("click", function(){
    $(".portfolio-collabormate").addClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".bloc-jams-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".traks-laptop").addClass("hidden");
    $(".collabormate-laptop").removeClass("hidden");
});

$(".traks-left-arrow").on("click", function(){
    $(".portfolio-bloc-jams").addClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-traks").removeClass("selected");
    
    $(".mj-photography-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".traks-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".bloc-jams-laptop").removeClass("hidden");
});

$(".collabormate-right-arrow").on("click", function(){
    $(".portfolio-open-hand").addClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".bloc-jams-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".traks-laptop").addClass("hidden");
    $(".open-hand-laptop").removeClass("hidden");
});

$(".collabormate-left-arrow").on("click", function(){
    $(".portfolio-traks").addClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".bloc-jams-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".traks-laptop").removeClass("hidden");
});

$(".open-hand-left-arrow").on("click", function(){
    $(".portfolio-collabormate").addClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-traks").removeClass("selected");
    $(".portfolio-mj-photography").removeClass("selected");
    
    $(".bloc-jams-laptop").addClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".mj-photography-laptop").addClass("hidden");
    $(".traks-laptop").addClass("hidden");
    $(".collabormate-laptop").removeClass("hidden");
});

function checkWidth() {
  if ($(window).width() < 650) {
      $('.trak-right-arrow').removeClass('hidden');
      $('.blocjams-right-arrow').removeClass('hidden');
      $('.mj-photography-right-arrow').removeClass('hidden');
      $('.collabormate-right-arrow').removeClass('hidden');

      $('.blocjams-left-arrow').removeClass('hidden');
      $('.traks-left-arrow').removeClass('hidden');
      $('.open-hand-left-arrow').removeClass('hidden');
      $('.collabormate-left-arrow').removeClass('hidden');
  } else {
      $('.trak-right-arrow').addClass('hidden');
      $('.blocjams-right-arrow').addClass('hidden');
      $('.mj-photography-right-arrow').addClass('hidden');
      $('.collabormate-right-arrow').addClass('hidden');

      $('.blocjams-left-arrow').addClass('hidden');
      $('.traks-left-arrow').addClass('hidden');
      $('.open-hand-left-arrow').addClass('hidden');
      $('.collabormate-left-arrow').addClass('hidden');
  }
}

function mobileWidth() {
  if ($(window).width() < 650) {
      $('.traks-right-arrow').removeClass('hidden');
      $('.bloc-jams-right-arrow').removeClass('hidden');
      $('.mj-photography-right-arrow').removeClass('hidden');
      $('.collabormate-right-arrow').removeClass('hidden');

      $('.bloc-jams-left-arrow').removeClass('hidden');
      $('.traks-left-arrow').removeClass('hidden');
      $('.open-hand-left-arrow').removeClass('hidden');
      $('.collabormate-left-arrow').removeClass('hidden');
  } else {
      $('.traks-right-arrow').addClass('hidden');
      $('.bloc-jams-right-arrow').addClass('hidden');
      $('.mj-photography-right-arrow').addClass('hidden');
      $('.collabormate-right-arrow').addClass('hidden');

      $('.bloc-jams-left-arrow').addClass('hidden');
      $('.traks-left-arrow').addClass('hidden');
      $('.open-hand-left-arrow').addClass('hidden');
      $('.collabormate-left-arrow').addClass('hidden');
  }
}

$(window).resize(checkWidth);

$(window).width(mobileWidth);

$(document).ready(function() {
    $(".portfolio-mj-photography").addClass("selected");
    $(".portfolio-open-hand").removeClass("selected");
    $(".portfolio-bloc-jams").removeClass("selected");
    $(".portfolio-collabormate").removeClass("selected");
    $(".portfolio-traks").removeClass("selected");
    
    $(".mj-photography-laptop").removeClass("hidden");
    $(".open-hand-laptop").addClass("hidden");
    $(".traks-laptop").addClass("hidden");
    $(".collabormate-laptop").addClass("hidden");
    $(".bloc-jams-laptop").addClass("hidden");
});