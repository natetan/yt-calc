(function() {
	'use strict';

	window.onload = function() {
		document.querySelector("#answer").innerHTML = "";
		document.querySelector("#sub-answer").innerHTML = "";
		document.querySelector("#button").onclick = getTotal;
	}

	function calculate(sub, tip) {
		return Math.round(sub * (1 + (tip * 0.01)) * 100) / 100;
	}

	function getTotal() {
		var sub = document.querySelector(".sub").value;
		var tip = document.querySelector(".tip").value;
		if (sub == "" || tip == "") {
			document.querySelector("#answer").innerHTML = "No input. Cannot calculate :o";
			document.querySelector("#sub-answer").innerHTML = "";
		} else {
			var total = calculate(parseInt(sub), parseInt(tip));
			document.querySelector("#answer").innerHTML = "Your total is $" + total;
			document.querySelector("#sub-answer").innerHTML = "You should tip $" + 
					Math.round((total - parseInt(sub)) * 100) / 100;
		}
	}
});