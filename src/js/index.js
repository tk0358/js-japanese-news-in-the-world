import News from './models/News';
import * as newsView from './views/newsView';
import * as anotherView from './views/anotherView';

/**
 * INIT
 */

const state = {}
window.state = state;

const init = async () => {
  state.news = new News();
  try {
    await state.news.getResults();
    newsView.renderArticles(state.news.articles.slice(0, 6));
  } catch(err) {
    alert('Something error has happened.')
    console.log(err);
  }
}


init();

window.addEventListener('click', e => {
  if (e.target.matches('.btn-another')) {
    const id = e.target.closest('.article').id
    console.log(id);
    const anotherArticles = state.news.articles.slice(6);
    const article = anotherArticles[Math.floor(Math.random() * anotherArticles.length)];
    anotherView.renderAnotherArticle(id, article);
  }
  


})
