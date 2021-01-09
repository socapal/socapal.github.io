	var amountScrolled = 250;

			$(window).scroll(function() {
				if ( $(window).scrollTop() > amountScrolled ) {
					$('a.back-to-top').fadeIn('slow');
				} else {
					$('a.back-to-top').fadeOut('slow');
				}
			});				

	$(document).ready(function() {
				
							$( ".menu_mob" ).click(function() {
							  $( ".menu_ul" ).slideToggle();
							});
								
							if ($('.isotope-container').length>0) {
				$(window).load(function() {
					$('.isotope-container').fadeIn();
					var $container = $('.isotope-container').isotope({
						itemSelector: '.isotope-item',
						layoutMode: 'masonry',
						transitionDuration: '0.6s',
						filter: "*"
					});
					// filter items on button click
					$('.filters').on( 'click', 'ul.nav li a', function() {
						var filterValue = $(this).attr('data-filter');
						$(".filters").find("li.active").removeClass("active");
						$(this).parent().addClass("active");
						$container.isotope({ filter: filterValue });
						return false;
					});
			});
		};

					//Modal
					//-----------------------------------------------
					if($(".modal").length>0) {
						$(".modal").each(function() {
							$(".modal").prependTo( "body" );
						});
					}
						});