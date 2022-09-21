import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private _personajes:Personaje[] =[
    {
      nombre:'Goku',
      poder:15000
    },{
      nombre:'Vegeta',
      poder: 7500
    }
  ];

  get personajes(){
    return [...this._personajes];//[... Se crea un nuevo personajes array y retorna el nuevo]
  }

  constructor(){
      console.log('Servicio inicializado')
  }

  agregarPersonajes(personaje:Personaje){
    this._personajes.push(personaje);
  }
  
}
