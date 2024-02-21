const mongoose = require('mongoose');
const chalk = require('chalk');

// Recuperation de l'uri de connection
const { MONGO_URI} = process.env;

//* Couleurs pour le terminal
const logColorSuccess = chalk.rgb(30, 250, 60);
const logColorError = chalk.rgb(255, 0, 0);

// Initialisation de la connection vers mongoDB
mongoose.connect( MONGO_URI)
  .then(() => {
    logColorSuccess(console.log('Connexion à MongoDB réussie'));
    })
  .catch((err) => {
    logColorError(console.log('Connexion à MongoDB échouée'));
    logColorError(console.error(e));
    });

// Récupération de l'instance de connexion
const db = mongoose.connection;

module.export = db;