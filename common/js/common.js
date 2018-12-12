/* Resize swap images
======================================*/
// $(window).on('resize', function() {
// var win = $(this);
// if (win.width() < 640) {
//    var posScroll = 0;
//    $('img').each(function() {
//        $(this).attr("src", $(this).attr("src").replace('-pc', '-sp'));
//    });
// } else {
//    var posScroll = 100;
//    $('img').each(function() {
//        $(this).attr("src", $(this).attr("src").replace('-sp', '-pc'));
//    });
// }
// });

// toggle
// -------------------
$(function() {
    $('#toggle').click(function(event) {
        $('.nav_sp').slideToggle(300);
        var newSrc = '';
        var oldSrc = $(this).find('img').attr('src');
        if (!$(this).hasClass('active')) {
            // current_scrollY = $(window).scrollTop();
            // $('#wrapper').css({
            //     position: 'fixed',
            //     left: 0,
            //     right: 0,
            //     width: '100%',
            //     top: -1 * current_scrollY
            // });
            // $('#headerTop').addClass('boxshadow')

            newSrc = oldSrc.replace('-off', '-on');
        } else {
            // $('#wrapper').attr({ style: '' });
            // $('#headerTop').removeClass('boxshadow')
            // $('html, body').prop({ scrollTop: current_scrollY });
            newSrc = oldSrc.replace('-on', '-off');
        }
        $(this).find('img').attr('src', newSrc);
        $(this).toggleClass('active');
    });
});

/* Anime Scroll
=========================================== */
// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top - posScroll
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });


(function($) {
    $(window).on('load', function() {
        // background
        // var delayTime = 0;
        // $('.modal_content li').each(function(index, el) {
        //     $(this).delay(delayTime).queue(function() {
        //         $(this).addClass('show');
        //     });
        //     delayTime += 0;
        // });
        // $('.txt_modal p').each(function(index, el) {
        //     $(this).delay(delayTime).queue(function() {
        //         $(this).addClass('show');
        //     });
        //     delayTime += 0;
        // });

    });
})(jQuery);
$("#modal_message").click(function() {
    $("#modal").modal();
    $('.modal_content').addClass('active');
    $('.modal_content li').addClass('show');
    $('.txt_modal p').addClass('show');
    // var delayTime = 0;
    // $('.modal_content li').each(function(index, el) {
    //     $(this).delay(delayTime).queue(function() {
    //         $(this).addClass('show');
    //     });
    //     delayTime += 0;
    // });
    // $('.txt_modal p').each(function(index, el) {
    //     $(this).delay(delayTime).queue(function() {
    //         $(this).addClass('show');
    //     });
    //     delayTime += 0;
    // });
});
$("#close_modal").click(function(event) {
    $('.modal_content').removeClass('active');
    $('.modal_content li').removeClass('show');
    $('.txt_modal p').removeClass('show');
});
