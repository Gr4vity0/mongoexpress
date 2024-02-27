const articleRouter = require('express').Router();
const articleController = require('../controllers/article.controller')

articleRouter.get('/article', articleController.index);

articleRouter.get('/article/new', articleController.addNewArticle);
articleRouter.post('/article/new', articleController.addNewArticle_POST);

articleRouter.get('/article/detail/:slug', articleController.detail);

module.exports = articleRouter;