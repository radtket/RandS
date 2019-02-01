$(document).ready(() => {
	$(".single-item").not('.slick-initialized').slick({
		dots: true,
		infinite: true,
		speed: 3000,
		fade: true,
		cssEase: "linear",
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000
	});
});
