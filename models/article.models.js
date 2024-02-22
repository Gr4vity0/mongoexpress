const mongoose = require('mongoose');


// Définition du schema des données
const commentSchema = mongoose.Schema({
    message: {
        type: String,
        require: true,
        trim: true,
        minLength: 1,
        maxLength: 500
    },
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    isVisible: {
        type: Boolean,
        require: true,
        default: false
    }

},{
    timestamps: true,
});

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, 
        minLength: 5
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    tag: [String],
    desc: {
        type: String,
        required: true,
        maxLength: 255
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minLength: 10
    },
    comments: [{
        type: commentSchema,
        default: []
    }]
}, {
    collection: 'Articles',
    timestamps: true
},
);


// Créer le modèle de données
const Article = mongoose.model('Article', articleSchema);


module.exports = Article;