import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private series = [
    {
        id:1, 
        nome: "Futurama",
        temporadas:5,
        nota:5,
        lancamento:2011
    },
    {
        id:2, 
        nome: "Simpsons",
        temporadas:17,
        nota:4.7,
        lancamento:1991
    },
    {
        id:2, 
        nome: "Hora de aventura",
        temporadas:4,
        nota:4,
        lancamento:2010
    },
    {
        id:3, 
        nome:"Gravity Falls",
        temporadas:3,
        nota:3.4,
        lancamento:2014
    },
    {
        id:4, 
        nome: "Picky Blinders",
        temporadas:5,
        nota:3,
        lancamento:2019
    },
    {
        id:5, 
        nome:"Vikings",
        temporadas:7,
        nota:2.5,
        lancamento:2013
    },
    {
        id:6, 
        nome:"Criminal minds",
        temporadas:17,
        nota:2,
        lancamento:2008
    },
    {
        id:7, 
        nome:"Ursos sem curso",
        temporadas:4,
        nota:1.5,
        lancamento:2015
    },
    {
        id:8, 
        nome:"The amazing world of Gamball",
        temporadas:7,
        nota:1,
        lancamento:2014
    },
    {
        id:9, 
        nome:"Black mirror",
        temporadas:4,
        nota:0.2,
        lancamento:2016
    },
    {
        id:10, 
        nome:"Friends",
        temporadas:14,
        nota:0,
        lancamento:2005
    }
];

  constructor() { }

pegarTodasSeries(){
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
this.series.push=series;
  }

}
