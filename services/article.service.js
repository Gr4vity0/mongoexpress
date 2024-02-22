const Article = require("../models/article.models");
const { nanoid } = require("nanoid");

const articleService = {


     //* Creation de l'article à sauver en DB
    create: async ({title, slug, tag, desc, content}) => {
        
        let slugFinal = slug.toLowerCase().trim().replaceAll(/\s/g, '-');
        
        //check si le slug existe
        const articleExists = await Article.findOne({
            slug: slugFinal
        })

        // un article trouvé avec le slug -> Modifier le slug
        if(articleExists){
            const slugSufix = nanoid(5);
            slugFinal = slugFinal + '_' + slugSufix;

            //! TODO idéalement, il faut recheck le slug ;)
        }
        const articleCreated = new Article({
            title,
            slug: slugFinal,
            tag,
            desc: desc || content.slice(0, 100),
            content
        })

        //* Invocation de la méthode "save" pour enregistrer en DB
        await articleCreated.save();
        return articleCreated
    }
}

module.exports = articleService;