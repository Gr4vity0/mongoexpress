const Article = require("../models/article.models");
const { nanoid } = require("nanoid");

const articleService = {


     //* Creation de l'article à sauver en DB
    create: async ({title, slug, tag, desc, content}) => {
        
        let slugFinal = slug.toLowerCase().trim().replaceAll(/\s/g, '-');
        
        //Check si le slug existe
        const articleExists = await Article.findOne({
            slug: slugFinal
        })

        // un article trouvé avec le slug -> Modifier le slug
        if(articleExists){
            const slugSufix = nanoid(6);
            slugFinal = slugFinal + '_' + slugSufix;

            //! TODO idéalement, il faut recheck le slug ;)
        }
        const articleCreated = new Article({
            title,
            slug: slugFinal,
            tag,
            desc: desc || content.slice(0, 100),
            content
        });

        //* Invocation de la méthode "save" pour enregistrer en DB
        await articleCreated.save();
        return articleCreated
    },
    /**
     * Permet d'ajouter un commentaire à un article
     * @param {string} slug
     * @param {string} message
     */
    addComment: async (slug, message) => {
        // Récupération de l'article ciblé par le slug
        const articleTarget  = await Article.findOne({ slug });

        // Stop si l'article n'existe pas
        if(!articleTarget) {
            //Possibilité d'envoyer une erreur à la place (cf : demo API)
            return false;
        }

        //Mise à jour de l'article
        const articleUpdated = await Article.updateOne({ slug }, {
            $push: {
                comments: { message }
            }
        });

        //? le premier ! force la convertion en bollen le deuxième c'est donc vrai
        return !!articleUpdated
}
};

module.exports = articleService;