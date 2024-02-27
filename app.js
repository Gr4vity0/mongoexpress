require('dotenv').config({ override: true});

//* Imports
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const session = require('express-session');
const chalk = require('chalk');
const homeRouter = require('./routes/home.router');


//* Récupération des variables d'environnement
const { NODE_ENV, PORT, SESSION_SECRET} = process.env;

//* Initialize
const app = express();

//* Config du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views');

//* Middlewares
//- logger
app.use(morgan('tiny'));
//- Fichier public
app.use(express.static('./public'));
//-  Données du formulaire
app.use(express.urlencoded({ extended: true }));

//* Sessions
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET
}));

//* Routes
app.use(homeRouter);

//* Connexion à la db
// - On pourrait juste mettre sans const si l'on entoure pas notre modele d'une fonction
const connectDb = require('./models');
connectDb();

//* Couleurs pour le terminal
const logColor = chalk.rgb(30, 250, 60);

//* Démarrage du web serveur
app.listen(PORT, () => {
    console.log(logColor(`WebServer is running on port ${PORT} [${NODE_ENV}]`));
});
