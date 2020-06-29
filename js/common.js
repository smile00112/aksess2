$(function() {
    $('.slide-one').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

});
$(".slide-two").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$(".slide-three").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$('.toddle-aside').click(function()
{
    var aside = $('#'+ $(this).attr('data-aside'));
    aside.toggleClass('show');
});
$("#example_id").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100,
    from: 30,
    to: 70,
    keyboard: true // true by default
});
! function(i) {
    var o, n;
    i(".title_block").on("click", function() {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
            o.hasClass("active_block") ? (o.removeClass("active_block"),
                n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                o.siblings(".active_block").removeClass("active_block").children(
                    ".info").stop(!0, !0).slideUp());
    });
}(jQuery);
