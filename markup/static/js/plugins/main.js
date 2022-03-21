
$(document).ready(function () {
	$("body").css({ 'visibility': "visible", "opacity": "1" });
	// forms();


	// let lazyImages = [...document.querySelectorAll('img')]
	// let inAdvance = 300

	// function lazyLoad() {
	// 	lazyImages.forEach(image => {
	// 		if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
	// 			image.src = image.dataset.src
	// 			image.onload = () => image.classList.add('loaded')
	// 		}
	// 	})

	// }
	// lazyLoad();


	// window.addEventListener('scroll', _.throttle(lazyLoad, 16))
	// window.addEventListener('resize', _.throttle(lazyLoad, 16))


	var swiper = new Swiper('.tline-slider', {
		spaceBetween: 30,
		speed: 1000,
		navigation: {
			nextEl: '.tline-next',
			prevEl: '.tline-prev',
		},
	});

	if ($(window).width() < 769) {
		var swiper = new Swiper('.block__slider', {
			spaceBetween: 30,
			slidesPerView: 1,
			navigation: {
				nextEl: '.block-next',
				prevEl: '.block-prev',
			},
			pagination: {
				el: '.first-pagination',
			},
		});

		var swiper = new Swiper('.m-header-slider', {
			spaceBetween: 30,
			slidesPerView: 5,
			navigation: {
				nextEl: '.block-next',
				prevEl: '.block-prev',
			},
			pagination: {
				el: '.first-pagination',
			},
			breakpoints: {
				600: {
					slidesPerView: 3,
				},
				400: {
					slidesPerView: 2,
				}
			}
		});

	}

	if ($(window).width() < 1025) {


		var swiper = new Swiper('.header__slider-container', {
			spaceBetween: 10,
			slidesPerView: 5,
			navigation: {
				nextEl: '.block-next',
				prevEl: '.block-prev',
			},
			pagination: {
				el: '.first-pagination',
			},
			breakpoints: {
				600: {
					slidesPerView: 3,
				},
				400: {
					slidesPerView: 4,
				}
			}
		});

	}



	if ($(window).width() < 1025) {
		var swiper = new Swiper('.like-slider', {
			spaceBetween: 30,
			slidesPerView: 2,
			navigation: {
				nextEl: '.block-next',
				prevEl: '.block-prev',
			},
			pagination: {
				el: '.first-pagination',
			},
			breakpoints: {
				767: {
					slidesPerView: 1,
				}
			}
		});

	}


	$(".sticky-block").stick_in_parent();
	if ($(window).width() < 1025) {
	}

	$(".lightgallery").lightGallery();

	$('.phone-mask').mask("+ 7 000 000 00 00");

	$(document).on('click', '.number-input-container .number-increment', function (e) {
		let $input = $(this).siblings('.number-input'),
			val = parseInt($input.val()),
			max = parseInt($input.attr('max')),
			step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
	});
	$(document).on('click', '.number-input-container .number-decrement', function (e) {
		let $input = $(this).siblings('.number-input'),
			val = parseInt($input.val()),
			min = parseInt($input.attr('min')),
			step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
	});

	if ($('#slider').length > 0) {
		var slider = document.getElementById('slider');
		var rangeMin = +$("#slider").attr("data-min")
		var rangeMax = +$("#slider").attr("data-max")

		var valMin = +$(".input-min").val();
		var valMax = +$(".input-max").val();

		var rangeStep = $("#slider").data("step")
		$(".output-left").text(parseFloat(valMin).toFixed(0));
		$(".output-right").text(parseFloat(valMax).toFixed(0));
		// $(".input-min").text(parseFloat(rangeMin).toFixed(0));
		noUiSlider.create(slider, {
			start: [valMin, valMax],
			connect: true,
			step: rangeStep,
			range: {
				'min': rangeMin,
				'max': rangeMax
			},
			format: wNumb({
				decimals: 0
			})

		});
		$(".filter__open").click(function () {
			$(".filter__container").addClass("active");
			$(".overlay").addClass("visible")
		});
		$(".filter__close-mobile, .overlay").click(function () {
			$(".filter__container").removeClass("active");
			$(".overlay").removeClass("visible")
		});
		// $(".noUi-handle-touch-area").mousemove(function() {
		// 	var val = $(this).find("span").text();
		// 	$(".output-left").text(parseFloat(val).toFixed(0));
		// 	$(".input-min").val(parseFloat(val).toFixed(0));
		// });
		// $(".noUi-handle-touch-area").mousemove(function() {
		// 	var val = $(this).find("span").text();
		// 	$(".output-right").text(parseFloat(val).toFixed(0));
		// 	$(".input-max").val(parseFloat(val).toFixed(0));
		// });
		slider.noUiSlider.on('slide', function () {
			$(".noUi-handle-lower").each(function () {
				var val = +$(this).find("span").text();
				$(this).find("span").text(val.toFixed(0))
				$(".filter-output-min").text(val.toFixed(0));
			});
		});
		slider.noUiSlider.on('slide', function () {
			$(".noUi-handle-upper").each(function () {
				var val = +$(this).find("span").text();
				$(this).find("span").text(val.toFixed(0))
				$(".filter-output-max").text(val.toFixed(0));
			});
		});
	}



	$(".ymap").each(function (e) {
		var ya = this;
		var myMap;
		ymaps.ready(
			function () {
				var x = $(ya).attr("data-x");
				var y = $(ya).attr("data-y");
				myMap = new ymaps.Map($(ya)[0], {
					center: [x, y],
					zoom: 13,
					controls: ['fullscreenControl']
				}, {
					searchControlProvider: 'yandex#search'
				});

				var myPlacemark = new ymaps.Placemark([x, y], {},
					{
						iconLayout: 'default#image',
						iconImageHref: 'static/img/content/marker.svg',
						iconImageSize: [37, 37],
					});

				myMap.geoObjects.add(myPlacemark);

				var ctrlKey = false;
				var ctrlMessVisible = false;
				var timer;
				myMap.behaviors.disable('scrollZoom');
				// myMap.behaviors.disable('scrollZoom');
				myMap.events.add(['wheel', 'mousedown'], function (e) {
					if (e.get('type') == 'wheel') {
						if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
							$('#ymap_ctrl_display').fadeIn(300);
							ctrlMessVisible = true;
							clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
							timer = setTimeout(function () {
								$('#ymap_ctrl_display').fadeOut(300);
								ctrlMessVisible = false;
							}, 1500);
						}
						else { // Ctrl нажат, скрываем сообщение
							$('#ymap_ctrl_display').fadeOut(100);
						}
					}
					if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
						$('#ymap_ctrl_display').fadeOut(100);
					}
				});
				// Обрабатываем нажатие на Ctrl
				$(document).keydown(function (e) {
					if (e.which === 17 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
						ctrlKey = true;
						myMap.behaviors.enable('scrollZoom');
					}
				});
				$(document).keyup(function (e) { // Ctrl не нажат: выключаем масштабирование мышью
					if (e.which === 17) {
						ctrlKey = false;
						myMap.behaviors.disable('scrollZoom');
					}
				});
			}
		);

	})



	new WOW().init();

	$(".collapsible-body").each(function () {
		var height = $(this).height();
		$(this).css("height", 0);
		$(this).attr("data-height", height)
	});

	$(".collapsible-header").click(function () {
		var body = $(this).next(".collapsible-body");
		var header = $(this);
		if (header.hasClass("active")) {
			header.removeClass("active");
			var height = body.height();
			// body.attr("data-height", height);
			body.height(0);
			body.removeClass("active");
		} else {


			// $(".collapsible-header").removeClass("active");
			// var height = body.height();
			// $(".collapsible-body").attr("data-height", height);
			// $(".collapsible-body").height(0);
			// $(".collapsible-body").removeClass("active");




			header.addClass("active");
			var height = body.attr("data-height");
			body.height(height);
		}
	});

	$(".noUi-handle-lower").each(function () {
		var val = +$(this).find("span").text();
		$(this).find("span").text(val.toFixed(0))
		$(".filter-output-min").text(val.toFixed(0));
	});
	$(".noUi-handle-upper").each(function () {
		var val = +$(this).find("span").text();
		$(this).find("span").text(val.toFixed(0))
		$(".filter-output-max").text(val.toFixed(0));
	});

	$(".html > img").each(function () {
		$(this).wrap("<figure></figure>")
	});


	$('body').on('click', '[data-popup]', function (e) { //Вызов попапов
		e.preventDefault();
		var popup = $(this).data('popup');
		var width = $('.blur').prop('scrollWidth');
		$('html').addClass('no-scroll');
		$('body').css('width', width);
		$('.blur').addClass('active');
		$('.popup').removeClass('active');
		$('.popup-' + popup).addClass('active');
	});
	$('body').on('mousedown', '.blur', function (e) { //Закрытие попапов по .blur
		if (this == e.target) {
			$('.popup').removeClass('active');
			$('html').removeClass('no-scroll');
			$('body').css('width', 'auto');
			$('.blur').removeClass('active');
			$('.popup').each(function () {
				$(this).find('input[type=text],input[type=mail],textarea').val('');
				$(this).find('input[type=checkbox]').prop('checked', false);
				$(this).find('.active').removeClass('active');
			});
			$(".header__right").removeClass("active");
			$(".catalog__sidebar-container").removeClass('active');

		}
	});



	$(".fs-hdr").each(function () {
		var screenHeight = $(window).height();
		if ($(window).scrollTop() >= screenHeight) {
			$(this).addClass("fixed");
		}
		if ($(window).scrollTop() < screenHeight) {
			$(this).removeClass("fixed");
		}
	});
	$(window).on('scroll', function () {
		$(".fs-hdr").each(function () {
			var screenHeight = $(window).height();
			if ($(window).scrollTop() >= screenHeight) {
				$(this).addClass("fixed");
			}
			if ($(window).scrollTop() < screenHeight) {
				$(this).removeClass("fixed");
			}
		});
		if ($(window).scrollTop() > 300) {
			$(".first-mouse").addClass("active");
		} else {
			$(".first-mouse").removeClass("active");
		}
	});
	if ($(window).scrollTop() > 300) {
		$(".first-mouse").addClass("active");
	} else {
		$(".first-mouse").removeClass("active");
	}

	$('body').on('click', '.popup__close', function (e) { //Закрытие попапов по .popup__close
		$('.popup').removeClass('active');
		$('html').removeClass('no-scroll');
		$('body').css('width', 'auto');
		$('.blur').removeClass('active');
		$('.popup').each(function () {
			$(this).find('input[type=text],input[type=mail],textarea').val('');
			$(this).find('input[type=checkbox]').prop('checked', false);
			$(this).find('.active').removeClass('active');
		});
	});



	$(".header__mobile").click(function () {
		$(".header__menu").addClass("active");
	});

	$(".header__close").click(function () {
		$(".header__menu").removeClass("active");
	});

	$(".header__left").click(function () {
		$(this).toggleClass("active");
		$(".header__menu").toggleClass("active");
	});



	$(".info__ctg-item img").click(function (e) {
		$(".info__slider").addClass("active");
		$(".info__slide").removeClass("active");
		e.preventDefault();
		var index = $(this).closest(".info__ctg-item").index() + 1;
		$(".info__nav-link").removeClass("active");
		// $(this).addClass("active");
		$(".info__slide:nth-child(" + index + ")").addClass("active");
		$(".info__nav-link:nth-child(" + index + ")").addClass("active");
	});

	$(".info__close").click(function () {
		$(".info__slider").removeClass("active");
		$(".info__slide").removeClass("active");
		$(".info__nav-link").removeClass("active");
	})

	$(".info__nav-link").click(function (e) {
		e.preventDefault();
		var index = $(this).index() + 1;
		$(".info__nav-link").removeClass("active");
		$(this).addClass("active");
		$(".info__slide").removeClass("active");
		$(".info__slide:nth-child(" + index + ")").addClass("active");

	});

	
	$('.form').each(function () {
		var it = $(this);
		it.validate({
			rules: {
				message: {
					required: true,
				},
				name: {
					required: true,
				},
				nameProd: {
					required: true,
				},
				check: {
					required: true,
				},
				title: {
					required: true,
				},
				ctg: {
					required: true,
				},
				desc: {
					required: true,
				},
				rating: {
					required: true,
				},
				curprice: {
					required: true,
				},
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function () {
				var img = $(".get-img img").attr("src");
				var title = $(".get-title").val();
				var ctg = $(".get-ctg").val();
				var desc = $(".get-desc").val();
				var rating = $(".get-rating").val();
				var curprice = $(".get-curprice").val();
				var old = $(".get-old").val();
				var dc = $(".get-dc").val();
				console.log(img,
					title,
					ctg,
					desc,
					rating,
					curprice,
					old,
					dc,
				)
				var addCard = $(".card__add").remove();
				$(".prod__items").prepend(`
				<div class="card">
					<div class="card__img m-bg-cont">
						<img src='${img}' alt='Картинка'>
					</div>
					<div class="card__content">
						<div class="card__ctg ${ctg}"></div>
						<a href="#" class="card__title">
						${title}
						</a>
						<div class="card__rating">
							<div class="rating">
								<div class="stars">
									<input type="radio" name="star" class="star-1" id="star-1" disabled />
									<label class="star-1" for="star-1">1</label>
									<input type="radio" name="star" class="star-2" id="star-2" disabled />
									<label class="star-2" for="star-2">2</label>
									<input type="radio" name="star" class="star-3" id="star-3"  disabled />
									<label class="star-3" for="star-3">3</label>
									<input type="radio" name="star" class="star-4" id="star-4"  disabled />
									<label class="star-4" for="star-4">4</label>
									<input type="radio" name="star" class="star-5" id="star-5" disabled />
									<label class="star-5" for="star-5">5</label>
									<span></span>
								</div>
							</div>
							<div class="card__rating-text">
								${rating}
							</div>
						</div>
						<div class="card__desc">
						${desc}
						</div>
						<div class="card__bottom">
							<div class="card__price">
								<div class="card__price-old">
								$${old}
								</div>
								<div class="card__price-cur">
								$${curprice}
								</div>
							</div>
							<div class="card__dc">
							${dc}%
							</div>
						</div>
					</div>
				</div>
				`);
				$(".prod__items").prepend(addCard);
				$(".m-bg-cont").each(function () {
					var img = $(this).find("img:first-of-type").attr("src");
					$(this).css("background-image", "url(" + img + ")");
				});
				$('.modal__close').trigger("click")
				it.find("input").val("");
			},
		});
	});


	$(".m-bg-cont").each(function () {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});


	const config = {
		mobile: 768,
		messages: {
			placeholder: 'Сhoose...',
			searchText: 'nothing was found',
			searchPlaceholder: 'Search',
		}
	}

	const selects = document.querySelectorAll('[data-select]');
	const isMobile = window.matchMedia(`(max-width: ${config.mobile - 1}px)`).matches;

	selects.forEach(el => {
		const isMultiple = el.hasAttribute('multiple');
		const placeholder = el.getAttribute('data-placeholder') || config.messages.placeholder;
		const hideSelected = el.hasAttribute('data-hide-selected');
		const hasSearch = el.hasAttribute('data-has-search');
		const instance = new SlimSelect({
			select: el,
			placeholder: placeholder,
			closeOnSelect: !isMultiple,
			showSearch: isMultiple || hasSearch,
			searchText: config.messages.searchText,
			searchPlaceholder: config.messages.searchPlaceholder,
			searchFocus: isMobile,
			hideSelectedOption: hideSelected,
			onChange: (info) => {
				$(".filter__result-items").empty();
				for (var i = 0; info.length > i; i++) {
					var infoTitle = info[i].text;
					$(".filter__result-items").append(`
						<div class="filter__result-item">
							${infoTitle}
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.5657 6.56569C14.8781 6.25327 14.8781 5.74673 14.5657 5.43431C14.2533 5.1219 13.7467 5.1219 13.4343 5.43431L14.5657 6.56569ZM5.43431 13.4343C5.1219 13.7467 5.1219 14.2533 5.43431 14.5657C5.74673 14.8781 6.25327 14.8781 6.56569 14.5657L5.43431 13.4343ZM6.56569 5.43431C6.25327 5.1219 5.74673 5.1219 5.43431 5.43431C5.1219 5.74673 5.1219 6.25327 5.43431 6.56569L6.56569 5.43431ZM13.4343 14.5657C13.7467 14.8781 14.2533 14.8781 14.5657 14.5657C14.8781 14.2533 14.8781 13.7467 14.5657 13.4343L13.4343 14.5657ZM13.4343 5.43431L5.43431 13.4343L6.56569 14.5657L14.5657 6.56569L13.4343 5.43431ZM5.43431 6.56569L13.4343 14.5657L14.5657 13.4343L6.56569 5.43431L5.43431 6.56569Z" fill="#7F56D9"/>
							</svg>
						</div>
					`);
				}
			}
		});
	});

	const selects1 = document.querySelectorAll('[data-select1]');
	const isMobile1 = window.matchMedia(`(max-width: ${config.mobile - 1}px)`).matches;

	selects1.forEach(el => {
		const isMultiple = el.hasAttribute('multiple');
		const placeholder = el.getAttribute('data-placeholder') || config.messages.placeholder;
		const hideSelected = el.hasAttribute('data-hide-selected');
		const hasSearch = el.hasAttribute('data-has-search');
		const instance = new SlimSelect({
			select: el,
			placeholder: placeholder,
			closeOnSelect: !isMultiple,
			showSearch: isMultiple || hasSearch,
			searchText: config.messages.searchText,
			searchPlaceholder: config.messages.searchPlaceholder,
			searchFocus: isMobile1,
			hideSelectedOption: hideSelected,
			onChange: (info) => {
				console.log(info);
			}
		});
	});

	$(document).on("click", ".filter__result-item", function() {
		var index = $(this).index();
		console.log(index);
		var index1 = index + 1;
		$(".ss-value:nth-child(" + index1 + ") .ss-value-delete").trigger("click");
	});

	var setFileInput = $('.input-file .attachment_btn');

	setFileInput.each(function(){
		var selfFile = $('.input-file .photo_box .content'),
		selfInput = $(this).find('input[type=file]');

		selfInput.change(function(){
			var file = $(this).prop('files')[0],
			fileRdr = new FileReader(),
			selfImg = selfFile.find('.img_view'),
			selfPdf = selfFile.find('.pdf_view');
			if(!this.files.length){
				if(0 < selfImg.length || 0 < selfPdf.length){
					$('.input-file .photo_box').removeClass('show');
					if(0 < selfImg.length){
						selfImg.remove();
					}
					if(0 < selfPdf.length){
						selfPdf.remove();
					}
					return;
				}
			} else {
				if(file.type.match('image.*')){
					if(!(0 < selfImg.length)){
						selfFile.append('<img alt="" class="img_view">');
					}
					if(0 < selfPdf.length){
						selfPdf.remove();
					}
					var prevElm = selfFile.find('.img_view');
					fileRdr.onload = function() {
						$('.input-file .photo_box').addClass('show');
						prevElm.attr('src', fileRdr.result);
					};
					fileRdr.readAsDataURL(file);
				} else if(file.type.match('pdf.*')){
					if(!(0 < selfPdf.length)){
						selfFile.append('<object class="pdf_view"></object>');
					}
					if(0 < selfImg.length){
						selfImg.remove();
					}
					var prevElm2 = selfFile.find('.pdf_view');
					fileRdr.onload = function() {
						$('.input-file .photo_box').addClass('show');
						prevElm2.attr('data', fileRdr.result);
					};
					fileRdr.readAsDataURL(file);
				} else {
					if(0 < selfImg.length && 0 < selfPdf.length){
						$('.input-file .photo_box').removeClass('show');
						if(0 < selfImg.length){
							selfImg.remove();
						}
						if(0 < selfPdf.length){
							selfPdf.remove();
						}
						return;
					}
				}
			}
		});
	});

});