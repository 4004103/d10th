$(function () {
	
	//AOS plugin
	AOS.init();

	// You can also pass an optional settings object
	// below listed default settings
	AOS.init({
	  // Global settings:
	  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	  initClassName: 'aos-init', // class applied after initialization
	  animatedClassName: 'aos-animate', // class applied on animation
	  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  offset: 120, // offset (in px) from the original trigger point
	  delay: 100, // values from 0 to 3000, with step 50ms
	  duration: 1000, // values from 0 to 3000, with step 50ms
	  easing: 'ease', // default easing for AOS animations
	  once: false, // whether animation should happen only once - while scrolling down
	  mirror: false, // whether elements should animate out while scrolling past them
	  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

	});

	//메뉴 열고닫기
	$(".header_menu").on("click",function(){

		console.log($(this).hasClass("on"));

		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$("#main_nav").addClass("hidden");
		}else{
			$(this).addClass("on");
			$("#main_nav").removeClass("hidden");
		}
	});

	/*  ===== Scroll to Top ====  */
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});

	/* section05 */
	var swiper3 = new Swiper('.swiper3', {
	slidesPerView: 1,
	slidesPerColumn: 2,
	spaceBetween: 30,
	//autoplay: {
		//delay: 3000,
	//},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.main-banner_btn-next',
		prevEl: '.main-banner_btn-prev',
	  }
	});

	var bwidth =  $("body").css("width").replace(/[^0-9]/g, "");

	if (bwidth < 640)
	{
		/* section11 */
			var swiper1 = new Swiper('.swiper1', {
		  slidesPerView: 2,
		  spaceBetween: 0,
		  centeredSlides: false,
		  scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		  },
		});

	}else{

		/* section11 */
			var swiper1 = new Swiper('.swiper1', {
		  slidesPerView: 4,
		  spaceBetween: 0,
		  centeredSlides: false,
		  scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		  },
		});

	}


	/* section12 */
	var swiper2 = new Swiper('.swiper2', {
	  effect: 'coverflow',
	  loop:true,
	  grabCursor: true,
	  centeredSlides: false,
	  slidesPerView: 'auto',
	  coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows : true,
	  },
	navigation: {
		nextEl: '.main-banner_btn-next2',
		prevEl: '.main-banner_btn-prev2',
		}
	});


	/* section9 */
	var startHeight = $(".countNum").offset().top - 500;
	var numStart = true;

	$(window).scroll(function(evnet){
		var st = $(this).scrollTop();

		if(st > startHeight && numStart){
			numStart = false;


			var decimal_places = 0;
			var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

			$('#counter3')
			  .animateNumber(
				{
				  number: 313 * decimal_factor,

				  numberStep: function(now, tween) {
					var floored_number = Math.floor(now) / decimal_factor,
						target = $(tween.elem);

					if (decimal_places > 0) {
					  // force decimal places even if they are 0
					  floored_number = floored_number.toFixed(decimal_places);

					  // replace '.' separator with ','
					  floored_number = floored_number.toString().replace('.', ',');
					}

					target.text(floored_number);
				  }
				},
				2000
			  );

			var decimal_places2 = 2;
			var decimal_factor2 = decimal_places2 === 0 ? 1 : Math.pow(10, decimal_places2);
			  $('#counter2')
			  .animateNumber(
				{
				  number: 8.06 * decimal_factor2,

				  numberStep: function(now, tween) {
					var floored_number2 = Math.floor(now) / decimal_factor2,
						target = $(tween.elem);

					if (decimal_places2 > 0) {
					  // force decimal places even if they are 0
					  floored_number2 = floored_number2.toFixed(decimal_places2);

					  // replace '.' separator with ','
					  floored_number2 = floored_number2.toString().replace('.', '.');
					}

					target.text(floored_number2);
				  }
				},
				5000
			  );

			var decimal_places3 = 0;
			var decimal_factor3 = decimal_places3 === 0 ? 1 : Math.pow(10, decimal_places3);

			  $('#counter1')
			  .animateNumber(
				{
				  number: 490 * decimal_factor3,

				  numberStep: function(now, tween) {
					var floored_number3 = Math.floor(now) / decimal_factor3,
						target = $(tween.elem);

					if (decimal_places3 > 0) {
					  // force decimal places even if they are 0
					  floored_number3 = floored_number3.toFixed(decimal_places3);

					  // replace '.' separator with ','
					  floored_number3 = floored_number3.toString().replace('.', '.');
					}

					target.text(floored_number3);
				  }
				},
				2000
			  );



		}

	});


	/* Demo purposes only  section10  */
    $(".hover").mouseleave(
	function () {
	  $(this).removeClass("hover");
	});


});