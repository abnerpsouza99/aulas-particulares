const fs = require('fs')
const data = require('./data.json')

// Criando rota de post

exports.post = function(req, res){
    // Criando um Array com as chaves do objeto
    const keys = Object.keys(req.body)

    // Validação dos dados antes de enviar ao BDD
    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor, preencha todos os campos!')
        }
    }

} 