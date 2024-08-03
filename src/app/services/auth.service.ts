import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.desenv';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { usuarioModel } from '../models/usuarioModel';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autentica(usuario: usuarioModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${APIURL}/auth`, usuario, { headers, responseType: 'text' }).pipe(
      map(response => {
        // Se a resposta for uma string, por exemplo, um token JWT
        // Caso contrário, ajuste conforme necessário
        try {
          return JSON.parse(response);
        } catch (e) {
          return response;
        }
      }),
      catchError(error => {
        console.error('Erro durante a autenticação', error);
        return throwError(error);
      })
    );
  }
}
