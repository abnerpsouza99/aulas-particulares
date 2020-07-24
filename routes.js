/* This file is responsable for routes in the site */

const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res){
    return res.redirect("/teachers")
})

routes.get('/teachers', function(req, res){
    return res.render('teachers/index')
})

routes.get('/students', function(req, res){
    return res.render('students')
})

routes.get('/students/:id', function(req, res){
    return res.render('students')
})

routes.get('/form-teachers', function(req, res){
    return res.render('teachers/form-teachers')
})

routes.get('/teachers/:id', teachers.show)

routes.post("/teachers", teachers.post)

module.exports = routes