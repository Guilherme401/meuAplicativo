import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public num1: number;
public num2: number;
public operacao: string;
public calculo: number;

  constructor(public alertController: AlertController) {}

   async enviarFormulario() {
     if(this.operacao == "add"){
      this.calculo = this.num1 + this.num2;
     }
     if(this.operacao == "sub"){
      this.calculo = this.num1 - this.num2;
     }
     if(this.operacao == "mul"){
      this.calculo = this.num1 * this.num2;
     }
     if(this.operacao == "div"){
       this.calculo = this.num1 / this.num2;
     }
     
    
     const texto = `O valor total da conta é de ${this.calculo}`;
    

    const alert = await this.alertController.create({
      header: 'Alerta',
      message: texto,
      buttons: ['ok']
    })
    await alert.present();
  }
}
