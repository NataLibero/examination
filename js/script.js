window.addEventListener('DOMContentLoaded', function(){

//Модальное окно вызова

let popup_engineer_btn = document.querySelector('.popup_engineer_btn'),
popup_engineer = document.querySelector('.popup_engineer'),
btn_close = document.querySelector('.popup_engineer .popup_close'),
form_end = document.getElementById('ku')

popup_engineer_btn.addEventListener('click', () => {
	popup_engineer.style.display = 'block';		
});

btn_close.addEventListener('click', () => {
	popup_engineer.style.display = 'none';
});

window.onclick = function(event) {
	if (event.target == popup_engineer) {
		popup_engineer.style.display = 'none'
	}
} 

//Формы в модыльных окнах

let message = new Object();
message.loading = "Идет отправка...";
message.success = "Отправлено";
message.failure = "Ошибка";

let form = document.getElementsByClassName('main_form')[0],
input = document.getElementsByTagName('input'),
user_phone = document.getElementsByName('user_phone'),
statusMessage = document.createElement('div');

function initForm(elem) {	
	for(var j = 0; j < user_phone.length; j++) {
		user_phone[j].addEventListener('keypress', (e) => {
			for(var k = 0; k < user_phone.length; k++) {
				if(e.which < 48 || e.which > 57){
					e.preventDefault();
				}			
			}
		});
	}
	elem.addEventListener('submit', function(e) {		
		e.preventDefault();
		var elem_name = form.user_name.value;
		var elem_phone = form.user_phone.value;

		elem.appendChild(statusMessage);
		var formData = new FormData(elem);
		formData.append("user_name", elem_name);
		formData.append("user_phone", elem_phone);

		function postData(data) {
			var request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");		    

			request.onreadystatechange = function() { 
				if(request.readyState < 4) {
					console.log(request);
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {

					if(request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;					
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}
			request.send(data);

			for(let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		}

		postData(formData);

	})
};
initForm(form);




})