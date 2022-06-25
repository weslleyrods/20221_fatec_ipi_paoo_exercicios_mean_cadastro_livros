const mongoose = require ("mongoose")

//livro: nome, pagina e autor
const livroSchema = mongoose.Schema ({
    nome:{ type: String, required: true},
    pagina: { type: String, required: true},
    autor: { type: String, requered: true}
})

module.exports = mongoose.Model("Livro", livroSchema);
