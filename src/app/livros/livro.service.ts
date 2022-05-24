import {Subject} from 'rxjs';
import { Livro } from './livro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// injeções de dependência.
@Injectable({providedIn:'root'})
export class LivroService {
    
    constructor(private httpClient: HttpClient){};

    private livros: Livro[] = [];
    private livrosAtualizada = new Subject();

    getLivros() {
        return [...this.livros];
    }

    getLivroAtualizadaObserver() {
      return this.livrosAtualizada.asObservable();
    }

    adicionarLivro({id, titulo, autor, numPaginas}): void {

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

