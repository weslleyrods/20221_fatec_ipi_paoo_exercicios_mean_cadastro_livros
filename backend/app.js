
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

//permite que o body da requisição http receba um objeto json
app.use(express.json())

let id = 3;

//middleware
// app.use((req, res, next) => {
//     res.send("Requisição funcionando...")
//     next()
// })

//GET -> devolve dados
//devolve lista de livro
//localhost:3000/api/livros

let livros = [
  {
    id: 1,
    titulo: 'Memórias póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    numPaginas: '320'
  },
  {
    id: 2,
    titulo: 'O Senhor dos Anéis',
    autor: 'John R. R. Tolkien',
    numPaginas: '1200'
  },
]

app.get('/api/livros', (req, res) => {
  res.status(200).json({
    livros: livros
  })
});

//livro: Livros[] = [];
//POST ->criação de novos dados
app.post('/api/livros', (req, res) => {
  livros.push({ ...req.body, id: id++ })
  res.status(201).json({ mensagem: 'Livro inserido com sucesso' })
});


module.exports = app

