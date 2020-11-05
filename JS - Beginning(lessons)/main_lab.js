let temperature = parseFloat(+prompt("Введіть температуру"));

	if (temperature < 20 || temperature > 46) {
		alert("Ви труп");
	}
	else if (temperature > 20 && temperature < 27){
		alert("Ви у комі");
	}
	else if ((temperature >=27 && temperature < 36) || (temperature > 37 && temperature < 42)) {
		alert("Ви хворі");
	}
	else if (temperature >= 36 && temperature <= 37){
		alert("Ви здорові");
	}
	else if (temperature >= 42 && temperature <=46)
		alert("Ви втратили свідомість")

	else{
		alert("error");
	}

console.log(temperature);