import { switchMap } from 'rxjs/operators';
import { AnimaisService } from './../animais.service';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais$ !: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
    ) { }

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornUsuario().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animaisService.listaDoUsuário(userName);
      })
    )
  }

}
