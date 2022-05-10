import { Component, EventEmitter, Output} from '@angular/core';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';  //só



@Component({
  selector: 'app-livro-inserir-cli',
  templateUrl: './livro-inserir-cli.component.html',
  styleUrls: ['./livro-inserir-cli.component.css']
})
export class LivroInserirCliComponent{

  @Output()
  inserirLivro = new EventEmitter();

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
      this.inserirLivro.emit(livro);
    }
  }
}
