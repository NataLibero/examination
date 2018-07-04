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