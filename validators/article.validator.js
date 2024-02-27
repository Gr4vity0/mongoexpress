const yup = require('yup');

const articleValidator = yup.object().shape({
    title: yup.string()
            .min(5, 'Minimum 5 charactère')
            .required('Le titre est obligatoire'),
    slug: yup.string()
            .optional(),
    tag: yup.array()
            .of(yup.string()).compact((t) => t === ''),
    description: yup.string()
            .max(200, 'La description ne peut pas faire plus de 200 charactères'),
    content: yup.string()
            .min(10, 'Minimum 10 charactères')
            .required('Le contenu est obligatoire'),
});

module.exports = {
    articleValidator
};