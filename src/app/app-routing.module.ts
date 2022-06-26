import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroInserirCliComponent } from "./livros/livro-inserir-cli/livro-inserir-cli.component"
import { LivroListaCliComponent } from './livros/livro-lista-cli/livro-lista-cli.component';
const routes: Routes = [
    //http://localhost:4200/
    {path: "", component: LivroListaCliComponent},
    //http://localhost:4200/criar
    {path: "criar", component: LivroInserirCliComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
