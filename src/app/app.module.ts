import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CabecalhoCliComponent } from './cabecalho-cli/cabecalho-cli.component';
import { LivroInserirCliComponent } from './livros/livro-inserir-cli/livro-inserir-cli.component';
import { LivroListaCliComponent } from './livros/livro-lista-cli/livro-lista-cli.component';

import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';

import { LivroService } from './livros/livro.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroInserirCliComponent,
    LivroListaCliComponent,
    CabecalhoCliComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
