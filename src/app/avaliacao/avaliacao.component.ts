import { Component, Input, OnChanges, OnInit } from "@angular/core";


@Component({
    selector: "app-avaliacao",
    templateUrl: "avaliacao.component.html"
})

export class AvaliacaoComponent implements OnChanges{

@Input()
public nota;
public icones;



    ngOnChanges(){
        if(this.nota == 5){
            this.icones = ["heart","heart","heart","heart","heart"];
        }
        else if(this.nota >4 && this.nota <5){
            this.icones = ["heart","heart","heart","heart","heart-half-outline"];
        }
        else if(this.nota == 4){
            this.icones = ["heart","heart","heart","heart","heart-outline"];
        }
        else if(this.nota > 3 && this.nota <4){
            this.icones = ["heart","heart","heart","heart-half-outline","heart-outline"];
        }
        else if(this.nota == 3){
            this.icones = ["heart","heart","heart","heart-outline","heart-outline"];
        }
        else if(this.nota > 2 && this.nota < 3){
            this.icones = ["heart","heart","heart-half-outline","heart-outline","heart-outline"];
        }
        else if(this.nota == 2){
            this.icones = ["heart","heart","heart-outline","heart-outline","heart-outline"];
        }
        else if(this.nota >1 && this.nota <2){
            this.icones = ["heart","heart-half-outline","heart-outline","heart-outline","heart-outline"];
        }
        else if(this.nota == 1){
            this.icones = ["heart","heart-outline","heart-outline","heart-outline","heart-outline"];
        }
        else if(this.nota < 1 && this.nota > 0){
            this.icones = ["heart-half-outline","heart-outline","heart-outline","heart-outline","heart-outline"];
        }
        else{this.icones = ["heart-outline","heart-outline","heart-outline","heart-outline","heart-outline"];}
    }
}