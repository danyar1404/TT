 
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,         
        nav: true, 
        responsive:{ 
            0:{
                items:1,
                nav: false
        
            },
            480:{
                items:2,
                nav: false
            },
            768:{
                items:4
            }
        }
    });
});