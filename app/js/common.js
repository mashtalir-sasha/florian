$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-0 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Клик по гамбургеру на моб версии
	$('.mnu-btn').click(function(e) {
		$('.main-nav').toggleClass('show');
		e.preventDefault();
	});
	$('.main-nav__close, .main-nav__patern, .main-nav__ul li a').click(function() {
		$('.main-nav').removeClass('show');
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				gtag('event','submit',{'event_category':'submit','event_action':goalId});
				yaCounter48731360.reachGoal(goalId);
				fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	// Слайдер отзывов
	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		adaptiveHeight: true
	});

});
