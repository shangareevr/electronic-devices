$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.slider-review__elem').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height+50) {
				self.addClass('animation-border')
			}
		});
	});
});

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.info__block').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height+50) {
				self.addClass('animation-border')
			}
		});
	});
});

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.circle').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height-260) {
				self.addClass('show')
			}
		});
	});
});
$(document).ready(function() {
	var windowHeight = $(window).height();
	$(document).on('scroll', function() {
		$('.circle-out').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height-260) {
				self.addClass('show')
			}
		});
	});
});

$(document).ready(function() {
	var windowHeight = $(window).height();
	$(document).on('scroll', function() {
		$('.animated-number').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height+50) {
				self.addClass('show');
        $('.animated-text').each(function() {
          var el = $(this);
            el.addClass('show');

        });
			}
		});
	});
});