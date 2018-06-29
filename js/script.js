window.addEventListener('DOMContentLoaded', function(){

//Модальное окно вызова

let popup_engineer_btn = document.querySelector('.popup_engineer_btn'),
	popup_engineer = document.querySelector('.popup_engineer'),
	btn_close = document.querySelector('.popup_engineer .popup_close');

	popup_engineer_btn.addEventListener('click', () => {
		popup_engineer.style.display = 'block';		
	});

	btn_close.addEventListener('click', () => {
		popup_engineer.style.display = 'none';
	});

	document.body.addEventListener('mouseup', () => {
		if(popup_engineer.style.display == 'block'){
			popup_engineer.style.display = 'none'
		}   
	});    


})