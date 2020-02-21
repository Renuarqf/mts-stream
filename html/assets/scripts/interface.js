$(document).ready(function() {

	$('body').css('margin-right',-getScrollbarWidth());

	var  chatBlock = $('.chat-block');
	(function() {
		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
		window.requestAnimationFrame = requestAnimationFrame;
	})();

	if(chatBlock.length) {
		function repeatOften() {
			// Do whatever
			stickChat();
			requestAnimationFrame(repeatOften);
		}
		requestAnimationFrame(repeatOften);
	}

	function stickChat() {
		var wrapper = $('.layout-body');
		var wrapH = wrapper.height();
		var wrapOffTop = wrapper.offset().top;
		var winH = $(window).height();
		var headerH = $('header').outerHeight();

		if (wrapOffTop < headerH) {
			chatBlock.addClass('stick-on');
		}
		else {
			chatBlock.removeClass('stick-on');
		}
		if (wrapH + wrapOffTop < winH) {
			chatBlock.addClass('stick-off');
		}
		else {
			chatBlock.removeClass('stick-off');
		}
	}
	var  position = $('.league__line.current.current-stick');
	var  asideLeague = $('.league-aside');

	if(position.length) {
		function repeatPosition() {
			// Do whatever
			stickPosition();
			stickAside();

			requestAnimationFrame(repeatPosition);
		}
		requestAnimationFrame(repeatPosition);
	}

	function stickPosition() {
		var wrapper = position.closest('.league__grid-body');
		var wrapOffTop = wrapper.offset().top;
		var winH = $(window).height();
		var line = position.closest('.league-li');
		var lineOffTop = line.offset().top;
		var lineH = line.height();

		if ((winH) > (wrapOffTop + lineH)) {
			position.addClass('stick-on');
		}
		else {
			position.removeClass('stick-on');
		}
		if ((winH) > (lineOffTop + lineH)) {
			position.removeClass('stick-on');
		}
	}

	function stickAside() {
		var wrapper = $('.league-aside__wrap');
		var wrapH = wrapper.height();
		var wrapOffTop = wrapper.offset().top;
		var winH = $(window).height();
		var headerH = $('header').outerHeight();
		var asideOffTop = asideLeague.offset().top;
		var asideH = asideLeague.height();

		if ( winH < asideH) {
			asideLeague.removeClass('stick-on-top');
			if ( (winH > asideOffTop + asideH ) && (wrapOffTop < 0)) {
				asideLeague.addClass('stick-on-bottom');
			}
			else {
				if (wrapOffTop > (winH - asideH)) {
					asideLeague.removeClass('stick-on-bottom');
				}
			}

			if (wrapH + wrapOffTop < winH) {
				asideLeague.addClass('stick-off');
			}
			else {
				asideLeague.removeClass('stick-off');
			}
		}
		else {
			asideLeague.removeClass('stick-on-bottom');
			if (wrapOffTop < headerH) {
				asideLeague.addClass('stick-on-top');
			}
			else {
				asideLeague.removeClass('stick-on-top');
			}
			if (wrapH + wrapOffTop < asideH + headerH +12) {
				asideLeague.addClass('stick-off');
			}
			else {
				asideLeague.removeClass('stick-off');
			}
		}
	}


	$('.burger-toggle').on('click',function(e){
		var ths = $(this);
		var menu = ths.closest('.burger-menu__wrap').find('.burger-menu');

		if (ths.hasClass('active')) {
			ths.removeClass('active');
			menu.removeClass('show');
		}
		else {
			ths.addClass('active');
			menu.addClass('show');
		}
		e.preventDefault();
	});
	$('.chat-toggle').on('click',function(e){
		$('.flex-wrap').toggleClass('chat-visible');
		e.preventDefault();
	});
	if ($('.section-profile-head__wrap.hidden').length) {
		var scrollFlag = true;
		$('.layout-main').on('mousewheel', function(event) {
			// console.log(event.deltaX, event.deltaY, event.deltaFactor);
			if (event.deltaY > 0 && scrollFlag) {
				scrollFlag = false;
				var wrap = $('.section-profile-head__wrap');
				wrap.slideDown(300, function(){
					wrap.removeClass('hidden');
				});
				wrap.removeClass('hidden');
			}
		});
	}
	$('[data-control]').on('click',function(e){
		var ths = $(this);
		var thsAttr =ths.attr('data-control');

		switch(thsAttr) {
			case 'popup-confirm':
				showConfirm();
				break;
			case 'close-popup':
				closePopup();
				break;
			case 'player-control':
				showPlayerControl(ths);
				break;
			case 'show-subcontrol':
				showPlayerSubControl(ths);
				break;
			case 'change-switcher':
				changeSwitcher(ths);
				break;
			case 'player-fullscreen':
				fullsreenMode();
				break;
			case 'player-theatre':
				theatreMode();
				break;
			case 'toggle-collapse':
				toggleCollapse(ths);
				break;
			case 'chat-support-toggle':
				chatSupportToggle(ths);
				break;
			case 'close-notification':
				closeNotification(ths);
				break;
			case 'amazing-activate':
				amazingActivate(ths);
				break;
			case 'remove-task':
				removeTask(ths);
				break;
			case 'cancel-remove-task':
				cancelRemoveTask(ths);
				break;
			case 'open-calendar':
				openCalendar();
				break;
			case 'step-changer':
				stepChanger(ths);
				break;
			case 'cup-changer':
				cupChanger(ths);
				break;
			case 'league-details':
				leagueDetails(ths);
				break;
			default:
				console.log('control pressed')
		}
		e.preventDefault();
	});
	var  player= $('.player');
	player.on('mouseenter',function(){
		player.addClass('hover');
	});
	player.on('mouseleave',function(){
		player.removeClass('hover');
	});


	var  headerSearch= $('.header-search');
	headerSearch.on('mouseenter',function(){
		headerSearch.addClass('hover');
		headerSearch.find('.header-search__input').focus();
	});
	headerSearch.on('mouseleave',function(){
		headerSearch.removeClass('hover');
	});
	$('.header-search__input').on('input change paste blur',function(){
		var ths = $(this);
		var wrap = ths.closest('.header-search');
		var drop = wrap.find('.header-search__drop');
		var value = ths.val();
		if (value != '') {
			wrap.addClass('active');
			drop.fadeIn(300);
		}
		else {
			wrap.removeClass('active');
			drop.hide();
		}
	});
	$('.header-search__input').on('focus',function(){
		var ths = $(this);
		var wrap = ths.closest('.header-search');
		var value = ths.val();
		wrap.addClass('active');
	});
	$('.widget input[type=radio]').on('change',function(e){
		var ths = $(this);
		var thsLabel = ths.closest('label');
		var wrap = thsLabel.parent();
		wrap.find('.checked').removeClass('checked');
		wrap.addClass('activated');
		thsLabel.addClass('checked');
	});

	sliderLeague();
	searchControl();
	toggleGrid();
});
function showShadow() {
	$('.shadow').fadeIn();
}
function hideShadow() {
	$('.shadow').fadeOut();
}
function closePopup() {
	hideShadow();
	$('.popup-layout').fadeOut();
	$('.popup').fadeOut();
}
function showConfirm() {
	showShadow();
	$('.popup-layout').fadeIn();
	$('.popup-confirm').fadeIn();
}
function showPlayerControl(elem) {
	var block = elem.closest('.btn-control__single').find('.btn-control__config');
	if (block.is(':visible')) {
		block.hide();
	}
	else {
		block.show();
	}
}
function showPlayerSubControl(elem) {
	var thsAttr = elem.attr('data-link')
	var blockCtr = elem.closest('.btn-control__config');
	blockCtr.find('.visible').removeClass('visible');
	blockCtr.find('.btn-control__block[data-content='+thsAttr+']').addClass('visible');
}
function changeSwitcher(elem) {
	elem.find('.switcher').toggleClass('enabled');
}


