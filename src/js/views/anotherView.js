export const renderAnotherArticle = (id, article) => {
  const markup = `
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
  `
  document.getElementById(id).innerHTML = markup;
}