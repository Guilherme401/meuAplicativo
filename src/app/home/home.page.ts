import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public usuario: any = {}

public num1: number;
public num2: number;
public operacao: string;

  constructor(public alertController: AlertController) {}

   async enviarFormulario() {
     console.log(this.operacao);
     let total = this.num1 + this.num2;
     const texto = `O valor total da conta é de ${total}`;
    

    const alert = await this.alertController.create({
      header: 'Alerta',
      message: texto,
      buttons: ['ok']
    })
    await alert.present();
  }
}
