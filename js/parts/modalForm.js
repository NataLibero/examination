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
    user_name = document.getElementsByName('user_name'),
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

	for(var i = 0; i < user_name.length; i++) {
		user_name[i].addEventListener('keypress', function (e) {
			for(var j = 0; j < user_name.length; j++) {				
				 if (e.which < 1025 || e.which > 1105) {
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