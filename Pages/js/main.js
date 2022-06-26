$(document).ready(function() {


    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter : selector
        })
        return false;
    })

    $('.project-area .button-group #btn-1').trigger('click');

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled:true}
      });

    //   owl carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
       responsive:{
           0:{
               items:1
           },
           544:{
               items:2
           }
       }
    })
});

function myfunction(){
    var x = document.getElementById('navlinks');

    if (x.style.display==='none'){
        x.style.display='flex';
    }

    else {
        x.style.display='none';
    }
}