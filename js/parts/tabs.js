function tabs () {
	//Табы с окнами

var slick_tab = document.getElementsByClassName('slick_tab'),
	glazing_slider = document.querySelector('.glazing_slider'),
	slick_tab_content = document.getElementsByClassName('slick_tab_content');
	

	var hideTabsContent = function (a) {
		for(var i = a; i < slick_tab_content.length; i++) {
			slick_tab_content[i].classList.remove('show');
			slick_tab_content[i].classList.add('hide');
			slick_tab[i].classList.remove('active')
		}
	}
	hideTabsContent(1);

	var showTabContent = function (b) {
		if(slick_tab_content[b].classList.contains('hide')) {
			hideTabsContent(0);
			slick_tab_content[b].classList.remove('hide');
			slick_tab_content[b].classList.add('show');
			slick_tab[b].classList.add('active')
		}
	}

	glazing_slider.addEventListener('click', function (event) {
		var target = event.target;
		console.log(target);
		if(target.className == 'slick_tab') {
			for(var i = 0; i < slick_tab.length; i++) {
				if(target == slick_tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

// Табы с отделкой

var decor_tab = document.getElementsByClassName('decor_tab'),
	decoration_slider = document.querySelector('.decoration_slider'),
	decor_tab_content = document.getElementsByClassName('decor_tab_content'),
	no_click = document.getElementsByClassName('no_click');

	var hideDecorContent = function (a) {
		for(var i = a; i < decor_tab_content.length; i++) {
			decor_tab_content[i].classList.remove('show');
			decor_tab_content[i].classList.add('hide');
			no_click[i].classList.remove('after_click')
		}
	}
	hideDecorContent(1);

	var showDecorContent = function (b) {
		if(decor_tab_content[b].classList.contains('hide')) {
			hideDecorContent(0);
			decor_tab_content[b].classList.remove('hide');
			decor_tab_content[b].classList.add('show');
			no_click[b].classList.add('after_click')
		}
	}

	decoration_slider.addEventListener('click', function (event) {
		var target = event.target;
		console.log(target);
		if(target.className == 'decor_tab') {
			for(var i = 0; i < decor_tab.length; i++) {
				if(target == decor_tab[i]) {
					showDecorContent(i);
					break;
				}
			}
		}
	});

}

module.exports = tabs;