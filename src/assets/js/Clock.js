import $ from 'jquery';

export default class Clock {


	get clockClass() { return this._clockClass }
	set clockClass(className) { this._clockClass = className }

	get interval() { return this._interval }


	constructor(clockClass) {
		this._clockClass = clockClass;
	}


	startTimer() {

		this._interval = setInterval(() => {

			let today = new Date();
			let h = today.getHours();
			let m = today.getMinutes();
			let s = today.getSeconds();

			$(this._clockClass).html(h + ":" + this.checkTime(m) );
		}, 1000);
	}


	// add zero in front of numbers < 10
	checkTime(i) {
		if (i < 10) {i = "0" + i};  
		return i;
	}

    // let hourRotate = "rotate(" + ((seconds % 43200) * 360 / 43200 + 180) + "deg)";
    // let minuteRotate = "rotate(" + ((seconds % 3600) * 360 / 3600 + 180) + "deg)";
    // let secondRotate = "rotate(" + ((seconds % 60) * 360 / 60 + 180) + "deg)";

}

