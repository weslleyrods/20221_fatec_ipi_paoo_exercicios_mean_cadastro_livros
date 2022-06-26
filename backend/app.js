require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const Livro = require('./models/livro')
const { addAbortSignal } = require('stream')
app.use(cors())

//permite que o body da requisição http receba um objeto json
app.use(express.json())

let id = 3;


const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_HOST,
    MONGODB_CLUSTER,
    MONGODB_DATABASE
} = process.env


mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority
`)
.then(() => {
  console.log("conexão OK")
})
.catch((err) => {
  console.log("Conexão não OK" + err)
})


//middleware
// app.use((req, res, next) => {
//     res.send("Requisição funcionando...")
//     next()
// })

//GET -> devolve dados
//devolve lista de livro
//localhost:3000/api/livros


// let livros = [
//   {
//     id: 1,
//     titulo: 'Memórias póstumas de Brás Cubas',
//     autor: 'Machado de Assis',
//     numPaginas: '320'
//   },
//   {
//     id: 2,
//     titulo: 'O Senhor dos Anéis',
//     autor: 'John R. R. Tolkien',
//     numPaginas: '1200'
//   },
// ]

//livro: Livros[] = [];
//POST ->criação de novos dados
app.post('/api/livros', (req, res) => {
  //livros.push({ ...req.body, id: id++ })
  const livro = new Livro({
    //...req.body
    titulo: req.body.titulo,
    autor: req.body.autor,
    numPaginas: req.body.numPaginas
  })
  console.log(livro);
  livro.save()
  .then((livroInserido)=>{
    res.status(200).json({
    mensagem: 'Livro inserido com sucesso.',
    id: livroInserido._id
  })
  })

  //res.status(201).json({ mensagem: 'Livro inserido com sucesso' })
});

app.get('/api/livros', (req, res) => {
  Livro.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo Ok",
      livros: documents
    });
  })
});

module.exports = app

