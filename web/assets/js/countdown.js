function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("25 January 2020 0:00:00 GMT+07:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".time-entry.days").html("<span>" + days + "</span> Days");
			$(".time-entry.hours").html("<span>" + hours + "</span> Hours");
			$(".time-entry.minutes").html("<span>" + minutes + "</span> Minutes");
			$(".time-entry.seconds").html("<span>" + seconds + "</span> Seconds");		

	}

	setInterval(function() { makeTimer(); }, 1000);