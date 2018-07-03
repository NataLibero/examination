function lightbox() {
//Картинки при клике

var works_link = document.querySelectorAll('#work a'),
    divWork;

for(var l = 0; l < works_link.length; l++) {
	works_link[l].addEventListener('click', function(e) {
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
	})
}

document.body.onclick = function(event) {
	if (event.target == divWork) {
		divWork.style.display = 'none'
	}	
} 
}

module.exports = lightbox;