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
        temporadas:5
    }
];

ngOnInit(){}
}