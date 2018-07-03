window.addEventListener('DOMContentLoaded', function(){

 	var tabs = require('../parts/tabs.js');
  	var lightbox = require('../parts/lightbox.js');
   	var modalPopup = require('../parts/modalPopup.js');
    var modalForm = require('../parts/modalForm.js');
    var calc = require('../parts/calc.js');
    var timer = require('../parts/timer.js');

    tabs();
    lightbox();
    modalPopup();
    modalForm();
    calc();
    timer();
})