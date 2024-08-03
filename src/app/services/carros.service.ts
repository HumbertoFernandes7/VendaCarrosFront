import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment.desenv';
import { carrosModel } from "../models/carrosModel"

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http: HttpClient) { }

  listaCarros(){
    return this.http.get<carrosModel>(`${APIURL}/carros/lista-todos`);
  }
}
