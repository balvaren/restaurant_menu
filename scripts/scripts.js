console.log("loading...");

(function () {
	const promoEl = document.getElementById('promo');
	if (!promoEl) {
		console.warn('Promo element (#promo) not found. Countdown not started.');
		return;
	}

	let remaining = 5 * 60; // 5 minutes in seconds

	function formatTime(sec) {
		const m = Math.floor(sec / 60);
		const s = sec % 60;
		return `${m}:${String(s).padStart(2, '0')}`;
	}

	function render() {
		promoEl.textContent = `Offer ends in ${formatTime(remaining)}`;
	}

	render();

	const timer = setInterval(() => {
		remaining -= 1;
		if (remaining <= 0) {
			clearInterval(timer);
			promoEl.textContent = 'Offer expired';
			return;
		}
		render();
	}, 1000);
})();