function fullsreenMode() {
	$('body').removeClass('theatre-mode');

	if (!$('body').hasClass('fullscreen-mode')) {
		$('body').addClass('fullscreen-mode');
	}
	else {
		$('body').removeClass('fullscreen-mode');
	}
	toggleFullScreen();
}
function theatreMode() {

	if ($('body').hasClass('fullscreen-mode')) {
		$('body').removeClass('fullscreen-mode');
		toggleFullScreen();
	}
	if (!$('body').hasClass('theatre-mode')) {
		$('body').addClass('theatre-mode');
	}
	else {
		$('body').removeClass('theatre-mode');
	}
}
function toggleFullScreen() {
	if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen(); // Firefox
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(); // Chrome and Safari
		} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen(); // IE
		}

		//Toggle fullscreen on, exit fullscreen
	} else {

		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
		$('body').removeClass('fullscreen-mode');
	}
}
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
	if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
		///fire your event
		$('body').removeClass('fullscreen-mode');
	}
}

function getScrollbarWidth() {
	var outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

	document.body.appendChild(outer);

	var widthNoScroll = outer.offsetWidth;
	// force scrollbars
	outer.style.overflow = "scroll";

	// add innerdiv
	var inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);

	var widthWithScroll = inner.offsetWidth;

	// remove divs
	outer.parentNode.removeChild(outer);

	return widthNoScroll - widthWithScroll;
}


