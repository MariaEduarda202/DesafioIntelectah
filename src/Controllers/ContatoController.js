const Contato = require("../models/Contato");

exports.post = async (req, res,next) => {
   
   const { nome, sobrenome, telefonePrincipal, telefoneSecundario} = req.body;

   const contato =  {
      nome,
      sobrenome,
      telefonePrincipal,
      telefoneSecundario
   }
   if(!nome){
      res.status(422).json({error:"O nome é obrigatório"}  )
   }
   try {
      await Contato.create(contato);

      res.status(201).json({ message: 'Contato inserido no sistema com sucesso!' });
      
  
   } catch (error) {
      res.status(500).json({ erro: error })
  }

};
