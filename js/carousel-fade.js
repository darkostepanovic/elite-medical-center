$('.carousel').carousel({
		  interval: 8000,
		  pause: 'true',
		  cycle: true
		}).on('slide.bs.carousel', (e) => {
		  $(e.relatedTarget).find('.carousel-caption').fadeOut(500)
		}).on('slid.bs.carousel', (e) => {
		  $(e.relatedTarget).find('.carousel-caption').fadeIn(1500)
		})