import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private htppClient: HttpClient,
    private usuarioService: UsuarioService
    ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.htppClient.post(
      `${API}/user/login`,
      {
        userName: usuario,
        password: senha,
      },
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }

}
