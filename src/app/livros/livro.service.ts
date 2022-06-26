import { Subject, map } from 'rxjs';
import { Livro } from './livro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// injeções de dependência.
@Injectable({providedIn:'root'})
export class LivroService {

    constructor(private httpClient: HttpClient){};

    private livros: Livro[] = [];
    private livrosAtualizada = new Subject();

    // getLivros() {
    //     return [...this.livros];
    // }

    getLivros(): void{
      this.httpClient.get<{mensagem: string, livros: any}>
      ('http://localhost:3000/api/livros')
      .pipe(map( (dados) => {
          return dados.livros.map((livro) =>{
            return {
              id: livro._id,
              titulo: livro.titulo,
              autor: livro.autor,
              numPaginas: livro.numPaginas
            }
          })
      }))
      .subscribe((dados) =>{
        this.livros = dados
        this.livrosAtualizada.next([...this.livros])
      })
    }

    getLivroAtualizadaObserver() {
      return this.livrosAtualizada.asObservable();
    }
    adicionarLivro({ titulo, autor, numPaginas}): void{
      interface retornoLivro {
        mensagem: string,
        id: string
      }
      this.httpClient.post<retornoLivro>
        ('http://localhost:3000/api/livros', {titulo, autor, numPaginas})
      .subscribe((dados)=>{
      console.log(dados.mensagem);
      this.livros.push({
        id: dados.id,
        titulo,
        autor,
        numPaginas
      })
      this.livrosAtualizada.next([...this.livros])
      })
    }

    deleteLivro(id: string) {
      this.httpClient.delete<{mensagem: string}>(`http://localhost:3000/api/livros/${id}`)
      .subscribe(dados => {
        console.log(dados.mensagem);
        this.livros.filter(livro => livro.id !== id);
        this.livrosAtualizada.next([...this.livros]);
      })

    }

    // adicionarLivro({id, titulo, autor, numPaginas}): void {
    //     console.log("adicionando...");
    //     this.livros.push({
    //       id, titulo, autor, numPaginas
    //     })
    //     this.livrosAtualizada.next([...this.livros]);
    //     /*
    //     const livro = {
    //         titulo,
    //         autor: autor,
    //         numPaginas: numPaginas,
    //     }
    //     */
    //     //this.livros.push(livro);
    // }
}

