const PacienteController = require('../Controllers/PacienteController');
module.exports = (app) => {
   app.post('/paciente', PacienteController.post);
   app.put('/paciente/:id', PacienteController.put);
   app.delete('/paciente/:id', PacienteController.delete);
   app.get('/pacientes', PacienteController.get);
   app.get('/paciente/:id', PacienteController.getById);
}

