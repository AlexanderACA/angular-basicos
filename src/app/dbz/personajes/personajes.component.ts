import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {

  @Input() personajes:any[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
