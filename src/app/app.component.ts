import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cadastro-livros';

  livros = [];

  onAdicionarLivro(livro){
    console.log(livro);
    this.livros = [...this.livros,livro];
  }
}
