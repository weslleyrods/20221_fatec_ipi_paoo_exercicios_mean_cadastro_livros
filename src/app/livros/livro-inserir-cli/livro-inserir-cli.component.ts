import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onAdicionarLivro(form: NgForm){
    if (!form.invalid){
      const livro = {
        id: ++this.id,
        titulo: form.value.titulo,
        autor: form.value.autor,
        numPaginas: form.value.numPaginas,
      }
      this.livroService.adicionarLivro(livro);
    }
  }
}
