const porta = 3003 

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))
app.get('/produtos',(req, res, next)=>{
    //res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id)) // recebe o parametro da url /produtos/:id
})

//incluir
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome : req.body.nome,
        preco : req.body.preco
    })
    res.send(produto) // transforma em JSON
})

//alterar
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome : req.body.nome,
        preco : req.body.preco
    })
    res.send(produto) // transforma em JSON
})

//delete
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // transforma em JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor está executando na porta ${porta}.`)
})