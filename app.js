$(function () {

    // fixed header

    let header = $("#header");
    let intro = $("#intro");
    let introH =intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH)


    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });


        function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        }

   

    

    // smoothScroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");



        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 700);
    
    });


    // nav toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $("#navToggle").on("click", function (event){
        event.preventDefault();

        nav.toggleClass("show");

    })

    // reviews
    let slider = $("#reviewsSlider");

    slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
        arrows: false,
        dots: true

});

    
    
});

   window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-item');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('show');
      }, i * 200); // кожен елемент з’являється з інтервалом 200мс
    });
  });