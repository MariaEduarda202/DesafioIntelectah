const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PacienteRoute = require('./src/routes/PacienteRoute');
const app = express();
app.use(cors());
app.use(express.json());

app.delete('/paciente/:id', async (req, res) => {
    const id = req.params.id
  
    const person = await PacienteRoute.findOne({ _id: id })
  
    if (!person) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }
  
    try {
      await PacienteRoute.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Usuário removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })


app.get('/paciente/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const person = await PacienteRoute.findOne({ _id: id })
  
      res.status(200).json(PacienteRoute)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
require('./src/routes/index')(app);

mongoose.connect(
    'mongodb+srv://mariaeduarda:cvO6QIq2VJKY8fuz@apidbdesafio.hmm74.mongodb.net/?retryWrites=true&w=majority',
)
.then(() => {
    console.log('Conectou ao banco!');
    app.listen(3000);
})
.catch((err) => console.log(err))

