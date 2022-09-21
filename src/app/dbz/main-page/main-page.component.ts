import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  nuevo:Personaje = {
    nombre: 'Maestro roshi',
    poder: 1000
  }

  //injecion de dependencia
  constructor(private dbzService:DbzService) {

   }

  ngOnInit(): void {
  }

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(argumento:Personaje){
    //console.log(argumento)
    //debugger;
    this.personajes.push(argumento);
  }


}
