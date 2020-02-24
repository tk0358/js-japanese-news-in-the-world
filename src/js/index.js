import News from './models/News';
import * as newsView from './views/newsView';
import { elements } from './views/base';

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

