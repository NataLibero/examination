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
checkbox_val = document.querySelectorAll('.popup_calc_profile .checkbox'),
input = document.getElementsByTagName('input'),
user_phone = document.getElementsByName('user_phone');

for(var j = 0; j < popup_calc_btn.length; j++) {
	popup_calc_btn[j].addEventListener('click', function() {
		popup_calc.style.display = 'block';
	})
}

popup_calc_close.addEventListener('click', function() {
	popup_calc.style.display = 'none';
	for(var j = 0; j < img_small_img.length; j++){
		img_small_img[j].classList.remove('img-transform');
	}
	clearData();
});

popup_calc_button.addEventListener('click', function () {
	if(calc_width.value == '' || calc_height.value == ''){
		return false;		
	}
	popup_calc.style.display = 'none';
	popup_calc_profile.style.display = 'block';
});

popup_calc_profile_button.addEventListener('click', function () {
	for(var i = 0; i < checkbox_val.length; i++) {			
		if(checkbox_val[i].checked == true){
				popup_calc_profile.style.display = 'none';
				popup_calc_end.style.display = 'block';				
		}		
	}
});

popup_calc_end_close.addEventListener('click', function () {
	var st = getComputedStyle(statusMessage_calc);
	popup_calc_end.style.display = 'none';	
	clearData();		
	if(st.display === "block"){
		statusMessage_calc.parentNode.removeChild(statusMessage_calc);
	}
	
});

popup_calc_profile_close.addEventListener('click', function () {
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
	for(var j = 0; j < input_calc.length; j++) {		
		input_calc[j].value = '';			
	}
}

for (var i = 0; i < img_small.length; i++){
	img_small[i].addEventListener('click', func);
}

function func(e) {
	e.preventDefault();	
	console.log(e.target);
	console.log(this)
	for(var j = 0; j < img_small_img.length; j++){
		img_small_img[j].classList.remove('img-transform');
	}
	e.target.classList.add('img-transform');	
	
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

calc_width.addEventListener('keypress', function (e) {
	if(e.which < 48 || e.which > 57){
		e.preventDefault();
	}
})

calc_height.addEventListener('keypress', function (e) {
	if(e.which < 48 || e.which > 57){
		e.preventDefault();
	}
})

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
for(var j = 0; j < user_phone.length; j++) {
		user_phone[j].addEventListener('keypress', (e) => {
			for(var k = 0; k < user_phone.length; k++) {
				if(e.which < 48 || e.which > 57){
					e.preventDefault();
				}			
			}
		});
	}
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
		
		var request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		var formData = new FormData(form_calc);	
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
		for(var i = 0; i < input_calc.length; i++) {
			input_calc[i].value = '';			
		}
		for(key in form_object){
			form_object[key] = null;
		}				
	});

}

module.exports = calc;