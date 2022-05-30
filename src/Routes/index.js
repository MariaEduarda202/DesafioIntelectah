const PacienteRoute = require('./PacienteRoute');
const ExameRoute = require('./ExameRoute');
const Contato= require ('./Contato')

module.exports = (app) => {
   PacienteRoute(app),
   ExameRoute(app)
   Contato(app)
}