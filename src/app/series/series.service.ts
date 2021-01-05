import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { v4 as uuidv4} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

constructor(private storage: Storage){}

salvarNoNavegador(){
  this.storage.set('teste', '123')
}
recuperarDoNavegador(){
  this.storage.get('teste').then((val) => {
    console.log('O resultado é de', val);
  });
}

  private series = [];


pegarTodasSeries(){
  this.series=[];
  this.storage.forEach((e) => {
    this.series.push(JSON.parse(e))
  });
  return this.series;
}

pegarSeriePorId(id){
  let serie;

  for(let i=0; i<=this.series.length; i++){
if(this.series[i].id == id){
  serie=this.series[i];
  break;
}
  }
  return serie;

}

adcionarSeries(series){
if(series.id){
this.atualizarSerie(series);
} else{
 series.id = uuidv4();
  this.storage.set(series.id.toString(), JSON.stringify(series));
}
  }

  atualizarSerie(series){
    for(let i=0; i<=this.series.length; i++){
if(this.series[i].id == series.id){
  this.series[i] = series;
  break;
}

    }
  }



  removerSeriePorId(id){
    for(let i=0; i<=this.series.length; i++){
      if(this.series[i].id == id){
        this.series.splice(i, 1);
        break;
      }
    }
}



}