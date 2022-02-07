VanillaTilt.init(document.querySelectorAll('.boxes'), {
	max: 10,
	speed: 500,
	scale: 1.05,
	perspective: 1000,
	glare: true,
	'max-glare': 0.3
});

const newsBoxes = document.querySelector('.news-boxes');

const fetchRequest = (url) => {
	newsBoxes.innerHTML = `Loading...`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			newsBoxes.innerHTML = ``;
			data.articles.forEach((article) => {
				newsBoxes.innerHTML += `
                    <div class="boxes">
                        <div class="boxes-img">
                        ${
													article.urlToImage
														? '<img src=' + article.urlToImage + ' alt="" />'
														: 'No image available'
												}
                        </div>
                        <div class="boxes-content">
                            <p>${article.title}</p>
                            <p>${article.content}</p>
                            <p>
                                <a href="${
																	article.url
																}>">Click here to see more</a>
                            </p>
                        </div>
                    </div>`;
			});
		});
};

addEventListener(
	'load',
	fetchRequest(
		'http://newsapi.org/v2/top-headlines?country=in&apiKey=65d19618ed5f44369343808e565a89cf'
	)
);

document.querySelector('.search-input').addEventListener('input', (e) => {
	fetchRequest(
		`http://newsapi.org/v2/everything?q=${e.target.value}&apiKey=65d19618ed5f44369343808e565a89cf`
	);
});

const categorySelect = (category) => {
	fetchRequest(
		'http://newsapi.org/v2/top-headlines?country=in&category=' +
			category +
			'&apiKey=65d19618ed5f44369343808e565a89cf'
	);
};
