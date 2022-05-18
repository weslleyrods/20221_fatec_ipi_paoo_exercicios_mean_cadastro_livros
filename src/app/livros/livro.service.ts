import {Subject} from 'rxjs';
import { Livro } from './livro.model';

export class LivroService {
    private livros: Livro[] = [];
    private livrosAtualizada = new Subject();

    getLivros() {
        return [...this.livros];
    }

    getLivroAtualizadaObserver() {
      return this.livrosAtualizada.asObservable();
    }

    adicionarLivro({id, titulo, autor, numPaginas}): void{
        console.log("adicionando...");
        this.livros.push({
          id, titulo, autor, numPaginas
        })
        this.livrosAtualizada.next([...this.livros]);
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

