(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(){


	var tabs = require('../parts/tabs.js');
  	var lightbox = require('../parts/lightbox.js');
   	var modalWindow = require('../parts/modalWindow.js');
    var modalForm = require('../parts/modalForm.js');
    var calc = require('../parts/calc.js');
    var timer = require('../parts/timer.js');

    tabs();
    lightbox();
    modalWindow();
    modalForm();
    calc();
    timer();


	





});
},{"../parts/calc.js":2,"../parts/lightbox.js":3,"../parts/modalForm.js":4,"../parts/modalWindow.js":5,"../parts/tabs.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function calc () {
	// Калькулятор

var popup_calc_btn = document.getElementsByClassName('popup_calc_btn'),
    popup_calc = document.querySelector('.popup_calc'),
    popup_calc_close = document.querySelector('.popup_calc_close'),
    img_small = document.querySelectorAll('.balcon_icons a'),
    img_small_img = document.querySelectorAll('.balcon_icons a img'),
    img_big = document.querySelectorAll('.big_img img'),
    calc_width = document.getElementById('width'),
    calc_height = document.getElementById('height'),
    popup_calc_button = document.querySelector('.popup_calc_button'),
    popup_calc_profile_button = document.querySelector('.popup_calc_profile_button'),
    popup_calc_profile_close = document.querySelector('.popup_calc_profile_close'),
    popup_calc_profile = document.querySelector('.popup_calc_profile'),
    popup_calc_end = document.querySelector('.popup_calc_end'),
    popup_calc_end_close = document.querySelector('.popup_calc_end_close'),
    checkbox_cold = document.getElementById("cold"),
    checkbox_warm = document.getElementById("warm"),
    view_type = document.getElementById('view_type'),
    checkbox_val = document.querySelectorAll('.popup_calc_profile .checkbox');

for (var j = 0; j < popup_calc_btn.length; j++) {
	popup_calc_btn[j].addEventListener('click', function () {
		popup_calc.style.display = 'block';
	});
}

popup_calc_close.addEventListener('click', function () {
	popup_calc.style.display = 'none';
	for (var j = 0; j < img_small_img.length; j++) {
		img_small_img[j].classList.remove('img-transform');
	}
	clearData();
});

popup_calc_button.addEventListener('click', function () {
	if (calc_width.value == '' || calc_height.value == '') {
		return false;
	}
	popup_calc.style.display = 'none';
	popup_calc_profile.style.display = 'block';
});

popup_calc_profile_button.addEventListener('click', function () {
	for (var i = 0; i < checkbox_val.length; i++) {
		if (checkbox_val[i].checked == true) {
			popup_calc_profile.style.display = 'none';
			popup_calc_end.style.display = 'block';
		}
	}
});

popup_calc_end_close.addEventListener('click', function () {
	var st = getComputedStyle(statusMessage_calc);
	popup_calc_end.style.display = 'none';
	clearData();
	if (st.display === "block") {
		statusMessage_calc.parentNode.removeChild(statusMessage_calc);
	}

	//statusMessage_calc.parentNode.removeChild(statusMessage_calc);
});

popup_calc_profile_close.addEventListener('click', function () {
	popup_calc_profile.style.display = 'none';
	clearData();
});

function clearData() {
	calc_width.value = '';
	calc_height.value = '';
	view_type.value = "tree";
	for (var i = 0; i < checkbox_val.length; i++) {
		if (checkbox_val[i].checked) {
			checkbox_val[i].checked = false;
		}
	}
	for (var _j = 0; _j < input_calc.length; _j++) {
		input_calc[_j].value = '';
	}
}

for (var i = 0; i < img_small.length; i++) {
	img_small[i].addEventListener('click', func);
}

function func(e) {
	e.preventDefault();
	console.log(e.target);
	console.log(this);
	for (var j = 0; j < img_small_img.length; j++) {
		img_small_img[j].classList.remove('img-transform');
	}
	e.target.classList.add('img-transform');

	for (var i = 0; i < img_big.length; i++) {
		var img_elem_big = img_big[i].getAttribute('id');
		var img_elem_small = this.getAttribute('class');
		if (img_elem_big != img_elem_small) {
			img_big[i].style.display = 'none';
		} else {
			img_big[i].style.display = 'block';
		}
	}
}

calc_width.addEventListener('keypress', function (e) {
	if (e.which < 48 || e.which > 57) {
		e.preventDefault();
	}
});

calc_height.addEventListener('keypress', function (e) {
	if (e.which < 48 || e.which > 57) {
		e.preventDefault();
	}
});

checkbox_cold.addEventListener('change', function () {
	checkbox_warm.checked = !checkbox_cold.checked;
});

checkbox_warm.addEventListener('change', function () {
	checkbox_cold.checked = !checkbox_warm.checked;
});

var message_calc = new Object();
message_calc.loading = "Идет отправка...";
message_calc.success = "Отправлено";
message_calc.failure = "Ошибка";

var form_calc = document.querySelector('.popup_calc_end .form'),
    input_calc = form_calc.getElementsByTagName('input'),
    statusMessage_calc = document.createElement('div');

var form_object = new Object();

form_calc.addEventListener('submit', function (event) {
	event.preventDefault();
	form_calc.appendChild(statusMessage_calc);

	var elem_name = form_calc.user_name.value;
	var elem_phone = form_calc.user_phone.value;
	var form_height = calc_height.value;
	var form_width = calc_width.value;
	var val_checkbox;
	var selected_type = view_type.value;

	for (var k = 0; k < checkbox_val.length; k++) {
		if (checkbox_val[k].checked) {
			val_checkbox = checkbox_val[k].value;
		}
	};

	form_object.name = elem_name;
	form_object.phone = elem_phone;
	form_object.elemHeight = form_height;
	form_object.elemWidth = form_width;
	form_object.elemCheckbox = val_checkbox;
	form_object.selectType = selected_type;

	var request = new XMLHttpRequest();
	request.open('POST', 'server.php');
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	var formData = new FormData(form_calc);
	formData.append("checkbox-test", form_object.elemCheckbox);
	formData.append("width", form_object.elemWidth);
	formData.append("height", form_object.elemHeight);
	formData.append("view", form_object.selectType);

	request.send(formData);

	request.onreadystatechange = function () {
		if (request.readyState < 4) {
			statusMessage_calc.innerHTML = message_calc.loading;
		} else if (request.readyState === 4) {
			if (request.status == 200 && request.status < 300) {
				statusMessage_calc.innerHTML = message_calc.success;
			} else {
				statusMessage_calc.innerHTML = message_calc.failure;
			}
		}
	};
	for (var _i = 0; _i < input_calc.length; _i++) {
		input_calc[_i].value = '';
	}
	for (key in form_object) {
		form_object[key] = null;
	}
});
}

