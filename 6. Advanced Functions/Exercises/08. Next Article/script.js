function getArticleGenerator(articles) {
    let parentDiv = document.getElementById('content');

    return () => {
        if (articles.length > 0) {
            let articleElement = document.createElement('article')
            articleElement.textContent = articles.shift();
            parentDiv.appendChild(articleElement);

        }
    }
}
