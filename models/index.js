const mongoose = require('mongoose');
const chalk = require('chalk');


function connectDb(){
    // Recuperation de l'uri de connection
    const { MONGO_URI} = process.env;

    //* Couleurs pour le terminal
    const logColorSuccess = chalk.rgb(30, 250, 60);
    const logColorError = chalk.rgb(255, 0, 0);

    // Initialisation de la connection vers mongoDB
    mongoose.connect( MONGO_URI )
    .then(() => {
        console.log(logColorSuccess('Connexion à MongoDB réussie'));
        })
    .catch((err) => {
        console.log(logColorError('Connexion à MongoDB échouée'));
        console.error(logColorError(err));
        });

    // Récupération de l'instance de connexion
    // const db = mongoose.connection;
    return mongoose.connection;
}
module.exports = connectDb;