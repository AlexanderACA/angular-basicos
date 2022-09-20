import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  personajes:Personaje[] =[
    {
      nombre:'Goku',
      poder:15000
    },{
      nombre:'Vegeta',
      poder: 7500
    }
  ]

  nuevo:Personaje = {
    nombre: 'Maestro roshi',
    poder: 1000
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregarNuevoPersonaje(argumento:Personaje){
    //console.log(argumento)
    //debugger;
    this.personajes.push(argumento);
  }

}
