import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {

  @Input() personajes:any[]=[];

  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }

}
