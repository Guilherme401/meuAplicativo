import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.scss'],
})
export class FilmesListComponent implements OnInit {

  public filmes = [
  { 
  nome: "Vingadores Ultimato",
  nota: 4
  },
  {
  nome: "O resgate do soldado Ryan",
  nota: 5
  },
  {
  nome: "Senhor dos aneis",
  nota: 5
  }
]




  constructor() { }

  ngOnInit() {}

}
