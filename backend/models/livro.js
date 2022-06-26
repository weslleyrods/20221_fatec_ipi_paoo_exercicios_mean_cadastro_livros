const mongoose = require("mongoose")

//livro: nome, pagina e autor
const livroSchema = mongoose.Schema ({
    titulo:{ type: String, required: true},
    autor: { type: String, required: true},
    numPaginas: { type: String, required: true}
})

module.exports = mongoose.model("Livro", livroSchema);
