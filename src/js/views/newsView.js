import { elements } from './base';

const renderArticle = (row, i, article) => `
    <div class="col-4">
      <div class="card article" id="article-${row}-${i}" style="width: 23rem;">
        <div class="card-header">
          <h4>from ${article.source.name} </h4>
        </div>
        <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${article.publishedAt}</h6>
          
          <a href="${article.urlToImage}"><img src="${article.urlToImage}" width="150" height="auto" class="rounded float-right" alt="Article image"></a>
          <p class="card-text">${article.description}</p>
          <a href="${article.url}" class="btn btn-primary" target="_blank">Read this</a>
          <div class="btn btn-warning btn-another">Another</div>
        </div>
      </div>
    </div>
 `;


export const renderArticles = articles => {
  const first3articles = articles.slice(0, 3);
  const second3articles = articles.slice(3, 6);
  let markup = '';
  markup += '<div class="row">';

  first3articles.forEach((article, i) => {
    markup += renderArticle(1, i, article)
  });
  markup += '</div>';
  markup += '<div class="row">';
  second3articles.forEach((article, i) => {
    markup += renderArticle(2, i, article)
  });
  markup += '</div>';
  elements.articles.innerHTML = markup;
}