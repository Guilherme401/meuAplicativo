import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public usuario: any = {}

private nome: string;

  constructor() {}

  enviarFormulario() {
    console.log(this.usuario);
  }
}
