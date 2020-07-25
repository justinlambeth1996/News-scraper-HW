const commentsController = require('../controllers/comments.controller');
const articlesController = require('../controllers/articles.controller');

module.exports = (app) => {
  app.get('/api/scrape', articlesController.scrape);
  app.delete('/api/comments/:id', commentsController.delete);
  app.get('/api/articles', articlesController.all);
  app.get('/api/comments', commentsController.all);
  app.get('/api/comments/:id', commentsController.one);
  app.post('/api/comments/:id', commentsController.create);
  app.get('/api/articles/favorites', articlesController.allFavorites);
  app.put('/api/articles/:id', articlesController.updateFavorite);
  app.get('/api/articles/:id', articlesController.one);
  app.delete('/api/articles/:id', articlesController.delete);
  
};