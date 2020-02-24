const NewsAPI = require('newsapi');

export default class News {

  async getResults() {
    const newsapi = new NewsAPI(process.env.API_KEY)
    try {
      const response = await newsapi.v2.everything({
        q: 'japan',
        language: 'en',
        sortBy: 'relevancy'
      })
      this.articles = response.articles;
    } catch (err) {
      alert(err);
    }
  }
}



