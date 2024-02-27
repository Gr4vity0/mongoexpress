const articleController = {

    index: async(req, res) => {
        res.render('article/index');        
    },

    detail: async(req, res) => {
        res.render('article/detail');       
    },

    addNewArticle: async (req, res) => {
        res.render('article/form');
    },

    addNewArticle_POST: async (req, res) => {
        res.sendStatusCode(501);
    }

};

module.exports = articleController;