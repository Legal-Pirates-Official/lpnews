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
                        ${article.urlToImage
						? '<img src=' + article.urlToImage + ' alt="" />'
						: 'No image available'
					}
                        </div>
                        <div class="boxes-content">
                            <p>${article.title}</p>
                            <p>${article.content}</p>
                            <p>
                                <a href="${article.url
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
		`https://newsapi.org/v2/top-headlines?country=in&apiKey=65d19618ed5f44369343808e565a89cf`
		// 'http://eventregistry.org/d6b83edb-0c65-4c1a-b8aa-e131ae7a3d5f/v1/event/getEvents'
	)
);

document.querySelector('.search-input').addEventListener('input', (e) => {
	fetchRequest(
		`https://newsapi.org/v2/everything?q=${e.target.value}&apiKey=65d19618ed5f44369343808e565a89cf`
		// `http://eventregistry.org/d6b83edb-0c65-4c1a-b8aa-e131ae7a3d5f/v1/event/getEvents?keyword=${e.target.value}`
	);
});

const categorySelect = (category) => {
	fetchRequest(
		'https://newsapi.org/v2/top-headlines?country=in&category=' +
		category +
		'&apiKey=65d19618ed5f44369343808e565a89cf'
		// `http://eventregistry.org/d6b83edb-0c65-4c1a-b8aa-e131ae7a3d5f/v1/event/getEvents`
	);
};
