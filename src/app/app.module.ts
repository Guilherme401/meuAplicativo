import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SeriesListComponent } from './series/series-list.component';
import { SeriesInfoComponent } from './series/series-info.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FilmesListComponent } from './filmes-list/filmes-list.component';
import { SeriesAddComponent } from './series/series-add.component';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent,
     SeriesListComponent, 
     SeriesInfoComponent, 
     AvaliacaoComponent, 
     FilmesListComponent,
     SeriesAddComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
