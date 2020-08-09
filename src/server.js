//-------------------------------------------------------
//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages.js');

//configurar Nunjucks [templete engine]
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//Início e configuração
server 
//recive data from req.body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos (css, scripts, images)
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start server
.listen(5500)