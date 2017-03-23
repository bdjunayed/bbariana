
$(document).ready(function () {
  
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0)
        {
            $(".Mfix").addClass('fixedHeader');
        } else
        {
            $(".Mfix").removeClass('fixedHeader');
        }
    });

    /*FixHeader End By Shagor */

    $(".MobileMenu").on('click', function () {
        $("nav").slideToggle('slow');
    });

    /*MobileMenu End By Shagor */

    /*back to top by shagor*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1660)
        {
            $(".BackTo").fadeIn('slow');
        } else
        {
            $(".BackTo").fadeOut('slow');
        }

    });
    $("body, html").on("click", ".BackTo", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });
});