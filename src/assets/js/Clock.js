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

			$(this._clockClass).html(
				'<span class="smaller">'
				+ weekday[today.getDay()]
				+ '</span>'
				+ '<span class="small">'
				+ this.checkNumber(date) + '.' + this.checkNumber(parseInt(month+1))
				+ '</span>'
				+ '<span class="larger">'
				+ h + ':' + this.checkNumber(m)
				+ '</span>'
				+ '<span class="small">'
				+ this.checkNumber(s)
				+ '</span>'
		)}, 1000);
	}


	// add zero in front of numbers < 10
	checkNumber(i) {
		if (i < 10) {i = "0" + i};  
		return i;
	}

    // let hourRotate = "rotate(" + ((seconds % 43200) * 360 / 43200 + 180) + "deg)";
    // let minuteRotate = "rotate(" + ((seconds % 3600) * 360 / 3600 + 180) + "deg)";
    // let secondRotate = "rotate(" + ((seconds % 60) * 360 / 60 + 180) + "deg)";

}

