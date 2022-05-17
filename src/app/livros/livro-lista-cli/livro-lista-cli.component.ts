import { Component, OnInit } from '@angular/core';

import { LivroService } from'../livro.service';

@Component({
  selector: 'app-livro-lista-cli',
  templateUrl: './livro-lista-cli.component.html',
  styleUrls: ['./livro-lista-cli.component.css']
})
export class LivroListaCliComponent implements OnInit {
  constructor(private livroService: LivroService) {}

  livros = [];

  ngOnInit():void{
    this.livros = this.livroService.getLivros();
  }


}
