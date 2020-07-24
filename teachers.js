const fs = require('fs')
const data = require('./data.json')
const {age, graduation} = require('./utils')
const Intl = require('intl')

// Criando rota de post
exports.post = function (req, res) {
    // Criando um Array com as chaves do objeto
    const keys = Object.keys(req.body)

    // Validação dos dados antes de enviar ao BDD
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Por favor, preencha todos os campos!')
        }
    }

    // Desestruturando elemento req.body em variáveis de cada atributo do objeto
    let { avatar, name, birthDate, schooling, classType, actuation, id } = req.body

    birthDate = Date.parse(birthDate)
    const creationDate = Date.now()

    // Incremento do id, para cada criação
    id = Number(data.teachers.length + 1)

    // Adiciona o conteúdo do req.body no Array do data.json
    data.teachers.push({
        id,
        avatar,
        name,
        birthDate,
        schooling,
        classType,
        actuation,
        creationDate
    })

    // Escreve no arquivo data.json
    fs.writeFile("data.json", JSON.stringify(data, null, 4), function (err) {
        if (err) {
            return res.send("Erro ao inserir dados no json!")
        }
        return res.redirect("/teachers")
    })
}

exports.show = function(req, res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return id == teacher.id
    })

    if (!foundTeacher){
        return res.send('Teacher not found!')
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birthDate),
        actuations: foundTeacher.actuation.split(","),
        creationDate: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.creationDate),
        schooling: graduation(foundTeacher.schooling)
    }

    return res.render("teachers/show", {teacher})
}