import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrosService } from '../../services/carros.service';

import { carrosModel } from '../../models/carrosModel'

@Component({
  selector: 'app-lista-carros',
  standalone: true,
  imports: [],
  templateUrl: './lista-carros.component.html',
  styleUrl: './lista-carros.component.scss'
})
export class ListaCarrosComponent {
  carros: carrosModel[] = [];


  constructor(private carrosService: CarrosService){

  }

  ngOnInit() {
  }

  listaCarros(){
    this.carrosService.listaCarros().subscribe({
      next: (retorno) => {
        this.carros = retorno as unknown as carrosModel[] ;
        console.log(retorno);
        
      },
      error: () => {
        console.log("deu erro");
        
      }
    })
  }
}
