import { Component, EventEmitter, Output} from '@angular/core';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';  //só
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-inserir-cli',
  templateUrl: './livro-inserir-cli.component.html',
  styleUrls: ['./livro-inserir-cli.component.css']
})
export class LivroInserirCliComponent{

constructor(private livroService: LivroService){}

  id: number = 0;
  titulo: string;
  autor: string;
  numPaginas: string;

  onAdicionarLivro(){
    if (this.titulo.length > 0 && this.autor.length > 0 && this.numPaginas.length > 0){
      const livro = {
        id: ++this.id,
        titulo: this.titulo,
        autor: this.autor,
        numPaginas: this.numPaginas
      }
      this.livroService.adicionarLivro(livro);
    }
  }
}
