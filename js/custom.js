function send_email(){
    alert("send...");
    $.ajax({
        type: 'post',
        url: "ajax.php",
        data: {'send_email':'eevdocim@mail.ru', 'full_name':$('input#name').val(), 'phone':$('input#email').val(), 'sub':$('input#text').val()},
        response: 'text',
        success: function(data){
        	alert(data);
        }
    })
}
(function($) {
    'use strict'; // Start of use strict

    $(window).on("load scroll", function() {

        /*------------------------------------------------------------------
        Loader
        ------------------------------------------------------------------*/
        $("#loader").fadeOut("fast");
        // map zooming 	 
        $('.google-map').on('click', function() {
            $('.google-map').find('iframe').css("pointer-events", "auto");
        });
        /*----------------------------------------------------
          Start Change Menu Bg
		 ----------------------------------------------------*/
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
        /*------------------------------------------------------------------
         Animation Numbers
         ------------------------------------------------------------------*/
        $('.animateNumber').each(function() {
            var num = $(this).attr('data-num');

            var top = $(document).scrollTop() + ($(window).height());
            var pos_top = $(this).offset().top;
            if (top > pos_top && !$(this).hasClass('active')) {
                $(this).addClass('active').animateNumber({
                    number: num
                }, 2000);
            }
        });
        $('.animateProcent').each(function() {
            var num = $(this).attr('data-num');
            var percent_number_step = jQuery.animateNumber.numberStepFactories.append('%');
            var top = $(document).scrollTop() + ($(window).height());
            var pos_top = $(this).offset().top;
            if (top > pos_top && !$(this).hasClass('active')) {
                $(this).addClass('active').animateNumber({
                    number: num,
                    numberStep: percent_number_step
                }, 2000);
                $(this).css('width', num + '%');
            }
        });
    });

    /*------------------------------------------------------------------
     Scroll Top
     ------------------------------------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
   /*------------------------------------------------------------------
    Navigation Hover effect
    ------------------------------------------------------------------*/
    // jQuery for page scrolling feature - requires jQuery Easing plugin

    $('.smoth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    // Highlight the top nav as scrolling occurs

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 70
    });
    // Closes the Responsive Menu on Menu Item Click

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click', function() {
        $('.navbar-toggle:visible').click();
    });

    /*------------------------------------------------------------------
   	 Scrollup opacity downarrow 
	 ------------------------------------------------------------------*/
    var bottom_arrow = $('.bottom_row, .banner-content');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        bottom_arrow.css({
            'opacity': (1 - (st / 350))
        });
    });
	/*----------------------------------------------------
                  Portfolio Isotope
   ----------------------------------------------------*/
    var body_s = $('body'),
        window_s = $(window);

    //======= ISOTOP FILTERING JS  ========//
    window_s.on('load', function() {
        var grid_container = $('.portfolio-container'),
            grid_item = $('.work');


        grid_container.imagesLoaded(function() {
            grid_container.isotope({
                itemSelector: '.work',
                layoutMode: 'masonry'
            });
        });

        $('.portfolio-filter').find('li').on('click', function(e) {
            $('.portfolio-filter li.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            grid_container.isotope({
                filter: selector
            });
            return false;
            e.preventDefault();
        });
    });


    //======= MAGNIFIC POPUP ========//
    $('.work a').magnificPopup({
        type: 'inline'
    });
    /*------------------------------------------------------------------
    Owl Carousel for screenshots
	------------------------------------------------------------------*/
    var owl = $("#testimonials");
    owl.owlCarousel({
        nav: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 2
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 3
            }
        }
    });
/*------------------------------------------------------------------
    Owl Carousel for screenshots
	------------------------------------------------------------------*/
    var owl = $("#about");
    owl.owlCarousel({
        nav: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            },
            1600: {
                items: 1
            }
        }
    });
	/*------------------------------------------------------------------
    Owl Carousel for Testimonials
	------------------------------------------------------------------*/
    var owl = $("#testimonials");
    owl.owlCarousel({
        nav: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 2
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 3
            }
        }
    });
	/*------------------------------------------------------------------
    FAQ
    ------------------------------------------------------------------*/
    if($('.fp-faq').length){			
			$( '.fp-faq' ).on( 'click', 'h2', function() {
				var $faq = $( this ).closest( '.fp-faq' );

				$faq.find( '.toggle-content' ).slideToggle( 500, function() {
					$faq.toggleClass( 'active' );
				} );
			} );
	}
	if($('.fp-accordion').length){		
		
		$( '.fp-accordion' ).on( 'click', 'h2, .icons', function() {
			var $faq = $( this ).closest( '.fp-accordion' );

			$faq.find( '.toggle-content' ).slideToggle( 500, function() {
				$faq.toggleClass( 'active' );
			} );
		} );
		}	
})(jQuery);
/*------------------------------------------------------------------
	WOW
------------------------------------------------------------------*/

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
/*Окна*/
		function show(state){
 
            document.getElementById('window').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;
    }
	    function show2(state){
 
            document.getElementById('window2').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;

    }
		function show3(state){
 
            document.getElementById('window3').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;
    }    function show4(state){
 
            document.getElementById('window4').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;
    }    function show5(state){
 
            document.getElementById('window5').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;
    }    function show6(state){
 
            document.getElementById('window6').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;
    }    function show7(state){
 
            document.getElementById('window7').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;
    }    function show8(state){
 
            document.getElementById('window8').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;
    }    function show9(state){
 
            document.getElementById('window9').style.display = state;            
            document.getElementById('wrap').style.display = state;
			document.getElementById('infoo').style.display = state;
    }
