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
    nombre: '',
    poder: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    //trim() .. borrar espacios en blanco
    if(this.nuevo.nombre.trim().length === 0){ return; }

    this.personajes.push(this.nuevo);
    this.nuevo= {
      nombre: '',
      poder: 0
    }
    console.log(this.nuevo)
  }

  cabiarNombre(event:any){
    console.log(event.target.value)
  }

}
