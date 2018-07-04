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