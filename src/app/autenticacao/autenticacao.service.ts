import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private htppClient: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.htppClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    });
  }

}
