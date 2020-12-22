import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from './series.service';

@Component({
    selector: "app-series-add",
    templateUrl: "series-add.component.html"
})

export class SeriesAddComponent implements OnInit{

    public serie: any = {};

    constructor(private seriesService: SeriesService,private activatedRoute: ActivatedRoute, private router:Router){}


    ngOnInit(){
const id = this.activatedRoute.snapshot.paramMap.get("id");
if (id !== null){
this.serie = this.seriesService.pegarSeriePorId(id);
this.serie.id = id;
}
    }


    formularioSeries(){
        this.seriesService.adcionarSeries(this.serie);
        this.router.navigate(['/']);
}

}