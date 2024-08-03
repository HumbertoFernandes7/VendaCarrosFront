import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.desenv';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from '../models/usuarioModel';
import { Router } from '@angular/router';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private router: Router) {

   }

   logar(usuario: usuarioModel){
    this.http.post<any>(`${APIURL}/auth`, usuario).subscribe({
      next: (resposta) => {
        localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
        localStorage.setItem('tipo', btoa(JSON.stringify(resposta['tipo'])));
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        console.log('erro no login');
        
      }
    })
   }
}
