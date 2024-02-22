const articleService = require('../services/article.service')

const homeController = {
    index: async (req, res) => {

        const article = {
            title: 'demo db Mongoos + Mongoose',
            slug: 'demo-mongo',
            tag: ['demo', 'db', 'Express', 'Mongoose'],
            desc: 'Ceci est la fin de la demo',
            content: ' lorem ipsum dolor sit amet lorem ipsum'
        }

        await articleService.create(article);

        res.render('home/index');        
    }
};

module.exports = homeController;