import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FilmesListComponent } from './filmes-list/filmes-list.component';
import { SeriesAddComponent } from './series/series-add.component';
import { SeriesInfoComponent } from './series/series-info.component';
import { SeriesListComponent } from './series/series-list.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    component: SeriesListComponent  },
    {
    path: 'series/info/:id',
    component: SeriesInfoComponent  
    },
    {
    path:'avaliacao',
    component: AvaliacaoComponent
    },
    {
      path: 'filmes',
      component: FilmesListComponent
    },
    {
      path: 'series/add',
      component: SeriesAddComponent
    },
    {
      path: 'series/add/:id',
      component: SeriesAddComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
