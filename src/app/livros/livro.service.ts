
export class LivroService {
    private livros = [];

    getLivros() {
        return [...this.livros];
    }

    adicionarLivro({id, titulo, autor, numPaginas}): void{
        console.log("adicionando...");
        this.livros.push({
          id, titulo, autor, numPaginas
        })
        /*
        const livro = {
            titulo,
            autor: autor,
            numPaginas: numPaginas,
        }
        */
        //this.livros.push(livro);
    }
}

