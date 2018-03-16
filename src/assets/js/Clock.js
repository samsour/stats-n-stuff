import $ from 'jquery';

export default class Clock {


	get clockClass() { return this._clockClass }
	set clockClass(className) { this._clockClass = className }

	get interval() { return this._interval }

	constructor(clockClass) {
		this._clockClass = clockClass;
		this.checkDate();
	}


	startTimer() {
		this._interval = setInterval(() => {
		this.checkDate();
		}, 1000);
	}

	checkDate() {
		let today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();
		let s = today.getSeconds();
		
		let weekday = new Array(7);
		weekday[0] =  "So";
		weekday[1] = "Mo";
		weekday[2] = "Die";
		weekday[3] = "Mi";
		weekday[4] = "Do";
		weekday[5] = "Fr";
		weekday[6] = "Sa";

		let date = today.getDate();
		let month = today.getMonth();

		$(this._clockClass + ' .day').html(weekday[today.getDay()]);
		$(this._clockClass + ' .date').html(this.checkNumber(date) + '.' + this.checkNumber(parseInt(month+1)));
		$(this._clockClass + ' .time').html(h + ':' + this.checkNumber(m));
		$(this._clockClass + ' .seconds').html(this.checkNumber(s));
	}

	// add zero in front of numbers < 10
	checkNumber(i) {
		if (i < 10) {i = "0" + i};  
		return i;
	}

	// display analog clock
	// in progress
	//
    // let hourRotate = "rotate(" + ((seconds % 43200) * 360 / 43200 + 180) + "deg)";
    // let minuteRotate = "rotate(" + ((seconds % 3600) * 360 / 3600 + 180) + "deg)";
    // let secondRotate = "rotate(" + ((seconds % 60) * 360 / 60 + 180) + "deg)";
}

