const mongoose = require('mongoose');

const Contato = mongoose.model('Contato', {
  nome: String,
  sobrenome: String,
  telefonePrincipal: String,
  telefoneSecundario: String,
});

module.exports = Contato;