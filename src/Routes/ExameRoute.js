const ExameController = require('../Controllers/ExameController');
module.exports = (app) => {
   app.post('/paciente', ExameController.post);
   app.put('/paciente/:id', ExameController.put);
   app.delete('/paciente/:id', ExameController.delete);
   app.get('/exames', ExameController.get);
}