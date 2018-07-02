window.addEventListener('DOMContentLoaded', function(){
var delay_popup = 60000;
    setTimeout("document.querySelector('.popup').style.display='block'", delay_popup);
//Модальное окно вызова

let popup_engineer_btn = document.querySelector('.popup_engineer_btn'),
popup_engineer = document.querySelector('.popup_engineer'),
btn_close = document.querySelector('.popup_engineer .popup_close'),
popup = document.querySelector('.popup'),
popup_close = document.querySelector('.popup .popup_close'),
phone_link = document.getElementsByClassName('phone_link');

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
	if (event.target == popup) {
		popup.style.display = 'none';
	}
} 

for(var i = 0; i < phone_link.length; i++) {
	phone_link[i].addEventListener('click', function() {
		popup.style.display = 'block';
	});
}

popup_close.addEventListener('click', function() {
	popup.style.display = 'none';
});


//Формы в модыльных окнах

let msg = new Object();
msg.loading = "Идет отправка...";
msg.success = "Отправлено";
msg.failure = "Ошибка";

let form_engineer = document.getElementById('form_engineer'),
form_popup = document.getElementById('form_popup');
statusmsg = document.createElement('div');

function initPopupForm(elem_form) {

	elem_form.addEventListener('submit', function(e) {		
		e.preventDefault();		
		elem_form.appendChild(statusmsg);
		var formData = new FormData(elem_form);

		function postData(data) {
			var request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");		    

			request.onreadystatechange = function() { 
				if(request.readyState < 4) {
					console.log(request);
					statusmsg.innerHTML = msg.loading;
				} else if (request.readyState === 4) {

					if(request.status == 200 && request.status < 300) {
						statusmsg.innerHTML = msg.success;					
					} else {
						statusmsg.innerHTML = msg.failure;
					}
				}
			}
			request.send(data);

			for(let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		}
		postData(formData);
	});
}

initPopupForm(form_engineer);
initPopupForm(form_popup);

//6 форм на странице

let message = new Object();
message.loading = "Идет отправка...";
message.success = "Отправлено";
message.failure = "Ошибка";

let form1 = document.getElementsByClassName('main_form')[0],
form2 = document.getElementsByClassName('main_form')[1],
form3 = document.getElementsByClassName('main_form')[2],
form4 = document.getElementsByClassName('main_form')[3],
form5 = document.getElementsByClassName('main_form')[4],
form6 = document.getElementsByClassName('main_form')[5],
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

		elem.appendChild(statusMessage);
		var formData = new FormData(elem);

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
initForm(form1);
initForm(form2);
initForm(form3);
initForm(form4);
initForm(form5);
initForm(form6);


// Калькулятор

let popup_calc_btn = document.getElementsByClassName('popup_calc_btn'),
popup_calc = document.querySelector('.popup_calc'),
popup_calc_close = document.querySelector('.popup_calc_close'),
img_small = document.querySelectorAll('.balcon_icons a'),
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

for(var j = 0; j < popup_calc_btn.length; j++) {
	popup_calc_btn[j].addEventListener('click', function() {
		popup_calc.style.display = 'block';
	})
}

popup_calc_close.addEventListener('click', function() {
	popup_calc.style.display = 'none';
	clearData();
});

popup_calc_button.addEventListener('click', () => {
	popup_calc.style.display = 'none';
	popup_calc_profile.style.display = 'block';
});

popup_calc_profile_button.addEventListener('click', () => {
	popup_calc_profile.style.display = 'none';
	popup_calc_end.style.display = 'block';
});

popup_calc_end_close.addEventListener('click', () => {
	popup_calc_end.style.display = 'none';
	clearData();
});

popup_calc_profile_close.addEventListener('click', () => {
	popup_calc_profile.style.display = 'none';
	clearData();
})

function clearData() {
	calc_width.value = '';
	calc_height.value = '';
	view_type.value = "tree";
	for(var i = 0; i < checkbox_val.length; i++) {			
		if(checkbox_val[i].checked){
				checkbox_val[i].checked = false;
		}
	}
	for(let j = 0; j < input_calc.length; j++) {		
		input_calc[j].value = '';			
	}
}

for (var i = 0; i < img_small.length; i++){
	img_small[i].addEventListener('click', func);
}

function func(e) {
	e.preventDefault();	
	for(var j = 0; j < img_small.length; j++){
		img_small[j].style.zoom = '1';
	}
	this.style.zoom = "1.3";	
	
	for(var i = 0; i < img_big.length; i++){
		var img_elem_big = img_big[i].getAttribute('id');
		var img_elem_small = this.getAttribute('class');		
		if(img_elem_big != img_elem_small) {
			img_big[i].style.display = 'none';
		} else {
			img_big[i].style.display = 'block';
		}
		
	}
}   

calc_width.addEventListener('keypress', (e) => {
	if(e.which < 48 || e.which > 57){
		e.preventDefault();
	}
})

calc_height.addEventListener('keypress', (e) => {
	if(e.which < 48 || e.which > 57){
		e.preventDefault();
	}
})

checkbox_cold.addEventListener('change', () => {
	checkbox_warm.checked = !checkbox_cold.checked;
});

checkbox_warm.addEventListener('change', () => {
	checkbox_cold.checked = !checkbox_warm.checked;
});

let message_calc = new Object();
message_calc.loading = "Идет отправка...";
message_calc.success = "Отправлено";
message_calc.failure = "Ошибка";

let form_calc = document.querySelector('.popup_calc_end .form'),
	input_calc = form_calc.getElementsByTagName('input'),
	statusMessage_calc = document.createElement('div');   

let form_object = new Object();

	form_calc.addEventListener('submit', function(event){
		event.preventDefault();
		form_calc.appendChild(statusMessage_calc);

		var elem_name = form_calc.user_name.value;
		var elem_phone = form_calc.user_phone.value;
		var form_height = calc_height.value;
		var form_width = calc_width.value;
		var val_checkbox;
		var selected_type = view_type.value;
		
		for(var k = 0; k < checkbox_val.length; k++) {			
		if(checkbox_val[k].checked){
				val_checkbox = checkbox_val[k].value;
		}
	};	    
		
		form_object.name = elem_name;
		form_object.phone = elem_phone;
		form_object.elemHeight = form_height;
		form_object.elemWidth = form_width;
		form_object.elemCheckbox = val_checkbox;
		form_object.selectType = selected_type;	
		
		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form_calc);	
		formData.append("checkbox-test", form_object.elemCheckbox);
		formData.append("width", form_object.elemWidth);
		formData.append("height", form_object.elemHeight);
		formData.append("view", form_object.selectType);

		request.send(formData); 		

		request.onreadystatechange = function() { 
			if(request.readyState < 4) {
				statusMessage_calc.innerHTML = message_calc.loading;
			} else if (request.readyState === 4) {
				if(request.status == 200 && request.status < 300) {
					statusMessage_calc.innerHTML = message_calc.success;					
				} else {
					statusMessage_calc.innerHTML = message_calc.failure;
				}
			}
		}
		for(let i = 0; i < input_calc.length; i++) {
			input_calc[i].value = '';			
		}
		for(key in form_object){
			form_object[key] = null;
		}		
	});
	

//Табы с окнами

let slick_tab = document.getElementsByClassName('slick_tab'),
	glazing_slider = document.querySelector('.glazing_slider'),
	slick_tab_content = document.getElementsByClassName('slick_tab_content');
	

	let hideTabsContent = (a) => {
		for(var i = a; i < slick_tab_content.length; i++) {
			slick_tab_content[i].classList.remove('show');
			slick_tab_content[i].classList.add('hide');
			slick_tab[i].classList.remove('active')
		}
	}
	hideTabsContent(1);

	let showTabContent = (b) => {
		if(slick_tab_content[b].classList.contains('hide')) {
			hideTabsContent(0);
			slick_tab_content[b].classList.remove('hide');
			slick_tab_content[b].classList.add('show');
			slick_tab[b].classList.add('active')
		}
	}

	glazing_slider.addEventListener('click', (event) => {
		let target = event.target;
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

let decor_tab = document.getElementsByClassName('decor_tab'),
	decoration_slider = document.querySelector('.decoration_slider'),
	decor_tab_content = document.getElementsByClassName('decor_tab_content'),
	no_click = document.getElementsByClassName('no_click');

	let hideDecorContent = (a) => {
		for(var i = a; i < decor_tab_content.length; i++) {
			decor_tab_content[i].classList.remove('show');
			decor_tab_content[i].classList.add('hide');
			no_click[i].classList.remove('after_click')
		}
	}
	hideDecorContent(1);

	let showDecorContent = (b) => {
		if(decor_tab_content[b].classList.contains('hide')) {
			hideDecorContent(0);
			decor_tab_content[b].classList.remove('hide');
			decor_tab_content[b].classList.add('show');
			no_click[b].classList.add('after_click')
		}
	}

	decoration_slider.addEventListener('click', (event) => {
		let target = event.target;
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


//Timer

 var deadline = '2018-07-04';

    getTimeRemaining = function getTimeRemaining(endtime)  {

        var t = Date.parse(endtime) - Date.parse(new Date());
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var seconds = Math.floor( (t/1000) % 60);
        var minutes = Math.floor( (t/1000 / 60) % 60);
        var hours = Math.floor( (t/(1000*60*60)) );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

let setClock = (id, endtime) => {

    let timer = document.getElementById(id);
	let days_1 = timer.querySelector('.days_1');
	let days_2 = timer.querySelector('.days_2');
	let hours_1 = timer.querySelector('.hours_1');
	let hours_2 = timer.querySelector('.hours_2');
	let min_1 = timer.querySelector('.min_1');
	let min_2 = timer.querySelector('.min_2');
	let sec_1 = timer.querySelector('.sec_1');
	let sec_2 = timer.querySelector('.sec_2');

let updateClock = () => {
    let t = getTimeRemaining(endtime);
    days_1.innerHTML = String(addZero(t.days)).split('')[0];
    days_2.innerHTML = String(addZero(t.days)).split('')[1];	
	hours_1.innerHTML = String(addZero(t.hours)).split('')[0];
	hours_2.innerHTML = String(addZero(t.hours)).split('')[1];
	min_1.innerHTML = String(addZero(t.minutes)).split('')[0];
	min_2.innerHTML = String(addZero(t.minutes)).split('')[1];
	sec_1.innerHTML = String(addZero(t.seconds)).split('')[0];
	sec_2.innerHTML = String(addZero(t.seconds)).split('')[1];


if(t.total <= 0){
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
var timeInterval = setInterval(updateClock, 1000)
};

setClock('timer', deadline);

function addZero(num){
    if(num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}


//



})