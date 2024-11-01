$(document).ready(function(){
    $('.carousel').slick({
        dots: false, 
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: null,
        nextArrow: null,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 576, //Gsm
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, //Tablet
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992, //Laptop
                settings: {
                    slidesToShow: 6, // Show 2 slides on tablet
                    slidesToScroll: 1
                }
            }
        ]
    });
});