import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola mundo</h1>
    <h1>{{ title }}</h1>

    <button (click)="aumentar(2)">aumentar de 2</button>

    <button (click)="sumar()">+1</button>

    <span>{{ numero }}</span>

    <button (click)="restar()">-1</button>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="usarFun(base)">+{{ base }}</button>

    <span>{{ numero2 }}</span>

    <button (click)="usarFun(base * -1)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  title = 'Contador App';
  numero: number = 10;
  numero2: number = 0;
  base: number = 5;

  sumar() {
    this.numero += 1;
  }

  aumentar(valor: number) {
    this.numero += valor;
  }

  restar() {
    this.numero = this.numero - 1;
  }

  usarFun(valor: number) {
    this.numero2 += valor;
  }
}
