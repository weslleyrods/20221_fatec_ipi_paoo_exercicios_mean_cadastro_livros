import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livro-lista-cli',
  templateUrl: './livro-lista-cli.component.html',
  styleUrls: ['./livro-lista-cli.component.css']
})
export class LivroListaCliComponent{

  @Input()
  livros = [];


}