module.exports = calc;
},{}],3:[function(require,module,exports){
function lightbox () {
	//Картинки при клике

var works_link = document.querySelectorAll('#work a'),
    divWork;

for (var l = 0; l < works_link.length; l++) {
	works_link[l].addEventListener('click', function (e) {
		e.preventDefault();
		console.log(this.getAttribute('href'));
		var at = this.getAttribute('href');

		divWork = document.createElement('div');
		divWork.classList.add('overlay');
		document.body.appendChild(divWork);

		var imgBig = document.createElement('img');
		imgBig.setAttribute('src', at);
		imgBig.classList.add('imgStyle');
		divWork.appendChild(imgBig);
	});
}
document.body.onclick = function (event) {
	if (event.target == divWork) {
		divWork.style.display = 'none';
	}
};

}

module.exports = lightbox;
},{}],4:[function(require,module,exports){
function modalForm () {
	//6 форм на странице

var message = new Object();
message.loading = "Идет отправка...";
message.success = "Отправлено";
message.failure = "Ошибка";

var form1 = document.getElementsByClassName('main_form')[0],
    form2 = document.getElementsByClassName('main_form')[1],
    form3 = document.getElementsByClassName('main_form')[2],
    form4 = document.getElementsByClassName('main_form')[3],
    form5 = document.getElementsByClassName('main_form')[4],
    form6 = document.getElementsByClassName('main_form')[5],
    input = document.getElementsByTagName('input'),
    user_phone = document.getElementsByName('user_phone'),
    statusMessage = document.createElement('div');

function initForm(elem) {
	for (var j = 0; j < user_phone.length; j++) {
		user_phone[j].addEventListener('keypress', function (e) {
			for (var k = 0; k < user_phone.length; k++) {
				if (e.which < 48 || e.which > 57) {
					e.preventDefault();
				}
			}
		});
	}
	elem.addEventListener('submit', function (e) {
		e.preventDefault();

		elem.appendChild(statusMessage);
		var formData = new FormData(elem);

		function postData(data) {
			var request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			request.onreadystatechange = function () {
				if (request.readyState < 4) {
					console.log(request);
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {

					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						setTimeout(function () {
							statusMessage.parentNode.removeChild(statusMessage);
						}, 3000);
					} else {
						statusMessage.innerHTML = message.failure;
						setTimeout(function () {
							statusMessage.parentNode.removeChild(statusMessage);
						}, 3000);
					}
				}
			};
			request.send(data);

			for (var _i2 = 0; _i2 < input.length; _i2++) {
				input[_i2].value = '';
			}
		}
		postData(formData);
	});
};
initForm(form1);
initForm(form2);
initForm(form3);
initForm(form4);
initForm(form5);
initForm(form6);
}

module.exports = modalForm;
},{}],5:[function(require,module,exports){
function modalWindow () {
	var delay_popup = 60000;
setTimeout("document.querySelector('.popup').style.display='block'", delay_popup);

//Модальное окно вызова

var popup_engineer_btn = document.querySelector('.popup_engineer_btn'),
    popup_engineer = document.querySelector('.popup_engineer'),
    btn_close = document.querySelector('.popup_engineer .popup_close'),
    popup = document.querySelector('.popup'),
    popup_close = document.querySelector('.popup .popup_close'),
    phone_link = document.getElementsByClassName('phone_link');

popup_engineer_btn.addEventListener('click', function () {
	popup_engineer.style.display = 'block';
});

btn_close.addEventListener('click', function () {
	var style = getComputedStyle(statusmsg);
	popup_engineer.style.display = 'none';
	if (style.display === 'block') {
		clearMessage();
	}
});

popup_close.addEventListener('click', function () {
	var style = getComputedStyle(statusmsg);
	popup.style.display = 'none';
	if (style.display === 'block') {
		clearMessage();
	}
});

window.onclick = function (event) {
	if (event.target == popup_engineer) {
		popup_engineer.style.display = 'none';
	}
	if (event.target == popup) {
		popup.style.display = 'none';
	}
};

for (var i = 0; i < phone_link.length; i++) {
	phone_link[i].addEventListener('click', function (e) {
		e.preventDefault();
		popup.style.display = 'block';
	});
}

function clearMessage() {
	statusmsg.parentNode.removeChild(statusmsg);
}

//Формы в модыльных окнах

var msg = new Object();
msg.loading = "Идет отправка...";
msg.success = "Отправлено";
msg.failure = "Ошибка";

var form_engineer = document.getElementById('form_engineer'),
    form_popup = document.getElementById('form_popup');
statusmsg = document.createElement('div');

function initPopupForm(elem_form) {

	elem_form.addEventListener('submit', function (e) {
		e.preventDefault();
		elem_form.appendChild(statusmsg);
		var formData = new FormData(elem_form);

		function postData(data) {
			var request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			request.onreadystatechange = function () {
				if (request.readyState < 4) {
					console.log(request);
					statusmsg.innerHTML = msg.loading;
				} else if (request.readyState === 4) {

					if (request.status == 200 && request.status < 300) {
						statusmsg.innerHTML = msg.success;
					} else {
						statusmsg.innerHTML = msg.failure;
					}
				}
			};
			request.send(data);

			for (var _i = 0; _i < input.length; _i++) {
				input[_i].value = '';
			}
		}
		postData(formData);
	});
}

initPopupForm(form_engineer);
initPopupForm(form_popup);
}

module.exports = modalWindow;
},{}],6:[function(require,module,exports){
function tabs () {
	//табы с окнами

var slick_tab = document.getElementsByClassName('slick_tab'),
    glazing_slider = document.querySelector('.glazing_slider'),
    slick_tab_content = document.getElementsByClassName('slick_tab_content');

var hideTabsContent = function hideTabsContent(a) {
	for (var i = a; i < slick_tab_content.length; i++) {
		slick_tab_content[i].classList.remove('show');
		slick_tab_content[i].classList.add('hide');
		slick_tab[i].classList.remove('active');
	}
};
hideTabsContent(1);

var showTabContent = function showTabContent(b) {
	if (slick_tab_content[b].classList.contains('hide')) {
		hideTabsContent(0);
		slick_tab_content[b].classList.remove('hide');
		slick_tab_content[b].classList.add('show');
		slick_tab[b].classList.add('active');
	}
};

glazing_slider.addEventListener('click', function (event) {
	var target = event.target;
	console.log(target);
	if (target.className == 'slick_tab') {
		for (var i = 0; i < slick_tab.length; i++) {
			if (target == slick_tab[i]) {
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

var hideDecorContent = function hideDecorContent(a) {
	for (var i = a; i < decor_tab_content.length; i++) {
		decor_tab_content[i].classList.remove('show');
		decor_tab_content[i].classList.add('hide');
		no_click[i].classList.remove('after_click');
	}
};
hideDecorContent(1);

var showDecorContent = function showDecorContent(b) {
	if (decor_tab_content[b].classList.contains('hide')) {
		hideDecorContent(0);
		decor_tab_content[b].classList.remove('hide');
		decor_tab_content[b].classList.add('show');
		no_click[b].classList.add('after_click');
	}
};

decoration_slider.addEventListener('click', function (event) {
	var target = event.target;
	console.log(target);
	if (target.className == 'decor_tab') {
		for (var i = 0; i < decor_tab.length; i++) {
			if (target == decor_tab[i]) {
				showDecorContent(i);
				break;
			}
		}
	}
});

}

module.exports = tabs;
},{}],7:[function(require,module,exports){
function timer() {
	//Timer

 
var deadline = '2018-07-04';

getTimeRemaining = function getTimeRemaining(endtime) {

    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / (1000 * 60 * 60));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

var setClock = function setClock(id, endtime) {

    var timer = document.getElementById(id);
    var days_1 = timer.querySelector('.days_1');
    var days_2 = timer.querySelector('.days_2');
    var hours_1 = timer.querySelector('.hours_1');
    var hours_2 = timer.querySelector('.hours_2');
    var min_1 = timer.querySelector('.min_1');
    var min_2 = timer.querySelector('.min_2');
    var sec_1 = timer.querySelector('.sec_1');
    var sec_2 = timer.querySelector('.sec_2');

    var updateClock = function updateClock() {
        var t = getTimeRemaining(endtime);
        days_1.innerHTML = String(addZero(t.days)).split('')[0];
        days_2.innerHTML = String(addZero(t.days)).split('')[1];
        hours_1.innerHTML = String(addZero(t.hours)).split('')[0];
        hours_2.innerHTML = String(addZero(t.hours)).split('')[1];
        min_1.innerHTML = String(addZero(t.minutes)).split('')[0];
        min_2.innerHTML = String(addZero(t.minutes)).split('')[1];
        sec_1.innerHTML = String(addZero(t.seconds)).split('')[0];
        sec_2.innerHTML = String(addZero(t.seconds)).split('')[1];

        if (t.total <= 0) {
            clearInterval(timeInterval);
            days_1.innerHTML = 0;
            days_2.innerHTML = 0;
            hours_1.innerHTML = 0;
            hours_2.innerHTML = 0;
            min_1.innerHTML = 0;
            min_2.innerHTML = 0;
            sec_1.innerHTML = 0;
            sec_2.innerHTML = 0;
        }
    };

    updateClock();
    var timeInterval = setInterval(updateClock, 1000);
};

setClock('timer', deadline);

function addZero(num) {
    if (num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

}

module.exports = timer;
},{}]},{},[1]);
