const buttons = document.querySelectorAll('button');
const links = [
	{ id: 'weather-app', url: 'https://weather-app-xy4k.onrender.com/' },
	{ id: 'movie-rater', url: 'https://movie-rating-b1ws.onrender.com/?title=Backrooms?&ai=true' },
	{ id: 'calories-calc', url: 'https://calories-calculator-rf1u.onrender.com' }
];

document.addEventListener('DOMContentLoaded', () => {
	const imgs = document.querySelectorAll('img');
	imgs.forEach(img => {
		img.style.cursor = 'pointer';
		img.addEventListener('click', () => {
			const dataLink = img.dataset.link;
			if (dataLink) {
				console.log('Navigating to (data-link):', dataLink);
				window.location.href = dataLink;
				return;
			}

			if (img.id) {
				const match = links.find(l => l.id === img.id);
				if (match) {
					console.log('Navigating to (matched id):', match.url);
					window.location.href = match.url;
					return;
				}
			}

			console.log('No link configured for image — opening image source in new tab:', img.src);
			window.open(img.src, '_blank');
		});
	});
});



