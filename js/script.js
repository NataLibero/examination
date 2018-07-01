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


// Калькулятор


let popup_calc_btn = document.getElementsByClassName('popup_calc_btn')[0],
popup_calc = document.querySelector('.popup_calc'),
popup_calc_close = document.querySelector('.popup_calc_close'),
img_small = document.querySelectorAll('.balcon_icons a'),
img_big = document.querySelectorAll('.big_img img'),
calc_width = document.getElementById('width'),
calc_height = document.getElementById('height'),
popup_calc_button = document.querySelector('.popup_calc_button'),
popup_calc_profile_button = document.querySelector('.popup_calc_profile_button'),
popup_calc_profile = document.querySelector('.popup_calc_profile'),
popup_calc_end = document.querySelector('.popup_calc_end'),
popup_calc_end_close = document.querySelector('.popup_calc_end_close'),
checkbox_cold = document.getElementById("cold"),
checkbox_warm = document.getElementById("warm");


popup_calc_btn.addEventListener('click', function() {
	popup_calc.style.display = 'block';
});

popup_calc_close.addEventListener('click', function() {
	popup_calc.style.display = 'none';
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
});

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