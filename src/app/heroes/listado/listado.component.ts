import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  
  heroes: string[] = ['Spiderman','Iroman','Batman']
  borrado: string = '';
  //ejecutas antes
  constructor() {
    console.log('constructor');
  }

  //usado para inicializar cosas
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe():void{
    const heroeBorrado=this.heroes.pop();
    this.borrado=heroeBorrado || '';
    console.log(heroeBorrado);
  }
}
