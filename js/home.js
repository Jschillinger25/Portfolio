$(document).ready(function () {
  $("li").click(function () {
    $('li > ul').not($(this).children("ul").toggle()).hide();
  });
});

$(document).on('click',function (e) {
  footerUl = $('.top-ul:first li');
  if (!footerUl.is(e.target) 
      && footerUl.has(e.target).length === 0){
    footerUl.children('ul').hide();
  }
});




$(".project-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-top").offset().top
    }, 1000);
});

$(document).ready(function () {
    $(".popup").hide();
    $(".openpop").click(function (e) {
        e.preventDefault();
        $("iframe").attr("src", $(this).attr('href'));
        $(".links").fadeOut('slow');
        $(".popup").fadeIn('slow');
    });

    $(".close").click(function () {
        $(this).parent().fadeOut("slow");
        $(".links").fadeIn("slow");
    });
});

window.onload=function(){
    $("#popup").on('click', function(){
          $('.popup').bPopup({
            content:'iframe', //'ajax', 'iframe' or 'image'
            contentContainer:'.content',
            modalColor: '#105A6A'
        }); 
    })
    
    $("#contact-popup").on('click', function(){
          $('.popup').bPopup({
            content:'iframe', //'ajax', 'iframe' or 'image'
            contentContainer:'.content',
            modalColor: '#105A6A'
        }); 
    })
}

$(".dropdown").click(function(e){
    $(".dropdown-content").show();
     e.stopPropagation();
});

$(".dropdown").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropdown-content").hide();
});