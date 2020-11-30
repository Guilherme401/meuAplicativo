import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-series-list",
    templateUrl: "series-list.component.html"
})
export class SeriesListComponent implements OnInit {
public series = [
    {
        id:1, 
        nome: "Futurama",
        temporadas:5,
        nota:5
    },
    {
        id:2, 
        nome: "Simpsons",
        temporadas:17,
        nota:4.7
    },
    {
        id:2, 
        nome: "Hora de aventura",
        temporadas:4,
        nota:4
    },
    {
        id:3, 
        nome:"Gravity Falls",
        temporadas:3,
        nota:3.4
    },
    {
        id:4, 
        nome: "Picky Blinders",
        temporadas:5,
        nota:3
    },
    {
        id:5, 
        nome:"Vikings",
        temporadas:7,
        nota:2.5
    },
    {
        id:6, 
        nome:"Criminal minds",
        temporadas:17,
        nota:2
    },
    {
        id:7, 
        nome:"Ursos sem curso",
        temporadas:4,
        nota:1.5
    },
    {
        id:8, 
        nome:"The amazing world of Gamball",
        temporadas:7,
        nota:1
    },
    {
        id:9, 
        nome:"Black mirror",
        temporadas:4,
        nota:0.2
    },
    {
        id:10, 
        nome:"Friends",
        temporadas:14,
        nota:0
    }
];

ngOnInit(){}
}