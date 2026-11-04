const deadline = new Date ("2027-06-30T23:59:59").getTime();
const interval = setInterval(() => {
	const now = new Date ().getTime();
	const distance = deadline-now;

	const days = Math.floor(distance/(1000*60*60*24));
	const hours = Math.floor(distance/(1000*60*60)%24);
	const minutes = Math.floor(distance/(1000*60)%60);
	const seconds = Math.floor(distance/(1000)%60);

	document.getElementById("days").innerText = days;
	document.getElementById("hours").innerText = hours;
	document.getElementById("minutes").innerText = minutes;
	document.getElementById("seconds").innerText = seconds;

	if (distance<0) {
		clearInterval(interval);
		document.querySelector(".hero-countdown").innerHTML =
			"<p>Pendaftaran Telah Ditutup</p>";
 }
}, 1000);