const API_URL = 'https://newsapi.org/v2/everything?q=farming&apiKey=ea1f51f9d8f74da49846c8337ac2458c';

async function fetchNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const newsContainer = document.getElementById('news');
        newsContainer.innerHTML = "";
        
        // Limit articles to 4
        const articles = data.articles.slice(0, 4);
        
        articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            
            newsItem.innerHTML = `
                <img src="${article.urlToImage || 'placeholder.jpg'}" alt="News Image">
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank" class="read-more">Read More</a>
            `;
            
            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('news').innerHTML = '<p style="color:red;">Failed to load news. Please try again later.</p>';
    }
}

fetchNews();
