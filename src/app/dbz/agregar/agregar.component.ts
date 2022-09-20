import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    //trim() .. borrar espacios en blanco
    if(this.nuevo.nombre.trim().length === 0){ return; }
    //pasar data al padre
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo= {
      nombre: '',
      poder: 0
    }
  }


}
