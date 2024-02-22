const Article = require("../models/article.models");

const articleService = {


     //* Creation de l'article à sauver en DB
    create: async ({title, slug, tag, desc, content}) => {
        const articleCreated = new Article({
            title,
            slug: slug.toLowerCase(),
            tag,
            desc: desc || content.slice(0, 100),
            content
        })

        //* Invocation de la méthode "save" pour enregistrer en DB
        await articleCreated.save();
        console.log(articleCreated);
    }
}

module.exports = articleService;