import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Livro } from '../livro.model';
import { LivroService } from'../livro.service';

@Component({
  selector: 'app-livro-lista-cli',
  templateUrl: './livro-lista-cli.component.html',
  styleUrls: ['./livro-lista-cli.component.css']
})

export class LivroListaCliComponent implements OnInit, OnDestroy {
private inscricaoLivroSubscription: Subscription;
constructor(private livroService: LivroService) {}

  livros: Livro[] = [];

  ngOnInit():void{
    this.inscricaoLivroSubscription = this.livroService
    .getLivroAtualizadaObserver()
    .subscribe((novaLista: Livro[]) => this.livros = novaLista);

    this.livroService.getLivros();
  }

  ngOnDestroy(){
    this.inscricaoLivroSubscription.unsubscribe();
  }

  onDelete(id: string) {
    this.livroService.deleteLivro(id);
  }
}