function toggleCollapse(elem){
	var mainWrap = elem.closest('.faq-collaps');
	var toggleBlock = elem.next('.faq-collaps__body');
	if (mainWrap.hasClass('active')) {
		mainWrap.removeClass('active');
		toggleBlock.slideUp(300);
	}
	else {
		mainWrap.addClass('active');
		toggleBlock.slideDown(300);
	}
}

function chatSupportToggle(elem) {
	var mainWrap = elem.closest('.chat-support');
	var toggleBlock = mainWrap.find('.chat-support__body');
	if (mainWrap.hasClass('active')) {
		mainWrap.removeClass('active');
		toggleBlock.slideUp(300);
	}
	else {
		mainWrap.addClass('active');
		toggleBlock.slideDown(300);
	}
}

function closeNotification(elem) {
	var note = elem.closest('.notification');
	note.animate({'margin-left':'-24rem','opacity':'0'},function(){
		note.remove();
	});
}

function amazingActivate(elem) {
	if (!elem.hasClass('btn-amazing-error')) {
		if (!elem.hasClass('activated') || !elem.hasClass('disabled')) {
			elem.addClass('activated');

			setTimeout(function(){
				elem.addClass('disabled');
				elem.removeClass('activated');
			},350);
			setTimeout(function(){
				elem.removeClass('disabled');
			},3000);
		}
	}
}
function removeTask(elem) {
	var wrap = elem.closest('.card-calendar');
	var popup = wrap.find('.cc-over');
	popup.fadeIn(300);
}
function cancelRemoveTask(elem) {
	var popup = elem.closest('.cc-over');
	popup.fadeOut(300);
}
function openCalendar() {
	showShadow();
	$('.popup-layout').fadeIn();
	$('.popup-task').fadeIn();
}
function stepChanger(elem) {
	var wrap = elem.closest('.league-step__wrap');
	var step = elem.closest('.league-step');
	wrap.find('.league-step.active').removeClass('active');
	step.addClass('active');
}
function cupChanger(elem) {
	if(!elem.hasClass('disabled')) {
		var wrap = elem.closest('.league-step__wrap');
		wrap.find('.ls__one.active').removeClass('active');
		elem.addClass('active');
	}
}
function leagueDetails(elem) {
	var line = elem.closest('.league__line');
	if(!line.hasClass('current')) {
		if (!line.hasClass('more')) {
			var wrap = elem.closest('.league__grid-body');
			wrap.find('.league__line.more').removeClass('more').find('.league-details').slideUp(300);
			line.addClass('more');
			line.find('.league-details').slideDown(300);
		}
		else {
			line.removeClass('more');
			line.find('.league-details').slideUp(300);
		}
	}
}

function sliderLeague() {
	var slider = $('.js_league-slider');

	if (slider.length) {
		slider.slick({
			dots: true,
			arrows: false,
			infinite: true,
			draggable:false,
			fade: true,
			speed: 600,
			slidesToShow: 1,
			adaptiveHeight: true,
			customPaging: function(slider, i) {
				return $('<span class="slider-dot"></span>');
			},
			appendDots: $('.league-slider__dots'),
			autoplay: true,
			autoplaySpeed: 5000,
		});
	}
}

function searchControl() {
	var search = $('.js_input-search');

	if (search.length) {
		var searchInput = $('.js_input-search .input-search__control'),
			searchButton = $('.js_input-search .input-search__loupe'),
			searchCross = $('.js_input-search .input-search__cross');

		searchInput.on('focusin', function() {
			$(this).closest('.input-search').addClass('input-search_focus');
		});

		searchInput.on('focusout', function() {
			$(this).closest('.input-search').removeClass('input-search_focus');
		});

		searchButton.on('click', function() {
			$(this).closest('.input-search').find('.input-search__control').focus();
		});

		searchInput.on('keyup', function() {
			if ($(this).val() === '') {
				$(this).closest('.input-search').removeClass('input-search_clear');
			} else {
				$(this).closest('.input-search').addClass('input-search_clear');
			}
		});

		searchCross.on('click', function() {
			$(this).closest('.input-search').find('.input-search__control').val('');
			$(this).closest('.input-search').removeClass('input-search_clear');
		});

	}
}

function toggleGrid() {
	var links = $('.js_grid-toggle'),
		link = $('.grid-toggle__change');

	link.on('click', function() {
		var grid = $(this).data('grid');
		link.removeClass('active');

		if (grid == 'md') {
			$('.grid-cards').addClass('grid-cards_md');
		} else {
			$('.grid-cards').removeClass('grid-cards_md');
		}

		$(this).addClass('active');

		return false;
	});
}
